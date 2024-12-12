import React from "react";
import { useNavigate } from "react-router-dom";
import { ProfessionType } from "../../types";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

type ProfessionCardType = {
  profession: ProfessionType;
  onDelete: (id: string) => void;
};

const ProfessionsCard: React.FC<ProfessionCardType> = ({
  profession,
  onDelete,
}) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/professions/${profession.id}`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${profession.name}?`
    );
    if (confirmed) {
      onDelete(profession.id);
    }
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
        <Button w="50%" color="red" onClick={handleDelete}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default ProfessionsCard;
