import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const WhereHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_where.jpg"}>
            <StackBackgroundInfo
                title={"donde estamos"}
                where={
                    "nos podes econtrar en distintas zonas y localidades de la ciudad de Córdoba"
                }
            />
        </StackBackground>
    );
};

export default WhereHero;
