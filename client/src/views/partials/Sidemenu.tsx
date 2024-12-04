// import React from "react";
import {
  Box,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  // Icon,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaRegEye, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router";
import useDetailsItem from "../../hooks/useDetailsItem";
// import { DetailsType } from "../../types";

const Sidemenu = () => {
  const { responseData: items, error, isLoading } = useDetailsItem();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error loading menu items: {error.message}</Box>;
  }

  if (!items) {
    return <Box>No menu items available.</Box>;
  }
  console.log(items);
  return (

    <Box
      as="aside"
      w="250px"
      bg="gray.700"
      color="white"
      p={4}
      display={{ base: "none", md: "block" }}
    >
      {/* <AccordionRoot collapsible defaultValue={["1"]}>
        {responseData.map((item) => (
          <AccordionItem key={item.id} value={item.id.toString()} bg="none">
            <AccordionItemTrigger fontSize="xl" cursor="pointer">
              {item.name} ({item.total})
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item.links.map((link, index) => (
                <NavLink className="router-link" key={index} to={link.path}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    _hover={{ bg: "gray.900" }}
                  >
                    <Text marginY={1}>{link.text}</Text>
                    <Icon marginY={1} />
                  </HStack>
                </NavLink>
              ))}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot> */}
      <AccordionRoot collapsible defaultValue={["1"]}>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id.toString()} bg="none">
            <AccordionItemTrigger fontSize="xl" cursor="pointer">
              {item.name}
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item.links.map((link, index) => (
                <NavLink className="router-link" key={index} to={link.path}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    _hover={{ bg: "gray.900" }}
                  >
                    <Text marginY={1}>{link.text}</Text>
                    {link.text.toLowerCase() === "create" ? <FaPlus /> : null}
                    {link.text.toLowerCase() === "view" ? <FaRegEye /> : null}
                  </HStack>
                </NavLink>
              ))}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Box>
  );
};

// const items = [
//   {
//     id: "1",
//     title: "Teachers",
//     links: [
//       {
//         text: "Create",
//         path: "teachers/create",
//         icon: <FaPlus />,
//       },
//       {
//         text: "View",
//         path: "teachers/index",
//         icon: <FaRegEye />,
//       },
//     ],
//   },
//   {
//     id: "2",
//     title: "Colleges",
//     links: [
//       {
//         text: "Create",
//         path: "colleges/create",
//         icon: <FaPlus />,
//       },
//       {
//         text: "View",
//         path: "colleges/index",
//         icon: <FaRegEye />,
//       },
//     ],
//   },
//   {
//     id: "3",
//     title: "Professions",
//     links: [
//       {
//         text: "Create",
//         path: "professions/create",
//         icon: <FaPlus />,
//       },
//       {
//         text: "View",
//         path: "professions/index",
//         icon: <FaRegEye />,
//       },
//     ],
//   },
//   {
//     id: "4",
//     title: "Modules",
//     links: [
//       {
//         text: "Create",
//         path: "modules/create",
//         icon: <FaPlus />,
//       },
//       {
//         text: "View",
//         path: "modules/index",
//         icon: <FaRegEye />,
//       },
//     ],
//   },
// ];

export default Sidemenu;
