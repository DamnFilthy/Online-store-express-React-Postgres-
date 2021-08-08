import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useHistory()
    return (
        <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className="mt-3 d-flex flex-column align-items-center">
                    <div>
                        {device.name}
                    </div>
                    <div>
                        {device.rating}
                        <i class="far fa-star"></i>
                    </div>
                    <div>
                        {device.price}
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;