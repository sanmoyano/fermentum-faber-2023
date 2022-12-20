import { ListContainerInfo } from "../../../../decorators";

const ServicesList = () => {
    const services = [
        {
            title: "atención",
            description:
                "Atención exclusiva y comunicación directa por whatsapp para coordinar todo lo referente a pedidos, entregas y pagos.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios_atencion.jpg?alt=media&token=ed5d7493-f170-48f7-b88c-f98d4696d632",
            route: "",
        },
        {
            title: "logistica",
            description:
                "Distribución propia directo de fábrica dentro de las 48 hs hábiles a toda la Ciudad de Córdoba.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_services.jpg?alt=media&token=0be11b09-8a65-4e91-90ef-a2d3c711eff6",
            route: "",
        },
        {
            title: "administración",
            description:
                "Cuenta corriente para nuestros clientes, les permitirá administrar sus pedidos y hacer sus pagos con mayor flexibilidad.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios_arministracion.jpg?alt=media&token=56f890be-7464-465c-8bb0-1b94f18ca1f6",
            route: "",
        },
        {
            title: "asesoramiento",
            description:
                "Asesoramiento en instalaciones, podemos ayudarte o recomendarte las mejores opciones que se adecuan a cada proyecto.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios_asesoramiento.jpg?alt=media&token=7e6b0755-1c36-4198-8523-832c8363d7c8",
            route: "",
        },
        {
            title: "catas guiadas",
            description:
                "Te proponemos hacer eventos de catas guiadas en tu comercio para que tus clientes y consumidores conozcan más sobre la cerveza artesanal y sobre ustedes.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios_catas.jpg?alt=media&token=3c1a7e46-d3e7-41e6-9753-661655e6237c",
            route: "",
        },
        {
            title: "formatos envasados",
            description:
                "Contamos con diferentes formatos de envases según tu necesidad. Barriles de 50 30 20 y 10 litros. También podes consultar por nuestra linea de botellas de 500ml.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcomerciales.jpg?alt=media&token=fd24a8ab-928e-4b5c-8c87-d957b6883f0a",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={services} />;
};

export default ServicesList;
