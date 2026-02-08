/* src/Protected.js */
// import React, { useEffect } from 'react';
// import { Auth } from 'aws-amplify'
import {withAuthenticator} from '@aws-amplify/ui-react';
import Container from './Container.jsx'

function Protected(props) {
  console.log('You have made it to a protected page', props)    
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default withAuthenticator(Protected)