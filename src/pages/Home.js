import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product/Product'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const sentRequest = async () => {
           const response = await axios.get('http://localhost:8000/api/products ')
           setProducts(response.data)

        }
        sentRequest()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <Row>
                {products.map((item) => {
                    return(
                        <Col key={item._id} sm={12} md={6} lg={4}>
                            <Product product={item}/>
                        </Col>
                    )
                })
                    
                }
            </Row>
        </div>
    )
}

export default Home
