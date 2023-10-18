export interface ILoginIdexProps {
  route?: any;
}

export interface ILogin {
  focusedField: string;
  secondTextInputRef: unknown;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  handleSetFocused: (field: string) => void;
}

export interface ILoginStyle {
  focusedField: string;
}
