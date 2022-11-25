import {
  Container,
  Divider,
  Heading,
  Text,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const onHandleCallback = () => {
    navigate(-1);
  };

  return (
    <Container textAlign={"center"}>
      <Heading as={"h1"}>Not Found</Heading>
      <Text>_This page is not found_</Text>
      <Divider mt={4} mb={10} />
      <VStack gap={10}>
        <Button
          onClick={onHandleCallback}
          color={useColorModeValue("green.500", "blue.500")}
        >
          Callback Page
        </Button>
        <video loop autoPlay style={{ borderRadius: 10 }}>
          <source
            src={process.env.PUBLIC_URL + "/videos/video-not-hero.mp4"}
            type={"video/mp4"}
          />
        </video>
      </VStack>
    </Container>
  );
};

export default NotFound;
