// import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Spinner,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import { TeacherType } from "../../../types";
import { useEffect, useState } from "react";
// import { TeacherResponse } from "../../../types";

const ShowTeachers = () => {
  const [teacher, setTeacher] = useState<TeacherType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const params = useParams();

  const { id } = params;
  const url = [import.meta.env.VITE_API_URL, "teachers", id].join("/");
  console.log(url);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network error originated");
        }
        const data: TeacherType = await response.json();

        setTeacher(data);
        console.log(data)
        setError(null);
      } catch (err) {
        if (signal.aborted) {
          console.log("Fetch Aborted");
        } else {
          setTeacher(null);
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  console.log(params.id);
  return (
    <Container maxW="container.md" py={6}>
      <Box>
        {error && <p>Error</p>}
        {/* Teacher Avatar and Name */}
        {loading ? (
          <VStack justify="center" align="center" height="300px">
            <Spinner size="xl" />
          </VStack>
        ) : (
          teacher && (
            <>
              {/* Teacher Avatar and Name */}
              <SimpleGrid columns={[1, 2]} padding={3}>
                <VStack align="start">
                  <Image alt={teacher.name} src={teacher.avatar} />
                  <Heading as="h1" size="xl" mt={4}>
                    {teacher.name}
                  </Heading>
                  <Text color="gray.500">{teacher.email}</Text>
                </VStack>

                {/* Teacher Contact Info */}
                <VStack align="start" paddingX={3}>
                  <Text fontSize="lg" fontWeight="bold">
                    Phone
                  </Text>
                  <Text>{teacher.phone}</Text>
                </VStack>
              </SimpleGrid>
            </>
          )
        )}
      </Box>
    </Container>
  );
};

export default ShowTeachers;
