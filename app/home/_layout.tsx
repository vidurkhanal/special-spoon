import { Slot } from "expo-router";
import { Text, View, Avatar } from "react-native-ui-lib";
import { Image } from "expo-image";

const Header = () => {
  return (
    <View height={25} margin-10>
      <View flex-1 row centerV spread>
        <Text text60>Good Morning Gauri!</Text>
        <Avatar label="GT" />
      </View>
    </View>
  );
};

export default function HomeLayout() {
  return (
    <View useSafeArea>
      <Header />
      <Slot />
    </View>
  );
}
