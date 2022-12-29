import { Stack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import { BarList } from "../../components/containers/website";

const BarListContainer = () => {
    const zonas = [
        { name: "general paz", path: "/donde/general-paz", bares: [{}] },
        { name: "alta córdoba", path: "/donde/alta-cordoba", bares: [{}] },
        { name: "cerro", path: "/donde/cerro", bares: [{}] },
        { name: "nueva córdoba", path: "/donde/nueva-cordoba", bares: [{}] },
        { name: "guemes", path: "/donde/guemes", bares: [{}] },
        { name: "otras zonas", path: "/donde/otras-zonas", bares: [{}] },
    ];
    const { pathname } = useLocation();

    return (
        <>
            <Stack direction={"row"} justifyContent={"center"} p={4} spacing={6}>
                {zonas?.map((zona, i) => (
                    <Link key={i} to={zona.path}>
                        <Text
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textDecoration={"underline"}
                            textStyle={"link"}
                        >
                            {zona.name}
                        </Text>
                    </Link>
                ))}
            </Stack>
            <BarList />
        </>
    );
};

export default BarListContainer;
