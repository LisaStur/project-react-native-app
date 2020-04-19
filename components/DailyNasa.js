import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Image, View } from 'react-native'

const InfoText = styled.Text`
  color: white;
  text-align: center;
  font-size: 36px;
`
const StyledView = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const BtnText = styled.Text`
  font-size: 25px;
  color: white;
  text-align: center
`

const Btn = styled.TouchableOpacity`
  background-color: black;
  height: 50px;
`

export const DailyNasa = ({ navigation }) => {
  const [nasa, setNasa] = useState([])

  const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=08iR4WWfCjNzN30nufKyaR5LGHFjgXgynks7MDcF'

  useEffect(() => {
    fetch(nasaApi)
      .then((res) => res.json())
      .then((json) => setNasa(json))
  }, [])


  return (
    <>
      <StyledView>
        <InfoText>{nasa.title}</InfoText>
        <Image source={{ uri: nasa.url }} style={{ width: 300, height: 300 }} />
      </StyledView>
      <Btn title="More info" onPress={() => navigation.navigate('Details')}>
        <BtnText>More Details</BtnText>
      </Btn>
    </>
  )
}
