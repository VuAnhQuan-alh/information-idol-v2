import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Text,
} from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";

interface Breadcrumbs {
  text: string;
  link: string;
}
interface Props {
  title: string;
  home?: boolean;
  breadcrumbs?: Breadcrumbs[];
}

const PageBreadcrumbs = (props: Props) => {
  const { home = true, title, breadcrumbs = [] } = props;

  return (
    <Box fontWeight={"bold"} color={"whiteAlpha.500"}>
      <Breadcrumb spacing={2} separator={<MdNavigateNext color={"gray.500"} />}>
        {home && (
          <BreadcrumbItem>
            <BreadcrumbLink as={ReactLink} to={"/home"}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink as={ReactLink} to={item.link}>
              {item.text}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem>
          <Text>{title}</Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider mt={2} mb={4} />
    </Box>
  );
};

export default PageBreadcrumbs;
