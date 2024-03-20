import{useEffect, useState, Fragment} from "react";
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
import { User } from "@/interfaces/User";
import { useParams } from "next/navigation";

interface Review {
    store_id: number;
    store_name: string;
    review_comment: string;
    createAt: Date;
    updateAt: Date;
}

const userTemp: User =
{
    user_id: 1,
    username: "Aungpor",
    password: "por1234",
    user_status: "user",
    profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
    email: "aungpor.napat@gmail.com",
    phone_num: "0813111234",
    latitude: 0,
    longitude: 0,
    createAt: new Date(),
    updateAt: new Date(),

}


export default function AlignItemsList({review} : {review:Array<Review>}) {
    const [value, setValue] = useState<number | null>(2);
    const params = useParams<{ reviewId: string }>();

    let show: Review;

    const [showReply, setShowReply] = useState(false)
    //put data props here
    const [comment,setComment] = useState<Review>()

    function handleClick() {
        setShowReply(false);
    }

    function callBackend(id: string){
        const temp: Array<Review> = review.filter(function (item: Review) {
            if (item.store_id == parseInt(id)) {
                //จะถูก save ใน show ทันที
                return item
            }})
            show = temp[1]
            setComment(show)
            console.log(review)
    }
    useEffect(() => {
        callBackend(params.reviewId);
    }, [])

    return (
        review.map((item, index) => (
                <List key={index} sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={`${item?.store_id}`} />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={<Fragment>
                                {/*React Data Props here*/}
                                <Rating name="read-only" value={value} readOnly />
                                {`${item?.review_comment}`}
                                <Button className="btn" startIcon={<ReplyIcon />} onClick={() => setShowReply(!showReply)}>
                                    Reply
                                </Button>
                                {showReply && (
                                    <ReplyBox />
                                )}

                            </Fragment>}
                        />
                    </ListItem>
                </List>
        ))
    );
}