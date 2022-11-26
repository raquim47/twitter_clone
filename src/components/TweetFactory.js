import { storageService, dbService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const fileInput = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let attachmentUrl = "";
      if (attachment !== "") {
        const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(fileRef, attachment, "data_url");
        attachmentUrl = await getDownloadURL(response.ref);
      }
      const tweetObj = {
        text: tweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl,
      };
      await addDoc(collection(dbService, "tweets"), tweetObj);
      setTweet("");
      setAttachment("");
      fileInput.current.value = null;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const onChange = ({ target: { value } }) => {
    setTweet(value);
  };

  const onFileChange = ({ target: { files } }) => {
    if (files.length === 0) {
      setAttachment(null);
      return;
    }
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = ({ currentTarget: { result } }) => {
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
    fileInput.current.value = null;
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={tweet}
        onChange={onChange}
        type="text"
        placeholder="what's on your mind?"
        maxLength={120}
      />
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInput}
      />
      <input type="submit" value="Tweet" />
      {attachment && (
        <>
          <img src={attachment} width="50px" height="50px" alt="upload-img" />
          <button onClick={onClearAttachment}>Clear</button>
        </>
      )}
    </form>
  );
};

export default TweetFactory;
