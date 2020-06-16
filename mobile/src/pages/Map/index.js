import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import MapView,{Marker, Callout} from 'react-native-maps'

import styles from './styles';
import Header from '../components/header'
import api from '../../services/api';

const Map= ()=>{
    
    const[dados,setDados]=useState([]);
    
    useEffect(()=>{
        api.get().then(itens=>{
            setDados(itens.data.features)
        })
    },[])

    return(
        <View style={styles.container}>
            <Header/>
            <MapView style={styles.map} initialRegion={{
                latitude: -5.0937358,
                longitude: -42.8111176,
                latitudeDelta: 0.045,
                longitudeDelta: 0.045,
            }}>
            {dados.map(itens=>(
                <Marker coordinate={{latitude: itens.geometry.y, longitude: itens.geometry.x}} key={itens.attributes.OBJECTID}>
                    <Callout >
                        <Text>Bairro: {itens.attributes.nomebairro}</Text>
                        <Text>Confirmados: {itens.attributes.COVID19}</Text>
                        <Text>Óbitos: {itens.attributes.OBITO}</Text>
                    </Callout>
                </Marker>
            ))}
           
            </MapView>


        </View>
    )
}

export default Map