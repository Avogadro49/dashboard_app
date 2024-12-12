// import React from "react"
import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TeacherType } from "../../types";

type TeachersCardProps = {
  teacher: TeacherType;
  onDelete: (id: string) => void;
};

const TeachersCard: React.FC<TeachersCardProps> = ({ teacher, onDelete }) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/teachers/${teacher.id}`);
  };

  // needs extract
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${teacher.name}?`
    );
    if (confirmed) {
      onDelete(teacher.id);
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
        <Image
          src={teacher.avatar}
          alt={teacher.email}
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          marginBottom="4"
        />
        <VStack spaceX={2}>
          <Text fontWeight="bold" fontSize="lg">
            {teacher.name}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {teacher.email}
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {teacher.phone}
          </Text>
          <Text color="gray.500">ID: {teacher.id}</Text>
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

export default TeachersCard;
