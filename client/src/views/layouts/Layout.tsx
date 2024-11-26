// import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../partials/Navbar";
import Sidemenu from "../partials/Sidemenu";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* Navbar */}
      <Navbar />
      <Flex flex="1">
        {/* Side Menu */}
        <Sidemenu />
        {/* Main Content */}
        <Home />
      </Flex>
    </Flex>
  );
};

export default Layout;
