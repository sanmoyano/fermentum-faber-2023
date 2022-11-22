import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <Image
                alt={"fermentum faber logo"}
                height={"auto"}
                src={"../../../../../assets/logo.svg"}
                width={"120px"}
            />
        </Link>
    );
};

export default Logo;
