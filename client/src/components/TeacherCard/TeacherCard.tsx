import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiEditLine, RiMailLine } from "react-icons/ri";
import { TeacherType } from "../../types";

type TeacherCardProps = {
  teacher: TeacherType;
};

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
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
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{teacher.name}</Card.Title>
          <Card.Description>{teacher.email}</Card.Description>
          <VStack mt="4" alignItems="start">
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
          </VStack>
          <HStack align="start" textStyle="sm">
            <Text fontWeight="light">Phone:</Text>
            <Text alignSelf="center">{teacher.phone}</Text>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <HStack justify="center">
            <Button colorPalette="teal" variant="solid">
              <RiMailLine /> Contact Teacher
            </Button>
            <Button width="50%">
              <RiEditLine /> Edit Teacher
            </Button>
          </HStack>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default TeacherCard;
