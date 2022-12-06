import { ListContainer } from "../../../../decorators";

const sections = [
    {
        title: "nuestros estilos",
        img: "../../../../../assets/images/estilos.jpg",
        route: "/cervezas",
    },
    {
        title: "servicios comerciales",
        img: "../../../../../assets/images/comerciales.jpg",
        route: "/servicios",
    },
    { title: "donde encontrarnos", img: "../../../../../assets/images/donde.jpg", route: "/donde" },
    {
        title: "contacto",
        img: "../../../../../assets/images/portada_nosotros.jpg",
        route: "https://wa.me/3513073541",
    },
    {
        title: "alquiler de choperas",
        img: "../../../../../assets/images/choperas.png",
        route: "https://www.instagram.com/beermoving",
    },
    {
        title: "tienda online",
        img: "../../../../../assets/images/tienda.png",
        route: "https://pency.app/fermentum",
    },
];
const MundoFmtm = () => {
    return <ListContainer itemArray={sections} title={"mundo fermentum"} />;
};

export default MundoFmtm;
