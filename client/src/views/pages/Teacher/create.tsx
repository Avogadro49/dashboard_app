// import React from "react";
import { Box, Input, Button, Text, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { teacherSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
// import { http } from "../../../services/http";

const TeacherForm = () => {
  const navigate = useNavigate();
  // Type for form data derived from schema
  type TeacherFormData = z.infer<typeof teacherSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),
  });

  const onSubmit = async (data: TeacherFormData) => {
    try {
      const response = await fetch(
        [import.meta.env.VITE_API_URL, "teachers/"].join("/"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigate('/teachers/index')

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
          {/* Avatar Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Avatar
            </Text>
            <Input
              {...register("avatar")}
              type="text"
              placeholder="Paste Avatar URL"
            />
            <p style={{ color: "red" }}>{errors.avatar?.message}</p>
          </Box>
          {/* Name Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input {...register("name")} type="text" placeholder="Enter name" />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </Box>
        </HStack>
        <HStack spaceX={4}>
          {/* Email Field */}
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Email
            </Text>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </Box>
          {/* Phone Field */}
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

        {/* Submit Button */}
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TeacherForm;
