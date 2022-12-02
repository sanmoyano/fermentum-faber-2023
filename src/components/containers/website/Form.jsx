import { Stack, Textarea, FormControl, Text } from "@chakra-ui/react";
const bgColor = {
    background: `linear-gradient(to top left, rgba(146, 79, 158), rgba(255, 153, 150, 0),rgba(189, 214, 48)), linear-gradient(to top right, rgba(23,189,245), rgba(255, 153, 150, 0), rgba(33,79,118)) rgba(95, 134, 155, 1)`,
};
const Form = () => {
    return (
        <Stack
            alignItems={"flex-start"}
            {...bgColor}
            direction={"row"}
            justifyContent={"space-between"}
            p={24}
            width={"100%"}
        >
            <FormControl width={"350px"}>
                <Text>*Si te interesa vender nuestros productos llamá al (351)371-3106</Text>
                <Textarea placeholder="Here is a sample placeholder" />
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
