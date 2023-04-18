export const convertPxToRem = (px: number) => {
    return px / 16 + "rem";
}


export const ConvertorStringToNumber = (str: string) => {
    const strConvert = str.replace(/[^0-9]/g, '')
    const convertorNUmber = Number(strConvert)
    return convertorNUmber
}

export const convertHexToRgba = (hex: any, alpha: number) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};
