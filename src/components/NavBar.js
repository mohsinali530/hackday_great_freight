import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FrappeFetch from "react-native-frappe-fetch";
import React, { useEffect, useState } from "react";
const get_party_details = "shipmnts.finance_mobile.get_party_details";
const get_party_wise_invoices =
  "shipmnts.finance_mobile.get_party_wise_invoices";
import axios from "axios";
import CutomerDetailScreen from "./CutomerDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Dashboard";
import AllCustomers from "./AllCustomers";
import { Color } from "../../GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
const Stack = createNativeStackNavigator();

export default function NavBar({ allCustomers }) {
  // const [data, setData] = useState([]);
  // const [partyDetails, setPartyDetails] = useState({});
  // const [shipmentsDetail, setShipmentsDetail] = useState({});
  // const [contectDetail, setContectDetail] = useState({});
  const renderScreen = () => {
    switch (activeTab) {
      case "Home":
        return <Dashboard allCustomers={allCustomers} />;
      case "Receivable":
        return <CutomerDetailScreen />;
      default:
        return <AllCustomers allCustomers={allCustomers} />;
    }
  };
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {renderScreen()}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "Receivable" && styles.activeTab,
          ]}
          onPress={() => handleChange("Receivable")}
        >
          <Icon
            name="plus"
            size={30}
            color={
              activeTab == "Receivable" ? Color.colorRoyalblue_100 : "#123"
            }
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "Receivable" && styles.activeTab,
            ]}
          >
            Receivable
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Home" && styles.activeTab]}
          onPress={() => handleChange("Home")}
        >
          <Icon
            name="home"
            size={30}
            color={activeTab == "Home" ? Color.colorRoyalblue_100 : "#123"}
          />
          <Text
            style={[styles.tabText, activeTab === "Home" && styles.activeTab]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Payable" && styles.activeTab]}
          onPress={() => handleChange("Payable")}
        >
          <Icon
            name="minus"
            size={30}
            color={activeTab == "Payable" ? Color.colorRoyalblue_100 : "#123"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "Payable" && styles.activeTab,
            ]}
          >
            Payable
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

// axios.get('http://192.168.1.224:8000/api/method/shipmnts.controllers.network_company.get_company/',{
//   'headers':{
//     'Content-Type': 'application/json',
//     'X-Frappe-Site-Name': 'development',
//     'Authorization': 'Basic NzkwMzJmMDE3YzkzYzRhOmU1YmMyNGE3OTJiMTVlNA=='
//   },
//   params: {
//     company_name: "QWRqwrq"
//   }
// }).then(res => {
//   console.log(">>>>>>>>>>>>> ",res)
// }).catch(err => console.log(err))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 60,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 5,
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
  },
  activeTab: {
    color: Color.colorRoyalblue_100,
  },
});
