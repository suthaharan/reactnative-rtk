import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
//import { getTheme } from 'react-native-material-kit';
import  Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { Avatar, Button, Card, Text } from 'react-native-paper';
//const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 5,
        left: 10,
        fontSize: 15,
    },
    image:{
        height:15
    },
    action:{
        backgroundColor: 'black',
        color: 'white'
    },
    icon:{
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }
})

export default PeopleItem = (props) => {
        //console.log(props.dt)
        const LeftContent = props => <Icon 
                    name={'users'}
                    size={30}
                    style={styles.icon}
                />
        return (
            <Card>
                <Card.Title title={props.dt.firstName} subtitle={props.dt.lastName} left={LeftContent} />
                <Card.Content>
                <Text variant="titleLarge">{props.dt.company}</Text>
                </Card.Content>
                <Card.Cover size="10" source={require('../images/background.jpg')} />
            </Card>
        )
}
