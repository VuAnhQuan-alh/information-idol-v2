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
import { LoginParams } from "services/auth";
import useAuth from "hooks/useAuth";
import _ from "lodash";
import wait from "utils/wait";
import { Link as ReactLink } from "react-router-dom";

const LoginPage = () => {
  const [isView, setIsView] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>();

  const onHandleView = () => setIsView(!isView);
  const onHandleSubmit: SubmitHandler<LoginParams> = async (
    data: LoginParams
  ) => {
    try {
      setLoading(true);

      await login(data).finally(async () => {
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
              <FormControl isInvalid={!_.isEmpty(errors.identifier)} mb={2}>
                <Input
                  placeholder={"Enter identifier..."}
                  variant={"filled"}
                  autoComplete={"off"}
                  {...register("identifier", {
                    required: "Identifier is required.",
                  })}
                />
                {!_.isEmpty(errors.identifier) && (
                  <FormErrorMessage>
                    {errors.identifier.message}
                  </FormErrorMessage>
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
                  Login
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
            <Text>Need a account?</Text>
            <Link as={ReactLink} to={"/auth/regis"}>
              SIGN UP
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
                src={process.env.PUBLIC_URL + "/videos/video-login-hero.mp4"}
                type={"video/mp4"}
              />
            </video>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
