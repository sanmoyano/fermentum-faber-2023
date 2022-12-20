import { ListContainerInfo } from "../../../../decorators";

const UsList = () => {
    const us = [
        {
            title: "misión",
            description: "",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fus_mision.jpg?alt=media&token=cb7978f3-3590-4c71-a10d-84798e895290",
            route: "",
        },
        {
            title: "visión",
            description: "",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fus_vision.jpg?alt=media&token=83e4b92b-ad2f-4b59-b3be-febfa6259a88",
            route: "",
        },
        {
            title: "valores",
            description: "",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fus_valores.jpg?alt=media&token=719efded-7262-4d84-a9a8-2736f600eca0",
            route: "",
        },
    ];

    return <ListContainerInfo itemArray={us} />;
};

export default UsList;
