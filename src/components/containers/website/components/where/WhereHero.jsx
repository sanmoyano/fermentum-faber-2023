import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const WhereHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_where.jpg"}>
            <StackBackgroundInfo
                info={
                    "Nos podes econtrar en distintas zonas y localidades de la ciudad de Córdoba."
                }
                title={"donde estamos"}
            />
        </StackBackground>
    );
};

export default WhereHero;
