import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 25,
      }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 180, height: 180 }}
      />
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
        Create new account
      </Text>

      <TextInput style={styles.textInput} placeholder="Full Name" />
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: 25,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <View
        style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 20 }}
      >
        <Text style={{ fontFamily: "outfit" }}>Already have an account?</Text>
        <Pressable onPress={() => router.push("/auth/Signin")}>
          <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-bold" }}>
            Sign In Here
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8,
  },
});
