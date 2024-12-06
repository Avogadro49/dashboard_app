// import React from "react";
import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { moduleSchema } from "../../../schemas";
import { apiRequest } from "../../../utils/apiRequest";

const ModuleForm = () => {
  const navigate = useNavigate();
  type ModuleFormData = z.infer<typeof moduleSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModuleFormData>({
    resolver: zodResolver(moduleSchema),
  });

  const onSubmit = async (data: ModuleFormData) => {
    try {
      await apiRequest("modules/", "POST", data);
      navigate("/modules/index");
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
              Name
            </Text>
            <Input {...register("name")} type="text" placeholder="Enter name" />
            <Text color="red">{errors.name?.message}</Text>
          </Box>
        </HStack>

        <HStack paddingX={4} mb={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Requirements
            </Text>
            <Input
              {...register("requirements")}
              type="text"
              placeholder="Requirements..."
            />
            <Text color="red">{errors.requirements?.message}</Text>
          </Box>

          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Code
            </Text>
            <Input
              {...register("code")}
              type="number"
              placeholder="Enter code"
            />
            <Text color="red">{errors.code?.message}</Text>
          </Box>
        </HStack>
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ModuleForm;
