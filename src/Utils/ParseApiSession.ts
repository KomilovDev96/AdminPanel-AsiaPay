import moment from "moment";

export const parseApiSession = (session: string | null | undefined): void | any => {
    if (session) {
        const arr = session.split(";");
        if (arr.length === 3) {
            if (["notActive", "active"].includes(arr[1].trim()) && moment(arr[2]).isValid()) {
                return { status: arr[1].trim(), date: arr[2].trim() };
            } else return null;
        }
    } else return null;
};