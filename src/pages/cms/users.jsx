import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const CMSUsers = () => {
  const { errorMessage, handleEditPassword, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [toggleEditPassword, setToggleEditPassword] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [editUserId, setEditUserId] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [errMsg, setErrMsg] = useState(errorMessage);
  const userId = window.localStorage.getItem("user");
  const navigate = useNavigate();

  const getUsers = async () => {
    const url = "https://veenocks-cms.onrender.com/api/users";
    const response = await axios.get(url);
    setUsers(response.data.users);
  };

  const getUser = async () => {
    const url = "https://veenocks-cms.onrender.com/api/users";
    const { data } = await axios.get(`${url}/${userId}`);
    setUserRole(data.user.role);
  };

  useEffect(() => {
    // Fetch users and user role
    getUsers();
    getUser();
  }, []);

  useEffect(() => {
    // Redirect if the user is not a super admin
    if (userRole && userRole !== "super_admin") {
      navigate("/cms/dashboard/home");
    }
  }, [userRole, navigate]);

  const onChangePasswordInput = (e) => {
    setPasswordInput({
      ...passwordInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleDeleteModal = (id) => {
    setToggleDeleteModal(true);
    setDeleteUserId(id);
    setToggleEditPassword(false);
  };

  const handleDeleteUser = async () => {
    const url = "https://veenocks-cms.onrender.com/api/users";
    await axios.delete(`${url}/${deleteUserId}`);
    setToggleDeleteModal(false);
    setToggleEditPassword(false);
    getUsers();
  };

  const handleToggleEditPassword = (id) => {
    setToggleEditPassword(true);
    setEditUserId(id);
    setToggleDeleteModal(false);
  };

  const editPassword = (editUserId, passwordInput) => {
    handleEditPassword(editUserId, passwordInput);
    logout();
  };

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addNewUser = async () => {
    await axios.post("https://veenocks-cms.onrender.com/api/auth/register", {
      username: newUser.username,
      password: newUser.password,
    });

    setNewUser({
      username: "",
      password: "",
    });

    getUsers();
  };

  return (
    <>
      <main className="p-[40px]">
        <span className="block mb-[20px]">Users</span>
        <div className="max-w-[400px] flex flex-col gap-[5px] mb-[40px]">
          {users.map((user, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-[10px] shadow hover:shadow-md"
            >
              <span>{user.username}</span>
              <div className="flex items-center gap-[10px]">
                {user.role !== "super_admin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => handleToggleDeleteModal(user._id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                )}
                {user.role === "super_admin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => handleToggleEditPassword(user._id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewUser();
            }}
            className="flex flex-col gap-[10px] max-w-[400px] mt-[20px]"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={newUser.username}
              onChange={handleInputChange}
              className="p-[10px] border shadow"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={newUser.password}
              onChange={handleInputChange}
              className="p-[10px] border shadow"
            />
            <button type="submit" className="p-[10px] bg-[#121212] text-white">
              Add User
            </button>
          </form>
        </div>
      </main>

      {toggleDeleteModal && (
        <div className="flex justify-center items-start pt-[10%]">
          <div
            className="fixed inset-0 bg-black z-[1] opacity-[.5]"
            onClick={() => setToggleDeleteModal(false)}
          ></div>
          <div className="bg-white p-[40px] shadow absolute z-[2] left-[50%] translate-x-[-50%] top-[10%]">
            <span
              className="absolute top-[10px] right-[20px] cursor-pointer hover:text-red-500"
              onClick={() => setToggleDeleteModal(false)}
            >
              X
            </span>
            <span className="block mb-[10px]">
              Do you really want to delete this user?
            </span>
            <div className="flex justify-center gap-[10px]">
              <button
                className="p-[7px_20px] bg-[#121212] text-white"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {toggleEditPassword && (
        <div className="flex justify-center items-start pt-[10%]">
          <div
            className="fixed inset-0 bg-black z-[1] opacity-[.5]"
            onClick={() => setToggleEditPassword(false)}
          ></div>
          <div className="bg-white p-[40px] shadow absolute z-[2] left-[50%] translate-x-[-50%] top-[10%]">
            <span
              className="absolute top-[10px] right-[20px] cursor-pointer hover:text-red-500"
              onClick={() => setToggleEditPassword(false)}
            >
              X
            </span>

            <div className="flex flex-col gap-[10px] mt-[20px]">
              <span>{errMsg}</span>
              <input
                type="password"
                name="oldPassword"
                placeholder="Enter old password"
                className="p-[10px] min-w-[300px] shadow border outline-none"
                onChange={onChangePasswordInput}
                value={passwordInput.oldPassword}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="p-[10px] min-w-[300px] shadow border outline-none"
                onChange={onChangePasswordInput}
                value={passwordInput.newPassword}
              />
              <button
                className="p-[7px_20px] bg-[#121212] text-white"
                onClick={() => editPassword(editUserId, passwordInput)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
