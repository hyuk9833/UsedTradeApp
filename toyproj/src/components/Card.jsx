import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({item}) => {
  return (
    <View style={style.cardWrapper} key={item.id}>
      <View style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 10, color: '#aaa', fontWeight: 'bold'}}>
            {item.region.split(' ')[2]}
          </Text>
        </View>
        <Text style={{fontSize: 13, color: 'orange', fontWeight: 'bold'}}>
          {item.price.toLocaleString()}원
        </Text>
      </View>
      <Image source={{uri: item.imgUrl[0]}} style={style.cardImg} />
    </View>
  );
};

const style = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  cardImg: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default Card;
