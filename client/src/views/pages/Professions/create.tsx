// import React from "react";
import { Box, Input, Button, Text, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { professionSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../../utils/apiRequest";
// import { http } from "../../../services/http";

const ProfessionForm = () => {
  const navigate = useNavigate();

  // Type for form data derived from schema
  type ProfessionFormData = z.infer<typeof professionSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessionFormData>({
    resolver: zodResolver(professionSchema),
  });

  const onSubmit = async (data: ProfessionFormData) => {
    try {
      await apiRequest("professions/", "POST", data);
      navigate("/professions/index");
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
              Code
            </Text>
            <Input {...register("code")} type="text" placeholder="Enter code" />
            <p style={{ color: "red" }}>{errors.code?.message}</p>
          </Box>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Name
            </Text>
            <Input {...register("name")} type="text" placeholder="Enter name" />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </Box>
        </HStack>
        <HStack spaceX={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Description
            </Text>
            <Input
              {...register("description")}
              type="email"
              placeholder="Enter description"
            />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
          </Box>
        </HStack>
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ProfessionForm;
