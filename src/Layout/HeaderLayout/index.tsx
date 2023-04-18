import { Header } from "antd/lib/layout/layout";
import * as React from "react";
import { useLocation } from "react-router-dom";
import StyledHeader from "./Style";
import { Htag } from "../../Components/Htag";
import SelectCustumsAntd from "../../Components/FormElements/SelectCustumsAntd";
import { PathPages } from "../../FakerData/FakeTitlelists";

export default function HeaderLayout() {
  const location = useLocation();
  React.useEffect(() => {}, [location]);
  return (
    <StyledHeader>
      <Header>
        <Htag tag="h1" className="titleLayout">
          {PathPages.map((item: any) => (
            <div key={item.key}>
              {item.path === location.pathname ? item.title : ""}
            </div>
          ))}
        </Htag>
        <SelectCustumsAntd />
      </Header>
    </StyledHeader>
  );
}
