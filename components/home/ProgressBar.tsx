import { View, ProgressBar, Colors } from "react-native-ui-lib";

export default function ProgressBarComponent() {
  return (
    <View flex useSafeArea>
      <ProgressBar
        style={{ height: 40 }}
        progress={55}
        progressColor={Colors.green30}
      />
    </View>
  );
}
