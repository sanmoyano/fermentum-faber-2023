import { ListContainerInfo } from "../../../../decorators";

const ServicesList = () => {
    const services = [
        {
            title: "atención",
            description:
                "Atención exclusiva y comunicación directa por whatsapp para coordinar todo lo referente a pedidos, entregas y pagos.",
            img: "../../../../../assets/images/servicios_atencion.jpg",
            route: "",
        },
        {
            title: "logistica",
            description:
                "Distribución propia directo de fábrica dentro de las 48 hs hábiles a toda la Ciudad de Córdoba.",
            img: "../../../../../assets/images/portada_services.jpg",
            route: "",
        },
        {
            title: "administración",
            description:
                "Cuenta corriente para nuestros clientes, les permitirá administrar sus pedidos y hacer sus pagos con mayor flexibilidad.",
            img: "../../../../../assets/images/servicios_arministracion.jpg",
            route: "",
        },
        {
            title: "asesoramiento",
            description:
                "Asesoramiento en instalaciones, podemos ayudarte o recomendarte las mejores opciones que se adecuan a cada proyecto.",
            img: "../../../../../assets/images/servicios_asesoramiento.jpg",
            route: "",
        },
        {
            title: "catas guiadas",
            description:
                "Te proponemos hacer eventos de catas guiadas en tu comercio para que tus clientes y consumidores conozcan más sobre la cerveza artesanal y sobre ustedes.",
            img: "../../../../../assets/images/servicios_catas.jpg",
            route: "",
        },
        {
            title: "formatos envasados",
            description:
                "Contamos con diferentes formatos de envases según tu necesidad. Barriles de 50 30 20 y 10 litros. También podes consultar por nuestra linea de botellas de 500ml.",
            img: "../../../../../assets/images/comerciales.jpg",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={services} />;
};

export default ServicesList;
