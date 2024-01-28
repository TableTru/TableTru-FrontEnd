import "./TableResponsive.css"

function TableResponsive() {
    return (
        <>
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
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="ิborder-grey-light border bg-yellow-100  p-3">วันจันทร์</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap   sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-pink-100 p-3">วันอังคาร</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-green-100 p-3">วันพุธ</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-orange-100 p-3">วันพฤหัส</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-sky-100 p-3">วันศุกร์</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-violet-100 p-3">วันเสาร์</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                            <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border bg-red-100 p-3">วันอาทิตย์</td>
                                <td className="border-grey-light border  p-3">10:00</td>
                                <td className="border-grey-light border  p-3 hover:font-medium ">12:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
export default TableResponsive;