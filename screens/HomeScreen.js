import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GenreCard from '../components/GenreCard';

const useFetchDataLN = () => {
    const [dataLN, setDataLN] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        async function fetchDataLN() {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/users");
                setDataLN(response.data);
            } catch (error) {
                Alert.alert("Gagal mengambil data manga!", error.message);
            }
        }
        fetchDataLN();
    }, [count]);

    return dataLN;
};

export default function HomeScreen({ navigation }) {


    return (
        <ImageBackground source={{ uri: 'https://images.pexels.com/photos/3137076/pexels-photo-3137076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
            style={{ flex: 1, marginVertical: 20, borderRadius: 30 }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }} >
                <TouchableOpacity 
                    style={{
                        marginTop: 40, marginHorizontal: 10, alignSelf: 'stretch', padding: 10,
                        borderRadius: 20, backgroundColor: 'rgba(111, 203, 218, 0.8)',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: 500,
                        alignItems: 'flex-end'

                    }}>
                        Hello everyone!
                    </Text>

                </TouchableOpacity>

                <ScrollView
                    horizontal={true} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    style={{
                        height: 435,
                    
                    }}
                >
                    {useFetchDataLN().map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { data: item, })} >
                            <GenreCard key={item.id ? item.id.toString() : "defaultKey"} dataLN={item} />
                        </TouchableOpacity>

                    ))}
                </ScrollView>

                
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginVertical: 5,
                            marginHorizontal: 10
                        }}
                    > Random People </Text>

                    <ScrollView
                        vertical={true} // Mengatur tampilan vertical
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginVertical: 10,
                            marginRight: 10
                        }}
                    >
                        {useFetchDataLN().map((item) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', { data: item, })} >
                                <GenreCard key={item.id ? item.id.toString() : "defaultKey"} dataLN={item} />
                            </TouchableOpacity>

                        ))}
                    </ScrollView>



                

            </View>
        </ImageBackground>

    );
}