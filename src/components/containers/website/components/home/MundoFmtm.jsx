import { ListContainer } from "../../../../decorators";

const sections = [
    { title: "nuestros estilos", img: "", route: "/cervezas" },
    { title: "servicios comerciales", img: "", route: "/servicios" },
    { title: "donde encontrarnos", img: "", route: "/donde" },
    { title: "contacto", img: "", route: "" },
    { title: "alquiler de choperas", img: "", route: "" },
    { title: "tienda online", img: "", route: "" },
];
const MundoFmtm = () => {
    return <ListContainer itemArray={sections} title={"mundo fermentum"} />;
};

export default MundoFmtm;
