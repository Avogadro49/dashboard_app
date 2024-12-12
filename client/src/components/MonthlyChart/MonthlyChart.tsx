import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useDetailsItem from "../../hooks/useDetailsItem";
import { useEffect, useState } from "react";
import { monthlyData } from "../../types";
import { Text } from "@chakra-ui/react";

const MonthlyChart = () => {
  const { responseData: items, error, isLoading } = useDetailsItem();
  const [monthlyData, setMonthlyData] = useState<monthlyData[]>([]);

  useEffect(() => {
    if (items.length > 0) {
      setMonthlyData(items[0].monthlyData);
    }
  }, [items]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <>
      <Text fontSize="40px">Teachers Chart</Text>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MonthlyChart;
