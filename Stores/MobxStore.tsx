import React from 'react';
import ReactDOM from 'react-dom';
import {makeAutoObservable, runInAction} from 'mobx';
import EncryptedStorage from 'react-native-encrypted-storage';

class MobXStore {
  store = {};
  media = {};
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
  savePhoto(uri: string) {
    this.media = {uri, type: 'img'};
  }
  saveVideo(uri: string) {
    this.media = {uri, type: 'vid'};
  }
}

export default new MobXStore();
