import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const UsHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fnosotros%2Fportada_nosotros.jpg?alt=media&token=abcb7e8e-de71-406f-a579-f74555f5ecdb"
            }
        >
            <StackBackgroundInfo
                info={"Somos una reconocida fábrica de cervezas en la ciudad de Córdoba."}
                title={"nosotros"}
            />
        </StackBackground>
    );
};

export default UsHero;
