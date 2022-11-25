import { MdLogin } from "react-icons/md";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const PublicNavbar = () => {
  return (
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
        maxW={"container.md"}
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
            <Tooltip hasArrow label={"Sign In"}>
              <Link to={process.env.PUBLIC_URL + "/auth/login"}>
                <IconButton
                  variant={"ghost"}
                  aria-label={"btn-sign-in"}
                  icon={<MdLogin size={20} />}
                />
              </Link>
            </Tooltip>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicNavbar;
