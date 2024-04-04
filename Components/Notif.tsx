import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Notifications} from 'react-native-notifications';
import messaging from '@react-native-firebase/messaging';

const Notif = () => {
  const [fcmKey, setFcmKey] = useState('');
  Notifications.registerRemoteNotifications();
  Notifications.events().registerNotificationReceivedForeground(
    (notification: any, completion: (response: any) => void) => {
      console.log('Notification Received - Foreground', notification.payload);

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({alert: true, sound: true, badge: false});
    },
  );

  Notifications.events().registerNotificationOpened(
    (notification: any, completion: () => void, action: any) => {
      console.log('Notification opened by device user', notification.payload);
      console.log(
        `Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`,
      );
      completion();
    },
  );

  Notifications.events().registerNotificationReceivedBackground(
    (notification: any, completion: (response: any) => void) => {
      console.log('Notification Received - Background', notification.payload);
      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({alert: true, sound: true, badge: false});
    },
  );
  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    setFcmKey(fcmToken);
    if (fcmToken) {
      console.log('fcmToken', fcmToken);
    }
  };
  const notification = {
    notification: {
      title: 'Ваш заголовок уведомления',
      body: 'Текст вашего уведомления',
    },
    to: fcmKey,
  };
  const options = {
    method: 'POST',
    headers: {
      Authorization: `key=AAAA0zjnedg:APA91bHWtTPuZfBTpQVhcA2UfV8yFsI7ghInrt1fO70dOvnyOXHTxys8odMGi5aHcDY1okuk_k1scW8o2zJ9aKfYn9I7i4YaiQK5GbeRlW2ikgUpL4QcTKpJGl5Qtp2Zmq7ctARqAqKy`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notification),
  };
  checkToken();
  return (
    <TouchableOpacity
      onPress={() => {
        setTimeout(() => {
          fetch('https://fcm.googleapis.com/fcm/send', options)
            .then(res => console.log('res', res))
            .catch(err => console.log('err', err));
        }, 3000);
      }}>
      <Text>Notif</Text>
    </TouchableOpacity>
  );
};

export default Notif;
