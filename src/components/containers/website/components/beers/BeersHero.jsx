import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const BeersHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2Fportada_beers.png?alt=media&token=de913964-1f89-48e2-83fd-e6902abf179c"
            }
        >
            <StackBackgroundInfo
                info={
                    "Tenemos una gran variedad de estilos, pero los que más se caracterizan son los de tipo ipa."
                }
                title={"nuestros estilos"}
            />
        </StackBackground>
    );
};

export default BeersHero;
