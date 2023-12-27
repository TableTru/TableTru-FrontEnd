import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/Appbar";
import TabSelect from "@/components/activity/TabSelect";

function Activity() {
    return (
        <>
            <Appbar />
            <h1>Activity</h1>
                <TabSelect/>
            <BottomNavigationbar />
        </>

    );
};
export default Activity;