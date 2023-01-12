import { IconButton } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const MenuToggle = ({ open, toggle }) => {
    return (
        <IconButton
            color={"brand.200"}
            icon={open ? <IoMdClose /> : <HiMenu />}
            variant={"ghost"}
            onClick={toggle}
        />
    );
};

export default MenuToggle;
