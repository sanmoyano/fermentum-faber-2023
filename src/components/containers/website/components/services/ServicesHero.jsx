import { StackBackground, StackBackgroundInfo } from "../../../../decorators";
const ServicesHero = () => {
    return (
        <StackBackground
            bgImage={
                "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fportada_services.jpg?alt=media&token=0be11b09-8a65-4e91-90ef-a2d3c711eff6"
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
