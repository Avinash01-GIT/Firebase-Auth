import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="mx-auto max-w-lg mt-8">
      {userDetails ? (
        <>
          <div className="flex justify-center">
            <img
              src={userDetails.photo}
              className="rounded-full"
              style={{ width: "40%" }}
              alt="Profile"
            />
          </div>
          <h3 className="text-3xl text-center mt-4">
            Welcome {userDetails.firstName} 🙏🙏
          </h3>
          <div className="mt-4">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button
            className="block mx-auto mt-8 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default Profile;
