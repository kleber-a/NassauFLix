import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {AuthContext} from '../../contexts/auth';

export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {userLogin} = React.useContext(AuthContext);

  async function handleSubmit() {
    const isSucess = await userLogin(username, password);
    if (isSucess) {
      return navigation.reset({
        index: 0,
        routes: [{name: 'HomeTabScreen'}],
      });
    }
  }

  const [pixels, setPixels] = useState(new Animated.Value(-800));

  Animated.timing(pixels, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require('../../assets/bannerLogin.png')}
        />
        <Animated.Image
          style={{
            translateX: pixels,
            bottom: 0,
            height: 130,
            resizeMode: 'cover',
            alignSelf: 'center',
            position: 'absolute',
          }}
          source={require('../../assets/logo.png')}
        />
      </View>
      <Animated.View
        style={{
          translateX: pixels,
        }}>
        <View style={styles.textEntry}>
          <Text style={styles.textEntry.login}>Login</Text>
          <Text style={styles.textEntry.description}>
            Entre na sua conta para continuar.
          </Text>
        </View>
        <View style={styles.inputArea}>
          <EvilIcons
            style={styles.userIcon}
            name="user"
            color="#fff"
            size={20}
          />
          <TextInput
            keyboardType={'email-address'}
            style={styles.input}
            placeholder="e-mail"
            onChangeText={usernameInput => {
              setUsername(usernameInput);
            }}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
          <AntDesign
            style={styles.lockIcon}
            name="lock"
            color="#fff"
            size={18}
          />
          <TextInput
            onChangeText={passwordInput => {
              setPassword(passwordInput);
            }}
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnSubmit}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              handleSubmit();
            }}>
            <Text style={styles.btnSubmit.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
