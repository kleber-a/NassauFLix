import {Alert} from 'react-native';

const AlertDeleteMovie = () => {
  Alert.alert(
    'Atenção',

    'Deseja mesmo remover o filme?',

    [
      {
        text: 'NÃO',

        style: 'cancel',
      },

      {
        text: 'SIM',

        onPress: () => console.warn("pegou"),
      },
    ],

    {cancelable: true},
  );
};

export default AlertDeleteMovie
