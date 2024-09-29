import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accountSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Test User</Text>
          <Text style={styles.email}>test@gmail.com</Text>
        </View>
      </View>

      {/* <TouchableOpacity style={styles.item}>
        <Icon name="person-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Personal Settings</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.item}>
        <View style={styles.row}>
          <Icon name="notifications-outline" size={24} color="#fff" />
          <Text style={styles.itemText}>Verify Account</Text>
        </View>
        {/* <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.row}>
          <Icon name="notifications-outline" size={24} color="#fff" />
          <Text style={styles.itemText}>Notifications</Text>
        </View>
        {/* <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.row}>
          <Icon name="notifications-outline" size={24} color="#fff" />
          <Text style={styles.itemText}>Logout</Text>
        </View>
        {/* <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View> */}
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.item}>
        <Icon name="globe-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Language</Text>
      </TouchableOpacity> */}

      {/* <Text style={styles.sectionHeader}>Workspace</Text> */}

      {/* <TouchableOpacity style={styles.item}>
        <Icon name="people-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Members</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="settings-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Team Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="shield-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="arrow-up-outline" size={24} color="#fff" />
        <Text style={styles.itemText}>Upgrade</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  accountSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    color: "#bbb",
    fontSize: 14,
  },
  sectionHeader: {
    color: "#bbb",
    marginVertical: 20,
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
  },
  notificationBadge: {
    backgroundColor: "#6a5acd",
    borderRadius: 10,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Settings;
