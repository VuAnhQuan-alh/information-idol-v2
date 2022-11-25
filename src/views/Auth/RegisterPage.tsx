import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { useState } from "react";
import { RegisParams } from "services/auth";
import useAuth from "hooks/useAuth";
import _ from "lodash";
import wait from "utils/wait";
import { Link as ReactLink } from "react-router-dom";
import regex from "utils/regex";

const RegisPage = () => {
  const [isView, setIsView] = useState(false);
  const [loading, setLoading] = useState(false);
  const { regis } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisParams>();

  const onHandleView = () => setIsView(!isView);
  const onHandleSubmit: SubmitHandler<RegisParams> = async (
    data: RegisParams
  ) => {
    try {
      setLoading(true);

      await regis(data).finally(async () => {
        await wait(2000).finally(() => setLoading(false));
      });
    } catch (error) {}
  };

  const onHandleError: SubmitErrorHandler<any> = (error: any) => {
    console.log(error);
  };

  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        marginTop={{ md: 32 }}
      >
        <Box marginRight={{ md: 4 }}>
          <Heading textAlign={"center"}>Information IDOL</Heading>
          <Box maxW={350} w={"100%"} my={4} mx={"auto"}>
            <form onSubmit={handleSubmit(onHandleSubmit, onHandleError)}>
              <FormControl isInvalid={!_.isEmpty(errors.email)} mb={2}>
                <Input
                  placeholder={"Enter email..."}
                  variant={"filled"}
                  autoComplete={"off"}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: regex.email,
                      message: "Email invalidate.",
                    },
                  })}
                />
                {!_.isEmpty(errors.email) && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!_.isEmpty(errors.username)} mb={2}>
                <Input
                  placeholder={"Enter username..."}
                  variant={"filled"}
                  autoComplete={"off"}
                  {...register("username", {
                    required: "Username is required.",
                  })}
                />
                {!_.isEmpty(errors.username) && (
                  <FormErrorMessage>{errors.username.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!_.isEmpty(errors.password)} mb={6}>
                <InputGroup>
                  <Input
                    placeholder={"Enter password..."}
                    variant={"filled"}
                    type={isView ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 6,
                        message: "Password longer than 5 characters.",
                      },
                      maxLength: {
                        value: 18,
                        message: "Password shorter than 19 characters.",
                      },
                    })}
                  />
                  <InputRightElement
                    onClick={onHandleView}
                    cursor={"pointer"}
                    children={isView ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputGroup>
                {!_.isEmpty(errors.password) && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <Button type={"submit"} isLoading={loading} width={"100%"}>
                  Register
                </Button>
              </FormControl>
            </form>
          </Box>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            mt={6}
            color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
          >
            <Text>Already a user?</Text>
            <Link as={ReactLink} to={"/auth/login"}>
              SIGN IN
            </Link>
          </Stack>
        </Box>
        <Box flex={1}>
          <Stack
            maxW={{ base: 450, md: "auto" }}
            margin={{ base: "36px auto 0px", md: 0 }}
          >
            <video loop autoPlay style={{ borderRadius: 10 }}>
              <source
                src={process.env.PUBLIC_URL + "/videos/video-regis-hero.mp4"}
                type={"video/mp4"}
              />
            </video>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RegisPage;
