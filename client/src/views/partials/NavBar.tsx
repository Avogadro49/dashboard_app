import { Box, Text } from "@chakra-ui/react";

const Navbar () => {
    return (
        <Box as="header" bg="blue.500" color="white" p={4}>
          <Text fontSize="xl" fontWeight="bold">
          Admin Panel 
          </Text>
      </Box>
      );
}