// import React from "react";
import { Box, Input, Button, Text, HStack } from "@chakra-ui/react";

const TeacherForm = () => {
  return (
    <Box
      //   maxW="md"
      width="80%"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <form>
        <HStack spaceX={4}>
          {/* Avatar Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Avatar
            </Text>
            <Input type="text" placeholder="Paste Avatar URL" />
          </Box>
          {/* Name Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input type="text" placeholder="Enter name" />
          </Box>
        </HStack>
        <HStack spaceX={4}>
          {/* Email Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Email
            </Text>
            <Input type="email" placeholder="Enter email" />
          </Box>
          {/* Phone Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Phone
            </Text>
            <Input type="number" placeholder="Enter phone number" />
          </Box>
        </HStack>

        {/* Submit Button */}
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TeacherForm;
