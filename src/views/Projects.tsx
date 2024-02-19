import { Flex, Text, Image, VStack, Heading} from "@chakra-ui/react"
import { MutableRefObject } from "react";
import ProjectPanel from "../components/ProjectPanel";

type ProjectsProps = {
    ref?: MutableRefObject<HTMLDivElement>;
}


const Projects = ({ref}: ProjectsProps) => {
    return (
        <Flex ref={ref} id="experience" direction="column" p={{base: 0, md: 5}} gap={{base: 5, md: 10}}>
            <Heading as='h1' 
                size={{base: "sm", md: "md", lg: "lg"}} 
                alignSelf={{base: "center", md:"normal"}}>
                    Projects
            </Heading>
            <ProjectPanel/>
        </Flex>
        
    )
}

export default Projects;