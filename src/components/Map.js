import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import MapView, { Polyline, Circle } from "react-native-maps";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);
  //   console.log(state);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgb(158,158,255)"
        fillColor="rgba(158,158,255,1.0)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
