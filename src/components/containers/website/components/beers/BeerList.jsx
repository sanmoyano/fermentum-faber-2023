import { ListContainer } from "../../../../decorators";

const BeerList = () => {
    const beers = [
        {
            title: "Golden",
            route: "",
        },
        {
            title: "Scotch",
            route: "",
        },
        {
            title: "Strong Ale",
            route: "",
        },
        {
            title: "APA",
            route: "",
        },
        {
            title: "AAA",
            route: "",
        },
        {
            title: "Session IPA",
            route: "",
        },
        {
            title: "Caramel IPA",
            route: "",
        },
        {
            title: "American IPA",
            route: "",
        },
        {
            title: "Juicy IPA",
            route: "",
        },
    ];

    return <ListContainer itemArray={beers} />;
};

export default BeerList;
