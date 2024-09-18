import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    uri: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 3833,
    comments: 209,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/women/1.jpg",
    user: "DP❤️",
    description:
      "My dear, if ou hear Orchid road run o 😟. you hear Orchid road run o 😟...",
    price: "N80,000",
  },
  {
    id: "2",
    uri: "https://www.w3schools.com/html/movie.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
  },
];

const home = () => {
  const videoRefs = useRef<Video[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.videoContainer}>
      <Video
        ref={(ref) => (videoRefs.current[index] = ref!)}
        style={styles.video}
        source={{ uri: item.uri }}
        // resizeMode="cover"
        isLooping
        shouldPlay={index === activeIndex}
        isMuted={false}
      />
      <View style={styles.textoverlay}>
        {/* Poster (User Profile Image) */}
        <View style={styles.userSection}>
          <Image source={{ uri: item.poster }} style={styles.poster} />
          <Text style={styles.userName}>{item.user}</Text>
        </View>
        {/* Video Description */}
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      {/* Overlay with like/comment buttons */}
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={25} color="white" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="comment" size={25} color="white" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="bookmark" size={25} color="white" />
          <Text style={styles.actionText}>{item.bookmarks}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share" size={25} color="white" />
          <Text style={styles.actionText}>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const index = viewableItems[0]?.index || 0;
    setActiveIndex(index);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
      />
      {/* Tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Text style={styles.tabText}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.tabText, styles.activeTabText]}>
            Reccommended
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",
  },
  videoContainer: {
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    right: 10,
    bottom: 100,
    alignItems: "center",
  },
  textoverlay: {
    position: "absolute",
    left: 20,
    bottom: 40,
  },
  actionButton: {
    marginBottom: 20,
    alignItems: "center",
  },
  actionText: {
    color: "white",
    marginTop: 5,
    fontSize: 16,
  },
  tabBar: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 10,
    marginTop: 30,
  },
  tabText: {
    color: "gray",
    fontSize: 16,
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  poster: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    maxWidth: 300,
  },
  price: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,

    fontWeight: "700",
  },
  actionContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
    alignItems: "center",
  },
});

export default home;
