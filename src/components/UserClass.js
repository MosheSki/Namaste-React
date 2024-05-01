import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mosheski");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location, contact } = this.props;
    const { name, avatar_url, html_url, location } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <img src={avatar_url} /> */}
        <h2>Class Component</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {html_url}</h3>
      </div>
    );
  }
}

export default UserClass;
