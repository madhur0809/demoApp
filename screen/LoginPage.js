import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput,
TouchableOpacity } from 'react-native'

export default function LoginPage({navigation}) {
    const AppBtn = (props) => {
        return(
        <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer} >
            <Text style={styles.appButtonText}> {props.title} </Text>
        </TouchableOpacity>
        )
    }
    return (
        <View>
            <ImageBackground blurRadius={3}
           style={styles.backImage}
           source={require('../assets/backimage.jpg')}>
            <View style={styles.headingContainer}>
                <Text style={{color: 'white', fontSize: 78, fontWeight: 'bold'}}> Shopbit </Text>
            </View>
               <View style={styles.formContainer}>
               <TextInput keyboardType={'email-address'}
                placeholder={'Email Address'}
                style={styles.textInputBox}></TextInput>
               <TextInput keyboardType={'default'} secureTextEntry={true}
                placeholder={'Password'}
                style={styles.textInputBox}></TextInput>
                <AppBtn title='SIGN IN' 
                onPress={() => alert('Login Successfully')}></AppBtn>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:15, marginTop:10}} onPress={()=> navigation.navigate('ForgotPassword')}> Don't Have an account? </Text>
                <Text style={{color:'white',fontSize:15, marginTop:10,
                 textDecorationLine:'underline'}} onPress={()=>navigation.navigate("RegisterPage")}> Sign up now </Text>
               </View>
               </View>
            </ImageBackground>
        </View>
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
    textInputBox: {
        backgroundColor: 'white',
        color: 'black',
        width: 300,
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 60,
    },
    appButtonContainer: {
        backgroundColor: '#03b5fc',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
        alignSelf: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
})
