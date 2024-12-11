import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  //   Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiEditLine, RiMailLine } from "react-icons/ri";
import { ModuleType } from "../../types";

type ModuleCardProps = {
  module: ModuleType;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Card.Root
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      overflow="hidden"
      w="100%"
    >
      {/* <Image
        alt={college.name}
        src={college.logo}
        maxW="50%"
        marginX={{ base: "0", md: "auto" }}
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
      <Box w={{ base: "100%", md: "50%" }}>
        <Card.Body>
          <Card.Title mb="2">{module.name}</Card.Title>
          <Card.Description>{module.requirements}</Card.Description>
          <VStack mt="4" alignItems="start">
            {module.teachers.map((teacher) => (
              <HStack>
                <Text textStyle="sm">Teachers:</Text>
                <Badge size="md" colorPalette="green" key={teacher.id}>
                  {teacher.name}
                </Badge>
              </HStack>
            ))}
            {module.professions.map((profession) => (
              <HStack>
                <Text textStyle="sm">Professions:</Text>
                <Badge
                  size="md"
                  colorPalette="purple"
                  padding={1}
                  key={profession.id}
                >
                  {profession.name}
                </Badge>
              </HStack>
            ))}
          </VStack>
          <HStack align="start" textStyle="sm">
            <Text fontWeight="light">Code:</Text>
            <Text alignSelf="center">{module.code}</Text>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <HStack justify="center" width="100%">
            <Button width="50%" variant="solid">
              <RiMailLine /> Test
            </Button>
            <Button width="50%">
              <RiEditLine /> Edit Module
            </Button>
          </HStack>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default ModuleCard;
