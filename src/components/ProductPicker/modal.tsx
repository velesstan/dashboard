import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Modal, Input, Button, Row, Col } from 'antd';

import { Product } from 'interfaces';

import ProductSearch from './search';

type TProps = {
    readonly onAdd: (item: { product: Product; quantity: number }) => void;
};

const AddProductModal: React.FC<TProps> = props => {
    const { onAdd } = props;

    const [visible, setVisible] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const innerRef = useRef(null);

    const onClose = (): void => {
        setVisible(false);
        setQuantity(0);
        setProduct(null);
    };

    const onConfirm = () => {
        onAdd({
            product,
            quantity,
        });
        onClose();
    };

    useEffect(() => {
        setTimeout(() => {
            innerRef?.current?.focus();
        });
    }, [visible]);

    return (
        <Fragment>
            <Button
                onClick={() => {
                    setVisible(true);
                }}
            >
                Добавить
            </Button>
            <Modal
                visible={visible}
                title='Поиск продукта'
                onOk={onConfirm}
                onCancel={onClose}
            >
                <Row gutter={[24, 24]}>
                    <Col xs={24}>
                        <ProductSearch
                            innerRef={innerRef}
                            onSelect={setProduct}
                        />
                    </Col>
                    <Col xs={24}>
                        <Input
                            type={'number'}
                            value={quantity}
                            onChange={({ target: { value } }) =>
                                setQuantity(Number(value))
                            }
                        />
                    </Col>
                </Row>
            </Modal>
        </Fragment>
    );
};

export default AddProductModal;
