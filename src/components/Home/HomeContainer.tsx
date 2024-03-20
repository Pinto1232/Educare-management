import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import Home from "./Home";

type RootStackParamList = {
  Home: { userId: string };
};

type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

const HomeContainer: React.FC = () => {
  const route = useRoute<HomeRouteProp>();

  const { userId } = route.params;

  return <Home userId={userId} />;
};

export default React.memo(HomeContainer);
