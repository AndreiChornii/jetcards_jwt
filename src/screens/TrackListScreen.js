import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const TrackListScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  console.log(state.token);
  return (
    <>
      <Text style={{ fontSize: 48 }}>DesignListScreen</Text>
      <Button
        title="Go to Design Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
