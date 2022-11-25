import {
  Box,
  Grid,
  GridItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Box>
      <Grid
        templateRows={"repeat(3, 1fr)"}
        templateColumns={"repeat(3, 1fr)"}
        columnGap={4}
      >
        <GridItem>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={4} spacing={2} />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={4} spacing={2} />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={4} spacing={2} />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={4} spacing={2} />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={6} spacing={2} />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={6} spacing={2} />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={6} spacing={2} />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Box mt={8}>
            <SkeletonCircle size={"10"} />
            <SkeletonText mt={4} noOfLines={6} spacing={2} />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomeScreen;
