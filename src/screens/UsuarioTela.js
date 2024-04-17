import React from 'react';
import { View, Text } from "react-native";

function UsuarioTela() {
    return(
        <View style={styles.container}> <Text> Teste tela de 
            <Text style={styles.text}>Usuario</Text>
            </Text>
        </View>

    )
    
} export default UsuarioTela

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24, 
        color: 'red', 
    },
});
