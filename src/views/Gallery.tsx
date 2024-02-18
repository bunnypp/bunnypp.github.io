import { Flex, Text, VStack, Heading} from "@chakra-ui/react"
import { MutableRefObject } from "react";
import { InstagramEmbed } from 'react-social-media-embed';

type GalleryProps = {
    ref?: MutableRefObject<HTMLDivElement>;
}

const Gallery = ({ref}: GalleryProps) => {
    return (
        <Flex ref={ref} id="experience" direction="column" p={{base: 0, md: 5}} gap={{base: 5, md: 10}}>
            <Heading as='h1' 
                size={{base: "sm", md: "md", lg: "lg"}} 
                alignSelf={{base: "center", md:"normal"}}>
                    Art Gallery
            </Heading>
            <Text>You can find a collection of my sketches and artwork on Instagram.</Text>
            <Flex direction={{base: "column", md:"row"}} 
                align="center" 
                gap={{base: 5, md: 10}} 
                px={{base: 0, md: 5}}>
                <InstagramEmbed url="https://www.instagram.com/bunssketches/" width="100%"/>
            </Flex>
        </Flex>
        
    )
}

export default Gallery;