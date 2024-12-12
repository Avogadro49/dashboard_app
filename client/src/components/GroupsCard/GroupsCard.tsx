import React from "react";
import { GroupType } from "../../types";
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  CardRoot,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

type GroupsCardProps = {
  group: GroupType;
  onDelete: (id: string) => void;
};

const GroupsCard: React.FC<GroupsCardProps> = ({ group, onDelete }) => {
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete group ${group.group_number}?`
    );
    if (confirmed) {
      onDelete(group.id);
    }
  };
  return (
    <Box p={4} display="flex" marginY="auto">
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
          <HStack width="100%" marginTop={1}>
            <Button width="50%">Edit</Button>
            <Button width="50%" color="red" onClick={handleDelete}>
              Delete
            </Button>
          </HStack>
        </CardBody>
      </CardRoot>
    </Box>
  );
};

export default GroupsCard;
