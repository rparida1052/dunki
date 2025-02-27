import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import ScanOrder from "./ScanOrder";
import AddOrderScreen from "./AddOrderScreen";


export default function TabSwitcher() {
  const [selectedTab, setSelectedTab] = useState<"scan" | "manual">("scan");

  return (
    <View className="items-center flex-1">
      {/* Tab Buttons */}
      <View className="flex-row items-center border-2 border-orange-500 rounded-full overflow-hidden">
        <TouchableOpacity
          className={`px-6 py-2 rounded-full ${
            selectedTab === "scan" ? "bg-orange-500" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("scan")}>
          <Text
            className={`font-semibold ${
              selectedTab === "scan" ? "text-white" : "text-orange-500"
            }`}>
            Scan The Bill
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-6 py-2 rounded-full ${
            selectedTab === "manual" ? "bg-orange-500" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("manual")}>
          <Text
            className={`font-semibold ${
              selectedTab === "manual" ? "text-white" : "text-orange-500"
            }`}>
            Add Manually
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View className="mt-4 p-4 border rounded-lg w-full h-[100%]">
        {selectedTab === "scan" ? (
            <ScanOrder/>
        ) : (
          <AddOrderScreen/>
        )}
      </View>
    </View>
  );
}
