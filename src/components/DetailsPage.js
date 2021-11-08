import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


const DetailsPage = () =>{
    return (
        <MDBContainer >
            <MDBRow className='justify-content-center'>
            <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody className='mt-3'>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
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