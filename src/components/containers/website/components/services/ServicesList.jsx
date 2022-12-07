import { ListContainerInfo } from "../../../../decorators";

const ServicesList = () => {
    const services = [
        {
            title: "atención",
            description: "",
            img: "../../../../../assets/images/servicios_atencion.jpg",
            route: "",
        },
        {
            title: "logistica",
            description: "",
            img: "../../../../../assets/images/portada_services.jpg",
            route: "",
        },
        {
            title: "administración",
            description: "",
            img: "../../../../../assets/images/servicios_arministracion.jpg",
            route: "",
        },
        {
            title: "asesoramiento",
            description: "",
            img: "../../../../../assets/images/servicios_asesoramiento.jpg",
            route: "",
        },
        {
            title: "catas guiadas",
            description: "",
            img: "../../../../../assets/images/servicios_catas.jpg",
            route: "",
        },
        {
            title: "formatos envasados",
            description: "",
            img: "../../../../../assets/images/comerciales.jpg",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={services} />;
};

export default ServicesList;
