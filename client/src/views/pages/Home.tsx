// import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box as="main" flex="1" p={4} bg="gray.100">
      <Text fontSize="lg" fontWeight="semibold">
        Welcome to the Admin Panel!
      </Text>
      <Text mt={2}>
        This is the main content area. Add your dashboard components here.
      </Text>
    </Box>
  );
};

export default Home;
