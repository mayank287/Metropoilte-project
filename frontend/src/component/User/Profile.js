import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import topbar from "topbar";
import TopLoaderBar from "../TopLoaderbar/TopLoaderBar";
import EditIcon from '@mui/icons-material/Edit';

const Profile = ({ history }) => {
  TopLoaderBar();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
        ) : (
          <Fragment >

          <MetaData title={`${user.name}'s Profile`} />
          <div className="pr">
            <div className="profile-container">

              <div className="img-container">
                <img src={user.avatar.url} alt="profile image" />
              </div>
              <div className="Edit-Icon">
                
                <Link to="/me/ProfileImageupdate" >
                <EditIcon />
                </Link>
              </div>
              <div className="infoMain">

                <p className="Profile-titles">Name:-</p>
                <p className="info full-name">{user.name}</p>
              </div>
              <div className="infoMain">

                <p className="Profile-titles">Joined On:-</p>
                <p className="info">{String(user.createdAt).substr(0, 10)}</p>

              </div>
              <div className="infoMain">

                <p className="Profile-titles">Email:-</p>
                <p className="info">{user.email}</p>

              </div>



              <button className="action"> <Link to="/me/update" className="link">Edit Profile</Link></button>
              <button className="action message"><Link to="/password/update" className="link">Change Password</Link></button>
              <button className="action orders"><Link to="/orders" className="link">My Orders</Link></button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
