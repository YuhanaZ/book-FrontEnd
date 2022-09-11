
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
function Profile() {
  const [changeInputs, setChangeInputs] = useState({});

  async function handleChangePassword() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:8000/user/changePassword",
        changeInputs,
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div>
  

      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 ">
        <div className=" w-2/5 w-full mt-10 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700v h-3/4 ">
          
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8 drop-shadow-md rounded-md mt-5 ">
            <h2 className="text-center font-bold text-xl py-2 text-white">
              Change Password
            </h2>

            <input
              type="password"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Old Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  oldPassword: e.target.value
                })
              }
            />
            <input
              type="password"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  newPassword: e.target.value
                })
              }
            />
            <input
              type="password"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm New Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  confirmNewPassword: e.target.value
                })
              }
            />
            <div className="flex justify-center">
              <button className="w-full inline-flex items-center  justify-center px-2.5 py-2.5 border border-transparent  font-medium rounded  shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleChangePassword}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
