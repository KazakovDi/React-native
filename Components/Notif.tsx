import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Notifications} from 'react-native-notifications';
import messaging from '@react-native-firebase/messaging';

const Notif = () => {
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
    if (fcmToken) {
      console.log('fcmToken', fcmToken);
    }
  };

  checkToken();
  return (
    <TouchableOpacity
      onPress={() => {
        Notifications.postLocalNotification({
          body: 'Local notification!',
          title: 'Local Notification Title',
          sound: 'chime.aiff',
          category: 'SOME_CATEGORY',
          link: 'localNotificationLink',
          fireDate: new Date(), // only iOS
        });
      }}>
      <Text>Notif</Text>
    </TouchableOpacity>
  );
};

export default Notif;
