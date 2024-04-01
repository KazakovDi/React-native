// In index.js of a new project
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation, Modal} from 'react-native-navigation';

const LoginScreen = props => {
  return (
    <View style={styles.root}>
      <Button
        title="Login"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
      <Button
        title="Go to Register"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Register',
            },
          })
        }
      />
    </View>
  );
};
const RegisterScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title="Register"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};
const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />
    </View>
  );
};
const OtherScreen = props => {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <View style={styles.root}>
      <Text>OtherScreen</Text>

      <Button
        title="Show modal"
        color="#710ce3"
        onPress={() => setIsModalShown(true)}
      />
      <Modal
        visible={isModalShown}
        onRequestClose={() => {
          setIsModalShown(false);
        }}
        animationType="slide">
        <Text>Some Modal info</Text>
        <Button
          title="Dismiss declared Modal"
          testID="someId"
          onPress={() => setIsModalShown(false)}
        />
      </Modal>
    </View>
  );
};
RegisterScreen.options = {
  topBar: {
    title: {text: 'Register'},
  },
};
LoginScreen.options = {
  topBar: {
    title: {text: 'Login'},
  },
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};
OtherScreen.options = {
  topBar: {
    title: {
      text: 'Other',
    },
  },
  bottomTab: {
    text: 'Other',
  },
};
const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Register', () => RegisterScreen);

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('OtherScreen', () => OtherScreen);

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'OtherScreen',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
          },
        },
        {
          component: {
            name: 'Register',
          },
        },
      ],
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
