import { Outlet } from "react-router-dom";

import { Index } from "../../../../../routes";
import { ListContainer } from "../../../../decorators";

const WhereList = () => {
    const zones = [
        { title: "general paz", route: "/donde/general-paz", img: "" },
        { title: "alta cordoba", route: "/donde/alta-cordoba", img: "" },
        { title: "cerro", route: "/donde/cerro", img: "" },
        { title: "nueva córdoba", route: "/donde/nueva-cordoba", img: "" },
        { title: "guemes", route: "/donde/guemes", img: "" },
        { title: "otras zonas", route: "/donde/otras-zonas", img: "" },
    ];

    return (
        <Index>
            <ListContainer itemArray={zones} />
        </Index>
    );
};

export default WhereList;
