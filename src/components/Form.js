import React from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const Form = () => {
  const [formValue, setformValue] = React.useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: formValue.userId,
      title: formValue.title,
      body: formValue.body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userId: formValue.userId,
  //       title: formValue.title,
  //       body: formValue.body,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="4">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">New Record Form</p>
            <label className="grey-text">User ID</label>
            <input
              type="text"
              name="userId"
              value={formValue.userId}
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label className="grey-text">Title</label>
            <input
              type="text"
              name="title"
              value={formValue.title}
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label className="grey-text">Body</label>
            <textarea
              type="text"
              name="body"
              value={formValue.body}
              className="form-control"
              rows="3"
              onChange={handleChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;
