import React from 'react';
import {Icon} from 'react-native-elements'

const TestDong = (props) => {
    return (
        <View>
            <Icon
                name='rowing' />

            <Icon
                name='g-translate'
                color='#00aced' />

            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
            />

            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
        </View>
    )

}