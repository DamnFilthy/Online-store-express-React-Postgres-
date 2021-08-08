// Страница конкретного устройства 
// Характеристики, возможность добавить в корзину 


import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
    const device = { id: 2, name: 'iphone 6', price: 35000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1551226036826' }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Камера', description: '12 мп' },
        { id: 3, title: 'Процессор', description: 'Пентиум 3' },
        { id: 4, title: 'Кол-во ядер', description: '1' },
        { id: 5, title: 'Аккумулятор', description: '4000' },
        { id: 6, title: 'Гарантия', description: '1 год' },
    ]
    return (
        <Container>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                </Row>
                <i class="far fa-star"></i>
                {device.rating}
            </Col>
            <Col md={4}>
                <Card>
                    Цена:
                    <h3>{device.price}</h3>
                    <Button variant={'outline-dark'}
                    >Добавить в корзину</Button>
                </Card>
            </Col>
            <Row className="mt-5 m-auto">
                {description.map(info =>
                    <Row key={info.id} style={{ background: info.id % 2 === 0 ? 'lightgray' : 'lightblue', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}
export default DevicePage;