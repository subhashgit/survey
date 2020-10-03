import React from 'react';
import { Text, TouchableOpacity,Image, ViewComponent , StyleSheet , View } from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons' 
import { Ionicons } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance,  } from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
       
        <View style={styles.otcontain}>
              <View style={styles.usernamedetail}>
                <View style={styles.usernamedetailn}>
                <TouchableOpacity onPress={()=> alert('image clicked')}>
                

                  <Image  style={{ width: 50, height: 50,marginRight:10, borderRadius:200}}   source={require('../../../assets/avatar-default.jpg')} />
                  </TouchableOpacity>
                      <Text>Welcome Back {"\n"}
                                    <Text style={{fontWeight:"bold",  }}>Ramesh</Text>
                    </Text>
                    
                </View>
                <Text>
                  <Ionicons name={'ios-notifications'}  size={30} color={'#3368FF'} />
                  
                  </Text>
              
            </View> 
            </View> 
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding:25,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
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
  
});