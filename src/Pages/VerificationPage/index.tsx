import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import VerificationStyled, { RightContainerWhite } from "./Style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IFormData } from "./Verification.props";
import { useApiMutation } from "../../Hooks/useApi";
import { ADMIN_GOOGLE } from "../../Constants/methods";
import { ISAUTH_SESSION } from "../../Constants/others";
import { redireactAdmin } from "../../RedirectRoute/RedireactAdmin";
import { TagsTitles } from "../../Components/TagsTitles";
import VerificationInput from "../../Components/AuthenticationInputs";
import { PositionLOGOBG } from "../Style";
import { logoPosition } from "../../assets";
import { ImageCustoms } from "../../Components/ImageCustoms";
import { useAuth } from "../../Context/authContex";

function Verification() {
  // authContex - redux, navigate
  const auth = useAuth();
  const navigate = useNavigate();
  // control form
  const { control, handleSubmit } = useForm<IFormData>();

  //Post Response
  const { mutate } = useApiMutation(ADMIN_GOOGLE);

  // to enter platform

  const submit = (data: IFormData) => {
    const formData = { ...data };
    mutate(formData, {
      onSuccess: () => {
        redireactAdmin(true, auth, navigate, ISAUTH_SESSION, true);
      },
      onError: ({ error }) => {
        if (error.code === 20002) toast.error(error?.message);
        else toast.error(error?.message);
      },
    });
  };

  return (
    <VerificationStyled>
      <RightContainerWhite>
        <TagsTitles tag="h2">{"Верификация"}</TagsTitles>
        <form onSubmit={handleSubmit(submit)}>
          <VerificationInput name="code" control={control} />
          <Button htmlType="submit" type="primary">
            {"Подтвердить"}
          </Button>
        </form>
        <TagsTitles tag="p">{"Пожалуста выведи пин код"}</TagsTitles>
      </RightContainerWhite>
      <PositionLOGOBG>
        <ImageCustoms src={logoPosition} alt="png" />
      </PositionLOGOBG>
    </VerificationStyled>
  );
}
export default Verification;
