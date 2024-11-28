import { Box, Text, Flex } from "@chakra-ui/react";
import TeacherCard from "../../../components/TeacherCard/TeacherCard";
import useTeacherItem from "../../../hooks/useTeacherItem";
// import { TeacherType } from "../../../types";

const IndexTeachers = () => {
  const { responseData, error, isLoading } = useTeacherItem();
  // const { data } = responseData as {
  //   data: TeacherType[];
  // };
  console.log(responseData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading teachers: {error.message}</p>;
  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Teachers
      </Text>
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </Flex>
      ) : (
        <Text>No teachers available</Text>
      )}
      <Text>Total Teachers: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexTeachers;
