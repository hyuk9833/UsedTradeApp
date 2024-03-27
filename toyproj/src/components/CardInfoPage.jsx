import {
  Image,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const backIcon = require('../assets/icons/back_arrow.png');

const CardInfoPage = ({route, navigation}) => {
  const {width, height} = useWindowDimensions();

  const item = route.params.item;

  const renderItem = ({item}) => {
    return <Image source={{uri: item}} style={{width: 150, height: 150}} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <FlatList
          data={item.imgUrl}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{paddingHorizontal: 16}}>
        <View
          style={{
            paddingBottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 16, color: 'orange', fontWeight: 'bold'}}>
            {item.price.toLocaleString()}원
          </Text>
        </View>
        <View>
          <Text>{item.content}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: 16,
          padding: 16,
          borderRadius: 16,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFF'}}>
          채팅하기
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CardInfoPage;
