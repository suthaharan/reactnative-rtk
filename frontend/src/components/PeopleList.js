import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
//import { setPeople } from "../features/people/peopleSlice";
import PeopleItem from './PeopleItem';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        paddingLeft: 5,
    },button: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
      },
})

// const HomeScreen = props => {
//     return <View><Text>Hello World</Text></View>
// }
// HomeScreen['navigationOptions'] = screenProps => ({
//     title: 'Home'
// })

const PeopleList = () => {
    const people = useSelector((state) => state.people.value);
    const dispatch = useDispatch();

    return (
        <View>
            {/* <TouchableOpacity
                onPress={() => dispatch(setPeople())}
                style={styles.button}
            >
                <Text style={{ fontSize: 20 }}>Generate People</Text>
            </TouchableOpacity> */}
            {/* <Text>{people}</Text> */}

            <FlatList 
                // keyExtractor={(item) => item.id}
                data={people}
                renderItem={
                    ({item}) => { 
                        return ( 
                        //  <Text>{item.firstName}</Text> 
                        <PeopleItem dt={item}/>
                        ) 
                    }
                }
            />
        </View>
    )
}
export default PeopleList;