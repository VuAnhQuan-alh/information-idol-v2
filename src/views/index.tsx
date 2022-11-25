import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={"80px 1fr 40px"}
      gridTemplateColumns={"230px 1fr"}
      h={"100vh"}
      gap={"1"}
      color={"blackAlpha.700"}
      fontWeight={"bold"}
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header Dashboard
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
