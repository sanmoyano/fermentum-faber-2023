import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const BeersHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_beers.png?alt=media&token=5bafdd9b-42b9-4bfd-9e68-27e13943422b"
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
