import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import {dongList} from '../data/dongList';
import {dummyProductList} from '../data/dummyProductList';
import Card from '../components/Card';

const logo = require('../assets/icons/logo.png');
const searchIcon = require('../assets/icons/bottomtab/searchon.png');

const Home = ({navigation}) => {
  const [firstselectedIndex, setFirstselectedIndex] = useState(0);
  const [secondselectedIndex, setSecondselectedIndex] = useState(0);

  const [firstRegion, setFirstRegion] = useState([]);
  const [secondRegion, setSecondRegion] = useState([]);

  const [searchData, setSearhData] = useState([]);

  useEffect(() => {
    regionSeperater();
  }, []);

  useEffect(() => {
    secondRegionSeperater();
  }, [firstselectedIndex]);

  useEffect(() => {
    let dummyData = [];
    dummyData = dummyProductList.filter(
      item => item.region.search(secondRegion[secondselectedIndex.row]) > 0,
    );
    setSearhData(dummyData);
  }, [secondselectedIndex]);

  const regionSeperater = () => {
    const dummyData = [];
    dongList.map(item => dummyData.push(item.si));
    setFirstRegion([...new Set(dummyData)]);
  };

  const secondRegionSeperater = () => {
    let dummyData = [];
    dongList.map(item =>
      item.si === firstRegion[firstselectedIndex.row]
        ? (dummyData = item.gu)
        : '',
    );
    setSecondRegion([...new Set(dummyData)]);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('카드정보', {item: item})}>
        <Card item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={style.homeHeader}>
        <View style={{flexDirection: 'row', gap: 8}}>
          <Image source={logo} style={{width: 24, height: 24}} />
          <Text style={style.headerText}>안녕하세요 오정혁님!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('검색페이지')}>
          <Image source={searchIcon} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      </View>
      <View style={style.homeBody}>
        <View style={{flexDirection: 'row'}}>
          <Select
            selectedIndex={firstselectedIndex}
            onSelect={index => setFirstselectedIndex(index)}
            value={firstRegion[firstselectedIndex.row]}
            placeholder={'도'}
            style={{flex: 1}}>
            {firstRegion.map(region => (
              <SelectItem title={region} value={region} />
            ))}
          </Select>
          <Select
            selectedIndex={secondselectedIndex}
            onSelect={index => setSecondselectedIndex(index)}
            value={secondRegion[secondselectedIndex.row]}
            placeholder={'시/구'}
            style={{flex: 1}}>
            {secondRegion.map(region => (
              <SelectItem title={region} value={region} />
            ))}
          </Select>
        </View>
        <View>
          <FlatList
            data={searchData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            style={{marginBottom: 40}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
  },
  headerText: {fontSize: 16, fontWeight: 'bold'},
  homeBody: {flex: 1},
});

export default Home;
