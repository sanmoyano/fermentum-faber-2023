import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const WhereHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_where.jpg?alt=media&token=35a3affb-fd9c-42e3-bad5-b2677cee4d55"
            }
        >
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
