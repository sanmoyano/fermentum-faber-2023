import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const BeersHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2Fportada_beers%20(1).png?alt=media&token=b3e48b67-a69f-4370-bd86-77b2a2bd46e6"
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
