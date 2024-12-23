import { Box, Text, Flex, Center, Spinner } from "@chakra-ui/react";
import TeachersCard from "../../../components/TeachersCard/TeachersCard";
import useData from "../../../hooks/useData";
import { TeacherType } from "../../../types";

const IndexTeachers = () => {
  const { responseData, error, isLoading, deleteItem } =
    useData<TeacherType>("teachers");
  if (isLoading) {
    return (
      <Center h="100vh" margin="auto">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if (error) return <p>Error loading teachers: {error.message}</p>;

  const handleDelete = (id: string) => {
    deleteItem(id);
  };
  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Teachers
      </Text>
      <img
        src="https://res.cloudinary.com/dcu4dwbcu/image/upload/v1732886372/cooltext470876669822471_xvxhmm.gif"
        alt=""
      />
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((teacher) => (
            <TeachersCard
              key={teacher.id}
              teacher={teacher}
              onDelete={handleDelete}
            />
          ))}
        </Flex>
      ) : (
        <Text>No teachers available</Text>
      )}
      <Text marginTop={2}>Total Teachers: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexTeachers;
