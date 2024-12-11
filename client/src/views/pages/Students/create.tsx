// import React from "react";
import { Box, Input, Button, Text, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentsSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../../utils/apiRequest";
// import { http } from "../../../services/http";

const StudentForm = () => {
  const navigate = useNavigate();

  // Type for form data derived from schema
  type StudentFormData = z.infer<typeof studentsSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentsSchema),
  });

  const onSubmit = async (data: StudentFormData) => {
    try {
      await apiRequest("students/", "POST", data);
      navigate("/students/index");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack spaceX={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input {...register("name")} type="text" placeholder="Enter Name" />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </Box>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Email
            </Text>
            <Input
              {...register("email")}
              type="text"
              placeholder="Enter Email"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </Box>
        </HStack>
        <HStack spaceX={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Group ID
            </Text>
            <Input
              {...register("group_id")}
              type="text"
              placeholder="Enter group id"
            />
            <p style={{ color: "red" }}>{errors.group_id?.message}</p>
          </Box>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Phone
            </Text>
            <Input
              {...register("phone")}
              type="text"
              placeholder="Enter phone number"
            />
            <p style={{ color: "red" }}>{errors.phone?.message}</p>
          </Box>
        </HStack>
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
