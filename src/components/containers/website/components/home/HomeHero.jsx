import { StackBackground, StackBackgroundInfo } from "../../../../decorators";

const HomeHero = () => {
    const info = [
        {
            title: "fermentum faber",
            where: "somos una reconocida fábrica de cervezas de córdoba",
            services: "atendemos tus necesidades, conoce nuestros servicios comerciales",
            beers: "conoce todo sobre nuestros estilos",
        },
    ];

    return (
        <StackBackground bgImage={"portada_home"}>
            {info.map((title, i) => (
                <StackBackgroundInfo
                    key={i}
                    beers={title.beers}
                    services={title.services}
                    title={title.title}
                    where={title.where}
                />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
