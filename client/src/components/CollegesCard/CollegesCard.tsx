// import React from "react"
import { Box, Image, Text, Stack, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CollegeType } from "../../types";

type CollegeCardProps = {
  college: CollegeType;
  onDelete: (id: string) => void;
};

const CollegesCard: React.FC<CollegeCardProps> = ({ college, onDelete }) => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate(`/colleges/${college.id}`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${college.name}?`
    );
    if (confirmed) {
      onDelete(college.id);
    }
  };
  return (
    <Box
      w="300px"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="all 0.3s ease"
    >
      {/* College Logo */}
      <Image
        src={college.logo}
        alt={college.name}
        width="100%"
        objectFit="cover"
        aspectRatio="4/3"
      />

      <Stack p={4}>
        {/* College Name */}
        <Text fontSize="xl" fontWeight="bold" color="gray.800">
          {college.name}
        </Text>

        {/* College Location */}
        <Text fontSize="md" color="gray.600">
          {college.location}
        </Text>

        {/* College Email */}
        <Text fontSize="sm" color="blue.500">
          {college.email}
        </Text>

        {/* College Phone */}
        <Text fontSize="sm" color="gray.500">
          {college.phone}
        </Text>
      </Stack>
      <HStack w="100%">
        <Button w="50%" onClick={viewMore}>
          View More
        </Button>
        <Button w="50%" color="red" onClick={handleDelete}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default CollegesCard;
