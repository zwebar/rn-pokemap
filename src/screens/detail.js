import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";

export class DetailsScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const pokemon = navigation.getParam("item", null);

    return (
      <View>
        <Text>{pokemon.name}</Text>
      </View>
    );
  }
}
