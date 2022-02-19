import axios from 'axios'
import {useState, useEffect,Fragment} from 'react'

export default function CreateProductPage() {
   
    const [listProduct,setListProduct] =useState([])
    const [nameProduct, setNameProduct]=useState('')
    const [branch, setBranch]=useState('')
    const [typeProduct,setTypeProduct] =useState('')
    const [typeDetailProduct,setTypeDetailProduct] =useState('')

 //Lấy ra list product từ DB
    useEffect(() => {
        axios.get('/product/store')
            .then(function ({data}) {
               setListProduct(data.productitem[0].list)
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    useEffect(() => {
        console.log([nameProduct,branch,typeProduct,typeDetailProduct])

    },[nameProduct,branch,typeProduct,typeDetailProduct])

    return (
        <div id="CreateProductPage">

            {/* Nhập Name Product */}
            <form className="mt-2">
                <div className="form-group">
                    <label htmlFor="nameProduct">Name Product</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={nameProduct}
                        placeholder="Nhập tên sản phẩm..."
                        onChange={(e) => setNameProduct(e.target.value)}
                    />
                </div>

                {/* Nhập Branch */}
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={branch}
                        placeholder="Nhập thương hiệu..." 
                        onChange={(e) => setBranch(e.target.value)}
                    />
                </div>

                {/* Nhập Loại sản phẩm */}
                <div className="form-group">
                    <label htmlFor="typeProduct">Loại sản phẩm</label>
                    <select 
                        className="form-control"
                        value={typeProduct}
                        onChange={(e) => setTypeProduct(e.target.value)}
                        >
                            <option value="">--Chọn loại sản phẩm--</option>
                            {listProduct.map((product,index) => (
                                <option 
                                    key={index} 
                                    value={product.productType}
                                        >{product.productType}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Nhập Loại sản phẩm cụ thể*/}
                {typeProduct&&(
                <div className="form-group">
                    <label htmlFor="typeDetailProduct">Loại sản phẩm cụ thể</label>
                    <select 
                        className="form-control"
                        value={typeDetailProduct}
                        onChange={(e) => setTypeDetailProduct(e.target.value)}
                        >
                            <option value="">--Chọn loại sản phẩm cụ thể--</option>
                            {listProduct.map((product,index) => (
                                <Fragment key={index}>
                                    {product.productType===typeProduct?(
                                        <Fragment>
                                            {product.List.map((productDetail,index) => (
                                                <option 
                                                    key={index} 
                                                    value={productDetail}
                                                        >{productDetail}
                                                </option>
                                            ))}
                                        </Fragment>
                                    ):(<Fragment/>)}
                                </Fragment>
                            ))}
                    </select>
                </div>
                )}
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}