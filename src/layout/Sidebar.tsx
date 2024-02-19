import {Flex, Button, Heading, Center, Icon, Link, HStack, Text } from "@chakra-ui/react";
import { Show, Hide } from '@chakra-ui/react'
import LinkButton from "../components/LinkButton";
import { MutableRefObject } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type SidebarProps = {
    allRefs: MutableRefObject<HTMLDivElement>[];
}


const Sidebar = ({allRefs}: SidebarProps) => {
    const links = [
        {ref: allRefs[0], title: "About"},
        {ref: allRefs[1], title: "Experience"},
        {ref: allRefs[2], title: "Projects"},
        {ref: allRefs[3], title: "Skills"},
        {ref: allRefs[4], title: "Gallery"},
    ]
    return (
        <Flex h={{base: "10vh", md: "100vh"}}
        width="full" 
        gap={{base: 5, md: 10}} 
        direction={{base: "row", md:"column"}} 
        align={"center"}
        my={{base: 0, md: 10, lg: 20}}>
            <Show above='md'>
                <Heading as='h1' 
                    size={{base: "sm", md: "md", lg: "lg"}} 
                    textAlign={"center"} 
                    textColor={"#007970"}>
                        Bunny Phetmunee
                </Heading>
                <Text
                    mx={5}
                    size={{md: "xs", lg: "sm"}} 
                    textAlign={"center"}
                    textColor={"#818b8a"}>
                        CS @ Unimelb | Software Developer @ Meaningware | Co-founder @ Mirror Mirror Technologies
                </Text>
                <HStack gap={5} mb={5}>
                    <Link href="https://linkedin.com/in/bunny-phetmunee-b63950219">
                        <Icon as={FaLinkedin} boxSize={5} _hover={{color: "#fbaaa6"}}
                        />
                    </Link>
                    <Link href="https://github.com/bunnypp">
                        <Icon as={FaGithub} boxSize={5} _hover={{color: "#fbaaa6"}}/>
                    </Link>
                </HStack >
            </Show>
            <Flex direction={{base: "row", md:"column"}} mx="auto" gap={{base: 0, md: 5}}>
                {links.map(link => <LinkButton ref={link.ref} title={link.title}/>)}
            </Flex>
        </Flex>
    );
};

export default Sidebar;