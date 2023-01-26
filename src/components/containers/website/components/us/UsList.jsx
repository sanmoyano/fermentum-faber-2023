import { ListContainerInfo } from "../../../../decorators";

const UsList = () => {
    const us = [
        {
            title: "misión",
            description:
                "Elaborar cerveza de calidad que permita valorar la vida en búsqueda de plenitud. Generar conciencia de la importancia del consumo responsable entendiéndolo como un control sobre el exceso y mejor si es con una buena compañía.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fnosotros%2Fus_mision.jpg?alt=media&token=708a5551-e279-4c0a-a621-ac0147ec503b",
            route: "",
        },
        {
            title: "visión",
            description:
                "Somos un espacio de crecimiento personal en donde los dones y capacidades de cada miembro puedan ser puestas en acción para el mayor bien de un equipo humano que se compromete en la búsqueda de la calidad y de una vida con sentido.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fnosotros%2Fus_vision.jpg?alt=media&token=06dac4e0-e64e-46e1-8eca-6641a5a7d8f9",
            route: "",
        },
        {
            title: "valores",
            description:
                "La calidad implica lograr un producto de calidad, pero también un desarrollo personal y en equipo que permita el cumplimiento de los objetivos propuestos y la continua búsqueda de superación en el tiempo. La confianza implica la valoración por los talentos que cada uno posee y el cumplimiento de nuestros deberes y obligaciones.",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fnosotros%2Fus_valores.jpg?alt=media&token=62d603ff-8ee6-46e8-a1eb-2dac8c0e26ef",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={us} />;
};

export default UsList;
