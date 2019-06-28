import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

class ComponentGps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

  onPressCalculateGps(){
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 },
     );
  }

  onPressStoreIn(){

  }


  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={()=> this.onPressCalculateGps()}
        title="Calcualate position"
        color="#841584"
      />
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <Button
          onPress={()=>this.onPressStoreIn()}
          title="Verify"
          color="#841584"
        />
      </View>
    );
  }
}

export default ComponentGps;
