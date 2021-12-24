import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const image = { uri: "https://media.istockphoto.com/photos/vegetable-and-fruits-on-white-wood-background-flat-lay-picture-id936505934?s=2048x2048" };

export default function Signup({ navigation }) {
    return (
        <ImageBackground style={styles.image} source={image} resizeMode="cover">
            <View style={styles.signUpContainer}>
                <TextInput style={styles.row1}
                    mode="outlined"
                    label="Enter Name"
                />
                <TextInput style={styles.row1}
                    mode="outlined"
                    label="Enter Phone Number"
                />
                <TextInput style={styles.row1}
                    mode="outlined"
                    label="Enter Email"
                />
                <TextInput style={styles.row1}
                    mode="outlined"
                    secureTextEntry
                    label="Password"

                    right={<TextInput.Icon name="eye" />}
                // placeholder="Enter Password"

                />
                <Button
                    mode="contained"
                    onPress={
                        () => navigation.navigate('Login')
                    }>Signup</Button>
            </View>
        </ImageBackground>


    )
}


const styles = StyleSheet.create({
    signUpContainer: {
        backgroundColor: `#deb887`,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        padding: 30,
        borderRadius: 15,
    },
    row1: {
        height: 40,
        width: 300,
        borderColor: 'blue',
        // borderWidth: 20,
        borderRadius: 10,
        margin: 10,
    },
    image: {
        width: 'null',
        height: 'null',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


