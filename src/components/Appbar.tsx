import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import IconBottonSelect from "./botton/MyLocation";
export default function Appbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <IconBottonSelect />
      </NavbarBrand>
    </Navbar>
  );
}
