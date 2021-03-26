import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import LineDivider from './LineDivider';

const RenderButtonSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.selectIcon}>
        {/* Claim */}
        <TouchableOpacity
          style={styles.flex}
          onPress={() => console.log('Claim')}>
          <View style={styles.selectIcon}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={styles.imgIcon}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              Claim
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <LineDivider />

        {/* Get Point */}
        <TouchableOpacity
          style={styles.flex}
          onPress={() => console.log('Get Point')}>
          <View style={styles.selectIcon}>
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={styles.imgIcon}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              Get Point
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <LineDivider />

        {/* My Card */}
        <TouchableOpacity
          style={styles.flex}
          onPress={() => console.log('My Card')}>
          <View style={styles.selectIcon}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={styles.imgIcon}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              My Card
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderButtonSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  flex: {
    flex: 1,
  },
  selectIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
});
