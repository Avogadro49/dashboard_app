import { Box } from "@chakra-ui/react";
import MonthlyChart from "../../../components/MonthlyChart/MonthlyChart";

const Home = () => {
  return (
    <Box as="main" flex="1" p={4} bg="gray.100">
      <MonthlyChart />
    </Box>
  );
};

export default Home;
