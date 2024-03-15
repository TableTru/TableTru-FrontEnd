"use client";
import {
  Accordion,
  FormControl,
  AccordionDetails,
  AccordionActions,
  AccordionSummary,
  FormControlLabel,
  FormLabel,
  Divider,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Filter() {
  return (
    <>
      <FormLabel id="demo-Checkbox-buttons-group-label">เรียงตาม</FormLabel>
      <FormControlLabel
        value="default"
        control={<Checkbox />}
        label="ค่าเริ่มต้น"
      />
      <FormControlLabel
        value="lowToHigh"
        control={<Checkbox />}
        label="ราคาต่ำไปสูง"
      />
      <FormControlLabel
        value="highest"
        control={<Checkbox />}
        label="ราคาสูงสุด"
      />
      <FormControlLabel
        value="reviewScore"
        control={<Checkbox />}
        label="คะแนนรีวิว"
      />
      <FormControlLabel
        value="nearest"
        control={<Checkbox />}
        label="ใกล้ที่สุดก่อน"
      />
      <Divider />
      <FormControl sx={{ pt: "16px" }}>
        <FormLabel id="demo-radio-buttons-group-label">หมวดหมู่</FormLabel>
        <FormControlLabel value="all" control={<Checkbox />} label="ทั้งหมด" />
        <FormControlLabel value="thai" control={<Checkbox />} label="ไทย" />
        <FormControlLabel
          value="international"
          control={<Checkbox />}
          label="นานาชาติ"
        />
        <FormControlLabel
          value="japanese"
          control={<Checkbox />}
          label="ญิ่ปุ่น"
        />
        <FormControlLabel value="chinese" control={<Checkbox />} label="จีน" />
        <FormControlLabel
          value="italian"
          control={<Checkbox />}
          label="อิตาลี"
        />
        <FormControlLabel
          value="fusions"
          control={<Checkbox />}
          label="ฟิวชั่น"
        />
      </FormControl>
      <Divider />
          <FormControl sx={{ pt: "16px" }}>
            <FormLabel id="demo-radio-buttons-group-label">ที่อยู่</FormLabel>
            <FormControlLabel
              value="silom"
              control={<Checkbox />}
              label="สีลม"
            />
            <FormControlLabel
              value="satorn"
              control={<Checkbox />}
              label="สาทร"
            />
            <FormControlLabel
              value="promppong"
              control={<Checkbox />}
              label="พร้อมพงษ์"
            />
            <FormControlLabel
              value="rachatevi"
              control={<Checkbox />}
              label="ราชเทวี"
            />
            <FormControlLabel
              value="ladprao"
              control={<Checkbox />}
              label="ห้าแยกลาดพร้าว"
            />
            <FormControlLabel
              value="asok"
              control={<Checkbox />}
              label="อโศก"
            />
          </FormControl>
    </>
  );
}
