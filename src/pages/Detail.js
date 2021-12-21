import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const DetailPage = (props) => {
    console.log("detail data", props.location.state, props.location.state.urlToImage)
    const { title, author, content, publishedAt, description, url, urlToImage, source } = props.location.state
    return (
        <View>
            <Icon
                containerStyle={{ position: "absolute" }}
                raised
                name='arrow-left'
                type='font-awesome'
                color='#2d3436'
                size={15}
                onPress={() => console.log('hello')}
            />
            <Image source={{ uri: urlToImage }} style={{ width: wp(100), height: hp(40) }} />
            <View style={{ marginTop: -25, paddingVertical: 10, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <Text h4 style={{ textAlign: "center", marginVertical: 15 }}>
                    {title}
                </Text>
                <Text style={{ color: "gray", textAlign: "center" }}>CNN | {publishedAt}</Text>
                <Text style={{ textAlign: "justify", marginHorizontal: 20, marginVertical: 20 }}>{description}</Text>
            </View>

        </View>
    )
}


const desain = StyleSheet.create({

})

export default DetailPage