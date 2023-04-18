import React from "react";
import Input from "react-verification-input";

import { IAuthenticationProps, IInputAttr } from "./Authentication.props";
import VerificateStyle from "./Style";
import { Controller } from "react-hook-form";

const VerificationInput: React.FC<IAuthenticationProps & IInputAttr> = ({
  errorText,
  control,
  validation,
  name = "",
  onComplete,
  length = 6,
  ...props
}) => {
  const handleChange = (e: any, val: string, onChange: any) => {
    if (val.length <= length) onChange(e);
    if (val.length === length && onComplete) onComplete();
  };
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <VerificateStyle className="verification-input" error={Boolean(error)}>
          <Input
            validChars="0-9"
            length={length}
            placeholder="_"
            value={value}
            onChange={(e) => handleChange(e, value, onChange)}
            onBlur={onBlur}
            ref={ref}
            autoFocus
            inputProps={{
              type: "tel",
              name: name,
              autoComplete: "off",
              ...props,
            }}
          />
        </VerificateStyle>
      )}
      defaultValue=""
      name={name}
      control={control}
      rules={{
        validate: (val) => val.length >= length || "validation.code_min",
        ...validation,
      }}
    />
  );
};

export default VerificationInput;
