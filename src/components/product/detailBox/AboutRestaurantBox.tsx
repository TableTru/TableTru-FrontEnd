import React from "react";
import {Typography, Divider} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableResponsive from "./TableResponsive";

const Root = styled("div")(({theme}) => ({
    width: "100%", ...theme.typography.body2, color: theme.palette.text.secondary, "& > :not(style) ~ :not(style)": {
        marginTop: theme.spacing(2),
    },
}));


function AboutRestaurantBox() {
    return (<>
            <Root>
                <Typography>
                    ร้านอาหารที่เน้นความหลากหลายของเมนูพิซซ่า พาสต้า ชีสนำเข้า เนื้ออบนำเข้า
                    ที่คุณสามารถดีไซน์มื้ออาหารของคุณเองได้ และเรายังมีเบเกอรี่โฮมเมด และขนมอบมีไว้บริการลูกค้า
                    โดยลูกค้าสามารถเลือกรับประทานที่ร้าน หรือซื้อกลับไปฝากคนที่บ้านก็ได้
                </Typography>
                <Divider> เวลาทำการ </Divider>
                {/*DateList*/}

                <TableResponsive/>

            </Root>
            
        </>);
}

export default AboutRestaurantBox;