import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request();
  };

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={t => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
