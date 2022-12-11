import { NavigationActions } from "react-navigation";
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};
export const navigate = (routeName, params) => {
  // RouteName == signup,sinngin , toate alea
  //paramas inf that we want to pass to the screen that we about to show
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
