import { Card, Flex } from "antd"
import ProductCounter from "./ProductCounter"

export default function ProductCard(product) {
    return (
        <div className="product-card-con">
            <div className="product-card">
                <div className="product-card-info">
                    <p>{product.product.title}</p>
                    <p className="cost"><span style={{ marginLeft: '5px' }}>تومان</span>{product.product.price}</p>
                </div>
                <div style={{ position: 'relative' }}>
                    <img height={"100px"} width={'100px'} src={product.product.image} />
                    <ProductCounter />
                </div>
            </div>

        </div >
    )
}