import { setLocalStorage } from "../Utils/LocalStorege";

export const redirectVerify = (
  redirectVeryfi: boolean,
  auth: any,
  navigate: any,
  key?: any,
  value?: string
) => {
  if (redirectVeryfi) {
    auth.setVerificate(redirectVeryfi);
    setLocalStorage(key, value);
    return navigate("/verification");
  }
  return navigate("/");
};
