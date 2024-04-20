import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return <h1 className="logo">🔍</h1>;
};

const SearchBar = () => {
  return <input className="search" type="text" placeholder="Search" />;
};

const UserIcon = () => {
  return <h1 className="userIcon">👦</h1>;
};

const Header = () => {
  return (
    <div className="container">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

// const heading = React.createElement("h1", { id: "heading" }, "Hello");

// // JSX - React Element
// const jsx = (
//   <h1 id="heading" className="head">
//     This is JSX 👌
//   </h1>
// );

// // React Functional Component
// const Title = () => <h1 className="head">This is Title</h1>;

// // Component Composition
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {jsx}
//       <Title />
//       {Title()}
//       <h1>React Functional Component</h1>;
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsx);
root.render(<Header />);
