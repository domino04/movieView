import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Movie({ id, year, title, summary, poster, genres }) {
  console.log(poster);
  return (
    <View>
      <Image
        style={{ height: "20%", width: "30%", zIndex: 10 }}
        source={{
          url: poster,
        }}
      />
      <Text>{title}</Text>
      <Text>{year}</Text>
      {/* <Text style={styles.summary}>{summary}</Text> */}
    </View>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// const styles = StyleSheet.create({
//   movie: {
//     // flex: 1,
//   },
//   poster: {},
//   year: {
//     // flex: 1,
//   },
//   summary: {
//     // flex: 1,
//   },
// });
