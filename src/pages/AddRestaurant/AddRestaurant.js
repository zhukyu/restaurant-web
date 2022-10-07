import { useState } from "react";
import "./AddRestaurant.css";
import { storage, db } from "../../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function AddRestaurant() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [address, setAddress] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [urlImage, setUrlImage] = useState();
  const handleSubmit = () => {
    const storageRef = ref(storage, `/images/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, urlImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <div className="wrapper">
      <div className="card mt-10 mf-10" style={{ width: "500px" }}>
        <img
          style={{ height: "220px" }}
          src="https://dummyimage.com/500x220/dee2e6/6c757d.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <form>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setUrlImage(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter restaurant name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter restaurant address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter restaurant phonenumber"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="form-control btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurant;
