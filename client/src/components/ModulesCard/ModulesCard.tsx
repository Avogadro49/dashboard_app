import React from "react";
import { useNavigate } from "react-router-dom";
import { ModuleType } from "../../types";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

type ModuleCardType = {
  module: ModuleType;
  onDelete: (id: string) => void;
};

const ModulesCard: React.FC<ModuleCardType> = ({ module, onDelete }) => {
  const navigate = useNavigate();
  //   const toast = useToast();

  const viewMore = () => {
    navigate(`/modules/${module.id}`);
  };

  // needs extract
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${module.name}?`
    );
    if (confirmed) {
      onDelete(module.id);
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
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
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
          {module.name}
        </Text>

        <Text fontSize="md" color="gray.600">
          {module.requirements}
        </Text>

        <Text fontSize="sm" color="blue.500">
          {module.code}
        </Text>
      </Stack>
      <HStack w="100%" padding={2}>
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

export default ModulesCard;
