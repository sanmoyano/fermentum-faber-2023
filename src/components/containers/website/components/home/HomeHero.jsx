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
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2FDSC_0648.jpg?alt=media&token=288a52ad-902a-4b2a-8c17-f40d0a0f881f"
            }
        >
            {info.map((title, i) => (
                <StackBackgroundInfo key={i} info={title.info} title={title.title} />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
