// import React from "react"
import { Box, Image, Text, VStack, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TeacherType } from "../../types";

type TeacherCardProps = {
  teacher: TeacherType;
};

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/teachers/${teacher.id}`);
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
          <Button onClick={viewMore}>View More</Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default TeacherCard;
