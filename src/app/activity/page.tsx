import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/Appbar";
import TabSelect from "@/components/activity/TabSelect";

function Activity() {
    return (
        <>
            <Appbar />
                <TabSelect/>
            <BottomNavigationbar />
        </>

    );
};
export default Activity;