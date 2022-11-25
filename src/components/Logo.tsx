import { Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import useAuth from "hooks/useAuth";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding-right: 10px;
  padding-top: 2px;

  @media (min-width: 768px) {
    svg {
      transform: rotate(-32deg);
    }
    &:hover svg {
      transform: rotate(0deg);
    }
  }
`;

const Logo = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Link to={"/"}>
      <LogoBox>
        <Icon
          as={MdPets}
          w={7}
          h={7}
          color={useColorModeValue("black", "whiteAlpha")}
        />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight={"bold"}
          ml={3}
        >
          {isAuthenticated ? "Vũ Anh Quân" : "IDOL"}
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
