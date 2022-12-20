import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const WhereHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_where.jpg?alt=media&token=858111c3-7df2-4a15-94cb-e6314093a0a0"
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
