
import { Typography } from '@mui/material';
import React from 'react';

const About = () => {
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
          height: "100vh"
        }}
      >
        <h1>
          I'm a Full-stack Ruby, Rails, Python, FlaskAPI and React
          <Typography
            sx={{
              textDecorationColor: 'red',
              fontSize: '1em',
              textDecoration: 'line-through'
            }}>
            Developer
          </Typography>
          <Typography
            sx={{
              color: 'yellow',
              fontSize: '1em',
              background: 'black',
              width: '200px',
              textAlign: 'center',
              margin: '0 auto',
            }}>
            Minion
          </Typography>
        </h1>
      </div>
    </div>
  );
}

export default About;
