import { useParams } from 'react-router-dom';
import { fetchData, isMobile } from '../utils/helper';
import { useEffect, useRef, useState } from 'react';
import { cities } from '../constant';
import { Button, Flex, Input } from 'antd';
import FilterInputs from './FilterInputs';
import ProductCard from './ProductCard';
import { FilterOutlined } from '@ant-design/icons';
export default function CityPage() {
    let { cityId } = useParams();
    const [products, setProducts] = useState([])
    const nodeRef = useRef()
    const cacheProducts = useRef()
    const coverRef = useRef()
    function setItemsByFilter(obj) {
        setProducts(obj)
    }
    useEffect(() => {
        fetchData('https://fakestoreapi.com/products').then(data => {
            setProducts(data)
            cacheProducts.current = data
        })
    }, [])
    function searchChange(e) {
        const search = e.target.value
        setProducts(cacheProducts.current.filter(p => p.title.includes(search)))

    }
    function toggleMobile(closeMode) {


        if (nodeRef.current) {
            if (closeMode) {
                coverRef.current.style.opacity = '0'
                coverRef.current.style.visibility = 'hidden'
                return nodeRef.current.classList.remove('open')
            }
            coverRef.current.style.visibility = 'visible'
            coverRef.current.style.opacity = '1'
            nodeRef.current.classList.toggle('open')
        }
    }

    function getCity() {
        const { label } = cities.find((item) => item.value === cityId)
        return label
    }

    return (
        < div className="city-products-container page-gap" >
            {/* <GetCity /> */}
            <div className='city-title'>
                <span>{getCity()}</span>
                <div className='filter-mob'>
                    <Input placeholder="جستحوی محصول" onChange={searchChange} />
                    {isMobile() && <div ref={coverRef} className="cover" onClick={() => toggleMobile(true)}></div>}
                    {isMobile() && <Button onClick={() => toggleMobile(false)} style={{ marginRight: '10px' }} icon={<FilterOutlined />}>فیلتر</Button>}

                </div>
            </div>
            <Flex>
                <FilterInputs ref={nodeRef} products={products} setItemsByFilter={setItemsByFilter} />
                <div className='product-part'>
                    {products?.map((p) => {
                        return (
                            <ProductCard product={p} />
                        )
                    })}
                </div>
            </Flex>
        </div >
    )
}