import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import Logo from "components/Logo";
import useAuth from "hooks/useAuth";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const ErrorsLayout = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  return (
    <Box as={"main"}>
      <Box
        position={"fixed"}
        as={"nav"}
        w={"100%"}
        bg={useColorModeValue("#ffffff40", "whiteAlpha.50")}
        sx={{ backdropFilter: "blur(10px)" }}
        zIndex={1}
      >
        <Container
          p={"10px 16px"}
          display={"flex"}
          maxW={isAuthenticated ? "container.lg" : "container.md"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"} mr={5}>
            <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
              <Logo />
            </Heading>
          </Flex>

          <Box flex={1} display={"flex"} justifyContent={"end"}>
            <Stack direction={"row"} spacing={2} align={"center"}>
              <ColorModeSwitcher />
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container minH={"calc(100vh - 66px)"} pt={24}>
        {children}
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

export default ErrorsLayout;
