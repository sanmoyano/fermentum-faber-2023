import { Link } from "@chakra-ui/react";

const ChakraLink = ({ children, link }) => {
    return (
        <Link _hover={{ textDecoration: "none" }} href={link} target={"_blank"}>
            {children}
        </Link>
    );
};

export default ChakraLink;
