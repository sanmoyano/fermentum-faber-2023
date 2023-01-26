import { StackBackground, StackBackgroundInfo } from "../../../../decorators";
const ServicesHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fservicios%2Fportada_servicios.jpg?alt=media&token=dba2e4ed-4bfb-481b-8a31-76259b5be52b"
            }
        >
            <StackBackgroundInfo
                info={"Atendemos tus necesidades, conoce nuestros servicios comerciales."}
                title={"servicios"}
            />
        </StackBackground>
    );
};

export default ServicesHero;
