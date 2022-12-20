import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const UsHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_nosotros.jpg?alt=media&token=a0b79da5-293b-4833-9503-64463382dfc6"
            }
        >
            <StackBackgroundInfo
                info={"Somos una reconocida fábrica de cervezas en la ciudad de Córdoba."}
                title={"nosotros"}
            />
        </StackBackground>
    );
};

export default UsHero;
