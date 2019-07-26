import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  listItemContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  listItemImageContainer: { height: 60, width: 80 },
  listItemImage: { width: 60, height: 60 },
  listItemName: { flex: 1, textAlign: "left", fontSize: 14 }
});

export class OverviewScreen extends React.PureComponent {
  state = {
    pokemonList: []
  };

  componentDidMount(): void {
    this.fetchPokemonList();
  }

  fetchPokemonList() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then(data => data.json())
      .then(pokemonList => {
        this.setState(prevState => ({
          ...prevState,
          pokemonList: pokemonList.pokemon
        }));
      });
  }

  _onPress(item) {
    this.props.navigation.navigate("Details", { item });
  }

  render() {
    const { state } = this;

    if (state.pokemonList && state.pokemonList.length) {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.list}
            data={state.pokemonList}
            keyExtractor={item => item.name}
            renderItem={({ item, index }) => (
              <TouchableHighlight onPress={() => this._onPress(item)}>
                <View style={styles.listItemContainer}>
                  <View style={styles.listItemImageContainer}>
                    <Image
                      style={styles.listItemImage}
                      source={{ uri: item.img }}
                    />
                  </View>
                  <Text style={styles.listItemName}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </SafeAreaView>
      );
    } else {
      return <View />;
    }
  }
}
