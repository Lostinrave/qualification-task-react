import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


const DetailsPage = () =>{
    let { id } = useParams();
    console.log(id);
    let location = useLocation(); 
    console.log(location);
        const [post, setPost] = useState({blogs: []})
            
            useEffect(()=>{
                const fetchPost = async () => {
                    const{data} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
                    setPost({blogs: data})
                    console.log(data)
                }
                fetchPost()
            }, [setPost])
    return (
        <MDBContainer >
            <MDBRow className='justify-content-center'>
            <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody className='mt-3'>
                <h2>
                    ID: {post.blogs.id}
                </h2>
                <MDBCardTitle>
                    {post.blogs.title}
                </MDBCardTitle>
                <MDBCardText>
                    {post.blogs.body}
                </MDBCardText>
                <Link to='/'>
                <MDBBtn>Go Back</MDBBtn>
                </Link>
            </MDBCardBody>
            </MDBCard>
            </MDBRow>
        </MDBContainer>
      );
    }

export default DetailsPage