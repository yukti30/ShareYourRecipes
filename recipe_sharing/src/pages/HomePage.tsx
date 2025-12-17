import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <Grid templateAreas={`"header header" "side main"`}>
      <GridItem area={"header"}>
        <Navbar></Navbar>
      </GridItem>
      <GridItem area={"side"} bg={"green"}>
        Side Bar
      </GridItem>
      <GridItem area={"main"} bg={"yellow"}>
        {" "}
        Main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
