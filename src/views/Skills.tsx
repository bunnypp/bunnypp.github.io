import { Flex, Text, VStack, Heading, List, ListItem, ListIcon} from "@chakra-ui/react"
import { MutableRefObject } from "react";
import { SiJavascript, SiTypescript, SiTensorflow, SiPytorch, SiTailwindcss} from "react-icons/si";
import { FaPython, FaJava, FaReact, FaAws } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";


type SkillsProps = {
    ref?: MutableRefObject<HTMLDivElement>;
}

const Skills = ({ref}: SkillsProps) => {
    return (
        <Flex ref={ref} id="experience" direction="column" p={{base: 0, md: 5}} gap={{base: 5, md: 10}}>
            <Heading as='h1' 
                size={{base: "sm", md: "md", lg: "lg"}} 
                alignSelf={{base: "center", md:"normal"}}>
                    Skills
            </Heading>
            <Flex direction={{base: "column", md:"row"}} 
                align="normal"
                gap={{base: 5, md: 10}} 
                px={{base: 0, md: 5}}>
                <VStack flexBasis={"50%"}>
                    <Text fontSize={{base: "sm", md: "md", lg: "lg"}}>
                    Programming Lanugages
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={FaPython} />
                            Python
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SiJavascript} />
                            Javascript
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SiTypescript} />
                            Typescript
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaJava} />
                            Java
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={AiFillCode} />
                            SQL
                        </ListItem>
                    </List>
                </VStack>  
                <VStack flexBasis={"50%"}>
                    <Text fontSize={{base: "sm", md: "md", lg: "lg"}}>
                    Libraries, Frameworks & Tools
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={SiTensorflow} />
                            Tensorflow
                        </ListItem>
                        <ListItem>
                            <ListIcon as={SiPytorch} />
                            Pytorch
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaReact} />
                            React
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={SiTailwindcss} />
                            Tailwind CSS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaAws} />
                            AWS
                        </ListItem>
                    </List>
                </VStack>  
            </Flex>
        </Flex>
        
    )
}

export default Skills;