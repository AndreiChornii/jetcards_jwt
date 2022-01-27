// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
// import { Context as DataContext } from '../context/DataContext';
// import ResolveAuthScreen from './ResolveAuthScreen';

const TrackListScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  // console.log(state.token.design);
  const design = state.token.design;
  return (
    <>
      <Text style={{ fontSize: 48 }}>DesignListScreen</Text>
      <View>
        <FlatList 
          data={design}
          keyExtractor={designElement => designElement.ID}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{item.DesignTitle}</Text></View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{item.TemplateTitle}</Text></View>
              </View>
            )}
          }
        />
      </View>
      <Button
        title="Go to Design Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
