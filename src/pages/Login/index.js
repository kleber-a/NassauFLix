import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext, useEffect, useCallback} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {AuthContext} from '../../context/auth';
import Loading from '../../components/Loading';
import Info from 'react-native-vector-icons/AntDesign';
import YoutubePlayer from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;

export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Video
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const [modalInfo, setModalInfo] = useState(false);

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
    : 'rgba(1,1,1,0.4)';

  const colorErrorText = isError ? 'rgba(236, 38, 38, 0.65)' : '#111';

  const [pixels, setPixels] = useState(new Animated.Value(-windowWidth));

  Animated.timing(pixels, {
    toValue: windowWidth / 200,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableOpacity onPress={() => setModalInfo(true)} style={styles.info}>
        <Info name="infocirlceo" color={'#F3F3F3F3'} size={30} />
      </TouchableOpacity>
      {/*  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalInfo}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalInfo);
        }}>
       
            <TouchableWithoutFeedback onPress={()=> setModalInfo(false)}>
          <View style={styles.backgroundMODAL}>
              <TouchableWithoutFeedback>
              <View style={{width:'100%'}}>
                <YoutubePlayer
                  height={300}
                  width={'100%'}
                  play={playing}
                  videoId={'fMNIDHpLJfw'}
                  onChangeState={onStateChange}
                />
                
            </View>
               </TouchableWithoutFeedback>
          </View>
            </TouchableWithoutFeedback>
      
      </Modal>

      {/*  */}
      <ImageBackground
        resizeMode="contain"
        style={styles.banner}
        source={require('../../assets/NassauFLix/Fundooo.png')}>
        {loading && isError ? (
          <Loading size={77} color={'#F98C8C'} />
        ) : (
          <Animated.View
            style={{
              translateX: pixels,
            }}>
            <View style={{top: -40}}>
              <Image
                style={{
                  width: 300,
                  top: -135,
                  height: 145,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                  position: 'absolute',
                }}
                source={require('../../assets/NassauFLix/NASSAUFLIX.png')}
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
                  <Text style={styles.textError}>
                    Usuário ou senha inválidos
                  </Text>
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
            </View>
          </Animated.View>
        )}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
