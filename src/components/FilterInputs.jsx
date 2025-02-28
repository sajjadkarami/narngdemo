import { Button, Collapse, Input, Select } from "antd";
import { fetchData, isMobile } from "../utils/helper";
import { useEffect, useRef, useState } from "react";

export default function FilterInputs({ products, setItemsByFilter, ref }) {
    const [category, setCategory] = useState(["all"])
    const [from, setFrom] = useState(0)
    const [until, setUntil] = useState(Number.MAX_SAFE_INTEGER)
    const cacheProducts = useRef()
    cacheProducts.current = products
    useEffect(() => {
        fetchData('https://fakestoreapi.com/products/categories').then(data => setCategory(['all', ...data]))
    }, [])
    const onCategoryChange = (key) => {
        if (key === "all") {
            return fetchData(`https://fakestoreapi.com/products`).then(data => setItemsByFilter(data))
        }
        fetchData(`https://fakestoreapi.com/products/category/${key}`).then(data => {
            setItemsByFilter(data)
        })

    }
    const onFromPriceChange = (e) => {
        setFrom(e.target.value)
        console.log(cacheProducts)
    }
    const onUntilPriceChange = (e) => {
        setUntil(e.target.value)
    }
    function handlePriceClick() {
        console.log(products.filter(p => from <= p.price && p.price <= until))
        console.log('from,until', from, until)
        setItemsByFilter(products.filter(p => from <= p.price && p.price <= until))
    }
    const items = [
        {
            key: '1',
            label: 'قیمت',
            children: <div className="column">
                <Input placeholder="از قیمت" className="mb-10" onChange={onFromPriceChange} />
                <Input placeholder="تا قیمت" onChange={onUntilPriceChange} />
                <Button style={{ marginTop: "20px" }} onClick={handlePriceClick}>اعمال قیمت</Button>
            </div>,
        },
        {
            key: '2',
            label: 'دسته بندی',
            children: <Select className="category-select" options={category.map(c => ({ value: c, label: c }))} onChange={onCategoryChange}>
            </Select>,
        },

    ];
    // if (isMobile()) {
    //     return (<div>
    //         mob
    //     </div>)
    // }
    return (
        <div className='filter-part' ref={ref}>

            <div className='filter-head'>
                فیلتر
            </div>
            <div className="collapse-con">
                <Collapse items={items} defaultActiveKey={['1']} />
            </div>
        </div>
    )
}