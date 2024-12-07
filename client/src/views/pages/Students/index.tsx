// import React from "react"
import { Center, Spinner } from "@chakra-ui/react";
import useStudentItem from "../../../hooks/useStudentItem";

const IndexStudents = () => {
  const { responseData, error, isLoading } = useStudentItem();

  if (isLoading) {
    return (
      <Center h="100vh" margin="auto">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }
  if (error) return <p>Error loading teachers: {error.message}</p>;

  return <div></div>;
};

export default IndexStudents;
