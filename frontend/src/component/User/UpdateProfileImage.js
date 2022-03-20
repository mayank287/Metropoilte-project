import react ,{Fragment,useState,useEffect} from "react"
import "./UpdateProfile.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors,  loadUser, updateProfileImageChange } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_IMAGE_RESET } from "../../constants/userConstants";
import MetaData from "../layout/MetaData";
import topbar from "topbar";
import TopLoaderBar from "../TopLoaderbar/TopLoaderBar";

const UpdateProfileImage = ({ history,match }) => {
  TopLoaderBar()
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
   const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const userNewId = user._id;


  const updateProfileSubmit = (e) => {
    e.preventDefault();


    const myForm = new FormData();

   
    myForm.set("avatar", avatar);
    myForm.set("id",userNewId);
    

    
    dispatch(updateProfileImageChange(myForm));
  };

 
  const updateProfileDataChange  = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Picture Updated Successfully");
      dispatch(loadUser());

      history.push("/account");

      dispatch({
        type: UPDATE_PROFILE_IMAGE_RESET,
      });
    }
  }, [dispatch, error, alert, history, user, isUpdated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
        ) : (
          <Fragment>
        
          <MetaData title="Update Profile Image" />
          <div className="Update-Profile-div">


            <div className="updateProfileContainer">
              <div className="updateProfileBox">
                <h2 className="updateProfileHeading">Update Profile Image</h2>

                <form
                  className="updateProfileForm"
                  encType="multipart/form-data"
                  onSubmit={updateProfileSubmit}
                >
                   <div id="updateProfileImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div>

                 
                  <input
                    type="submit"
                    value="Update"
                    className="updateProfileBtn"
                  />
                </form>
              </div>
            </div>
          </div>
         
        </Fragment>

      )}

    </Fragment>
  );
};


export default UpdateProfileImage