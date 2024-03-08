"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { spacing } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterList from "@mui/icons-material/FilterList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";


type Anchor = "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [sort, setSort] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Accordion>

        
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <FormLabel id="demo-radio-buttons-group-label">เรียงตาม</FormLabel>
            </AccordionSummary>
            <AccordionActions>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="default"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="default"
                control={<Radio />}
                label="ค่าเริ่มต้น"
              />
              <FormControlLabel
                value="lowToHigh"
                control={<Radio />}
                label="ราคาต่ำไปสูง"
              />
              <FormControlLabel
                value="highest"
                control={<Radio />}
                label="ราคาสูงสุด"
              />
              <FormControlLabel
                value="reviewScore"
                control={<Radio />}
                label="คะแนนรีวิว"
              />
              <FormControlLabel
                value="nearest"
                control={<Radio />}
                label="ใกล้ที่สุดก่อน"
              />
            </RadioGroup>
            </AccordionActions>
         
      </Accordion>
      <Divider />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <FormControl sx={{ p: "16px" }}>
            <FormLabel id="demo-radio-buttons-group-label">หมวดหมู่</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all-category"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="ทั้งหมด"
              />
              <FormControlLabel value="thai" control={<Radio />} label="ไทย" />
              <FormControlLabel
                value="international"
                control={<Radio />}
                label="นานาชาติ"
              />
              <FormControlLabel
                value="japanese"
                control={<Radio />}
                label="ญิ่ปุ่น"
              />
              <FormControlLabel
                value="chinese"
                control={<Radio />}
                label="จีน"
              />
              <FormControlLabel
                value="italian"
                control={<Radio />}
                label="อิตาลี"
              />
              <FormControlLabel
                value="fusions"
                control={<Radio />}
                label="ฟิวชั่น"
              />
            </RadioGroup>
          </FormControl>
        </AccordionSummary>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <FormControl sx={{ p: "16px" }}>
            <FormLabel id="demo-radio-buttons-group-label">ที่อยู่</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all-location"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="silom"
                control={<Radio />}
                label="สีลม"
              />
              <FormControlLabel
                value="satorn"
                control={<Radio />}
                label="สาทร"
              />
              <FormControlLabel
                value="promppong"
                control={<Radio />}
                label="พร้อมพงษ์"
              />
              <FormControlLabel
                value="rachatevi"
                control={<Radio />}
                label="ราชเทวี"
              />
              <FormControlLabel
                value="ladprao"
                control={<Radio />}
                label="ห้าแยกลาดพร้าว"
              />
              <FormControlLabel value="asok" control={<Radio />} label="อโศก" />
            </RadioGroup>
          </FormControl>
        </AccordionSummary>
      </Accordion>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            onClick={toggleDrawer(anchor, true)}
            sx={{ ml: "16px" }}
            aria-label="FilterListIcon"
          >
            {" "}
            <FilterList color="primary" />{" "}
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
