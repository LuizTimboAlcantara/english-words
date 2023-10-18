import { CommonActions, NavigationProp } from "@react-navigation/native";

interface MyNavigationProp {
  navigate: NavigationProp<ReactNavigation.RootParamList>["navigate"];
  dispatch: NavigationProp<ReactNavigation.RootParamList>["dispatch"];
  reset: NavigationProp<ReactNavigation.RootParamList>["reset"];
}

export const goBack = (navigation: MyNavigationProp) => {
  return navigation.dispatch(CommonActions.goBack());
};

export const goScreen = (navigation: MyNavigationProp, screen: string) => {
  return navigation.dispatch(
    CommonActions.navigate({
      name: screen,
    })
  );
};

export const goScreenReset = (navigation: any, screen: string) => {
  navigation.reset({
    index: 0,
    routes: [{ name: screen }],
  });
};

export const goScreenWithParams = (
  navigation: MyNavigationProp,
  screen: string,
  parameters: Record<string, any>
) => {
  return navigation.dispatch(
    CommonActions.navigate({
      name: screen,
      params: parameters,
    })
  );
};
