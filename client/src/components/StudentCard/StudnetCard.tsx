// import React from "react"

import { Box, Button, Card, HStack, Text, VStack } from "@chakra-ui/react";
import { RiEditLine, RiMailLine } from "react-icons/ri";
import { StudentType } from "../../types";

type StudentCardProps = {
  student: StudentType;
};

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Card.Root
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      overflow="hidden"
      width="100%"
    >
      {/* <Image
        alt={teacher.name}
        src={teacher.avatar}
        maxW="50%"
        // maxH="60%"
        marginLeft="1"
        marginY="1"
        borderRadius={50}
        _hover={{ borderRadius: "0" }}
        cursor="pointer"
        aspectRatio={3 / 4}
        objectFit="cover"
        transition="all 0.3s ease"
      /> */}
      <Box w="100%">
        <Card.Body>
          <Card.Title mb="2">{student.name}</Card.Title>
          <Card.Description>{student.email}</Card.Description>
          {/* <VStack mt="4" alignItems="start">
            {teacher.colleges.map((college) => (
              <HStack>
                <Text textStyle="sm">Teaches at:</Text>
                <Badge size="md" colorPalette="green" key={college.id}>
                  {college.name}
                </Badge>
              </HStack>
            ))}
            {teacher.modules.map((module) => (
              <HStack>
                <Text textStyle="sm">Teaches:</Text>
                <Badge
                  size="md"
                  colorPalette="purple"
                  padding={1}
                  key={module.id}
                >
                  {module.name}
                </Badge>
              </HStack>
            ))}
          </VStack> */}
          <HStack align="start" textStyle="sm">
            <Text fontWeight="light">Phone:</Text>
            <Text alignSelf="center">{student.phone}</Text>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <VStack
            justifyContent="center"
            width="100%"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Button width={{ base: "100%", md: "50%" }}>
              <RiMailLine /> Contact Student
            </Button>
            <Button width={{ base: "100%", md: "50%" }}>
              <RiEditLine /> Edit Student
            </Button>
          </VStack>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default StudentCard;
