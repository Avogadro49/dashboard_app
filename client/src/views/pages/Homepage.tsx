import { Flex } from "@chakra-ui/react";
import NavBar from "../partials/NavBar";
function Homepage() {
  return (
    <Flex direction="column" h="100vh" w="100%">
      {/* Navbar */}
      <NavBar />
      {/* <Box as="header" bg="blue.500" color="white" p={4}>
        <Text fontSize="xl" fontWeight="bold">
          Admin Panel
        </Text>
        import { HStack, Text,Box } from "@chakra-ui/react";
 
export default NavBar

      </Box> */}
      {/* Body */}
      <Flex flex="1">
        {/* Side Menu */}
        {/* <Box
          as="aside"
          w="250px"
          bg="gray.700"
          color="white"
          p={4}
          display={{ base: "none", md: "block" }} // Responsive: Hide on small screens
        >
          <Text mb={2}>Dashboard</Text>
          <Text mb={2}>Users</Text>
          <Text mb={2}>Settings</Text>
        </Box> */}

        {/* Main Content */}
        {/* <Box as="main" flex="1" p={4} bg="gray.100">
          <Text fontSize="lg" fontWeight="semibold">
            Welcome to the Admin Panel!
          </Text>
          <Text mt={2}>
            This is the main content area. Add your dashboard components here.
          </Text>
        </Box> */}
      </Flex>
    </Flex>
  );
}

export default Homepage;
