import { Button } from "@chakra-ui/react";
import { MutableRefObject } from "react";

type LinkButtonProps = {
    title: string;
    ref?: MutableRefObject<HTMLElement>;
}

const LinkButton = ({title, ref}: LinkButtonProps) => {
    return (
        <Button 
            variant="link" 
            color="#777473" 
            size={{base: "xs", md: "md", lg: "lg"}}
            onClick={() => ref?.current.scrollIntoView({behavior: "smooth"})}
        >{title}</Button>
    )
}

export default LinkButton;