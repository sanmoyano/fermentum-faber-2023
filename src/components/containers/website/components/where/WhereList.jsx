import { Outlet } from "react-router-dom";

import { ListContainer } from "../../../../decorators";

const WhereList = () => {
    const zones = [
        {
            title: "general paz",
            route: "/donde/general-paz",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fgeneralpaz.jpg?alt=media&token=796923ea-dfcb-4424-9aeb-033113175544",
        },
        {
            title: "alta cordoba",
            route: "/donde/alta-cordoba",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Faltacordoba.jpg?alt=media&token=08088d64-033d-4181-af42-ea45ec580619",
        },
        {
            title: "cerro",
            route: "/donde/cerro",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fcerrolasrosas.jpg?alt=media&token=7306c3f9-e2bd-41db-b7f2-70423e98c6ee",
        },
        {
            title: "nueva córdoba",
            route: "/donde/nueva-cordoba",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fnuevacorodba.jpg?alt=media&token=fb16825c-0cf4-4989-805e-a34c48519a91",
        },
        {
            title: "guemes",
            route: "/donde/guemes",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fbarrioguemes.jpg?alt=media&token=bbc8b6a6-a8d3-47bb-af4e-0cd090c8514d",
        },
        {
            title: "otras zonas",
            route: "/donde/otras-zonas",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbares%2Fotraszonas.jpg?alt=media&token=1d336e25-228b-40a4-af77-d81ef4e3fbf6",
        },
    ];

    return <ListContainer itemArray={zones} />;
};

export default WhereList;
