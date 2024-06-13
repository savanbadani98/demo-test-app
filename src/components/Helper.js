import {showMessage} from 'react-native-flash-message';
import {RFValue} from 'react-native-responsive-fontsize';

export const showAlertMessage = (msg, tp) => {
  if (msg && msg != '') {
    showMessage({
      message: msg,
      type: tp == 1 ? 'success' : 'warning',
      titleStyle: {textAlign: 'center', fontSize: RFValue(12)},
    });
  }
};


export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
