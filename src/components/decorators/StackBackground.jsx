import { Box } from "@chakra-ui/react";

const StackBackground = ({ children, bgImage }) => {
    const boxStyles = {
        height: "100vh",
        alignItems: "center",
        bgImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(82.15% 82.22% at 50% 49.96%, rgba(0, 0, 0, 0) 0%, #000000 100%), url('../../../assets/images/${bgImage}') `,
        bgPosition: "center",
        bgSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <Box sx={boxStyles}>{children}</Box>;
};

export default StackBackground;
