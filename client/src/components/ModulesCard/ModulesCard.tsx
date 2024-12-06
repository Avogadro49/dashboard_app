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
  //   const deleteModule = async () => {
  //     const confirmed = window.confirm(
  //       `Are you sure you want to delete ${module.name}?`
  //     );
  //     if (!confirmed) return;

  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_API_URL}/modules/${module.id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to delete the module.");
  //       }

  //       toast({
  //         title: "Module deleted.",
  //         description: `The module "${module.name}" was successfully deleted.`,
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });

  //       onDelete(module.id);
  //     } catch (error) {
  //       toast({
  //         title: "Error deleting module.",
  //         description:
  //           error instanceof Error ? error.message : "An unknown error occurred.",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     }
  //   };

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
        <Button w="50%" color="red" onClick={() => onDelete(module.id)}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default ModulesCard;
