import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    Alert,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TopCard from '../components/TopCard';

export default function TopLN({ route, navigation }) {



    const [dataLN, setDataLN] = useState([]);
    const [count,setCount] = useState(1);

    useEffect(() => {
        async function fetchDataLN() {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/products" );
                setDataLN(response.data);
            } catch (error) {
                Alert.alert("Gagal mengambil data", error.message);
            }
        }
        fetchDataLN();
    }, []);

    const prevButtonHandler = () => {
        const prevCount = count - 1;
        setCount(prevCount);
      };
    
      const nextButtonHandler = () => {
        const nextCount = count + 1;
        setCount(nextCount);
      };

    return (
        <ImageBackground
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d3c5d63-c3c5-4b3f-9d17-41f8544d3517/dc1lv5h-e2a2fc69-f2b2-4f67-b9e7-baebbf571cf1.jpg/v1/fill/w_800,h_1211,q_75,strp/wolhaiksong__tog_webtoon__by_modernsimoun_dc1lv5h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMSIsInBhdGgiOiJcL2ZcLzhkM2M1ZDYzLWMzYzUtNGIzZi05ZDE3LTQxZjg1NDRkMzUxN1wvZGMxbHY1aC1lMmEyZmM2OS1mMmIyLTRmNjctYjllNy1iYWViYmY1NzFjZjEuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RV5k_uClFcuXiq5cV6H1SrLi807iwrkh8GLj6K1CALI' }}
            style={{ flex: 1 }}
        >


            <View style={{ flex: 1, }}>
                <View
                    style={{
                        // borderWidth: 1,
                        marginHorizontal: 5,
                        marginTop: 40,
                        marginVertical: 4,
                        padding: 10,

                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,

                        flexDirection: "row",
                        alignItems: "flex-end",

                        backgroundColor: 'rgba(55, 104, 215, 0.8)'
                    }}
                >
                    
                    <Text
                        style={{
                            flex: 10,
                            fontSize: 20,
                            marginHorizontal: 10,
                            color: 'rgba(0, 0, 0, 0.98)',
                            fontWeight: "500",
                        }}
                    >
                        Page
                    </Text>

                    {count !== 1 ? (
                        <TouchableOpacity onPress= {prevButtonHandler} >
                            <Icon name="caret-back-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />
                        </TouchableOpacity>
                    ) : ("")}

                    <Text
                        style={{
                            fontSize: 20,

                            color: 'rgba(255, 255, 255  , 0.5)',
                            fontWeight: "600",
                        }}

                    >
                        {count}
                    </Text>

                    
                    <TouchableOpacity onPress={nextButtonHandler} >
                        <Icon name="caret-forward-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />
                    </TouchableOpacity>
                    

                </View>

                <ScrollView
                    horizontal={false} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 0
                    }}
                >
                    {dataLN.map((item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                            <TopCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} noRank={25* (count-1) + index + 1}  />
                        </TouchableOpacity>
                        
                    ))}
                </ScrollView>



            </View>
        </ImageBackground>

    );
}