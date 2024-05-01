import { useEffect, useState } from "react";

const User = (props) => {
  //   const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/mosheski");
    const json = await data.json();

    setUserInfo(json);
  };

  //   const { name, location, contact } = props;
  const { name, avatar_url, html_url, location } = userInfo;

  return (
    <div className="user-card">
      {/* <img src={avatar_url} /> */}
      <h2>Function Component</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {html_url}</h3>
    </div>
  );
};

export default User;
