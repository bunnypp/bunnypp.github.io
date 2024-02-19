import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react"

const ProjectPanel = () => {
    return (
        <Flex direction={{base: "column", md:"row"}} 
            align="center" 
            gap={{base: 5, md: 10}} 
            px={{base: 0, md: 5}}>
            <Image borderRadius='sm' 
                    objectFit='fill' 
                    boxSize={{base: "80%", md: "30%"}} 
                    src="/ava.png" alt='Ava Pic'/>
            <VStack>
                <Text fontWeight={"semibold"} alignSelf={"normal"}>Ava</Text>
                <Text>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
                </Text>
            </VStack>  
        </Flex>
    )
}

export default ProjectPanel;