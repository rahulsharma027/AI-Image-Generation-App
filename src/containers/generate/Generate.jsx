import React, { postRef, useState } from "react";
import def from "../../assets/default.png";
import { Auth, db, storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./generate.css";

const Generate = () => {
  const [user] = useAuthState(Auth);
  const postRef = collection(db, "posts");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    if (response !== null) {
      const imageRef = ref(storage, `images/${response.name + v4()}`);
      uploadBytes(imageRef, response)
        .then(() => {
          getDownloadURL(imageRef).then((url) => {
            if (prompt !== "") {
              addDoc(postRef, {
                prompt: prompt,
                image: response,
                user: user.displayName,
                logo: user.photoURL,
              })
                .then((res) => alert("posted"))
                .catch((err) => console.log(err));
            }
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const sendPromptToFlask = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setImageUrl({ response });
      setResponse(data.response); // Assuming the Flask backend sends back a JSON with a 'response' property
    } catch (error) {
      console.error("Error sending prompt to Flask:", error);
    }
    setLoading(false);
  };
  
  

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        color: "White",
      }}
    >
      <label style={{ marginRight: "10px" }}>
        Enter Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{color: "black", marginLeft: "10px", width: "300px" }} // Adjust the width as needed
        />
      </label>
      <button
        onClick={sendPromptToFlask}
        style={{ marginLeft: "100px", cursor: "pointer" }}
      >
        Generate Image
      </button>
      
      {user && (
        <button
          onClick={uploadImage}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          Share
        </button>
      )}
      
      <div style={
        { 
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          width: "25%",
          }}>
        <div>
          <img
            src={imageUrl === "/" ? def : response}
            alt=""
            d
            height={500}
            width={500}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="loading" >
        <div className={loading?"loading-bar-full":"loading-bar"}></div>
        <div className={loading?"loading-text":"display-none"}>Loading....</div>
      </div>
      </div>
    </div>
  );
};

export default Generate;
