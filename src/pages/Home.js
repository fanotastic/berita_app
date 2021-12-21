import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { ButtonGroup, Card, Icon, Image, Text } from 'react-native-elements';
import HeaderComp from '../components/HeaderComp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import axios from 'axios';
import { Link } from 'react-router-native';


const API_URL = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=b3ce0270c30f45699a9d7c8ba9f86328"
const HomePage = (props) => {

    const [kategori, setKategori] = useState([
        "Terbaru", "Teknologi", "Bisnis", "Nasional"
    ])

    const [selectedKategori, setSelectKategori] = useState(0)

    const [berita, setBerita] = useState([])

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getBerita()
    }, [])

    const getBerita = async () => { //pake async karna ini functional component
        try {
            //1. refresh true
            setRefresh(true)
            //2. get data berita
            let res = await axios.get(API_URL)
            if (res.data.totalResults > 0) {
                setBerita(res.data.articles)
            }
            //3. refresh false
            setRefresh(false)
        } catch (error) {
            console.log(error);
        }
    }

    const printKategori = () => {
        return kategori.map((value, index) => {
            return <Text style={selectedKategori == index ? desain.activeKategori : desain.kategori} key={index.toString()}>{value}</Text>
        })
    }

    const printCard = () => {
        return berita.map((value, index) => {
            return <Card key={index.toString()} containerStyle={{ margin: 0, marginBottom: hp(2), display: "flex" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Card.Image source={{ uri: value.urlToImage }} style={{ width: wp(35), height: hp(10) }} />
                    <Text style={{ width: wp(60), paddingHorizontal: 10, fontWeight: "bold" }}>{value.title}</Text>
                </View>
            </Card>

        })
    }

    return (
        <View style={{ backgroundColor: "white" }}>
            <HeaderComp />
            <View style={desain.barKategori}>
                {printKategori()}
            </View>
            <View>
                <Image style={{ width: wp(100), height: hp(30) }} source={{ uri: "https://www.bankrate.com/2020/08/19164919/What-is-cryptocurrency.jpeg?auto=webp&optimize=high&crop=16:9" }} />
                <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                    <Text h4 style={{ paddingHorizontal: 10, paddingVertical: 5 }}>Harga Cryptocurrency Meningkat</Text>
                    <Text style={{ textAlign: "justify", color: "gray" }}>
                        Menjelang sidang di House Financial Services Committee AS yang mulai pukul 10:00 EST,
                        para eksekutif telah mempersiapkan testimoni yang umumnya mendukung aturan yang lebih jelas.
                    </Text>
                    {/* <Link to={{
                        pathname: "/test",
                    }}>
                        <Text style={{ textAlign: "right" }}>test</Text>
                    </Link> */}
                </View>
            </View>
            {/* <View style={{ height: hp(40) }}>
                <ScrollView>
                    {printCard()}
                </ScrollView>
            </View> */}
            <View style={{ height: hp(35) }}>
                <FlatList
                    data={berita}
                    renderItem={({ item }) => (
                        <Card containerStyle={{ margin: 0, marginBottom: hp(2), display: "flex" }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Card.Image source={{ uri: item.urlToImage }} style={{ width: wp(35), height: hp(10) }} />
                                <View style={{ width: wp(60), paddingHorizontal: 10, }}>
                                    <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                                    <Link to={{
                                        pathname: "/detail",
                                        state: item
                                    }}>
                                        <Text style={{ textAlign: "right" }}>Read More</Text>
                                    </Link>
                                </View>
                            </View>
                        </Card>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refresh}
                    onRefresh={getBerita}
                />
            </View>
            <View style={desain.iconFooter}>
                <Icon
                    type='font-awesome'
                    name="home"
                    color="#2d3436"
                />
                <Icon
                    type='font-awesome'
                    name="user-o"
                    color="#2d3436"
                />
                <Icon
                    type='font-awesome'
                    name="newspaper-o"
                    color="#2d3436"
                />
            </View>
        </View>
    )
}

const desain = StyleSheet.create({
    barKategori: {
        marginTop: -1.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp("2%"),
        backgroundColor: "#2d3436",
        paddingBottom: 10
    },
    activeKategori: {
        color: "white",
        fontWeight: "800",
        borderBottomWidth: 2,
        borderBottomColor: "white",
        paddingBottom: 5

    },
    kategori: {
        color: "gray",
        fontWeight: "400",
        paddingHorizontal: 16
    },
    iconFooter: {
        flexDirection: "row", 
        justifyContent: 'space-around', 
        alignItems: "center", 
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "grey"
    }
})

export default HomePage;