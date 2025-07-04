import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { baseApiURL } from "../../baseUrl";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions";
import { CiEdit } from "react-icons/ci";
<CiEdit />

const Profile = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useLocation();
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const [password, setPassword] = useState({
    new: "",
    current: "",
  });
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `${baseApiURL()}/${router.state.type}/details/getDetails`,
        { employeeId: router.state.loginid },
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.data.success) {
          setData(response.data.user);
          dispatch(
            setUserData({
              fullname: `${response.data.user[0].firstName} ${response.data.user[0].middleName} ${response.data.user[0].lastName}`,
              employeeId: response.data.user[0].employeeId,
            })
          );
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [router.state.loginid, router.state.type]);

  const checkPasswordHandler = (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `${baseApiURL()}/faculty/auth/login`,
        { loginid: router.state.loginid, password: password.current },
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.data.success) {
          changePasswordHandler(response.data.id);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error(error);
      });
  };

  const changePasswordHandler = (id) => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .put(
        `${baseApiURL()}/faculty/auth/update/${id}`,
        { loginid: router.state.loginid, password: password.new },
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          setPassword({ new: "", current: "" });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error(error);
      });
  };

  return (
    <div className="w-full mx-auto my-8 flex justify-around items-start shadow-lg">
      {data && (
     
        < >
     
         
          <div className="shadow-xl borrder border-2px  sm:flex p-4 gap-8 border-top blue ">
          <div  className="gap-4">
           
            <p className="text-3xl pb-4 bold text-blue-600 ">Personal Details</p>  
            <p className="text-xl font-semibold">
              {data[0].firstName} {data[0].middleName} {data[0].lastName}{" "}
             
            </p>
            <div className="mt-3">
              <p className="text-lg font-normal mb-2 gap-8">
                <span>  Employee Id: </span>
                <span> {data[0].employeeId}</span>
              
              </p>
              <p className="text-lg font-normal mb-2">Post: {data[0].post}</p>
              <p className="text-lg font-normal mb-2">
                Email Id: {data[0].email}
              </p>
              <p className="text-lg font-normal mb-2">
                Phone Number: {data[0].phoneNumber}
              </p>
              <p className="text-lg font-normal mb-2">
                Department: {data[0].department}
              </p>
            </div>
            <button
              className={`${
                showPass ? "bg-red-100 text-red-600" : "bg-blue-600 text-white flex"
              }  px-3 py-1 rounded mt-4`}
              onClick={() => setShowPass(!showPass)}
            >
               <CiEdit />
              {!showPass ? "  Update Password" : "Close"}
            </button>
            {showPass && (
              <form
                className="mt-4 border-t-2 border-blue-500 flex flex-col justify-center items-start"
                onSubmit={checkPasswordHandler}
              >
                <input
                  type="password"
                  value={password.current}
                  onChange={(e) =>
                    setPassword({ ...password, current: e.target.value })
                  }
                  placeholder="Current Password"
                  className="px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4"
                />
                <input
                  type="password"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                  placeholder="New Password"
                  className="px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4"
                />
                <button
                  className="mt-4 hover:border-b-2 hover:border-blue-700"
                  onClick={checkPasswordHandler}
                  type="submit"
                >
                Update Password
                </button>
              </form>
            )}
          </div>
          <img
            src={process.env.REACT_APP_MEDIA_LINK + "/" + data[0].profile}
            alt="faculty profile"
            className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
          />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
