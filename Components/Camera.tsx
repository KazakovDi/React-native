import React, {useContext, useRef, useState} from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RBSheet from '@poki_san/react-native-bottom-sheet';
import MobxStore from '../Stores/MobxStore';
import {observer} from 'mobx-react-lite';
import {ThemeContext} from '../App';
import {useSelector} from 'react-redux';

import MyButton from './MyButton';
const Camera = observer(() => {
  const cameraRef = useRef(null);
  const bottomSheetRef = useRef();
  const styles = useContext(ThemeContext);
  const localization = useSelector(state => state.localization.localization);

  const takePicture = async () => {
    const dat = await cameraRef.current.takePictureAsync();
    MobxStore.savePhoto(dat.uri);
    return Promise.resolve();
  };
  const record = async () => {
    const dat = await cameraRef.current.recordAsync();
    MobxStore.saveVideo(dat.uri);
    return Promise.resolve();
  };
  return (
    <>
      <RBSheet
        animationType="slide"
        openDuration={500}
        height={500}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: styles.bgSecondary.color,
          },
          container: {
            backgroundColor: styles.text.opposite,
          },
        }}
        ref={bottomSheetRef}>
        <View
          style={{
            height: 450,
            overflow: 'hidden',
            position: 'relative',
          }}>
          <RNCamera style={{height: 350}} ref={cameraRef}></RNCamera>
          <TouchableOpacity
            title={'Take photo'}
            onPress={() => {
              request(PERMISSIONS.ANDROID.CAMERA).then(res => {
                takePicture().then(res => {
                  bottomSheetRef.current.close();
                });
              });
            }}>
            <Text style={{color: styles.text.color, fontSize: 22}}>
              {localization.takePhoto}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLongPress={() => {
              request(PERMISSIONS.ANDROID.CAMERA).then(res => {
                record();
              });
            }}
            delayLongPress={500}
            onPress={() => {
              cameraRef.current.stopRecording();
              bottomSheetRef.current.close();
            }}>
            <Text style={{color: styles.text.color, fontSize: 22}}>
              {localization.takeVideo}
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <MyButton
        title={localization.bottomSheet}
        color={styles.text.opposite}
        bgColor={styles.bgSecondary.color}
        onPress={() => bottomSheetRef.current.open()}
      />
    </>
  );
});

export default Camera;
