import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";

export default function PagesLayout() {
  // const { isSignedIn } = useAuth();

  // if (isSignedIn) {
  //   return <Redirect href={"/"} />;
  // }

  // return <Stack />;
  return (
    <Stack>
      <Stack.Screen name="logout" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="kora"
        options={{ headerShown: true, presentation: "modal" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="sign-up" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
