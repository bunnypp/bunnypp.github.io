import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../layout/Sidebar";
import React, { MutableRefObject } from "react";

type LayoutProps = {
    children: React.ReactNode;
    allRefs: MutableRefObject<HTMLDivElement>[];
}

const backgroundGradient = `radial-gradient(
    circle at 50% 0,
    #cedfd7,
    rgb(255 0 0 / 0%) 70.71%
  ),
  radial-gradient(
    circle at 6.7% 75%,
    #fed6ca,
    rgb(0 0 255 / 0%) 70.71%
  ),
  radial-gradient(
      circle at 93.3% 75%,
      #56c9c5,
      rgb(0 255 0 / 0%) 70.71%
    )`
const Layout = ({ children, allRefs}: LayoutProps) => {
  return (
    <Box width="full" h="100vh">
        <Box width="full" h="100vh" bgGradient={backgroundGradient} zIndex={-1} position={"fixed"}></Box>
        <Box w={{ base: "full", md: "25%" }} zIndex={4}
        h={{ sm: "10vh", md: "100vh"}} 
        p={4} 
        alignItems="center" 
        justifyContent="center"
        position={{base: "relative", md:"fixed"}}>
            <Sidebar allRefs={allRefs}/>
        </Box>
      <Flex direction="column" 
        zIndex={5} p={4} 
        marginLeft={{base: 0, md: "25%" }}
        overflow={"scroll"}
        gap={{base: 5, md: 10}}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;