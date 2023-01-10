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
                    direction: "Catamarca 1039",
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
        {
            name: "cerro",
            path: "/donde/cerro",
            bares: [
                {
                    name: "cuadrado",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerro%2Fcuadrado.jpg?alt=media&token=1961a3e6-685e-46bb-85a9-e593f323f88f",
                    direction: "Av Recta Martinolli 5344",
                    ig: "/paradorelcuadradocba",
                    igLink: "https://www.instagram.com/paradorelcuadradocba/",
                    map: "https://www.google.com.ar/maps/place/Parador+El+Cuadrado+Recta+(Lomos+y+Hamburguesas)/@-31.3553867,-64.2472369,17z/data=!3m1!4b1!4m5!3m4!1s0x94329f4021740f31:0x8456d6b58c8aac24!8m2!3d-31.3553867!4d-64.2450482",
                },
                {
                    name: "cervario",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerro%2Fcervario.jpg?alt=media&token=96cab426-b49d-4112-8eb0-bfcf5db69739",
                    direction: "José Echenique 2066",
                    ig: "/cervariobar",
                    igLink: "https://www.instagram.com/cervariobar/",
                    map: "https://www.google.com.ar/maps/place/Cervario/@-31.3645185,-64.2390414,17z/data=!3m1!4b1!4m5!3m4!1s0x9432993403411ddd:0x7f5f850ff965816e!8m2!3d-31.3645185!4d-64.2368527",
                },
                {
                    name: "bruxx nuñez",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerro%2Fbruxx.jpg?alt=media&token=e06f1abc-8b7b-4ebe-85ee-1fb1da2b18f4",
                    direction: "Rafael Nuñez 4610",
                    ig: "/soybruxx",
                    igLink: "https://www.instagram.com/soybruxx/",
                    map: "https://www.google.com.ar/maps/place/Bruxx+Cerro+-+Lomos+%26+Birra/@-31.3634865,-64.2385892,16.97z/data=!4m5!3m4!1s0x943299e301af59ed:0x45ca207b8968f3b4!8m2!3d-31.363499!4d-64.2363827",
                },
                {
                    name: "bruxx recta",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerro%2Fbruxx.jpg?alt=media&token=e06f1abc-8b7b-4ebe-85ee-1fb1da2b18f4",
                    direction: "Av Recta Martinolli 8580",
                    ig: "/soybruxx",
                    igLink: "https://www.instagram.com/soybruxx/",
                    map: "https://www.google.com.ar/maps/place/Bruxx+Recta+-+Lomos+%26+Birra/@-31.3463545,-64.2844249,17z/data=!3m1!4b1!4m5!3m4!1s0x94329dc9b20f901f:0xc58b40778b12a4a2!8m2!3d-31.3463214!4d-64.2822288",
                },
            ],
        },
        {
            name: "nueva córdoba",
            path: "/donde/nueva-cordoba",
            bares: [
                {
                    name: "tres calaveras",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Ftrescalaveras.jpg?alt=media&token=4d3d7121-e449-49c0-93f3-4b1151a814f2",
                    direction: "Bolivia 196",
                    ig: "/tres.calaveras",
                    igLinkL:
                        "https://www.google.com/maps/place/Tres+Calaveras/@-31.4318456,-64.190026,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28c8ab65d91:0x5a3c43b92b400934!8m2!3d-31.4318477!4d-64.1878381",
                    map: "https://www.google.com/maps/place/Tres+Calaveras/@-31.4318456,-64.190026,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28c8ab65d91:0x5a3c43b92b400934!8m2!3d-31.4318477!4d-64.1878381",
                },
                {
                    name: "aldea antigua",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Faldea.jpg?alt=media&token=c7c88a22-dcde-4ca7-b0f7-26bc2e7f0d53",
                    direction: "Av Ambrosio Olmos 530",
                    ig: "/aldea.antigua",
                    igLinkL: "https://www.instagram.com/aldea.antigua/",
                    map: "https://www.google.com/maps/place/Aldea+Antigua/@-31.4288854,-64.1905044,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a356bf309ce7:0x2cad980cf2e135af!8m2!3d-31.4289406!4d-64.1859922",
                },
                {
                    name: "botellon",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fbotellon.jpg?alt=media&token=0e064cba-f7dd-4e70-a50f-2a22349e5bff",
                    direction: "Blvr Chacabuco 654",
                    ig: "/elbotelloncba",
                    igLinkL: "https://www.instagram.com/elbotelloncba/",
                    map: "https://www.google.com/maps/place/El+Botell%C3%B3n+C%C3%B3rdoba/@-31.4248841,-64.1857196,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3ea22a36af1:0xc4ad55da6c4c7460!8m2!3d-31.4248841!4d-64.1835309",
                },
                {
                    name: "brauhaus",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fbrauhaus.jpg?alt=media&token=7ab7d0da-fea3-4ca5-8edf-e8c4bda320b0",
                    direction: "Paraná 465",
                    ig: "/brauhaus.bar",
                    igLinkL: "https://www.instagram.com/brauhaus.bar/",
                    map: "https://www.google.com/maps/place/Br%C3%A4uhaus+Bar/@-31.4234884,-64.181695,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a354614ca2df:0xbf1584d15c3ea807!8m2!3d-31.4234884!4d-64.1795063",
                },
                {
                    name: "clarke's irish bar",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fclakers.jpg?alt=media&token=ed19f863-1906-4798-bb3c-a263f282da71",
                    direction: "Santiago Derqui 225",
                    ig: "/clarkesbarcordoba",
                    igLinkL: "https://www.instagram.com/clarkesbarcordoba/",
                    map: "https://www.google.com/maps/place/Clarke's+Irish+Bar/@-31.4264457,-64.1872147,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28e4856c6e5:0x84f20fc4bb0bb8c5!8m2!3d-31.4264181!4d-64.1850207",
                },
                {
                    name: "heinsenberg bar & lab",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fheisenbar.jpg?alt=media&token=7600733a-620e-4d7e-b3b8-4bb99e45b945",
                    direction: "Blvr Chacabuco 1028",
                    ig: "/heinsenbarlab",
                    igLinkL: "https://www.instagram.com/heisenbarlab/",
                    map: "https://www.google.com/maps/place/HEISENBERG+%E2%80%93+Bar+%26+lab/@-31.4294185,-64.1875591,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3a08ccd7c97:0x8b947a1bb8fd3339!8m2!3d-31.4294185!4d-64.1853704",
                },
                {
                    name: "kilómetro 5",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fkm5.jpg?alt=media&token=9e5d9ce8-3d00-4f42-8e23-de8beb958c0e",
                    direction: "Bolivia 60",
                    ig: "/km5estacion",
                    igLinkL: "https://www.instagram.com/km5estacion/",
                    map: "https://www.google.com/maps/place/Kilometro+5+-+Estacion+de+Cerveza/@-31.4313237,-64.191663,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28b891709a1:0x8b07f6a2fccdb165!8m2!3d-31.431373!4d-64.1894937",
                },
                {
                    name: "lupulus peredo",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Flupulusperedo.jpg?alt=media&token=f15c5ef8-f972-43de-aa4e-a3f510f5802b",
                    direction: "Angelo de Peredo 43",
                    ig: "/lupuluscba",
                    igLinkL: "https://www.instagram.com/lupuluscba/",
                    map: "https://www.google.com/maps/place/L%C3%BApulus+-+Almac%C3%A9n+de+Cerveza+y+Comida+Veggie/@-31.4285693,-64.1920395,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28948d9518f:0x445e6e06a1e3d2d1!8m2!3d-31.4285735!4d-64.1898526",
                },
                {
                    name: "lupulus patio",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Flupuluspatio.jpg?alt=media&token=eaad4e21-4ad2-4e4a-a314-db1b728ef119",
                    direction: "Blvr Chacabuco 819",
                    ig: "/lupuluspatio",
                    igLinkL: "https://www.instagram.com/lupuluspatio/",
                    map: "https://www.google.com/maps/place/Lupulus+Patio+Cervecero/@-31.4271411,-64.1861168,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a38e1f6680cb:0xcc3391b1dc8b8d4e!8m2!3d-31.4271536!4d-64.1838923",
                },
                {
                    name: "sorrento lopez",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fsorrento.jpg?alt=media&token=28c3fdeb-fa4a-47b6-ba2d-7bee6fba81d9",
                    direction: "Av Poeta Lugones 474",
                    ig: "/sorrentolopez",
                    igLinkL: "https://www.instagram.com/sorrentolopez/",
                    map: "https://www.google.com/maps/place/Sorrento+Lopez/@-31.4278831,-64.185871,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3150575470d:0x7be6ff7b8577eff1!8m2!3d-31.4278831!4d-64.1836823",
                },
                {
                    name: "temple bar",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Ftemple.jpg?alt=media&token=8f0ee8ff-1644-4201-97bc-24af1a063191",
                    direction: "Ambrosio Olmos 594",
                    ig: "/templecordoba",
                    igLinkL: "https://www.instagram.com/templecordoba/",
                    map: "https://www.google.com/maps/place/Temple+Craft+Nueva+C%C3%B3rdoba/@-31.4293105,-64.1887664,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a393c1c925fb:0x138a13888271e15!8m2!3d-31.4293105!4d-64.1865777",
                },
                {
                    name: "visionaire ruin bar",
                    img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnueva%20cordoba%2Fvisio.jpg?alt=media&token=4f497b48-a923-415c-8d3f-a3c98590de33",
                    direction: "Bvlr Chacabuco 436",
                    ig: "/visionaireruinbar",
                    igLinkL: "https://www.instagram.com/visionaireruinbar/",
                    map: "https://www.google.com/maps/place/Visionaire/@-31.4227611,-64.1871474,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3de60b2152f:0xeff7bb2c95b94083!8m2!3d-31.4227703!4d-64.1826324",
                },
            ],
        },
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
