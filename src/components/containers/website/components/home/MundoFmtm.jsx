import { ListContainer } from "../../../../decorators";

const sections = [
    { title: "nuestros estilos", img: "", route: "/cervezas" },
    { title: "servicios comerciales", img: "", route: "/servicios" },
    { title: "donde encontrarnos", img: "", route: "/donde" },
    { title: "contacto", img: "", route: "https://wa.me/3513073541" },
    { title: "alquiler de choperas", img: "", route: "https://www.instagram.com/beermoving" },
    { title: "tienda online", img: "", route: "https://pency.app/fermentum" },
];
const MundoFmtm = () => {
    return <ListContainer itemArray={sections} title={"mundo fermentum"} />;
};

export default MundoFmtm;
