import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const UsHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_nosotros.jpg"}>
            <StackBackgroundInfo
                title={"nosotros"}
                us={"somos una reconocida fábrica de cervezas en la ciudad de Córdoba"}
            />
        </StackBackground>
    );
};

export default UsHero;
