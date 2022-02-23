import { Fragment, useState,useEffect } from 'react'
import axios from 'axios'
import CardProduct from '../CardProduct'
import style from './SliderShowCard.module.css'
export default function SliderShowCard({typeProduct}) {
    // Dùng axous lấy ra các sản phẩm có type tương ứng
    //Lấy ra list banner từ DB
    const [productCollection,setProductCollection] =useState([])
    useEffect(() => {
        axios.get(`/product/collection/${typeProduct}`)
            .then(function ({data}) {
                setProductCollection(data.productCollection)
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    // Xử lý state
    const [activeItems, SetactiveItems] = useState([0, 1, 2, 3, 4])
    const handleBackWard = e => {
        SetactiveItems(prevItems => {
            let result = prevItems.map((item, index) => {
                return item > productCollection.length - 2 ? 0 : item + 1
            })
            return result
        })
    }

    // Xử lý sự kiện ấn backWard or forWard
    const handleforWard = e => {
        SetactiveItems(prevItems => {
            let result = prevItems.map((item, index) => {
                return item < 1 ? productCollection.length - 1 : item - 1
            })
            return result
        })
    }
    return (
        <div className={`${style.sliderArea}`}>
            <ul className={`${style.sliderList}`}>
                {/* Có vòng lặp */}
                {productCollection.map((product, index) => (
                    <Fragment key={index}>
                        {activeItems.includes(index) ? (
                            <li
                            >
                                <CardProduct 
                                    product={product}
                                />
                            </li>) : <Fragment />}
                    </Fragment>

                ))}

            </ul>

            {/* Forward Backward button */}
            <div
                className={`${style.sliderControl} ${style.backWard}`}
                onClick={e => handleBackWard(e)}
            >
                <i className={`fa-solid fa-angle-left`}></i>
            </div>
            <div
                className={`${style.sliderControl} ${style.forWard}`}
                onClick={e => handleforWard(e)}
            >
                <i className={`fa-solid fa-angle-right`}></i>
            </div>

        </div>
    )
}