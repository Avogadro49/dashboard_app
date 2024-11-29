import { Box, Text, Flex } from "@chakra-ui/react";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";
import useCollegeItem from "../../../hooks/useCollegeItem";

const IndexColleges = () => {
  const { responseData, error, isLoading } = useCollegeItem();
  console.log(responseData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading college: {error.message}</p>;
  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Colleges
      </Text>
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </Flex>
      ) : (
        <Text>No college available</Text>
      )}
      <Text>Total Colleges: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexColleges;
