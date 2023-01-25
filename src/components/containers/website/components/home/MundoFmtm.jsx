import { ListContainer } from "../../../../decorators";

const sections = [
    {
        title: "nuestros estilos",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2FDSC_8920.jpg?alt=media&token=79ca70b4-62d3-4cd6-999b-a15098cb3108",
        route: "/cervezas",
    },
    {
        title: "servicios comerciales",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fcomerciales.jpg?alt=media&token=97b1dcc7-1da8-4206-8a05-db8ea239b55a",
        route: "/servicios",
    },
    {
        title: "donde estamos",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2FDSC_9168.jpg?alt=media&token=27e8412c-f6e2-488c-a630-95438d31b2e9",
        route: "/donde",
    },
    {
        title: "contacto",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fportada_nosotros.jpg?alt=media&token=a9990ec8-4d3f-4ae1-845e-fbf9527c9dda",
        route: "https://wa.me/3513073541",
    },
    {
        title: "alquiler de choperas",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fbeermoving.jpg?alt=media&token=8f84a79b-5c75-4497-9ed1-85e0b69508bd",
        route: "https://wa.me/3512575888",
    },
    {
        title: "tienda online",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Ftienda.png?alt=media&token=ba7cb6cd-de1b-4dcb-81cb-eb1369b144bd",
        route: "https://pency.app/fermentum",
    },
];
const MundoFmtm = () => {
    return <ListContainer itemArray={sections} title={"mundo fermentum"} />;
};

export default MundoFmtm;
