import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles.scss";
import Cards from "../Cards";
export default function Tabs({ data }) {
  const [tabValue, setTabValue] = useState("grid");
  // console.log(Array.isArray(data),"uo")
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TabContext value={tabValue}>
          <div>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab label="Grid" value={"grid"} sx={style} />
            </TabList>
          </div>
          <TabPanel value={"grid"}>
            <div className="tab__grid-flex">
              {data?.map((item, i) => (
                <Cards item={item} key={i} delay={(i % 1) * 0.1} />
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}
