import styled from 'styled-components/native';


export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: transparent;
margin-top:15px;
`;

export const Options = styled.TouchableOpacity`
 
  margin-right: 16px;
  align-items: center;
  display:flex;
   
    flex-direction:row;
    min-width:150px;
    margin-right:15px;
    background-color:#fff;
    padding:10px;
    border-radius:10px;
`;
export const Img = styled.Image`
width:  50; height: 50;marginRight:10;
`;
export const Label = styled.Text`
  color: #000;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;
