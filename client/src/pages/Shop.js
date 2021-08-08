// Основная страница магазина 
// Здесь будут карточки товаров, постраничный вывод, список брэндов и тд.

import { Container, Row, Col } from 'react-bootstrap'
import React from 'react';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;