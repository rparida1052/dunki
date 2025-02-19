import React, { useRef, useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";

interface OTPInputProps extends TextInputProps {
  length: number; // Number of OTP fields
  value: string;
  onChangeText: (text: string) => void;
  onComplete: (otp: string) => void; // Callback when OTP is complete
}

const OTPInput: React.FC<OTPInputProps> = ({
  length,
  onComplete,
  value,
  onChangeText,
  ...props
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  // Handle text change in each input field
  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // Move to the next input if not the last field
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
    onChangeText(newOtp.join(""));
    value = newOtp.join("");

    // Call onComplete when OTP is complete
    if (newOtp.join("").length === length) {
      onComplete(newOtp.join(""));
    }
  };

  // // Handle key press for backspace navigation
  // const handleKeyPress = (key: string, index: number) => {
  //   if (key === "Backspace" && !otp[index] && index > 0) {
  //     inputs.current[index - 1]?.focus();
  //   }
  // };

  return (
    <View className="flex flex-row justify-between items-center w-full">
      {Array(length)
        .fill("")
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref!)}
            className="w-12 h-12 border border-[#C9BA94] rounded-lg text-center text-xl bg-[#F5E7C6] shadow-2xl shadow-[#EFDFB9] font-bold "
            value={otp[index]}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={({ nativeEvent }) =>
              handleKeyPress(nativeEvent.key, index)
            }
            keyboardType="number-pad"
            maxLength={1}
            {...props}
          />
        ))}
    </View>
  );
};

export default OTPInput;
