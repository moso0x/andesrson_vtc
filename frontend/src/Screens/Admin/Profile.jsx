import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions";
import { baseApiURL } from "../../baseUrl";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { loginid, type } = location.state || {};

  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const [password, setPassword] = useState({
    new: "",
    current: "",
  });

  useEffect(() => {
    if (!loginid || !type) return;

    axios
      .post(
        `${baseApiURL()}/${type}/details/getDetails`,
        { enrollmentNo: loginid },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data.success) {
          const user = response.data.user[0];
          setData(user);
          dispatch(
            setUserData({
              fullname: `${user.firstName} ${user.middleName} ${user.lastName}`,
              semester: user.semester,
              enrollmentNo: user.enrollmentNo,
              branch: user.branch,
            })
          );
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load profile.");
      });
  }, [dispatch, loginid, type]);

  const checkPasswordHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseApiURL()}/student/auth/login`,
        { loginid, password: password.current },
        {
          headers: { "Content-Type": "application/json" },
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
        toast.error(error.response?.data?.message || "Login failed.");
        console.error(error);
      });
  };

  const changePasswordHandler = (id) => {
    axios
      .put(
        `${baseApiURL()}/student/auth/update/${id}`,
        { loginid, password: password.new },
        {
          headers: { "Content-Type": "application/json" },
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
        toast.error(error.response?.data?.message || "Update failed.");
        console.error(error);
      });
  };

  if (!loginid || !type) {
    return (
      <div className="p-4 text-red-600 font-semibold">
        Invalid session. Please login again.
      </div>
    );
  }

  return (
    <div className="w-full mx-auto my-8 flex justify-between items-start flex-wrap">
      {data && (
        <>
          <div className="max-w-xl">
            <p className="text-2xl font-semibold">
              Hello {data.firstName} {data.middleName} {data.lastName} 👋
            </p>
            <div className="mt-3">
              <p className="text-lg mb-2">Enrollment No: {data.enrollmentNo}</p>
              <p className="text-lg mb-2">Branch: {data.branch}</p>
              <p className="text-lg mb-2">Semester: {data.semester}</p>
              <p className="text-lg mb-2">Phone Number: +91 {data.phoneNumber}</p>
              <p className="text-lg mb-2">Email Address: {data.email}</p>
            </div>
            <button
              className={`${
                showPass ? "bg-red-100 text-red-600" : "bg-blue-600 text-white"
              } px-3 py-1 rounded mt-4`}
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? "Change Password" : "Close Change Password"}
            </button>
            {showPass && (
              <form
                className="mt-4 border-t-2 border-blue-500 flex flex-col items-start"
                onSubmit={checkPasswordHandler}
              >
                <input
                  type="password"
                  value={password.current}
                  onChange={(e) =>
                    setPassword({ ...password, current: e.target.value })
                  }
                  placeholder="Current Password"
                  className="px-3 py-1 border-2 border-blue-500 rounded mt-4"
                  required
                />
                <input
                  type="password"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                  placeholder="New Password"
                  className="px-3 py-1 border-2 border-blue-500 rounded mt-4"
                  required
                />
                <button
                  className="mt-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  type="submit"
                >
                  Change Password
                </button>
              </form>
            )}
          </div>

          <img
            src={
              data.profile
                ? `${process.env.REACT_APP_MEDIA_LINK}/${data.profile}`
                : "https://via.placeholder.com/240?text=No+Image"
            }
            alt="student profile"
            className="h-[240px] w-[240px] object-cover rounded-lg shadow-md mt-6 sm:mt-0"
          />
        </>
      )}
    </div>
  );
};

export default Profile;
