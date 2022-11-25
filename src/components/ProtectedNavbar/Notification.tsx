/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  MdNotifications,
  MdNotificationsActive,
  MdNotificationsOff,
} from "react-icons/md";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const Notification = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const variant = useBreakpointValue<string>(
    {
      base: "bottom",
      md: "right",
    },
    { ssr: false, fallback: "md" }
  );

  return (
    <React.Fragment>
      <IconButton
        aria-label="btn-notification"
        icon={<MdNotifications size={20} />}
        variant={"ghost"}
        onClick={onOpen}
      />
      <Drawer
        size={{ base: "xs", lg: "sm" }}
        isOpen={isOpen}
        // @ts-ignore
        placement={variant}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notification's</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default Notification;
