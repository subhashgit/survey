import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  }
}))`
  margin-top: 0px;
`;

export const Option = styled.TouchableOpacity`

  border-radius: 8px;
  padding: 0;
  justify-content: space-between;
  margin-right: 0px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;

