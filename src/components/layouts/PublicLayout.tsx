import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import PublicNavbar from "components/PublicNavbar";
import { Link, Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <Box as={"main"}>
      <PublicNavbar />

      <Container maxW={"container.md"} minH={"calc(100vh - 66px)"} pt={24}>
        <Outlet />
      </Container>

      <Box w={"100%"} mt={8} mb={4}>
        <Box w={"100%"} opacity={0.5} textAlign={"center"}>
          <Text
            fontSize={12}
            color={useColorModeValue("gray.900", "whiteAlpha.900")}
          >
            &copy;&nbsp;2022 <Link to={"/auth/login"}>Vũ Anh Quân</Link>, All
            Rights Copy.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
