import React from "react";
import { View, Colors } from "react-native-ui-lib";

export default function SegmentedProgressBar() {
  const segmentWidth = 50; // Adjust the width of each segment
  const segmentCount = 6;  // Adjust the number of segments
  const progress = 4;      // Adjust the number of filled segments

  return (
    <View flex centerH useSafeArea>
      <View
      marginT-15
        style={{
          flexDirection: "row",
          height: 20,
          backgroundColor: Colors.white,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {[...Array(segmentCount)].map((_, index) => (
          <View
            key={index}
            style={{
              width: segmentWidth,
              height: "100%",
              backgroundColor: index < progress ? Colors.green30 : "transparent",
              borderRightWidth: 3,
              borderColor: Colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
}
