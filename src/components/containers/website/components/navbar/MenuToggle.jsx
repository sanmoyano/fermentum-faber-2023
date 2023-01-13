import { IconButton } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const MenuToggle = ({ open, toggle }) => {
    const sizeIcon = {
        size: "30px",
    };

    return (
        <IconButton
            aria-label={"toggle menu"}
            color={"brand.200"}
            icon={open ? <IoMdClose {...sizeIcon} /> : <HiMenu {...sizeIcon} />}
            size={"lg"}
            variant={"ghost"}
            onClick={toggle}
        />
    );
};

export default MenuToggle;
