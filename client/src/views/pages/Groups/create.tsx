import { Box, Input, Text, HStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { groupSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../../utils/apiRequest";

const GroupForm = () => {
  const navigate = useNavigate();

  // Type for form data derived from schema
  type GroupFormData = z.infer<typeof groupSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupFormData>({
    resolver: zodResolver(groupSchema),
  });

  const onSubmit = async (data: GroupFormData) => {
    try {
      await apiRequest("groups/", "POST", data);
      navigate("/groups/index");
      console.log(data);
    } catch (error) {
      console.log(data);

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
        <HStack spaceX={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Group Number
            </Text>
            <Input
              {...register("group_number")}
              type="text"
              placeholder="Enter group number"
            />
            <p style={{ color: "red" }}>{errors.group_number?.message}</p>
          </Box>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              College
            </Text>
            <Input
              {...register("college_id")}
              type="text"
              placeholder="Enter college ID"
            />
            <p style={{ color: "red" }}>{errors.college_id?.message}</p>
          </Box>
        </HStack>
        <HStack spaceX={4}>
          <Box width="100%">
            <Text mb={1} fontWeight="bold">
              Profession
            </Text>
            <Input
              {...register("profession_id")}
              type="text"
              placeholder="Enter profession ID"
            />
            <p style={{ color: "red" }}>{errors.profession_id?.message}</p>
          </Box>
        </HStack>
        <Button marginY={4} type="submit" colorScheme="blue" size="lg" w="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default GroupForm;
