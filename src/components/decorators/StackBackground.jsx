import { Box } from "@chakra-ui/react";

const StackBackground = ({ children, bgImage }) => {
    const boxStyles = {
        height: "100vh",
        alignItems: "center",
        bgImage: `url('../../../assets/images/${bgImage}.jpg')`,
        bgPosition: "center",
        bgSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <Box sx={boxStyles}>{children}</Box>;
};

export default StackBackground;
