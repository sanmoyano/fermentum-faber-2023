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
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Finicio%2Fportada_home.jpg?alt=media&token=f05aed38-ea63-4cdb-b24e-f4fc253e38e2"
            }
        >
            {info.map((title, i) => (
                <StackBackgroundInfo key={i} info={title.info} title={title.title} />
            ))}
        </StackBackground>
    );
};

export default HomeHero;
