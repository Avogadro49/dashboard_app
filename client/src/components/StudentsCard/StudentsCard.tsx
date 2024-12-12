// import React from "react"
import {
  Box,
  // Image,
  Text,
  VStack,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { StudentType } from "../../types";

type StudentsCardProps = {
  student: StudentType;
  onDelete: (id: string) => void;
};

const StudentsCard: React.FC<StudentsCardProps> = ({ student, onDelete }) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/students/${student.id}`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );
    if (confirmed) {
      onDelete(student.id);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      // width="50%"
      padding="4"
      margin="auto"
      backgroundColor="white"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="all 0.3s ease"
    >
      <Flex direction="column" align="center" justify="center">
        {/* <Image
          src={student.avatar}
          alt={student.email}
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          marginBottom="4"
        /> */}
        <VStack spaceX={2}>
          <Text fontWeight="bold" fontSize="lg">
            {student.name}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {student.email}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {student.phone}
          </Text>
          <Text color="gray.500">ID: {student.id}</Text>
          <HStack width="100%">
            <Button width="50%" onClick={viewMore}>
              View More
            </Button>
            <Button width="50%" color="red" onClick={handleDelete}>
              Delete
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StudentsCard;
