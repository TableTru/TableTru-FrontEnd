import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import Rating from "@mui/material/Rating";

import ReplyBox from "@/components/product/detailBox/comments/ReplyBox"
import {useState} from "react";




export default function AlignItemsList() {
    const [value, setValue] = useState<number | null>(2);
    // const [showMore, setShowMore] = useState(false);

    const [showReply,setShowReply] = useState(false)
    //put data props here
    function handleClick(){
        setShowReply(false);
    }


    return (<List sx={{width: "100%", bgcolor: "background.paper"}}>

            {/* getmore item here */}
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>


                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={<React.Fragment>
                        {/*React Data Props here*/}
                        <Rating name="read-only" value={value} readOnly/>

                            แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน
                            กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า
                            สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น
                            เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป
                            บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ

                        <Button className="btn" startIcon={<ReplyIcon/>} onClick={() => setShowReply(!showReply)}>
                            Reply

                        </Button>
                            {showReply && (
                                <ReplyBox/>
                            )}

                    </React.Fragment>}
                />
            </ListItem>


            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>


                <ListItemText
                    primary="Bob the Builder"
                    secondary={<React.Fragment>
                        {/*React Data Props here*/}
                        <Rating name="read-only" value={5} readOnly/>

                        {/*<h6>*/}
                        {/*/!*showmore text*!/*/}
                        {/*{showMore ? "แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ" : `${"แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ".substring(0,250)}`}*/}
                        {/*<Button className="btn" onClick={() => setShowMore(!showMore)}>*/}
                        {/*{showMore ? "Show less" : "Show more"}*/}
                        {/*</Button>*/}
                        {/*</h6>*/}
                        แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน
                        กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า
                        สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น
                        เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป
                        บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ
                            <Button className="btn" startIcon={<ReplyIcon/>} onClick={() => setShowReply(!showReply)}>
                                Reply

                            </Button>
                            {showReply && (
                                <ReplyBox/>
                            )}

                    </React.Fragment>}
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>


                <ListItemText
                    primary="Bob the Builder"
                    secondary={<React.Fragment>
                        {/*React Data Props here*/}
                        <Rating name="read-only" value={5} readOnly/>
                        {/*<h6>*/}
                        {/*    /!*showmore text*!/*/}
                        {/*    {showMore ? "แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ" : `${"แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ".substring(0,250)}`}*/}
                        {/*    <Button className="btn" onClick={() => setShowMore(!showMore)}>*/}
                        {/*    {showMore ? "Show less" : "Show more"}*/}
                        {/*    </Button>*/}
                        {/*</h6>*/}

                            แบดซิมห่วยซี้ ดีไซน์เนอร์สไปเดอร์อวอร์ดคาร์จัมโบ้ ภควัทคีตาจูเนียร์ก๊วน
                            กับดักแก๊สโซฮอล์ดีพาร์ตเมนท์จิ๊กโก๋บูติค แฟรีด็อกเตอร์ รีไทร์แอ็กชั่นแอโรบิค ทอร์นาโดพ่อค้า
                            สเตชั่นแซมบ้าชาร์ต เซ็นทรัลกราวนด์เทควันโดป๊อปเอ็กซ์เพรส บ๋อยคอรัปชั่นบิลแพทเทิร์น
                            เบิร์นอ่อนด้อยบ๊อบดยุคสมิติเวช ชินบัญชรสโตนมหาอุปราชา เซ็กซี่ตะหงิดซัพพลายสเต็ป
                            บาบูนอีโรติกฮาโลวีนชีส ซาบะ ลอจิสติกส์เที่ยงคืนฟลุตติ่มซำ

                            <Button className="btn" startIcon={<ReplyIcon/>} onClick={() => setShowReply(!showReply)}>
                                Reply

                            </Button>
                            {showReply && (
                                <ReplyBox/>
                            )}

                    </React.Fragment>}
                />
            </ListItem>

            {/* More Item Here */}


            {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>


        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
                
              <Rating name="read-only" value={value} readOnly />
                <h6>

                    {showMore ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" : `${"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?".substring(0,250)}`}
                    <Button className="btn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                    </Button>
                </h6>
            </React.Fragment>
          }
        />
      </ListItem> */}

        </List>);
}