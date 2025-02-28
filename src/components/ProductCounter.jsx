import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useState } from "react"

export default function ProductCounter() {
    const [count, setcount] = useState(0)

    function plus() {
        setcount(prev => prev + 1)
    }

    function minus() {
        setcount(prev => prev - 1)
    }
    return (
        <div className="ProductCounter">
            {count === 0 ?
                <div className="addToCard">
                    <Button icon={<ShoppingCartOutlined style={{ color: "#f57c00" }} />} onClick={plus} />
                </div> :
                <div>
                    <Button onClick={minus} icon={<MinusOutlined style={{ color: "#f57c00" }} />} />
                    <span style={{ marginLeft: "5px", marginRight: "5px" }}>{count}</span>
                    <Button onClick={plus} icon={<PlusOutlined style={{ color: "#f57c00" }} />} />

                </div>}
        </div>
    )

}