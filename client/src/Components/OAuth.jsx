import oauthImg from "../assets/google.png";
import { app } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {  useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg items-center flex justify-center">
      <button
        onClick={handleGoogleClick}
        type="button"
        className=" text-white p-2
    rounded-lg uppercase hover:opacity-95 flex justify-between"
      >
        <img src={oauthImg} />
        <span>Continue With Google</span>
      </button>
    </div>
  );
}
