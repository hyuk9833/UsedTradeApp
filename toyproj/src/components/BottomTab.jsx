import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';

const bottomList = ['홈', '검색', '내정보'];

const BottomTab = ({navigation, state}) => {
  const iconFlag = (bool, name) => {
    switch (name) {
      case '홈':
        return bool ? homeOn : homeOff;
      case '검색':
        return bool ? searchOn : searchOff;
      default:
        return bool ? personOn : personOff;
    }
  };

  return (
    <SafeAreaView style={style.bottomTabWrapper}>
      {bottomList.map((item, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={style.iconWrapper}
            key={index}>
            <Image source={iconFlag(isFocused, item)} style={style.iconStyle} />
            <Text style={style.textStyle}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  bottomTabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconWrapper: {
    alignItems: 'center',
    gap: 4,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

const homeOff = require('../assets/icons/bottomtab/homeoff.png');
const homeOn = require('../assets/icons/bottomtab/homeon.png');
const personOff = require('../assets/icons/bottomtab/personoff.png');
const personOn = require('../assets/icons/bottomtab/personon.png');
const searchOff = require('../assets/icons/bottomtab/searchoff.png');
const searchOn = require('../assets/icons/bottomtab/searchon.png');

export default BottomTab;
