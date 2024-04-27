import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { BatTextInput } from "../BatTextInput";
import { generatePassword } from "../../services/passwordService";

export function BatButton() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(8);

  const handleGenerate = () => {
    const generatePass = generatePassword(size);

    setPassword(generatePass);
  };

  const handleSize = (value: number) => {
    setSize(value);
  };

  const handleCopy = () => {
    Clipboard.setStringAsync(password);
  };

  const sizes = [8, 12, 16, 20, 24];

  return (
    <>
      <BatTextInput password={password} />
      <Text style={styles.textSize}>Password Size</Text>
      <View style={styles.buttonsSize}>
        {sizes.map((val) => (
          <Pressable
            style={size === val ? styles.buttonSizeSelected : styles.buttonSize}
            onPress={() => handleSize(val)}
          >
            <Text style={styles.text}>{val}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopy}>
        <Text style={styles.text}>⚡️ COPY</Text>
      </Pressable>
    </>
  );
}
