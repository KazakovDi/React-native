import React from 'react';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {Text, TouchableOpacity} from 'react-native';
const Biometrics = () => {
  const rnBiometrics = new ReactNativeBiometrics();
  let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  let payload = epochTimeSeconds + 'some message';
  rnBiometrics.isSensorAvailable().then(resAvailable => {
    const {available, biometryType} = resAvailable;
    if (available) {
      rnBiometrics.biometricKeysExist().then(keysxistRes => {
        const {keysExist} = keysxistRes;
        if (!keysExist) {
          rnBiometrics.createKeys().then(resCreate => {
            const {publicKey} = resCreate;
            console.log('publicKey', publicKey);
            rnBiometrics
              .createSignature({promptMessage: 'Sign in'})
              .then(res => {
                const {success, signature} = res;
                console.log('signature', signature);
              });
          });
        }
      });
    } else {
    }
  });
  return (
    <TouchableOpacity
      onPress={() => {
        rnBiometrics.deleteKeys();
      }}>
      <Text>Unlog</Text>
    </TouchableOpacity>
  );
};

export default Biometrics;
