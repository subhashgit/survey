import React from 'react';
import { Text, TouchableOpacity,Image, ViewComponent , StyleSheet , View, ImageBackground } from 'react-native';
import { Container, Option, Title, Img  } from './styles'
import img8 from '../../../assets/images/background13.jpg'
import img9 from '../../../assets/images/background14.jpg'
import img10 from '../../../assets/images/background15.jpg'
import img11 from '../../../assets/images/background3.jpg'
import img12 from '../../../assets/images/background4.jpg'

import log12 from '../../../assets/images/iconsub.png'
import log13 from '../../../assets/images/logo-figma.png'
import log14 from '../../../assets/images/logo-framerx.png'
import log15 from '../../../assets/images/logo-invision.png'
import log16 from '../../../assets/images/logo-react.png'
const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
    logob:log12,
    textb:'Studio',
    textn:'2 of 12 Sections',

  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
    logob:log13,
    textb:'Figma',
    textn:'1 of 10 Section',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8',
    logob:'Frame rx',
    textb:log14,
    textn:'0 of 11 Section',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
    logob:log15,
    textb:'Invision',
    textn:'11 of 11 Section',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76',
    logob:log16,
    textb:'React',
    textn:'1 of 1 Section',
  },
]

export default function Tips() {
  return (
    <Container>
       <View style={styles.containercardfluid}>      
      {items.map((item) => (
 
      <Option key={item.key} bgColor={item.bgColor}>
        <View style={styles.containercard}>
          <ImageBackground source={item.img} style={styles.imagecard}>
            <Text style={styles.textcard}>{item.title}</Text>
          </ImageBackground>
          <View  style={styles.scriconscard}>
            <Image  source={item.logob} style={styles.imlogostyle} />
            <Text style={{fontWeight:'bold', backgroundColor:'#fff'}}>{item.textb} {"\n"}
            <Text style={{fontWeight:'normal'}}>{item.textn}</Text>
            </Text>
          </View>
        </View>
         
            </Option>
      ))}
      
</View>
    </Container>
  )
}



const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding:25,
  },
  imlogostyle:{ 
    width:  50, 
    height: 50,
    marginRight:10
  },

  scriconsscroll:{
    display:"flex",
    marginTop:20,
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row",
    overflow:"scroll",
    
  },
  scricons:
  {
    display:"flex",
    alignItems:'center',
    flexDirection:"row",
    minWidth:150,
    marginRight:15,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    fontWeight:"bold"
  },
   containercard: {
    width:320,
   
   
    marginRight:15,
    backgroundColor:'#fff',

    fontWeight:"bold"
  },
  imagecard: {
    height:200,
  padding:20,
    resizeMode: "cover",
    justifyContent: "flex-start"
  },
  textcard: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
containercardfluid:{
marginTop:20,
display:"flex",    
alignItems:'center',
flexDirection:"row",

    borderRadius:10,
    fontWeight:"bold"
},
scriconscard:
{
  display:"flex",
  alignItems:'center',
  flexDirection:"row",
  marginRight:0,
  backgroundColor:'#fff',
  paddingHorizontal:20,
  paddingVertical:40,
  marginTop:0,
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
  fontWeight:"bold"
},
});