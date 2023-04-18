import { InputHTMLAttributes } from "react";
import { Control, RegisterOptions } from 'react-hook-form';
export type IInputAttr = InputHTMLAttributes<HTMLInputElement>;

export interface IAuthenticationProps {
    errorText?: string,
    control?: Control<any>,
    validation?: RegisterOptions,
    onComplete?: any,
    length?: number
}