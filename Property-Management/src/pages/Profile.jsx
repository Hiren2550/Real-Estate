import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

//firebase
//  allow read;
//  allow write:if request.resource.size < 2 * 1024 * 1024 &&
//  request.resource.contentType.matches('image/.*')
export default function Profile() {
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  //console.log(file);
  //console.log(filePerc);
  //console.log(formData);
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
        //console.log("upload is" + progress + "% done");
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  return (
    <div className="p-3 max-w-md mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt="Profile"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error image upload(image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-600"> Image Successfully uploaded</span>
          ) : (
            ""
          )}
        </p>
        <input
          className=" border p-3 focus:outline-none rounded-lg "
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className=" border p-3 focus:outline-none rounded-lg "
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className=" border p-3 focus:outline-none rounded-lg "
          type="text"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 ">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
