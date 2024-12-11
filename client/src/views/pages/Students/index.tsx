// import React from "react"
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import useStudentItem from "../../../hooks/useStudentItem";
import StudentsCard from "../../../components/StudentsCard/StudentsCard";

const IndexStudents = () => {
  const { responseData, error, isLoading } = useStudentItem();

  if (isLoading) {
    return (
      <Center h="100vh" margin="auto">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }
  if (error) return <p>Error loading student: {error.message}</p>;

  return (
    <Box padding="4" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="4">
        Students
      </Text>
      <img
        src="https://res.cloudinary.com/dcu4dwbcu/image/upload/v1733846484/cooltext471549793007777_unpy9h.gif"
        alt="Students blaming text"
      />
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4">
          {responseData.data.map((student) => (
            <StudentsCard key={student.id} student={student} />
          ))}
        </Flex>
      ) : (
        <Text>No students available</Text>
      )}
      <Text marginTop={2}>Total Students: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexStudents;
