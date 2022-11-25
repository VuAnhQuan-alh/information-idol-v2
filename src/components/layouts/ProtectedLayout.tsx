import {
  MdShoppingCart,
  MdAnalytics,
  MdHomeFilled,
  MdOutlineChecklist,
} from "react-icons/md";
import {
  As,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Icon,
  Link,
  Text,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import ProtectedNavbar from "components/ProtectedNavbar";
import { Outlet, useLocation } from "react-router-dom";
import { Link as ReactLink } from "react-router-dom";
import type { IconBaseProps, IconType } from "react-icons";
import { FunctionComponent } from "react";

const ProtectedLayout = () => {
  return (
    <Box as={"main"}>
      <ProtectedNavbar />

      <Container maxW={"container.lg"} pt={"60px"} pb={"16px"}>
        <Grid
          templateRows={"1fr 40px"}
          templateColumns={{ base: "1fr", md: "200px 1fr" }}
          h={"calc(100vh - 76px)"}
          gap={2}
        >
          <GridItem
            position={{ base: "fixed", md: "unset" }}
            bottom={{ base: 0, md: "normal" }}
            py={{ base: 0, md: 3 }}
            rowSpan={2}
            colSpan={1}
            zIndex={1}
          >
            <Stack
              alignItems={"start"}
              direction={{ base: "row", md: "column" }}
              fontWeight={600}
              position={{ md: "sticky" }}
              top={{ md: "76px" }}
              bg={{ base: "black.900", md: "none" }}
              backdropFilter={{ base: "blur(20px)", md: "none" }}
              roundedTop={"20px"}
              width={{ base: "calc(100vw - 32px)", md: "auto" }}
            >
              <LinkMenuItem icon={MdHomeFilled} href={"/home"}>
                Home
              </LinkMenuItem>

              <LinkMenuItem icon={MdOutlineChecklist} href={"/todo"}>
                Todo
              </LinkMenuItem>

              <LinkMenuItem icon={MdAnalytics} href={"/analytics"}>
                Analytics
              </LinkMenuItem>

              <LinkMenuItem icon={MdShoppingCart} href={"/orders"}>
                Orders
              </LinkMenuItem>
            </Stack>
          </GridItem>
          <GridItem
            area={"main"}
            colSpan={"auto"}
            rowSpan={{ base: 1, md: "auto" }}
            p={3}
          >
            <Outlet />
          </GridItem>
          <GridItem
            area={"footer"}
            colSpan={"auto"}
            rowSpan={{ base: 1, md: "auto" }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default ProtectedLayout;

// components menu item
interface IMenuItemProps {
  icon: As<IconType> | FunctionComponent<IconBaseProps>;
  href: string;
  children: string;
}
const LinkMenuItem = (props: IMenuItemProps) => {
  const { icon, href, children } = props;
  const { pathname } = useLocation();
  const active = pathname.includes(href);

  return (
    <Link as={ReactLink} to={href} w={"100%"}>
      <Button
        w={"100%"}
        variant={"ghost"}
        color={useColorModeValue(
          active ? "green.500" : "gray.600",
          active ? "blue.500" : "whiteAlpha.600"
        )}
        _hover={{
          md: {
            bg: useColorModeValue("whiteAlpha.500", "whiteAlpha.50"),
            color: useColorModeValue(
              active ? "green.300" : "gray.800",
              active ? "blue.300" : "whiteAlpha.800"
            ),
          },
        }}
        leftIcon={<Icon as={icon} w={5} h={5} />}
      >
        <Text
          w={"100%"}
          align={"left"}
          display={{ base: "none", md: "inline-block" }}
        >
          {children}
        </Text>
      </Button>
    </Link>
  );
};
