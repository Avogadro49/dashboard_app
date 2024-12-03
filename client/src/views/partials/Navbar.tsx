import { Flex, Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="gray.900"
      color="white"
      align="center"
      justify="space-between"
      px={4}
      py={3}
      boxShadow="sm"
      // opacity="69%"
    >
      {/* Logo or Title */}
      <Text fontSize="xl"  fontWeight="bold">
        Admin Panel
      </Text>

      {/* Actions or Menu */}
      <Flex align="center" gap={4}>
        <Text  display={{ base: "none", md: "block" }}>Dashboard</Text>
        <Text  display={{ base: "none", md: "block" }}>Settings</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
