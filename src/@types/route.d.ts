import { RouteProp } from "@react-navigation/native"
import { RestaurantCardProps } from "../components/RestaurantCard"

export type RootStackParamList = {
  Home: undefined,
  Restaurant: RestaurantCardProps,
  Basket: undefined,
}

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
