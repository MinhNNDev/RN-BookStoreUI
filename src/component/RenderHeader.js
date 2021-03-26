import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const RenderHeader = () => {
  const profileData = {
    name: 'Minh Nguyen',
    point: '9.456.642',
  };
  const [profile] = React.useState(profileData);
  return (
    <View style={styles.container}>
      {/* Greetings */}
      <View style={styles.flex}>
        <View style={{marginRight: SIZES.padding}}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>{profile.name}</Text>
        </View>
      </View>

      {/* Points */}
      <TouchableOpacity
        style={styles.touchPoint}
        onPress={() => {
          console.log('Point');
        }}>
        <View style={styles.eleRow}>
          <View style={styles.imgIcons}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={styles.icons}
            />
          </View>

          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            {profile.point} point
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  touchPoint: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
  },
  eleRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcons: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  icons: {
    width: 20,
    height: 20,
  },
});
