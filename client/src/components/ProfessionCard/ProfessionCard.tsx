import React from "react";
import { useNavigate } from "react-router-dom";
import { ProfessionType } from "../../types";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

type ProfessionCardType = {
  profession: ProfessionType;
};

const ProfessionCard: React.FC<ProfessionCardType> = ({ profession }) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/professions/${profession.id}`);
  };

  return (
    <Box
      w="300px"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="all 0.3s ease"
    >
      {/* College Logo */}
      {/* <Image
        src={college.logo}
        alt={college.name}
        width="100%"
        objectFit="cover"
        aspectRatio="4/3"
      /> */}

      <Stack p={4}>
        <Text fontSize="xl" fontWeight="bold" color="gray.800">
          {profession.name}
        </Text>

        <Text fontSize="md" color="gray.600">
          {profession.code}
        </Text>

        <Text fontSize="sm" color="blue.500">
          {profession.description}
        </Text>
      </Stack>
      <HStack w="100%">
        <Button w="50%" onClick={viewMore}>
          View More
        </Button>
        <Button w="50%" color="red">
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default ProfessionCard;
