import style from'./Header.module.css'
import axios from 'axios'
import {Fragment,useState, useEffect} from 'react'

export default function MenuProductHeader() {
     //Lấy ra list product từ DB
     const [listProduct,setListProduct] =useState([])
     useEffect(() => {
         axios.get('/product/store')
             .then(function ({data}) {
                setListProduct(data.product[0].list)
             })
             .catch(function (error) {
                 console.log(error);
             })
     },[])

    return (
        <div className="collapse navbar-collapse col-lg-5 col-md-3">
                    
            <ul className="navbar-nav mr-auto">
                {listProduct.map((product,index) => (
                    <li key={index} className={`nav-item active`}>
                        <div className="dropdown btn-group">
                            <a className={`navbar-brand text-dark ${style.btnGroupNav}`} href="#">
                                <img className={`${style.navIcon}`}  src={product.icon}/>
                                <span>{product.productType}</span>
                            </a>

                            <div className={`dropdown-menu ${style.dropdownHover}`}>
                                {product.List.map((productDetail,index) => (
                                    <a key={index} className="dropdown-item" href="#">{productDetail}</a>
                                ))}
                               
                            </div>
                        </div>
                    </li>
                ))}
                
            </ul>
                
        </div>
    )
}
