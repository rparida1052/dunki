import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface OrderItemProps {
    index: number;
    item: {
        id: number;
        name: string;
        quantity: number;
        quantityType: string;
        price: number;
    };
}
const OrderItem = ({index,item}:OrderItemProps) => {
  return (
    <View
      className={`flex flex-row p-3 ${
        index % 2 === 0 ? "bg-orange-100" : "bg-white"
      }`}
    >
      <Text className="text-center text-orange-900 font-medium w-1/12">
        {index + 1}
      </Text>
      <Text className="text-left text-orange-900 font-medium w-4/12">
        {item.name}
      </Text>
      <Text className="text-center text-orange-900 font-medium w-3/12">
        {item.quantity} {item.quantityType}
      </Text>
      <Text className="text-center text-orange-900 font-semibold w-3/12">
        ₹{item.price}
      </Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
