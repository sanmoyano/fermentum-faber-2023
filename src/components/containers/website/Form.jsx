import {
    Stack,
    Textarea,
    FormControl,
    Text,
    Button,
    FormLabel,
    FormHelperText,
    Input,
} from "@chakra-ui/react";
const bgColor = {
    background: `linear-gradient(to top left, rgba(146, 79, 158), rgba(255, 255, 255, 0),rgba(189, 214, 48)), linear-gradient(to top right, rgba(23,189,245), rgba(255, 255, 255, 0), rgba(33,79,118)) rgba(95, 134, 155, 1)`,
};
const Form = () => {
    return (
        <Stack
            alignItems={"flex-start"}
            {...bgColor}
            direction={"row"}
            justifyContent={"space-between"}
            paddingBlock={10}
            paddingInline={24}
            width={"100%"}
        >
            <FormControl width={"350px"}>
                <Stack justifyContent={"center"} maxWidth={"700px"}>
                    <Text>
                        *Si te interesa vender nuestros productos llamá al
                        <strong> (351)371-3106</strong>
                    </Text>
                    <Stack>
                        <FormLabel htmlFor="nombre">Nombre</FormLabel>
                        <Input bgColor={"brand.200"} id="nombre" type="nombre" width={"100%"} />
                        <FormLabel htmlFor="nombre">Email</FormLabel>
                        <Input bgColor={"brand.200"} id="email" type="email" />
                        <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                        <Textarea bgColor={"brand.200"} id="mensaje" type="mensaje" />
                    </Stack>
                </Stack>
                <Button marginTop={6} size={"sm"} type={"submit"}>
                    Enviar
                </Button>
            </FormControl>
            <Stack>
                <Text>Horarios</Text>
            </Stack>
            <Stack>
                <Text>Econtranos</Text>
            </Stack>
            <Stack>
                <Text>Redes</Text>
            </Stack>
        </Stack>
    );
};

export default Form;
