import React, { useState, useEffect, useContext, AuthContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles'

export default function FavoriteDescription() {
    
    const [name, setName] = useState(null);
    const { account } = useContext(AuthContext);

    useEffect(() => {
        if (account.name) {
            setName(account.name);
        } else {
            setName(account.username);
        }
    }, [account]);




    return (
        <>
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="arrowleft" size={25} style={{ color: 'black' }} />
            </TouchableOpacity>
            <Text style={styles.containerText}>Filmes favoritos do <Text style={styles.userText}>{name && name}</Text></Text>
        </>
    )
};