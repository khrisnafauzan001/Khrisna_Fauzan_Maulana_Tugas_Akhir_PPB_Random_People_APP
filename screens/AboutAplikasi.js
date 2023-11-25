import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    Alert,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


export default function About({ route, navigation }) {
    // Assuming user information is passed through the route

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/f2/90/61/f2906182938b31548dec27f29a2eb6a3.jpg' }}
            style={{ flex: 1 }}
        >
                <View style={styles.container}>
                <Text style={styles.appName}>Random People</Text>
      <Text style={styles.description}>Aplikasi yang memungkinkan pengguna berkenalan secara acak dengan orang-orang baru bagi mereka yang ingin memperluas lingkaran sosial tanpa batasan.</Text>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    appName: {
        fontSize: 36, // Ubah ukuran font agar lebih menonjol
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333', // Ganti warna teks agar lebih kontras dengan latar belakang
      },
      description: {
        fontSize: 20,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20, // Tambahkan margin bawah untuk memberikan ruang di antara elemen
      },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userBio: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
