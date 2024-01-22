import DatePick from "./selectBox/DatePick";
import TimePick from "./selectBox/TimePick";
import MenuList from './selectBox/MenuList';
export default function SelectDateBox() {
  return (
    <>
      <div className="mb-6 ">
        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
          รายละเอียด:
        </h2>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl ">
          <div className="p-2 lg:p-5 ">
            <div className="flex flex-col justify-center gap-x-10 gap-y-4">
            <div className="flex">
                <DatePick />
                <TimePick />
                </div>
                <MenuList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
