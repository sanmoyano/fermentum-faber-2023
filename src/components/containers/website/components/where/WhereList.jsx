import { Outlet } from "react-router-dom";

import { ListContainer } from "../../../../decorators";

const WhereList = () => {
    const zones = [
        {
            title: "general paz",
            route: "/donde/general-paz",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fgeneralpaz.jpg?alt=media&token=97bb1509-41a8-481f-acbf-5737d22ef05e",
        },
        {
            title: "alta cordoba",
            route: "/donde/alta-cordoba",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Faltacordoba.jpg?alt=media&token=08088d64-033d-4181-af42-ea45ec580619",
        },
        {
            title: "zona norte",
            route: "/donde/zona-norte",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerrolasrosas.jpg?alt=media&token=7306c3f9-e2bd-41db-b7f2-70423e98c6ee",
        },
        {
            title: "centro",
            route: "/donde/centro",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcentro.jpg?alt=media&token=bae60211-7d4d-4864-a6ce-58abb061e7c3",
        },
        {
            title: "zona sur",
            route: "/donde/zona-sur",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fzona%20sur.jpg?alt=media&token=a2fe0dc4-fc87-410b-9757-00513f74b67b",
        },
        {
            title: "nueva córdoba",
            route: "/donde/nueva-cordoba",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnuevacorodba.jpg?alt=media&token=f42cf943-4b24-4954-9fa6-1b832678f7e9",
        },
        {
            title: "güemes",
            route: "/donde/guemes",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fbarrioguemes.jpg?alt=media&token=bbc8b6a6-a8d3-47bb-af4e-0cd090c8514d",
        },
        {
            title: "otras localidades",
            route: "/donde/otras-localidades",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fotraszonas.jpeg?alt=media&token=69dcb7c1-6bf7-431b-a9d9-86ba6fcd70b4",
        },
    ];

    return <ListContainer itemArray={zones} />;
};

export default WhereList;
