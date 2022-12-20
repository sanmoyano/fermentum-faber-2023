import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const HomeHero = () => {
    const info = [
        {
            title: "fermentum faber",
            info: "Somos una reconocida fábrica de cervezas de Córdoba. Atendemos tus necesidades, conoce nuestros servicios comerciales. Conoce todo sobre nuestros estilos.",
        },
    ];

    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_home.jpg?alt=media&token=8eeae76e-49a3-4edc-b7aa-e96d8747821a"
            }
        >
            {info.map((title, i) => (
                <StackBackgroundInfo key={i} info={title.info} title={title.title} />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
