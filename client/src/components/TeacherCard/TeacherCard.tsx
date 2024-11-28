// import React from "react"
import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { TeacherType } from "../../types";

type TeacherCardProps = {
  teacher: TeacherType;
};

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      width="250px"
      padding="4"
      backgroundColor="white"
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
        <VStack spaceX={2} align="start">
          <Text fontWeight="bold" fontSize="lg">
            {teacher.email}
          </Text>
          <Text color="gray.500">ID: {teacher.id}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default TeacherCard;
