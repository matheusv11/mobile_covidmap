import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes/>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

//OFFLINE FIRST