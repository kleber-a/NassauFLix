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
import React, {useState, useContext, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {AuthContext} from '../../context/auth';
import Loading from '../../components/Loading';

export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {userLogin} = useContext(AuthContext);

  async function handleSubmit() {
    const isSucess = await userLogin(username, password);
    setLoading(true);
    setIsError(true);
    if (isSucess) {
      return navigation.reset({
        index: 0,
        routes: [{name: 'HomeTabScreen'}],
      });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    setIsError(!isSucess);
  }

  const colorError = isError
    ? 'rgba(236, 38, 38, 0.65)'
    : 'rgba(255, 255, 255, 0.5)';

  const colorErrorText = isError ? 'rgba(236, 38, 38, 0.65)' : '#fff';

  const [pixels, setPixels] = useState(new Animated.Value(-1000));

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
      </View>
      {loading && isError ? (
        <Loading size={77} color={'#F98C8C'} />
      ) : (
        <Animated.View
          style={{
            translateX: pixels,
          }}>
          <Animated.Image
            style={{
              translateX: pixels,
              top: -130,
              height: 130,
              resizeMode: 'cover',
              alignSelf: 'center',
              position: 'absolute',
            }}
            source={require('../../assets/logo.png')}
          />
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
              color={colorError}
              size={20}
            />
            <TextInput
              onFocus={() => setIsError(false)}
              keyboardType={'email-address'}
              style={[styles.input, {color: colorErrorText}]}
              placeholder="nome de usuário"
              onChangeText={usernameInput => {
                setUsername(usernameInput);
              }}
              placeholderTextColor={colorError}
            />
            <AntDesign
              style={styles.lockIcon}
              name="lock"
              color={colorError}
              size={18}
            />
            <TextInput
              onFocus={() => setIsError(false)}
              onChangeText={passwordInput => {
                setPassword(passwordInput);
              }}
              style={[styles.input, {color: colorErrorText}]}
              placeholder="senha"
              placeholderTextColor={colorError}
              secureTextEntry={true}
            />
            {isError && (
              <Text style={styles.textError}>Usuário ou senha inválidos</Text>
            )}
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
      )}
    </KeyboardAvoidingView>
  );
}
