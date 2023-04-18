import { toast } from "react-toastify";

// ===== ValidateErrorCode ====  Sigin page -  using ===========
export const ValidateErrorCode = (codeError: number | any) => {
    switch (codeError.code) {
        case 11003: // if user not found
            toast.error(codeError.message)
            break;
        case 20003: // if user not found
            toast.error(codeError.message)
            break;
        case 20005: // if password error
            toast.error(codeError.message)
            break;
        default: console.log(codeError.message)
    }
}


