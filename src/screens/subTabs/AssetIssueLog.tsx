import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const AssetIssueLog = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{backgroundColor: '#0d1632'}}
      />
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>AssetIssueLogs</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Asset Issue Logs</Text>
      </View>
    </View>
  );
};

export default AssetIssueLog;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'left',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0.75},
    textShadowRadius: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
