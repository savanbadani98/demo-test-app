import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BallIndicator} from 'react-native-indicators';

import COLOR from '../styles/Color';
import {horizontalScale, moderateScale} from '../utils/Utils';

  const ActivityLoader = props => {
  const {isLoading} = props;
  return (
    <Modal transparent={true} animationType={'none'} visible={isLoading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <BallIndicator
            color={props.color ? props.color : COLOR.SECONDARY}
            size={moderateScale(45)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ActivityLoader;

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    backgroundColor: COLOR.WHITE,
    borderRadius: RFValue(8),
    height: horizontalScale(80),
    width: horizontalScale(80),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100, 0.8)',
    width: '100%',
  },
});
