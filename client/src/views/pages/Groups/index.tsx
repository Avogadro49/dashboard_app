import useGroupItem from "../../../hooks/useGrouopItems";
import {
  Box,
  CardBody,
  CardHeader,
  CardRoot,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

const IndexGroups = () => {
  const { responseData, error, isLoading } = useGroupItem();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading groups: {error.message}</p>;
  if (!responseData) return <p>No data</p>;
  return (
    <Box p={4} display="flex" marginY="auto">
      {responseData.data.map((group) => (
        <CardRoot
          key={group.id}
          marginX={4}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
        >
          <CardHeader>
            <Text fontSize="xl" fontWeight="bold">
              Group {group.group_number}
            </Text>
          </CardHeader>
          <CardBody>
            <Stack paddingX={4}>
              <HStack>
                <Text fontWeight="medium">Group Number:</Text>
                <Text>{group.group_number}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="medium">College ID:</Text>
                <Text>{group.college_id}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="medium">Profession ID:</Text>
                <Text>{group.profession_id}</Text>
              </HStack>
            </Stack>
          </CardBody>
        </CardRoot>
      ))}
    </Box>
  );
};

export default IndexGroups;
