import { useState, useEffect } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

import { BarItem } from "../../components/containers/website";

const BarListContainer = () => {
    const zonas = [
        { id: 1, name: "general paz", path: "/donde/general-paz", bares: [{}] },
        { id: 2, name: "alta córdoba", path: "/donde/alta-cordoba", bares: [{}] },
        { id: 3, name: "cerro", path: "/donde/cerro", bares: [{}] },
        { id: 4, name: "nueva córdoba", path: "/donde/nueva-cordoba", bares: [{}] },
        { id: 5, name: "guemes", path: "/donde/guemes", bares: [{}] },
        { id: 6, name: "otras zonas", path: "/donde/otras-zonas", bares: [{}] },
    ];
    const [itemZona, setItemZona] = useState({});
    const { zona } = useParams();

    useEffect(() => {
        switch (zona) {
            case "general-paz":
                setItemZona(zonas[0]);
                break;
            case "alta-cordoba":
                setItemZona(zonas[1]);
                break;
            case "cerro":
                setItemZona(zonas[2]);
                break;
            case "nueva-cordoba":
                setItemZona(zonas[3]);
                break;
            case "guemes":
                setItemZona(zonas[4]);
                break;
            case "otras-zonas":
                setItemZona(zonas[5]);
                break;
        }
    }, [zona]);

    return (
        <>
            <Stack direction={"row"} justifyContent={"center"} p={4} spacing={6}>
                {zonas?.map((place, i) => (
                    <Link key={i} to={place.path}>
                        <Text
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textDecoration={"underline"}
                            textStyle={"link"}
                        >
                            {place.name}
                        </Text>
                    </Link>
                ))}
            </Stack>
            <BarItem zona={itemZona} />
        </>
    );
};

export default BarListContainer;
