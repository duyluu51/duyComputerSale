import { Link } from 'react-router-dom'
import style from './CardProduct.module.css'

export default function CardProduct() {

    return (
        <Link to="/" className={`card mt-2 ${style.cardItem}`}>
            <img className="card-img-top"
                src="https://res.cloudinary.com/dvnipovxd/image/upload/v1645410858/dx2d6ooq6eulz1b8hljt.jpg" alt="Product"
            />
            <div className={`${style.cardContent} text-center`}>
                <h5
                >
                    BHC APOLLO I (I3 10105F|GT1030| 8GB|SSD 120GB ) GEN 10
                </h5>
                <p >9,190,000 vnd</p>
            </div>
        </Link>

    )
}
