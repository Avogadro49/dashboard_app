// import React from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import useData from "../../../hooks/useData";
import { ModuleType } from "../../../types";
import ModulesCard from "../../../components/ModulesCard/ModulesCard";

const IndexModules = () => {
  const { responseData, error, isLoading, deleteItem } =
    useData<ModuleType>("modules");

  if (isLoading) {
    return (
      <Center h="100vh" margin="auto">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if (error) return <p>Error loading modules: {error.message}</p>;

  const handleDelete = (id: string) => {
    deleteItem(id);
  };

  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Modules
      </Text>
      <img
        src="https://res.cloudinary.com/dcu4dwbcu/image/upload/v1733471233/Dashboard_app/addons/mvwpf9dhxurkjra17tbi.gif"
        alt=""
      />
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((module) => (
            <ModulesCard
              key={module.id}
              module={module}
              onDelete={handleDelete}
            />
          ))}
        </Flex>
      ) : (
        <Text>No modules available</Text>
      )}
      <Text marginTop={2}>Total Modules: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexModules;
