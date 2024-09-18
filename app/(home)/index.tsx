import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Welcome, {user?.emailAddresses[0].emailAddress}</Text>

        <Link href="/logout">
          <Text>home test</Text>
        </Link>

        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </SignedIn>
      <SignedOut>
        <View>
          <Text>Clerk 🤝 Expo</Text>
          <Link href="/sign-in">
            <Text>Sign In</Text>
          </Link>
          <Link href="/sign-up">
            <Text>Sign Up</Text>
          </Link>
        </View>
      </SignedOut>
    </View>
  );
}
