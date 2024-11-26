import { Flex, Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="blue.500"
      color="white"
      align="center"
      justify="space-between"
      px={4}
      py={3}
      boxShadow="sm"
    >
      {/* Logo or Title */}
      <Text fontSize="xl" fontWeight="bold">
        Admin Panel
      </Text>

      {/* Actions or Menu */}
      <Flex align="center" gap={4}>
        <Text display={{ base: "none", md: "block" }}>Dashboard</Text>
        <Text display={{ base: "none", md: "block" }}>Settings</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
