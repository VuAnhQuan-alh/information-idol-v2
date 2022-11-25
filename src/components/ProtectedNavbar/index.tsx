import { MdLogout } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import useAuth from "hooks/useAuth";
import { useRef, useState } from "react";
import Logo from "../Logo";
import Notification from "./Notification";

const ProtectedNavbar = () => {
  const { logout } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    isOpen: isOpenAlert,
    onClose: onCloseAlert,
    onOpen: onOpenAlert,
  } = useDisclosure();

  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const onHandleLoading = () => {
    setLoading(() => false);
  };
  const onHandleLogout = () => {
    setLoading(() => true);
    logout().finally(() => {
      onHandleLoading();
      onCloseAlert();
    });
  };

  return (
    <Box
      position={"fixed"}
      as={"nav"}
      w={"100%"}
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")}
      sx={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        p={"10px 16px"}
        display={"flex"}
        maxW={"container.lg"}
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
          <Stack direction={"row"} spacing={1} align={"center"}>
            <Notification />
            <ColorModeSwitcher />
            <Tooltip hasArrow label={"Sign Out"}>
              <IconButton
                aria-label={"btn-sign-out"}
                variant={"ghost"}
                icon={<MdLogout size={20} />}
                onClick={onOpenAlert}
              />
            </Tooltip>
          </Stack>
        </Box>
      </Container>
      <AlertDialog
        isOpen={isOpenAlert}
        leastDestructiveRef={cancelRef}
        onClose={onCloseAlert}
      >
        <AlertDialogContent>
          <AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>
            Sign out of this program?
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCloseAlert}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              colorScheme={"orange"}
              onClick={onHandleLogout}
              ml={3}
            >
              Logout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default ProtectedNavbar;
