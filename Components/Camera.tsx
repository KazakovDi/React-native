import React, {useRef, useState} from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RBSheet from '@poki_san/react-native-bottom-sheet';
import MobxStore from '../Stores/MobxStore';
import {observer} from 'mobx-react-lite';

const Camera = observer(() => {
  const cameraRef = useRef(null);
  const bottomSheetRef = useRef();

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
            backgroundColor: 'red',
          },
        }}
        ref={bottomSheetRef}>
        <View style={{height: 450, overflow: 'hidden', position: 'relative'}}>
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
            <Text style={{fontSize: 22}}>Photo</Text>
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
            <Text style={{fontSize: 22}}>Vid</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <Button
        title="Show bottom sheet"
        onPress={() => bottomSheetRef.current.open()}
      />
    </>
  );
});

export default Camera;
