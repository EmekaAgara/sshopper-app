import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import axios from "axios";
import { useUser } from "@clerk/clerk-expo";

const { height } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    uri: "https://videos.pexels.com/video-files/3888262/3888262-sd_506_960_25fps.mp4",
    likes: 3833,
    comments: 209,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/women/1.jpg",
    vendor: "DP❤️",
    vendorEmail: "vendor@email.com",
    product: "New shirt",
    description:
      "My dear, if ou hear Orchid road run o 😟. you hear Orchid road run o 😟...",
    price: "N80,000",
    amount: 700,
  },

  {
    id: "2",
    uri: "https://videos.pexels.com/video-files/3888268/3888268-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 8900,
  },
  {
    id: "3",
    uri: "https://videos.pexels.com/video-files/4008365/4008365-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "4",
    uri: "https://videos.pexels.com/video-files/3205789/3205789-sd_360_640_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "5",
    uri: "https://videos.pexels.com/video-files/3888251/3888251-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "6",
    uri: "https://videos.pexels.com/video-files/3753710/3753710-sd_360_640_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "7",
    uri: "https://videos.pexels.com/video-files/4008366/4008366-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "8",
    uri: "https://videos.pexels.com/video-files/4008367/4008367-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    product: "New shirt",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "9",
    uri: "https://videos.pexels.com/video-files/3886377/3886377-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "10",
    uri: "https://videos.pexels.com/video-files/5645644/5645644-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
  {
    id: "11",
    uri: "https://videos.pexels.com/video-files/4937469/4937469-sd_506_960_25fps.mp4",
    likes: 2001,
    comments: 104,
    bookmarks: 209,
    shares: 209,
    poster: "https://randomuser.me/api/portraits/men/2.jpg", // Image of the poster (profile pic)
    user: "NBA Geeboy",
    description:
      "Catch the latest ou hear Orchid road run o 😟. vibe on black soap 🚀",
    price: "N80,000",
    amount: 700,
  },
];

const home = () => {
  const [lastTap, setLastTap] = useState<number | null>(null);
  const router = useRouter();
  const { user } = useUser();
  const SECRET_KEY = process.env.EXPO_PUBLIC_KORA_KEY;

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      initiatePayment();
    } else {
      setLastTap(now);
    }
  };
  const videoRefs = useRef<Video[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const initiatePayment = async () => {
    const currentVideo = videos[activeIndex];
    const amount = currentVideo.amount;
    const vendor = currentVideo.vendor;
    const vendorEmail = currentVideo.vendorEmail;
    const narration = `Payment For ${currentVideo.product}`;
    const userEmail = user?.emailAddresses[0].emailAddress;
    const userName = user?.fullName;
    const date = new Date();

    const reference = `ref_${Date.now()}`;
    const paymentData = {
      amount: amount,
      currency: "NGN",
      reference: reference,
      narration: narration,
      metadata: {
        vendorName: vendor,
        vendorEmail: vendorEmail,
        amount: amount,
        date: date,
      },
      customer: {
        name: userName,
        email: userEmail,
      },
      redirect_url: "https://google.com/success",
      channels: ["card", "bank_transfer", "pay_with_bank", "mobile_money"],
    };

    try {
      const response = await axios.post(
        "https://api.korapay.com/merchant/api/v1/charges/initialize",
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${SECRET_KEY}`,
          },
        }
      );

      const { checkout_url } = response.data.data;

      router.push({
        pathname: "/kora",
        params: { checkoutUrl: checkout_url },
      });
    } catch (error) {
      Alert.alert("Error", "Unable to initialize payment");
      console.error(error);
    }

    console.log(paymentData);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <Pressable onPress={handleDoubleTap} style={styles.videoContainer}>
      <Video
        ref={(ref) => (videoRefs.current[index] = ref!)}
        style={styles.video}
        source={{ uri: item.uri }}
        volume={1.0}
        isLooping
        shouldPlay={index === activeIndex}
        isMuted={false}
        useNativeControls={true}
      />
      <View style={styles.textoverlay}>
        {/* Poster (User Profile Image) */}
        <TouchableOpacity style={styles.userSection}>
          {/* <Image source={{ uri: item.poster }} style={styles.poster} /> */}
          <Text style={styles.userName}>{item.user}</Text>
        </TouchableOpacity>
        {/* Video Description */}
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <View style={styles.overlay}>
        <TouchableOpacity>
          <Image source={{ uri: item.poster }} style={styles.poster} />
        </TouchableOpacity>

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
        <TouchableOpacity style={styles.actionButton}>
          <Image source={{ uri: item.poster }} style={styles.poster} />
        </TouchableOpacity>
      </View>
    </Pressable>
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
    height: "100%",
  },
  videoContainer: {
    height,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  video: {
    flex: 1,
    width: "100%",
    height,
    position: "absolute",
    padding: 400,
  },
  overlay: {
    position: "absolute",
    right: 10,
    bottom: 50,
    alignItems: "center",
    zIndex: 10,
  },
  textoverlay: {
    position: "absolute",
    left: 20,
    bottom: 80,
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
    marginBottom: 20,
    width: 40,
    height: 40,
    borderRadius: 25,
    // marginRight: 10,
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
