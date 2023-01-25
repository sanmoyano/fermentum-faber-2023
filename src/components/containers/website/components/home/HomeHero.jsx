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
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fportada.jpg?alt=media&token=463b1866-187b-4044-84b4-2b5c754b8cc5"
            }
        >
            {info.map((title, i) => (
                <StackBackgroundInfo key={i} info={title.info} title={title.title} />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
