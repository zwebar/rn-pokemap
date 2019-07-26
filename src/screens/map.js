import React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export class MapScreen extends React.PureComponent {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChange={() => this.onRegionChange()}
        />
      </View>
    );
  }
}
