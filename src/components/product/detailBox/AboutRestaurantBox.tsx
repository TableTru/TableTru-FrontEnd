import React from "react";
import { Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./TableResponsive.css"

const Root = styled("div")(({ theme }) => ({
    width: "100%", ...theme.typography.body2, color: theme.palette.text.secondary, "& > :not(style) ~ :not(style)": {
        marginTop: theme.spacing(2),
    },
}));


type timeTemp = {

    day: string
    open_time: string
    close_time: string

}

function AboutRestaurantBox({ description, openTime }: { description: string, openTime: Array<timeTemp> }) {
    return (<>
        <Root>
            <Typography>
                {description}
            </Typography>
            <Divider> เวลาทำการ </Divider>
            {/*DateList*/}

            <div className="flex items-center justify-center">

                <div className="container  ">
                    <table className="w-full flex flex-row overflow-x-scroll hide-scroll-bar flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead className="text-gray-800">
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px" >ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                            <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">วันที่</th>
                                <th className="p-3 text-left">เปิด</th>
                                <th className="p-3 text-left w-110px">ปิด</th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            {
                                openTime.map((time) => {
                                    return(
                                    <>
                                  
                                        <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                            <td className="ิborder-grey-light border bg-gray-100  p-3">{time.day}</td>
                                            <td className="border-grey-light border  p-3">{time.open_time}</td>
                                            <td className="border-grey-light border  p-3">{time.close_time}</td>
                                        </tr>
                                    
                                    </>

                                    );
                                })

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Root>

    </>);
}

export default AboutRestaurantBox;