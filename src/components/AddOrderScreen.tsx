import { FlatList, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "./InputText";

const AddOrderScreen = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);

  const handleRemove = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <View className="flex-1 p-4 ">
      <View className="m-3">
        <CustomInput
          placeholder="Enter item name"
          onChangeText={setItem}
          value={item}
        />
      </View>
      <View className="m-3">
        <CustomInput
          placeholder="Enter item price"
          onChangeText={setPrice}
          value={price}
        />
      </View>
      <View className="m-3">
        <CustomInput
          placeholder="Enter item quantity"
          onChangeText={setQuantity}
          value={quantity}
        />
      </View>

      <Pressable
        className="flex items-center justify-center bg-orange-600 h-12 rounded-lg mt-4"
        onPress={() => {
          if (item && price && quantity) {
            setData([...data, { item, price, quantity }]);
            setItem("");
            setPrice("");
            setQuantity("");
          }
        }}>
        <Text className="text-white font-semibold text-xl">Add Item</Text>
      </Pressable>

      {data.length === 0 ? (
        <Text className="text-center text-orange-600 mt-6 font-semibold">
          No Data Available
        </Text>
      ) : (
        <View className="mt-6 border border-orange-500 rounded-lg overflow-hidden">
          <View className="flex-row bg-orange-300 p-2">
            <Text className="flex-1 text-center font-bold text-orange-900">
              Item
            </Text>
            <Text className="flex-1 text-center font-bold text-orange-900">
              Price
            </Text>
            <Text className="flex-1 text-center font-bold text-orange-900">
              Quantity
            </Text>
            <Text className="w-16 text-center font-bold text-orange-900">
              Remove
            </Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View className="flex-row border-b border-orange-400 p-2 bg-orange-200 items-center">
                <Text className="flex-1 text-center text-orange-900">
                  {item.item}
                </Text>
                <Text className="flex-1 text-center text-orange-900">
                  {item.price}
                </Text>
                <Text className="flex-1 text-center text-orange-900">
                  {item.quantity}
                </Text>
                <Pressable
                  className="w-16 bg-red-500 rounded-lg py-1"
                  onPress={() => handleRemove(index)}>
                  <Text className="text-center text-white font-bold">X</Text>
                </Pressable>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default AddOrderScreen;
