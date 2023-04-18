import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  Button,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AccountSetting from "./AccountSetting";

export default function Dashboard() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
      
        <View style={{width: "95%", justifyContent: "space-between",
            alignItems: "baseline", flexDirection: "row",}}>
          <View>
          <Image
          style={{ width: 100, height: 50 }}
          source={require("../assets/SAGIPLogo.png")}/>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate(AccountSetting)}>
            <View style={{ alignItems: "flex-end", height: 40, width: 40,
                        borderRadius: 40, backgroundColor: "gray"}}>
            </View>
          </TouchableOpacity>
        </View>
        

        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={DonationButton.Container1}
            onPress={() =>
              navigation.navigate("Donate", {
                // "userID": route.params.userID
              })
            }
          >
            <View style={DonationButton.Container1}>
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../assets/RequestBlood.png")}
              />
              <Text style={styles.applyButtonText}>I want to donate</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={DonationButton.Container2}
            onPress={() => navigation.navigate("Request")}
          >
            <View style={DonationButton.Container2}>
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../assets/RequestBlood.png")}
              />
              <Text style={DonationButton.Button1}>I need Blood</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={(styles.setFontSizeTwo, styles.setColor)}>Meet Ana</Text>

        <Image
          source={{
            width: 345,
            height: 160,
            uri: "https://images.unsplash.com/photo-1507250671672-b76f9dde4188?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          }}
        />

        <Text
          numberOfLines={4}
          style={{
            paddingTop: 5,
            textAlign: "justify",
            width: 345,
            lineHeight: 20,
            color: "#434343",
          }}
        >
          Ana is a 9-year old girl suffering from anemia due to
          disease-modifying treatments, such as chemotherapy for cancer. Take
          part in keeping Ana’s smile shine the world.{" "}
          <Text style={styles.setColor2}>Donate for Ana.</Text>
        </Text>

        <View
          style={{
            width: "95%",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: "row",
          }}
        >
          <View>
            <Text
              style={[
                styles.setFontSizeTwo,
                {
                  paddingTop: 8,
                  paddingBottom: 5,
                  alignItems: "flex-start",
                  color: "#434343",
                },
              ]}
              numberOfLines={1}
            >
              Learn
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text>See more</Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 5,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{alignItems: "flex-start", justifyContent: "flex-start",
              flexDirection: "column", width: 188, height: 147,
              paddingHorizontal: 7, paddingVertical: 7, backgroundColor: "#DD4438",
              borderTopLeftRadius: 20, borderTopRightRadius: 20,
              borderBottomRightRadius: 0,borderBottomLeftRadius: 20,
              padding: 20, marginHorizontal: 10,
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 15 }}>
                Benefits of donating blood
              </Text>
            </View>

            <Text
              numberOfLines={4}
              style={{ color: "white", paddingTop: 8, fontSize: 10 }}
            >
              It depends on the condition, but many medical conditions do not
              necessarily disqualify you from donating blood.
            </Text>
          </View>

          <View style={{alignItems: "flex-start",justifyContent: "flex-start",
              flexDirection: "column", width: 188, height: 147,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,
              borderBottomRightRadius: 0, borderBottomLeftRadius: 20,
              paddingHorizontal: 7, paddingVertical: 7,
              paddingBottom: 10, borderWidth: 0.2,
              backgroundColor: "darkblue", marginHorizontal: 10,
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 15 }}>
                Eligibility for blood donation
              </Text>
            </View>

            <Text
              numberOfLines={4}
              style={{ color: "white", paddingTop: 8, fontSize: 10 }}
            >
              It depends on the condition, but many medical conditions do not
              necessarily disqualify you from donating blood.
            </Text>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", height: 70 }}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

const DonationButton = StyleSheet.create({
  // I want to donate
  Container1: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 130,
  },
  // I need Blood
  Container2: {
    backgroundColor: "#DD4438",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 130,
  },
  Button1: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
    bottom: 10,
  },
  Button2: {
    color: "#DD4438",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
    bottom: 10,
  },
});
