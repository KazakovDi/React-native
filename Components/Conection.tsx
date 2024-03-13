import React, {useEffect, useState} from 'react';
import {useNetInfoInstance} from '@react-native-community/netinfo';
import {Text, TouchableOpacity, View} from 'react-native';
import Svg from 'react-native-svg';
import Refresh from '../assets/svg/refresh.svg';
const Conection = () => {
  const {netInfo, refresh} = useNetInfoInstance();
  return (
    <>
      <Text
        style={{
          display: 'flex',
          fontSize: 20,
          justifyContent: 'space-between',
        }}>
        <Text>
          Your conection speed{' '}
          {netInfo.details?.linkSpeed ? netInfo.details.linkSpeed : '...'}Mbps
        </Text>
        <TouchableOpacity onPress={() => refresh()}>
          <Svg width={20} height={20}>
            <Refresh width={20} height={20} />
          </Svg>
        </TouchableOpacity>
      </Text>
      {netInfo.details?.isConnectionExpensive ? (
        <Text style={{color: 'red'}}>
          Be aware! Your conection consumes too much energy
        </Text>
      ) : null}
    </>
  );
};

export default Conection;
