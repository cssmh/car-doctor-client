import { useContext, useState } from "react";
import { AuthContextCar } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContextCar);
  const { photoURL, email, displayName, metadata } = user;
  const [dp, setDp] = useState(photoURL);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUser(name, photo)
      .then(() => {
        toast.success("update success");
        setDp(photo);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
        <div className="lg:w-1/2">
          <img
            src={dp}
            className="rounded-lg lg:w-60 ml-auto px-3 lg:px-0"
            alt=""
          />
        </div>
        <div className="space-y-2 mb-3 lg:mb-0 font-semibold border p-4 rounded-lg">
          <h1>Hi, {displayName}</h1>
          <p>{email}</p>
          <p>Created At: {metadata.creationTime}</p>
        </div>
      </div>
      <form onSubmit={handleUpdate} className="card-body mb-4">
        <h1 className="text-3xl font-semibold text-center">Update info</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            name="name"
            className="input input-bordered text-gray-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={dp}
            className="input input-bordered text-gray-500"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-500 hover:bg-red-500 text-white"
            type="submit"
            value="Update Info"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
