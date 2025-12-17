import { Box, HStack, Text } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import SearchInput from "./SearchInput";
const Navbar = () => {
  const storedData = localStorage.getItem("user");
  const name = storedData ? JSON.parse(storedData).name : "";

  return (
    <HStack>
      <Text>Welcome {name}</Text>
      <SearchInput></SearchInput>
      <Box>
        <Text>My Recipes</Text>
        <CiViewList></CiViewList>
      </Box>
      <Box>
        <Text>Add</Text>
        <IoIosAddCircleOutline></IoIosAddCircleOutline>
      </Box>
      <Box>
        <Text>Logout</Text>
        <AiOutlineLogout></AiOutlineLogout>
      </Box>
    </HStack>
  );
};

export default Navbar;
