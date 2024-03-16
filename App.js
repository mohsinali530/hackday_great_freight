import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FrappeFetch from "react-native-frappe-fetch";
import React, { useEffect, useState } from "react";
const get_party_details = "shipmnts.finance_mobile.get_party_details";
const get_party_wise_invoices =
  "shipmnts.finance_mobile.get_party_wise_invoices";
import axios from "axios";
import CutomerDetailScreen from "./src/components/CutomerDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./src/components/Dashboard";
import AllCustomers from "./src/components/AllCustomers";
import { Color } from "./GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import NavBar from "./src/components/NavBar";
const Stack = createNativeStackNavigator();
export function erpNextAxiosCall1(props, next) {
  const { action, url, params } = props;
  console.log(url);
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Frappe-Site-Name": "jetfreight.acc.shipmnts.com",
        Authorization: "Basic NzkwMzJmMDE3YzkzYzRhOmVlNzAzZDVkMGQ0MjkwYQ==",
      },
      params: { ...params },
    })
    .then((response) => {
      next(response);
    })
    .catch((error) => {
      console.log("E -> ", error);
    });
}

export function erpNextAxiosCall2(props, next) {
  const { action, url, params } = props;
  console.log(url);
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Frappe-Site-Name": "penta-demo.acc.shipmnts.com",
        Authorization: "Basic MDhlOGMyMDIxZTgzNTU3OjZjYTQ2N2IxYTM1MjY0YQ==",
      },
      params: { ...params },
    })
    .then((response) => {
      next(response);
    })
    .catch((error) => {
      console.log("E -> ", error);
    });
}

export default function App() {
  // const [data, setData] = useState([]);
  // const [partyDetails, setPartyDetails] = useState({});
  // const [shipmentsDetail, setShipmentsDetail] = useState({});
  // const [contectDetail, setContectDetail] = useState({});
  const [allCustomers, setAllCustomers] = useState({});
  const [activeTab, setActiveTab] = useState("Home");
  useEffect(() => {
    const fetchData = () => {
      try {
        // erpNextAxiosCall(
        //   {
        //     action: "get",
        //     url: `https://penta-demo.acc.shipmnts.com/api/method/${get_party_wise_invoices}`,
        //     params: {
        //       party: "20CUBE LOGISTICS PRIVATE LIMITED",
        //       party_type: "customer",
        //       status: JSON.stringify(["Overdue", "Unpaid"]),
        //     },
        //   },
        //   (response) => {
        //     setData(response.data.message);
        //   }
        // );

        // erpNextAxiosCall(
        //   {
        //     action: "get",
        //     url: `https://penta-demo.acc.shipmnts.com/api/method/${get_party_details}`,
        //     params: {
        //       party: "20CUBE LOGISTICS PRIVATE LIMITED",
        //       party_type: "customer",
        //     },
        //   },
        //   (response) => {
        //     setPartyDetails(response.data.message);
        //   }
        // );

        // erpNextAxiosCall(
        //   {
        //     action: "get",
        //     url: `https://penta-demo.acc.shipmnts.com/api/method/.finance_mobile.get_customer_shipments`,
        //     params: {
        //       customer: "VEEWIN LOGISTICS",
        //     },
        //   },
        //   (response) => {
        //     setShipmentsDetail(response.data.message);
        //   }
        // );
        // erpNextAxiosCall(
        //   {
        //     action: "get",
        //     url: `https://penta-demo.acc.shipmnts.com/api/method/shipmnts.finance_mobile/get_party_contacts_info`,
        //     params: {
        //       party: "VEEWIN LOGISTICS",
        //     },
        //   },
        //   (response) => {
        //     setContectDetail(response.data.message);
        //   }
        // );

        erpNextAxiosCall2(
          {
            action: "get",
            url: `https://penta-demo.acc.shipmnts.com/api/method/shipmnts.finance_mobile.get_party_details`,
            params: {
              group_by: "customer",
              limit: 50,
            },
          },
          (response) => {
            setAllCustomers(response.data.message);
            // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', response.data.message)
          }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="CutomerDetailScreen"
            component={CutomerDetailScreen}
          />
          <Stack.Screen name="AllCustomers" component={AllCustomers} />
        </Stack.Navigator>
        {/* <CutomerDetailScreen /> */}
        {/* <Dashboard /> */}
        {/* <AllCustomers allCustomers={allCustomers} /> */}
        <NavBar allCustomers={allCustomers} />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
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
    justifyContent: "center",
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
