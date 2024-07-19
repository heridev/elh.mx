'use client';

import React from "react";

import UserRegistration from "./UserRegistration";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          textAlign: "center",
          margin: "0 auto",
          height: "95vh"
        }}
      >
        <h1>Full-stack Ruby, Rails, Python, FlaskAPI and React developer</h1>
        <UserRegistration onSubmit={(values) => console.log(values, 'values')} />
      </div>
    </div>
  );
}

export default Home;
