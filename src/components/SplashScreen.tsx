import { Box, CircularProgress, Text } from "@chakra-ui/react";

const SplashScreen = () => {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text marginBottom={4} fontSize={"2xl"}>
        Information ALH
      </Text>
      <CircularProgress isIndeterminate color={"green.300"} />
    </Box>
  );
};

export default SplashScreen;
