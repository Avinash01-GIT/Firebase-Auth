import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleLogo from "../assets/google.png"; // Import the image using ES6 module syntax

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div className="mt-4">
      <p className="text-center mb-2">--Or continue with--</p>
      <div className="flex justify-center cursor-pointer" onClick={googleLogin}>
        <img src={googleLogo} className="w-40" alt="Google Logo" /> {/* Use imported image */}
      </div>
    </div>
  );
}

export default SignInwithGoogle;
