import { Box, Text, Flex } from "@chakra-ui/react";
import CollegesCard from "../../../components/CollegesCard/CollegesCard";
import useData from "../../../hooks/useData";
import { CollegeType } from "../../../types";

const IndexColleges = () => {
  const { responseData, error, isLoading, deleteItem } =
    useData<CollegeType>("colleges");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading college: {error.message}</p>;
  const handleDelete = (id: string) => {
    deleteItem(id);
  };
  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Colleges
      </Text>
      <img
        src="https://res.cloudinary.com/dcu4dwbcu/image/upload/v1733137576/cooltext471028125677165_q1bba1.gif"
        alt=""
      />
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((college) => (
            <CollegesCard
              key={college.id}
              college={college}
              onDelete={handleDelete}
            />
          ))}
        </Flex>
      ) : (
        <Text>No college available</Text>
      )}
      <Text marginBlock={5}>Total Colleges: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexColleges;
