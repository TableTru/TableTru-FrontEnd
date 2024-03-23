import Appbar from "@/components/HeaderAppBar";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import RestaurantCard from "@/components/cards/Restaurantcard";
import ToggleTest from "@/components/AppBarToggle";
import { storeTemp } from "@/data/store";
import FilterBar from "@/components/FilterBar";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Box,
    Grid,
    MenuItem,
    Select,
} from "@mui/material";

export default function SearchPage() {
    return (
        <>
            <div className="pt-24 mx-8 md:mx-24 lg:mx-32">
                <SearchBar placeholder={"Search Keyword..."} />
            </div>

            <Filter />
            
            <div className="w-fit flex mr-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <RestaurantCard />
            </div>
        </>
    );
}
