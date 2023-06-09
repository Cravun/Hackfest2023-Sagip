import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  Button,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import DonatorMap from "./donation/DonatorMap";

export default function Donate() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "95%",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, paddingBottom: 10 }}>Donate</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate(AccountSetting)}>
            <View
              style={{
                alignItems: "flex-end",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "gray",
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View style={styles1.ContainerShadow}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/bandagered.png")}
          ></Image>

          <Text
            style={{
              fontSize: 18,
              paddingVertical: 10,
              color: "#2E5C65",
              fontWeight: "bold",
            }}
          >
            No application form...yet!
          </Text>

          <Text
            style={{
              fontSize: 10,
              paddingBottom: 10,
              paddingHorizontal: 55,
              textAlign: "center",
            }}
          >
            It's time to take part in helping people in need and start your
            heroic adventurer.
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(DonatorMap)}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 41,
                width: 170,
                borderRadius: 10,
                backgroundColor: "#DD4438",
              }}
            >
              <Text style={{ fontSize: 15, color: "#fff", fontWeight: "600" }}>
                Apply for donation
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 320,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10,
            fontWeight: "600",
            position: "relative",
            right: "25%",
          }}
        >
          Your Past Donations
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={styles1.PastDonation}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              justifyContent: "center",
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Donation</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
        <View style={{ width: "100%", height: 20 }}></View>
        <View
          style={{
            width: "100%",
            height: 100,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#fff",
            borderRadius: 8,
            flexDirection: "row",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.15,
                shadowRadius: 10,
              },
              android: {
                elevation: 10,
              },
            }),
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              justifyContent: "center",
              margin: 10,
              backgroundColor: "gray",
              paddingHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles1.setFontSizeOne}>Your Past Donation</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
            <Text style={styles1.setFontSizeZero}>Details</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text numberOfLines={1}>
            <Text>Can't find your request history? </Text>
            <Text style={{ color: "#2E5C65" }}>Contact us</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  setFontSizeZero: {
    fontSize: 10, // Define font size here in Pixels
  },

  setFontSizeOne: {
    fontSize: 15, // Define font size here in Pixels
  },
  setFontSizeTwo: {
    fontSize: 20, // Define font size here in Pixels
    fontWeight: "bold",
    letterSpacing: -0.4,
  },
  setFontSizeThree: {
    fontSize: 25, // Define font size here in Pixels
  },
  setFontSizeFour: {
    fontSize: 30, // Define font size here in Pixels
  },
  // Gray
  setColor: {
    color: "#434343",
  },
  // Red
  setColor2: {
    color: "#DD4438",
  },
  ContainerShadow: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#DD4438",
    alignItems: "center",
    justifyContent: "center",
    height: 242,
    width: 350,
    borderRadius: 10,
    borderWidth: 0.1,
    backgroundColor: "#fff",
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  PastDonation: {
    width: "100%",
    height: 100,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
