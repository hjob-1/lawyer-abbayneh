import React from "react";
import { blogerProfile } from "../../utilities/blogerProfile";
import { BiEdit } from "react-icons/bi";
import { MdPublishedWithChanges } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import "./profile.css";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [userProfile, setuserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [file, setFile] = useState(null);
  const user_id = 6;

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = async () => {
    try {
      const user = await axios.get(
        `https://www.server.abbaylaw.com/api/users/${user_id}`
      );
      console.log(user);
      setuserProfile(user.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFile = (evt) => {
    const file = evt.target.files[0];
    setFile(file);
  };

  const handleFORM = () => {
    let data = new FormData();
    const { image, password, email, phone, address, about_job } = userProfile;
    console.log(userProfile);

    data.append("email", email);
    data.append("phone", phone);
    data.append("address", address);
    data.append("password", password);
    data.append("about_job", about_job);
    data.append("image", image);
    data.append("bloger_image", file);

    return data;
  };
  const handleUpdate = async () => {
    if (file !== null) {
      const form = handleFORM();
      const updated = await axios.put(
        `https://www.server.abbaylaw.com/api/users/update/${user_id}`,
        form
      );
      console.log(updated);
    } else {
      const updated = await axios.put(
        `https://www.server.abbaylaw.com/api/users/update/withoutpic/${user_id}`,
        userProfile
      );
      console.log(updated);
    }
    setActive(false);
  };

  const handleInputChange = (evt) => {
    setuserProfile({ ...userProfile, [evt.target.name]: evt.target.value });
  };
  const edit = active && "edit-active";
  return (
    <>
      <NavBar />
      <div className="profile">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="overlay">
              <img src="/images/cover.jpg" alt="profile_image" />
            </div>
            <div className="profile-pic">
              <img src={userProfile.image} alt="" />
            </div>
            <div className="main-profile">
              <div>
                <span> Full Name:</span>
                <input
                  className="input-field"
                  id={edit}
                  disabled={!edit}
                  name="full_name"
                  type="text"
                  value={userProfile.full_name}
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>Email:</span>
                <input
                  id={edit}
                  name="email"
                  disabled={!edit}
                  className="input-field"
                  type="text"
                  value={userProfile.email}
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>Phone No: </span>
                <input
                  id={edit}
                  name="phone"
                  disabled={!edit}
                  className="input-field"
                  type="text"
                  value={userProfile.phone}
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>Address: </span>
                <input
                  id={edit}
                  name="address"
                  disabled={!edit}
                  className="input-field"
                  type="text"
                  value={userProfile.address}
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>About job: </span>
                <input
                  className="input-field"
                  name="about_job"
                  id={edit}
                  disabled={!edit}
                  type="text"
                  value={userProfile.about_job}
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>New password: </span>
                <input
                  className="input-field"
                  name="password"
                  id={edit}
                  disabled={!edit}
                  type="password"
                  placeholder="change your password"
                  onChange={(evt) => handleInputChange(evt)}
                />
              </div>
              <div>
                <span>Change profile: </span>
                <input
                  className="input-field"
                  name="password"
                  id={edit}
                  disabled={!edit}
                  type="file"
                  onChange={(evt) => handleFile(evt)}
                />
              </div>
            </div>
            <div className="btn-action-wrapper">
              <div onClick={() => setActive(!active)}>
                <button
                  className="text-white bg-info green btn"
                  style={{ background: "green" }}
                >
                  <span>Edit</span>
                  <BsFillPencilFill className="pencil" />
                </button>
              </div>
              <div onClick={handleUpdate}>
                <button className="text-white bg-info btn">
                  <span>Update</span>
                  <MdPublishedWithChanges style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
