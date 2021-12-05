import React from 'react';
import styled from 'styled-components/native';

export default ({data}) => {
  return (
    <Area>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
