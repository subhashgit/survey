import React from 'react';

import { StyleSheet,  Image, Text } from 'react-native';
import { Container,  Content, Form, Item, Input, Label, Button, View, Linking } from 'native-base';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../../config';
firebase.initializeApp(firebaseConfig);

export default function Login() {
  return (
    <Container>
    
    <Content style={styles.container}>

        <Image  style={styles.imtxc} source={require('../../../assets/images/icon.png')} />

      <Text style={styles.loginsizetxt}>Enter your email. We'll send you link to sign in to your account.</Text>
      <Form style={styles.form}>
      
        <Item floatingLabel last style={styles.inputtexts}>
          <Label>Email Address</Label>
          <Input />
        </Item>
        
        <Button full success style={styles.buttons}>
            <Text style={styles.buttonstxt}>Login</Text>
          </Button>
        </Form>
      <View>
      <Text style={styles.textinfob}>Dont't have an account? </Text>
      <Text style={styles.signuplink}>Sign Up</Text>
      </View>
      <View>
      <Text style={styles.textinfob}>Not receiving your magic link? </Text>
      <Text style={styles.signuplink}>Sign Up with password</Text>
      </View>

    </Content>
  </Container>
   );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding:25,
  },
  imtxc:{
    display:"flex",
    alignItems:'center',
    alignSelf:'center',

  },
  loginsizetxt:{
    fontSize:22,
    textAlign:'center',
  },
  usernamedetail:
  {
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row"
  },
  usernamedetailn:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row",
   
  },
  otcontain: {
    padding:10,
    marginTop:20,
  },
  scriconsscroll:{
    display:"flex",
    marginTop:20,
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row",
    overflow:"scroll",
    
  },
  form:{
    marginTop:10,
  },
  buttons:{color:'#fff',  marginTop:20,},
  inputtexts:{paddingBottom:10,},
  textinfob:{color:'#666',marginTop:50,textAlign:"center"},
  signuplink:{textAlign:"center", color:'#60ad7f'},
  buttonstxt:{color:'#fff'},
});