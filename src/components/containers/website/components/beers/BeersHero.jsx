import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const BeersHero = () => {
    return (
        <StackBackground bgImage={"portada_beers.png"}>
            <StackBackgroundInfo
                beers={
                    "tenemos una gran variedad de estilos, pero los que más se caracterizan son los de tipo ipa"
                }
                title={"nuestros estilos"}
            />
        </StackBackground>
    );
};

export default BeersHero;
