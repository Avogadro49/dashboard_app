// import React from "react";
import {
  Box,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Icon,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaRegEye, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router";

const Sidemenu = () => {
  return (
    <Box
      as="aside"
      w="250px"
      bg="gray.700"
      color="white"
      p={4}
      display={{ base: "none", md: "block" }}
    >
      <AccordionRoot collapsible defaultValue={["1"]}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.id} bg="none">
            <AccordionItemTrigger fontSize="xl" cursor="pointer">
              {item.title}
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item.links.map((link, index) => (
                <NavLink
                  className={["router-link"].join(" ")}
                  key={index}
                  to={link.path}
                >
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    _hover={{ bg: "gray.900" }}
                  >
                    <Text marginY={1}>{link.text}</Text>
                    <Icon marginY={1}>{link.icon}</Icon>
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

const items = [
  {
    id: "1",
    title: "Teachers",
    links: [
      {
        text: "Create",
        path: "teachers/create",
        icon: <FaPlus />,
      },
      {
        text: "View",
        path: "teachers/index",
        icon: <FaRegEye />,
      },
    ],
  },
  {
    id: "2",
    title: "Colleges",
    links: [
      {
        text: "Create",
        path: "colleges/create",
        icon: <FaPlus />,
      },
      {
        text: "View",
        path: "colleges/index",
        icon: <FaRegEye />,
      },
    ],
  },
  {
    id: "3",
    title: "Professions",
    links: [
      {
        text: "Create",
        path: "professions/create",
        icon: <FaPlus />,
      },
      {
        text: "View",
        path: "professions/index",
        icon: <FaRegEye />,
      },
    ],
  },
  {
    id: "4",
    title: "Modules",
    links: [
      {
        text: "Create",
        path: "modules/create",
        icon: <FaPlus />,
      },
      {
        text: "View",
        path: "modules/index",
        icon: <FaRegEye />,
      },
    ],
  },
];

export default Sidemenu;
