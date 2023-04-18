import { setLocalStorage } from "../Utils/LocalStorege"

export const redireactAdmin = (redirectVeryfi?: boolean, auth?: any, navigate?: any, key?: any, value?: any) => {
    if (redirectVeryfi) {
        auth.setAuthAdmin(redirectVeryfi)
        setLocalStorage(key, value)
        return navigate('/admin')
    }
    return navigate('/')
}



