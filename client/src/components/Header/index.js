import BottomHeader from './BottomHeader.js'
import MenuProductHeader from './MenuProductHeader.js'
import style from'./Header.module.css'

export default function Header() {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light row align-items-start `}>
                <div className="col-lg-3 col-md-12 col-sm-12 mt-2">
                    <a className="navbar-brand text-dark text-uppercase font-weight-bold" href="#">
                        <i className="fa-solid fa-house-laptop mr-2"></i>
                        DUY COMPUTER
                    </a>
                </div>

                <div className="col-lg-5 col-md-12 col-sm-12 mt-2">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 w-75" type="search" placeholder="Nhập tên, sản phẩm cần tìm..." aria-label="Search"/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Tìm kiếm</button>
                    </form>
                </div>

                <MenuProductHeader/>
                
            </nav>

            <BottomHeader/>

        </div>

    )
}
