import GroupsCard from "../../../components/GroupsCard/GroupsCard";
import { Box, Flex, Text } from "@chakra-ui/react";
// import useGroupItem from "../../../hooks/useGrouopItems";
import useData from "../../../hooks/useData";
import { GroupType } from "../../../types";

const IndexGroups = () => {
  const { responseData, error, isLoading, deleteItem } =
    useData<GroupType>("groups");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading groups: {error.message}</p>;
  if (!responseData) return <p>No data</p>;
  const handleDelete = (id: string) => {
    deleteItem(id);
  };
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {responseData && responseData.data.length > 0 ? (
        <Flex direction="row" wrap="wrap" gap="4" width="100%">
          {responseData.data.map((group) => (
            <GroupsCard key={group.id} group={group} onDelete={handleDelete} />
          ))}
        </Flex>
      ) : (
        <Text color="gray.500" fontSize="lg" textAlign="center" mt={4}>
          No groups available.
        </Text>
      )}
      <Text marginTop={2}>Total Groups: {responseData?.total}</Text>
    </Box>
  );
};

export default IndexGroups;
