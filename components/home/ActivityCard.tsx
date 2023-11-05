import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Card, Text, Button } from "react-native-ui-lib";

export default function WellnessCard() {
  return (
    <View flex-1 centerH centerV height={50}>
      <Card
        marginV-10
        padding-15
        style={{
          width: "80%",
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOpacity: 1,
          shadowRadius: 10,
          borderRadius: 12,
        }}
      >
        <Text text40 dark10>
          Did you perform your wellness activity today?
        </Text>
        <View marginT-20 row spread>
          <Button label="Yes" link />
          <Button label="No" link />
        </View>
      </Card>
    </View>
  );
}
