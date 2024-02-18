import * as React from "react";

const ReplyBox = () => {
    return (
        <>
            {/*Add Comment Reply after click*/}
            <div className="mt-4">
                <form action="#" method="POST">
                    <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <img src="https://via.placeholder.com/40" alt="User Avatar"
                                 className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex-1">
                            <input type={"text"} placeholder="Add a reply..."
                                   className="w-full border-b rounded-lg border-gray-300 focus:outline-none focus:border-red-500"/>
                        </div>
                        <button type="submit"
                                className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-800">Reply
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
}; export default ReplyBox;