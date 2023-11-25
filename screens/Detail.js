import * as React from 'react';

import {
    View,
    Text,

    TouchableOpacity,
    Image,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function DetailScreen({ route, navigation }) {
    const { data } = route.params;




    const img = data.avatar || "https://avatars.githubusercontent.com/u/116475964?v=4";
    const name = data.name|| "https://avatars.githubusercontent.com/u/116475964?v=4";


    return (

        <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
            <View
                style={{
                    height: 25, width: 385,
                    backgroundColor: 'rgba(165, 14, 236, 0.0)'
                }}
            ></View>

            <TouchableOpacity
                style={{
                    padding: 15,
                    backgroundColor: 'rgba(165, 14, 236, 0.0)',
                    flexDirection: 'row',
                }}
            >
                <Icon name="arrow-back-outline" 
                    size={30} color='rgba(0, 0, 0, 1.0)' 
                    paddingRight={10} onPress={() => navigation.goBack()} 
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: 'rgba(0, 0, 0, 1)'
                    }}
                >
                     </Text>

            </TouchableOpacity>

            <View
                style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    borderRadius: 30,
                    backgroundColor: 'rgba(53, 174, 208, 0.8)',
                    flexDirection: 'row',
                }}
            >
                <Image source={{ uri: img }} style={{ height: 225, width: 160, borderRadius: 20 }} />
                <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 15, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 15, color: 'rgba(255, 255, 255, 1)', }}>
                        Profile
                    </Text>

                    <Text style={{ fontSize: 16, fontWeight: 400, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        email
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 600, paddingBottom: 10, color: 'rgba(255, 255, 255, 1)' }}>
                        {data.email}
                    </Text>
                    

                    <Text style={{ fontSize: 15, fontWeight: 400, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        role
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 600, paddingBottom: 15, color: 'rgba(255, 255, 255, 1)' }}>
                        {(data.role)}
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 400, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        Buat Akun
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                         {data.creationAt}
                    </Text>
                    
                </View>

            </View>
            <View
                style={{
                    paddingHorizontal: 25,
                    borderRadius: 30,

                }}
            >

 
                
            </View>



        </View>
    );
}

