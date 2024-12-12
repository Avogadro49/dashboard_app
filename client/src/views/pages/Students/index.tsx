// import React from "react"
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import StudentsCard from "../../../components/StudentsCard/StudentsCard";
import useData from "../../../hooks/useData";
import { StudentType } from "../../../types";

const IndexStudents = () => {
  const { responseData, error, isLoading, deleteItem } =
    useData<StudentType>("students");

  if (isLoading) {
    return (
      <Center h="100vh" margin="auto">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }
  if (error) return <p>Error loading student: {error.message}</p>;

  const handleDelete = (id: string) => {
    deleteItem(id);
  };
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
            <StudentsCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />
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
