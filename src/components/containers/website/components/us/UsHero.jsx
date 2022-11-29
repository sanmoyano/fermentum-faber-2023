import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const UsHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_nosotros.jpg"}>
            <StackBackgroundInfo
                info={"Somos una reconocida fábrica de cervezas en la ciudad de Córdoba."}
                title={"nosotros"}
            />
        </StackBackground>
    );
};

export default UsHero;
