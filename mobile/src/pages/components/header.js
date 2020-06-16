import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

const Header = ()=>{
    return (
        <View style={styles.header}>
            <Text>Teresina Map Covid19</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        justifyContent:'center',
        height: 42,
    },

    headerText:{
        
    }
})

export default Header;