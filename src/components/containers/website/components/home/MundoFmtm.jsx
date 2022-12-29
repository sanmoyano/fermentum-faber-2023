import { ListContainer } from "../../../../decorators";

const sections = [
    {
        title: "nuestros estilos",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Festilos.jpg?alt=media&token=f33854d0-f814-417b-b458-55ac312b8287",
        route: "/cervezas",
    },
    {
        title: "servicios comerciales",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcomerciales.jpg?alt=media&token=fd24a8ab-928e-4b5c-8c87-d957b6883f0a",
        route: "/servicios",
    },
    {
        title: "donde estamos",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fdonde.jpg?alt=media&token=c454033a-a78a-43b8-811d-e14ee3b10969",
        route: "/donde",
    },
    {
        title: "contacto",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_nosotros.jpg?alt=media&token=a0b79da5-293b-4833-9503-64463382dfc6",
        route: "https://wa.me/3513073541",
    },
    {
        title: "alquiler de choperas",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fbeermoving.jpg?alt=media&token=a641d025-0700-4ed7-a855-5ccae2e12ccd",
        route: "https://wa.me/3512575888",
    },
    {
        title: "tienda online",
        img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Ftienda.png?alt=media&token=35979953-3f4a-432c-a082-34db5f647fbc",
        route: "https://pency.app/fermentum",
    },
];
const MundoFmtm = () => {
    return <ListContainer itemArray={sections} title={"mundo fermentum"} />;
};

export default MundoFmtm;
