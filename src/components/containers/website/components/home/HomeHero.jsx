import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const HomeHero = () => {
    const info = [
        {
            title: "fermentum faber",
            info: "Somos una reconocida fábrica de cervezas de Córdoba. Atendemos tus necesidades, conoce nuestros servicios comerciales. Conoce todo sobre nuestros estilos.",
        },
    ];

    return (
        <StackBackground bgImage={"../../../../assets/images/portada_home.jpg"}>
            {info.map((title, i) => (
                <StackBackgroundInfo key={i} info={title.info} title={title.title} />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
