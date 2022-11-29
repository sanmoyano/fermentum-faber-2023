import { StackBackground, StackBackgroundInfo } from "../../../../decorators";
const ServicesHero = () => {
    return (
        <StackBackground bgImage={"../../../../assets/images/portada_services.jpg"}>
            <StackBackgroundInfo
                info={"Atendemos tus necesidades, conoce nuestros servicios comerciales."}
                title={"servicios"}
            />
        </StackBackground>
    );
};

export default ServicesHero;
