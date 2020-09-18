import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ForgotPassword() {
    return (
        <ImageBackground source={require('../assets/backimage.jpg')}
        style={styles.backImage}>
            <View>
                <View style={styles.headingContainer}>
                <Text style={{color: 'white', fontSize: 78, fontWeight: 'bold'}}> Shopbit </Text> 
                </View>
                <View style={styles.formContainer}>
                    
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backImage: {
        width: '100%',
        height: '100%',
    },
    headingContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 0.7,
        alignItems: 'center',
        paddingTop: 100,
        // justifyContent: 'center',

    },
})
