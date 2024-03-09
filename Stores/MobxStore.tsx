import React from 'react';
import ReactDOM from 'react-dom';
import {makeAutoObservable, runInAction} from 'mobx';
import EncryptedStorage from 'react-native-encrypted-storage';
const darkTheme = {
  $textColor: '#fff',
  $oppositeColor: '#000',
  $bgColorPrimary: '#292929',
  $bgColorSecondary: '#fad768',
  $bgGradient: ['rgba(69,69,69,1)', 'rgba(43,43,43,1)'],
};
const lightTheme = {
  $textColor: '#000',
  $oppositeColor: '#fff',
  $bgColorPrimary: '#fff',
  $bgColorSecondary: '#2196f3',
  $bgGradient: [
    'rgba(176,198,243, 1)',
    'rgba(102,112,178, 1)',
    'rgba(165,143,215, 1)',
  ],
};
class MobXStore {
  store = {};
  media = {};
  theme = 'light';
  themeProps = {
    theme: 'light',
    styles: lightTheme,
    mask: {
      text: {
        color: '$textColor',
        opposite: '$oppositeColor',
      },
      bgPrimary: {
        color: '$bgColorPrimary',
      },
      bgSecondary: {
        color: '$bgColorSecondary',
      },
    },
  };
  constructor() {
    makeAutoObservable(this, {}, {});
  }

  public saveToStorage(key, value) {
    // console.log('save', value, this.store[0]);
    if (!this.store[key]) this.store[key] = [];
    const stringifyedValue = JSON.stringify([...this.store[key], value]);
    EncryptedStorage.setItem(key, stringifyedValue).then(res => {
      this.store[key] = JSON.parse(res);
    });
  }
  public clearStorage() {
    EncryptedStorage.clear().then(() => {
      this.store = {};
    });
  }
  public GetData() {
    EncryptedStorage.getItem('FAKE_DATA').then(res => {
      if (res !== null) {
        const value = JSON.parse(res);
        this.store['FAKE_DATA'] = value;
      }
    });
    return Promise.resolve(this.store);
  }
  public savePhoto(uri: string) {
    this.media = {uri, type: 'img'};
  }
  public saveVideo(uri: string) {
    this.media = {uri, type: 'vid'};
  }
  public switchTheme() {
    if (this.themeProps.theme === 'light') {
      this.themeProps.theme = 'dark';
      this.themeProps.styles = darkTheme;
    } else {
      this.themeProps.theme = 'light';
      this.themeProps.styles = lightTheme;
    }
  }
}

export default new MobXStore();
