import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
// import ResolveAuthScreen from './ResolveAuthScreen';

const TrackListScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  // console.log(state.token_and_design.design);
  // const design = state.token.design;
  // for (let index = 0; index < design.length; index++) {
  //   const element = design[index];
  //   console.log(design[index].ID);
  // }
  // console.log(design.ID);
  // console.log(ResolveAuthScreen);
  return (
    <>
      <Text style={{ fontSize: 48 }}>DesignListScreen</Text>
      {/* <View>
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
      </View> */}
      <Button
        title="Go to Design Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
