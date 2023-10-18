import React, { useContext } from "react";

import AuthContext from "@contexts/auth";

import { useNavigation } from "@react-navigation/native";
import { goScreenReset } from "@routes/methodsOfNavigation";

import { IHeaderProps } from "./interfaces";

import * as styled from "./styles";

const Header = (props: IHeaderProps) => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();

    goScreenReset(navigation, "Login");
  };

  return (
    <styled.Container>
      <styled.Content>
        {props.goBack && (
          <styled.WrapperButtonBack {...props}>
            <styled.IconGoBack testID="icon-back" />
          </styled.WrapperButtonBack>
        )}

        <styled.Title testID="title">{props.title}</styled.Title>

        <styled.WrapperButtonLogOut onPress={handleLogout}>
          <styled.IconLogOut testID="icon-logout" />
        </styled.WrapperButtonLogOut>
      </styled.Content>
    </styled.Container>
  );
};

export default Header;
