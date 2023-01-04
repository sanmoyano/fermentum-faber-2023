import { useState, useEffect } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

import { BarItem } from "../../components/containers/website";

const BarListContainer = () => {
    const zonas = [
        {
            name: "general paz",
            path: "/donde/general-paz",
            bares: [
                {
                    name: "Ohana",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fohana.jpg?alt=media&token=10aab554-1106-464f-aaef-7ef76de86441",
                    direction: "Catamarca 1008",
                    ig: "/ohanafamiliacervecera",
                    igLink: "https://www.instagram.com/ohanafamiliacervecera/?hl=es",
                    map: "https://www.google.com/maps/dir//Ohana+Familia+Cervecera/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432a2a1c00e11fd:0xf6ea680a93388e42!2m2!1d-64.1702054!2d-31.4127165",
                },
                {
                    name: "Ohana",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fohana.jpg?alt=media&token=10aab554-1106-464f-aaef-7ef76de86441",
                    direction: "Catamarca 1008",
                    ig: "/ohanafamiliacervecera",
                    igLink: "https://www.instagram.com/ohanafamiliacervecera/?hl=es",
                    map: "https://www.google.com/maps/dir//Ohana+Familia+Cervecera/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432a2a1c00e11fd:0xf6ea680a93388e42!2m2!1d-64.1702054!2d-31.4127165",
                },
                {
                    name: "Ohana",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fohana.jpg?alt=media&token=10aab554-1106-464f-aaef-7ef76de86441",
                    direction: "Catamarca 1008",
                    ig: "/ohanafamiliacervecera",
                    igLink: "https://www.instagram.com/ohanafamiliacervecera/?hl=es",
                    map: "https://www.google.com/maps/dir//Ohana+Familia+Cervecera/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432a2a1c00e11fd:0xf6ea680a93388e42!2m2!1d-64.1702054!2d-31.4127165",
                },
            ],
        },
        { name: "alta córdoba", path: "/donde/alta-cordoba", bares: [{}] },
        { name: "cerro", path: "/donde/cerro", bares: [{}] },
        { name: "nueva córdoba", path: "/donde/nueva-cordoba", bares: [{}] },
        { name: "guemes", path: "/donde/guemes", bares: [{}] },
        { name: "otras zonas", path: "/donde/otras-zonas", bares: [{}] },
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
