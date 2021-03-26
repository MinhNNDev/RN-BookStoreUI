import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';
const LineDivider = () => {
  return (
    <View style={styles.divider}>
      <View style={styles.line} />
    </View>
  );
};

export default LineDivider;

const styles = StyleSheet.create({
  divider: {
    width: 1,
    paddingVertical: 18,
  },
  line: {
    flex: 1,
    borderLeftColor: COLORS.lightGray,
    borderLeftWidth: 1,
  },
});
