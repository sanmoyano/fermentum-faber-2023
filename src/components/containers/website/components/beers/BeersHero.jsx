import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const BeersHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_beers.png"}>
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
