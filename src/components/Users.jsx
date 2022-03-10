import Card from "./Card-SC";
// import { ReactDOM } from "react";
// import Wrapper from "./Helpers/Wrapper";
import { ThemeProvider } from "styled-components";
import React from "react";

// import styles from "./Users.module.css";
const theme = {
  background: "#034586",
  text: "#c6d3df",
  margin: "1rem auto"
};

const Users = (props) => {
  return (
    // <Wrapper>
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {props.items.map(
          userData => (
            <Card key={userData.id}>
              <span>
                {userData.username} ({userData.age} years old)
              </span>
            </Card>
          )
        )}
        {/* {ReactDOM.createPortal(<Backdrop onClick={onConfirm} />, document.getElementById('backdrop-root')} */}
      </ThemeProvider>
    </React.Fragment>
    // </Wrapper>
  );
};

export default Users;