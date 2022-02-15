export default function BottomHeader() {
    return (
        <div className="card-header bg-primary">
                <ul className="navbar-nav mr-auto d-flex flex-row">
                    <li className="nav-item active mr-4">
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-gift mr-2"></i>
                            <span className="text-white">Ưu Đãi</span>
                        </a>
                    </li>

                    <li className="nav-item active mr-4">
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-file mr-2"></i>
                            <span className="text-white">Bảng Giá</span>
                        </a>
                    </li>

                    <li className="nav-item active mr-4">
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-screwdriver-wrench mr-2"></i>
                            <span className="text-white">Setting</span>
                        </a>
                    </li>
                </ul>
        </div>
    )
}
