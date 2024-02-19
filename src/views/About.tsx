import { Flex, Text, Image, VStack, Heading, Show, HStack, Icon, Link} from "@chakra-ui/react"
import { MutableRefObject } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type AboutProps = {
    ref?: MutableRefObject<HTMLDivElement>;
}

const About = ({ref}: AboutProps) => {
    return (
        <Flex ref={ref} direction="column" p={{base: 0, md: 5}} gap={{base: 5, md: 10}}>
            <Show below='md'>
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
                <HStack gap={5} mb={5} alignSelf="center">
                    <Link href="https://linkedin.com/in/bunny-phetmunee-b63950219">
                        <Icon as={FaLinkedin} boxSize={5} _hover={{color: "#fbaaa6"}}/>
                    </Link>
                    <Link href="https://github.com/bunnypp">
                        <Icon as={FaGithub} boxSize={5} _hover={{color: "#fbaaa6"}}/>
                    </Link>
                </HStack >
            </Show>
            <Heading as='h1' 
                size={{base: "sm", md: "md", lg: "lg"}} 
                alignSelf={{base: "center", md:"normal"}}>
                    About Me
            </Heading>
            <Flex direction={{base: "column", md:"row"}} 
                align="center" 
                gap={{base: 5, md: 10}} 
                px={{base: 0, md: 5}}>
                <Image borderRadius='full' 
                    objectFit='cover' 
                    boxSize={{base: "100px", sm: "100px", md: "150px", lg: "200px"}} 
                    src="/pic.JPG" alt='Bunny Phetmunee'/>
                <VStack>
                    <Text fontSize={{base: "sm", md: "md", lg: "lg"}}>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                    </Text>
                    <Text fontSize={{base: "sm", md: "md", lg: "lg"}}>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                    </Text>
                </VStack>  
            </Flex>
        </Flex>
        
    )
}

export default About;