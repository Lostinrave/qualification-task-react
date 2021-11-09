import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="4">
          <form>
            <p className="h4 text-center mb-4">Write to us</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              User ID
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Title
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Body
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
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

export default FormPage;
