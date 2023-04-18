import { eng, rus, uzb } from "../../../assets";
import { ImageCustoms } from "../../ImageCustoms";

interface ILangueDatra {
  value: string;
  label: JSX.Element;
}

export const LangueDatra: ILangueDatra[] = [
  {
    value: "uzb",
    label: (
      <div className="selectOptions">
        <ImageCustoms className="selectImg" src={uzb} alt="png" />
        <span className="selectTitle">O'zbek</span>
      </div>
    ),
  },
  {
    value: "rus",
    label: (
      <div className="selectOptions">
        <ImageCustoms className="selectImg" src={rus} alt="png" />
        <span className="selectTitle">Русский</span>
      </div>
    ),
  },
  {
    value: "eng",
    label: (
      <div className="selectOptions">
        <ImageCustoms className="selectImg" src={eng} alt="png" />
        <span className="selectTitle">English</span>
      </div>
    ),
  },
];
