// import React from "react"

import { Box, Button, Card, HStack, Text } from "@chakra-ui/react";
import { RiEditLine, RiMailLine } from "react-icons/ri";
import { ProfessionType } from "../../types";

type ProfessionCardProps = {
  profession: ProfessionType;
};

const ProfessionCard: React.FC<ProfessionCardProps> = ({ profession }) => {
  return (
    <Card.Root
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      overflow="hidden"
      w="100%"
    >
      {/* <Image
          alt={profession.name}
          src={profession.logo}
          maxW="50%"
          marginX={{ base: "0", md: "auto" }}
          // maxH="60%"
          marginLeft="1"
          marginY="1"
          borderRadius={50}
          _hover={{ borderRadius: "0" }}
          cursor="pointer"
          aspectRatio={3 / 4}
          objectFit="cover"
          transition="all 0.3s ease"
        /> */}
      <Box>
        <Card.Body>
          <Card.Title mb="2">{profession.name}</Card.Title>
          <Card.Description>{profession.description}</Card.Description>
          <HStack align="start" textStyle="sm">
            <Text fontWeight="light">Code:</Text>
            <Text alignSelf="center">{profession.code}</Text>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <HStack justify="center">
            <Button width="50%" variant="solid">
              <RiMailLine /> Test
            </Button>
            <Button width="50%">
              <RiEditLine /> Edit Profession
            </Button>
          </HStack>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default ProfessionCard;
