import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import axios from 'axios'

const Product = () => {
    let params = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const sentRequest = async () => {
           const response = await axios.get(`http://localhost:8000/api/products/${params.id}`)
           setProduct(response.data)
        }
        sentRequest()
    }, params)

    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>
                Home Page
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Button className='btn-block' type="button">
                                Add to Card
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Product
