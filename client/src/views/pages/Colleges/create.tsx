// import React from "react";
import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collegeSchema } from "../../../schemas";
import { apiRequest } from "../../../utils/apiRequest";

const CollegeForm = () => {
  const navigate = useNavigate();
  type CollegeFormData = z.infer<typeof collegeSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CollegeFormData>({
    resolver: zodResolver(collegeSchema),
  });

  const onSubmit = async (data: CollegeFormData) => {
    try {
      await apiRequest("colleges/", "POST", data);
      navigate("/colleges/index");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Box
      width="80%"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack paddingX={4} mb={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Logo
            </Text>
            <Input
              {...register("logo")}
              type="text"
              placeholder="Paste Logo URL"
            />
            <Text color="red">{errors.logo?.message}</Text>
          </Box>

          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input {...register("name")} type="text" placeholder="Enter name" />
            <Text color="red">{errors.name?.message}</Text>
          </Box>
        </HStack>

        <HStack paddingX={4} mb={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Phone
            </Text>
            <Input
              {...register("phone")}
              type="text"
              placeholder="Enter phone number"
            />
            <Text color="red">{errors.phone?.message}</Text>
          </Box>

          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Email
            </Text>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
            <Text color="red">{errors.email?.message}</Text>
          </Box>
        </HStack>

        <HStack paddingX={4} mb={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Location
            </Text>
            <Input
              {...register("location")}
              type="text"
              placeholder="Enter location "
            />
            <Text color="red">{errors.location?.message}</Text>
          </Box>
        </HStack>

        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CollegeForm;
