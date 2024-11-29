// import React from "react";
import { Text, Card, Button, Flex, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    // <Box as="main" flex="1" p={4} bg="gray.100">
    <Flex wrap="wrap" justifyContent="space-between">
      {items.map((item, index) => (
        <Card.Root maxW="sm" overflow="hidden" key={index}>
          <Image aspectRatio={4 / 3} rounded="md" src={item.image} />
          <Card.Body gap="2">
            <Card.Title>{item.name}</Card.Title>
            {/* <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description> */}
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              {item.total}
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">View More</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </Flex>
    //</Box>
  );
};

const items = [
  {
    id: "1",
    name: "Teacher",
    total: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "2",
    name: "College",
    total: 3,
    image:
      "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-beige__0778309_pe758882_s5.jpg?f=xxs",
  },
  {
    id: "3",
    name: "Group",
    total: 2,
    image:
      "https://img.freepik.com/free-photo/chic-mid-century-modern-luxury-aesthetics-living-room-with-gray-velvet-couch-blue-rug_53876-132809.jpg?ga=GA1.1.1828496976.1730115905&semt=ais_hybrid",
  },
  {
    id: "4",
    name: "Professions",
    total: 6,
    image:
      "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?ga=GA1.1.1828496976.1730115905&semt=ais_hybrid",
  },
];

export default Home;
