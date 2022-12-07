import { ListContainerInfo } from "../../../../decorators";

const UsList = () => {
    const us = [
        {
            title: "misión",
            description: "",
            img: "../../../../../assets/images/us_mision.jpg",
            route: "",
        },
        {
            title: "visión",
            description: "",
            img: "../../../../../assets/images/us_vision.jpg",
            route: "",
        },
        {
            title: "valores",
            description: "",
            img: "../../../../../assets/images/us_valores.jpg",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={us} />;
};

export default UsList;
