import { Text, View, Drawer, Colors } from "react-native-ui-lib";
import ProgressBarComponent from "../../components/home/ProgressBar";
import { Image } from "expo-image";
import WellnessCard from "../../components/home/ActivityCard";

export default function HomePage() {
  return (
    <View flex margin-10>
      <ProgressBarComponent />
      <Image
        source="https://www.macerkopf.de/wp-content/uploads/2021/07/iOS15_memojis_31.png?x96528"
        style={{ height: 400, width: "100%", marginTop: "10%" }}
        placeholder={"Hello"}
        contentFit="cover"
      />
    </View>
  );
}
