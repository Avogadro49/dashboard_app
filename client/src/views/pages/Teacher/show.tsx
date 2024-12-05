// import React from "react"
import { useEffect, useState } from "react";
import { Box, Container, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router";
import { TeacherType } from "../../../types";
import TeacherCard from "../../../components/TeacherCard/TeacherCard";

const ShowTeachers = () => {
  const [teacher, setTeacher] = useState<TeacherType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const params = useParams();

  const { id } = params;
  const url = [import.meta.env.VITE_API_URL, "teachers", id].join("/");

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

  return (
    <Container maxW="container.md" py={6}>
      <Box display="flex" justifyContent="center">
        {error && <p>Error</p>}
        {loading ? (
          <VStack justify="center" align="center" height="300px">
            <Spinner size="xl" />
          </VStack>
        ) : (
          teacher && (
            <>
              <TeacherCard key={teacher.id} teacher={teacher} />
            </>
          )
        )}
      </Box>
    </Container>
  );
};

export default ShowTeachers;
