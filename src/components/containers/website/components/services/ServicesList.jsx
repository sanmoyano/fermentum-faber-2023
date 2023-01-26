import { ListContainerInfo } from "../../../../decorators";

const ServicesList = () => {
    const services = [
        {
            title: "atención",
            description:
                "Atención exclusiva y comunicación directa por whatsapp para coordinar todo lo referente a pedidos, entregas y pagos.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios%2Fservicios_atencion.jpg?alt=media&token=387f9ea8-17cb-4406-8bbd-2171f8ac3e3d",
            route: "",
        },
        {
            title: "logistica",
            description:
                "Distribución propia directo de fábrica dentro de las 48 hs hábiles a toda la Ciudad de Córdoba.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios%2Fportada_servicios.jpg?alt=media&token=dba2e4ed-4bfb-481b-8a31-76259b5be52b",
            route: "",
        },
        {
            title: "administración",
            description:
                "Cuenta corriente para nuestros clientes, les permitirá administrar sus pedidos y hacer sus pagos con mayor flexibilidad.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios%2Fservicios_arministracion.jpg?alt=media&token=2e8f275f-0773-40c8-957a-984727057d96",
            route: "",
        },
        {
            title: "asesoramiento",
            description:
                "Asesoramiento en instalaciones, podemos ayudarte o recomendarte las mejores opciones que se adecuan a cada proyecto.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios%2Fservicios_asesoramiento.jpg?alt=media&token=2bb718fc-3b07-4780-9ba5-a5561ebb0a8c",
            route: "",
        },
        {
            title: "catas guiadas",
            description:
                "Te proponemos hacer eventos de catas guiadas en tu comercio para que tus clientes y consumidores conozcan más sobre la cerveza artesanal y sobre ustedes.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2FDSC_9168.jpg?alt=media&token=27e8412c-f6e2-488c-a630-95438d31b2e9",
            route: "",
        },
        {
            title: "formatos envasados",
            description:
                "Contamos con diferentes formatos de envases según tu necesidad. Barriles de 50 30 20 y 10 litros. También podes consultar por nuestras latas de 473ml.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fcomerciales.jpg?alt=media&token=97b1dcc7-1da8-4206-8a05-db8ea239b55a",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={services} />;
};

export default ServicesList;
