import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <Image
                alt={"fermentum faber logo"}
                height={"auto"}
                padding={4}
                src={
                    "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Flogo.svg?alt=media&token=d8edd6c6-1c07-405e-9485-18077b027a4f"
                }
                width={"120px"}
            />
        </Link>
    );
};

export default Logo;
