import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

const DetailsPage = () => {
  let { id } = useParams();
  // console.log(id);

  const [post, setPost] = useState({ blog: [] });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPost({ blog: data });
      // console.log(data);
    };
    fetchPost();
  }, [setPost]);
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCard className="mt-5" style={{ maxWidth: "22rem" }}>
          <MDBCardBody>
            <h2>ID: {post.blog.id}</h2>
            <MDBCardTitle>{post.blog.title}</MDBCardTitle>
            <MDBCardText>{post.blog.body}</MDBCardText>
            <Link to="/">
              <MDBBtn color="warning" outline type="submit">
                Go Back
              </MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default DetailsPage;
