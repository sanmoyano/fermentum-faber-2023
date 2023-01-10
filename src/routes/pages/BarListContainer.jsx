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
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fgeneral%20paz%2Fohana.jpg?alt=media&token=445ac90d-987a-4e0d-96a0-e730d7be0b46",
                    direction: "Catamarca 1008",
                    ig: "/ohanafamiliacervecera",
                    igLink: "https://www.instagram.com/ohanafamiliacervecera/?hl=es",
                    map: "https://www.google.com/maps/dir//Ohana+Familia+Cervecera/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432a2a1c00e11fd:0xf6ea680a93388e42!2m2!1d-64.1702054!2d-31.4127165",
                },
                {
                    name: "Juggernaut",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fgeneral%20paz%2Fjuggernaut.jpg?alt=media&token=6dfdf41b-806d-4d2d-88a0-6dc6d55df17c",
                    direction: "Catamarca 1008",
                    ig: "/juggernaut_bar",
                    igLink: "https://www.instagram.com/juggernaut_bar/",
                    map: "https://www.google.com/maps/place/Juggernaut+beer+bar/@-31.4123687,-64.1721714,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3e0939fa7df:0x23820e5a823f6a5e!8m2!3d-31.4123601!4d-64.1699859",
                },
                {
                    name: "Otro bar",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fohana.jpg?alt=media&token=10aab554-1106-464f-aaef-7ef76de86441",
                    direction: "direccion del bar",
                    ig: "/instagram del bar",
                    igLink: "https://www.instagram.com/ohanafamiliacervecera/?hl=es",
                    map: "https://www.google.com/maps/dir//Ohana+Familia+Cervecera/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432a2a1c00e11fd:0xf6ea680a93388e42!2m2!1d-64.1702054!2d-31.4127165",
                },
            ],
        },
        {
            name: "alta córdoba",
            path: "/donde/alta-cordoba",
            bares: [
                {
                    name: "coppento",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Falta%20cordoba%2Fcopento.jpg?alt=media&token=88c228a7-2dab-4a12-a3c6-f0931775e4db",
                    direction: "Sarachaga 418",
                    ig: "/coppentopastas",
                    igLink: "https://www.instagram.com/coppentopastas/",
                    map: "https://www.google.com.ar/maps/place/Juan+A.+Sarachaga+418,+X5001+C%C3%B3rdoba/@-31.3920329,-64.1824775,17z/data=!3m1!4b1!4m5!3m4!1s0x94329869b33c7b21:0xc9406207bef71224!8m2!3d-31.3920329!4d-64.1802888",
                },
                {
                    name: "cochera",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Falta%20cordoba%2Fcochera.jpg?alt=media&token=4a14e370-cefd-4229-97d7-e1240b23eb64",
                    direction: "Mariano Fragueiro 1562",
                    ig: "/cocherabar",
                    igLink: "https://www.instagram.com/coppentopastas/",
                    map: "https://www.google.com.ar/maps/place/Cochera+%E2%80%93+Birrer%C3%ADa+de+barrio/@-31.3973594,-64.1906909,17z/data=!3m1!4b1!4m5!3m4!1s0x943299b7585643b1:0x9f7c856baea9c57d!8m2!3d-31.3973312!4d-64.1863141",
                },
            ],
        },
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
