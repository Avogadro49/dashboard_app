import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Container, Spinner, VStack } from "@chakra-ui/react";
import { ProfessionType } from "../../../types";
import ProfessionCard from "../../../components/ProfessionCard/ProfessionCard";

const ShowProfession = () => {
  const [profession, setProfession] = useState<ProfessionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const params = useParams();

  const { id } = params;
  const url = [import.meta.env.VITE_API_URL, "professions", id].join("/");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network error originated");
        }
        const data: ProfessionType = await response.json();

        setProfession(data);
        setError(null);
      } catch (err) {
        if (signal.aborted) {
          console.log("Fetch Aborted");
        } else {
          setProfession(null);
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
          profession && (
            <>
              <ProfessionCard key={profession.id} profession={profession} />
            </>
          )
        )}
      </Box>
    </Container>
  );
};

export default ShowProfession;
