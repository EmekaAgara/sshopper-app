import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";

const interests = [
  "Fashion",
  "Styling",
  "Textiles",
  "Runway",
  "Shopping",
  "Retail",
  "E-Commerce",
  "Accessories",
  "Jewelry",
  "Footwear",
  "Design",
  "Merchandising",
  "Modeling",
  "Apparel",
  "Trends",
  "Luxury",
  "Outfits",
  "Boutiques",
  "Tailoring",
  "Brands",
];

const Preferences = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      Alert.alert("Please select at least one interest");
    } else {
      Alert.alert("Selected Interests", selectedInterests.join(", "));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>What are your interests ?</Text>
        <Text style={styles.subTitle}>Select your areas of interest</Text>

        <ScrollView contentContainerStyle={styles.interestsContainer}>
          {interests.map((interest) => (
            <TouchableOpacity
              key={interest}
              style={[
                styles.interestButton,
                selectedInterests.includes(interest) &&
                  styles.interestButtonSelected,
              ]}
              onPress={() => toggleInterest(interest)}
            >
              <Text
                style={[
                  styles.interestText,
                  selectedInterests.includes(interest) &&
                    styles.interestTextSelected,
                ]}
              >
                {interest}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: "#8e8e93",
    fontSize: 16,
    marginBottom: 20,
  },
  interestsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  interestButton: {
    width: "49%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#2c2c2e",
    borderRadius: 7,
    alignItems: "center",
  },
  interestButtonSelected: {
    backgroundColor: "#E53F71",
  },
  interestText: {
    color: "#fff",
    fontSize: 16,
  },
  interestTextSelected: {
    color: "#fff",
  },
  buttonContainer: {
    paddingVertical: 10,
    backgroundColor: "#000",
    alignItems: "center",
    marginBottom: 20, // Add some bottom margin to avoid hiding behind Tab Navigator
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#E53F71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    bottom: 20,
  },
  continueText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Preferences;
