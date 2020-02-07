import React from 'react';
import { withAuthorization } from '../Session';
import MapPage from '../Mapbox';

const HomePage = () => (
<MapPage/>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
