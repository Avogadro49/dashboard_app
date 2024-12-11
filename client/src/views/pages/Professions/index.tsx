import useProfessionItem from "../../../hooks/useProfession";
import { Box, Flex, Text } from "@chakra-ui/react";
import ProfessionsCard from "../../../components/ProfessionsCard/ProfessionsCard";

const IndexProfessions = () => {
  const { responseData, error, isLoading } = useProfessionItem();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading college: {error.message}</p>;

  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Professions
      </Text>
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((profession) => (
            <ProfessionsCard key={profession.id} profession={profession} />
          ))}
        </Flex>
      ) : (
        <Text>No profession available</Text>
      )}
      <Text marginBlock={5}>Total Professions: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexProfessions;
