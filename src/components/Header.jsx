import React from "react";

const Header = ({ title }) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-center text-blue-500">{title}</h1>
    </header>
  );
};

export default Header;
