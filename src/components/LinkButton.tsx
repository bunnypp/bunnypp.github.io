import { Button } from "@chakra-ui/react";
import { MutableRefObject } from "react";

type LinkButtonProps = {
    title: string;
    ref?: MutableRefObject<HTMLElement>;
}

const LinkButton = ({title, ref}: LinkButtonProps) => {
    return (
        <Button 
            variant="ghost" 
            _hover={{textShadow: "0px 0px 16px #fbaaa6"}}
            color="#b77266" 
            size={{base: "xs", md: "md", lg: "lg"}}
            onClick={() => ref?.current.scrollIntoView({behavior: "smooth"})}
        >{title}</Button>
    )
}

export default LinkButton;