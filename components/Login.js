import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const image = { uri: "https://media.istockphoto.com/photos/vegetable-and-fruits-on-white-wood-background-flat-lay-picture-id936505934?s=2048x2048" };
const { width: WIDTH } = Dimensions.get('window')

export default function Login({ navigation }) {
    return (
        <ImageBackground source={image} style={styles.backgroundImage}
        >
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Enter Email/Number"
                />
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    secureTextEntry
                    label="Password"
                />
                <Button style={{ margin: 10, }} mode="contained" onPress={() => navigation.navigate('Home')}>
                    Login
                </Button>
                <Text>New to VEGES?</Text>
                <Button style={{ margin: 10, }} mode="outlined" onPress={() => navigation.navigate('Signup')}>
                    Register Here!
                </Button>
            </View>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: `#deb887`,
        padding: 30,
        borderRadius: 15,

    },
    backgroundImage: {
        width: 'null',
        height: 'null',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 40,
        //     // paddingLeft: 45,
        //     marginHorizontal: 25,
        //     fontSize: 16,
        //     // backgroundColor: 'red',
        //     borderRadius: 25,
    },
});
