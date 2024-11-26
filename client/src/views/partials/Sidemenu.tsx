// import React from "react";
import {
  Box,
  Link,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Icon,
} from "@chakra-ui/react";
import { FaRegEye, FaPlus } from "react-icons/fa";

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
      <AccordionRoot collapsible defaultValue={["b"]}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.id}>
            <AccordionItemTrigger fontSize="xl">
              {item.title}
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item.links.map((link, index) => (
                <Link
                  display="flex"
                  justifyContent="space-between"
                  key={index}
                  href={link.path}
                >
                  {link.text}
                  <Icon>{link.icon}</Icon>
                </Link>
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
