import { Flex, Text, Image, VStack, Heading} from "@chakra-ui/react"
import { MutableRefObject } from "react";


type AboutProps = {
    ref?: MutableRefObject<HTMLDivElement>;
}

const About = ({ref}: AboutProps) => {
    return (
        <Flex ref={ref} direction="column" p={{base: 0, md: 5}} gap={{base: 5, md: 10}}>
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