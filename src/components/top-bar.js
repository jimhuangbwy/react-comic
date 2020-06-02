import React from 'react';
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Link to={`/`}>
      <div className={'navbar bg-black text-green'}>
        <h1 className={'text-center'}>Comicomic</h1>
      </div>
    </Link>
  );
};

export default TopBar;
