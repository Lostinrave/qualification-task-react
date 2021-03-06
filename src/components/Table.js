import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Table = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts({ blogs: data });
      // console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
  return (
    <div>
      <MDBContainer>
        <MDBTable className="mt-3">
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Details</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>

                  <td>
                    <Link
                      to={{
                        pathname: `/details-page/${item.id}`,
                        state: { id: item.id },
                      }}
                    >
                      <MDBBtn color="warning" outline type="submit">
                        Details
                        <MDBIcon far icon="eye" className="ml-2" />
                      </MDBBtn>
                    </Link>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
};

export default Table;
