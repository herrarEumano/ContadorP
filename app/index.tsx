import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: "https://media.tenor.com/_Gh3ezRN2P0AAAAi/%D0%BB%D1%8E%D1%82%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BD-%D0%BB%D0%B0%D0%B9%D0%BA.gif" }} 
        style={styles.imagemintuitivaeamigavel} 
      />

      <Text style={[styles.contador, count >= limit && styles.novolimite]}>
        {count}
      </Text>

      <View style={styles.buttons}>
        <Button
          title="+"
          onPress={() => {
            if (count < limit) setCount(count + 1);
            else Alert.alert("Você chegou ao seu limite", `Limite máximo: ${limit}`);
          }}
        />

        <Button
          title="-"
          onPress={() => count > 0 && setCount(count - 1)}
        />
      </View>

      <Text> Escreva o limite aqui: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={limit.toString()}
        onChangeText={(v) => setLimit(Number(v) || 0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  
  contador: { 
    fontSize: 64, 
    marginBottom: 20 
  },
  
  novolimite: { 
    color: "red" 
  },
  
  buttons: { 
    flexDirection: "row", 
    gap: 10, 
    marginBottom: 20 
  },
  
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: 100,
    textAlign: "center",
    marginTop: 10,
  },
  imagemintuitivaeamigavel: {
    position: "absolute", 
    top: 100,
    left: 100,
    width: 80,
    height: 80,
  },
});