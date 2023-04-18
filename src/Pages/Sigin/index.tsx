import React from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";
import { ISignInForm } from "./Sign.props";
import StyledSigIn, { LoginContainer } from "./Style";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";
import { useApiMutation } from "../../Hooks/useApi";
import { LOGIN } from "../../Constants/methods";
import { ConvertorStringToNumber } from "../../Settings";
import { API_SESSION, USERID_SESSION } from "../../Constants/others";
import { parseApiSession } from "../../Utils/ParseApiSession";
import { ValidateErrorCode } from "../../Utils/ValidateApi";
import { ImageCustoms } from "../../Components/ImageCustoms";
import { logoNew, logoPosition } from "../../assets";
import { numbers, passwordValidation } from "../../Settings/Validate";
import { TextField } from "@mui/material";
import { PositionLOGOBG } from "../Style";
import { LoadingButton } from "@mui/lab";
import { redirectVerify } from "../../RedirectRoute/RedirectVerify";
import { redireactAdmin } from "../../RedirectRoute/RedireactAdmin";
import { useAuth } from "../../Context/authContex";
function SiginPage() {
  // authContex - redux, navigate
  const auth = useAuth();
  const navigate = useNavigate();

  // UseForm
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  // Api cols
  const { mutate, isLoading } = useApiMutation(LOGIN);

  const onSubmit: SubmitHandler<ISignInForm> = (data: ISignInForm) => {
    const { number, password } = data;

    mutate(
      {
        phone: ConvertorStringToNumber(number),
        password: password,
      },
      {
        onSuccess: ({ headers, data }) => {
          const { result } = data;
          const session = headers[API_SESSION];
          const parsed = parseApiSession(session);
          if (parsed?.status === "active") {
            redireactAdmin(
              true,
              auth,
              navigate,
              API_SESSION,
              headers[API_SESSION]
            );
          } else {
            redirectVerify(
              true,
              auth,
              navigate,
              USERID_SESSION,
              result.user_id
            );
          }
        },
        onError: ({ error }) => {
          ValidateErrorCode(error);
          console.log(error);
        },
      }
    );
  };

  return (
    <StyledSigIn>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo__Center">
            <ImageCustoms src={logoNew} alt="png" />
          </div>
          <Controller
            control={control}
            name="number"
            rules={numbers}
            render={({ field }) => (
              <MuiTelInput
                defaultCountry={"UZ"}
                value={field.value}
                onChange={(e: any) => field.onChange(e)}
                error={!!errors?.number?.message}
                helperText={errors?.number?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                label={"Пароль"}
                onChange={(e: any) => field.onChange(e)}
                value={field.value || ""}
                fullWidth={true}
                size="small"
                margin="normal"
                type="password"
                className="auth-form__input"
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
              />
            )}
          />
          <LoadingButton
            loading={isLoading}
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2,
            }}
          >
            {"Войти"}
          </LoadingButton>
        </form>
      </LoginContainer>
      <PositionLOGOBG>
        <ImageCustoms src={logoPosition} alt="png" />
      </PositionLOGOBG>
    </StyledSigIn>
  );
}
export default SiginPage;
