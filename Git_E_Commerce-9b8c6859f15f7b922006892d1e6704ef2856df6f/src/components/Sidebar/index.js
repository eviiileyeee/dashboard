import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }



    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Products
                            <span className='arrow'><IoIosArrowForward /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#"> Product List</Link></li>
                                <li><Link to="#"> Product View</Link></li>
                                <li><Link to="#"> Product Upload</Link></li>
                            </ul>
                        </div>


                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                <span className='icon'><MdShoppingCart /></span>
                                Orders
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                <span className='icon'><SiGooglemessages /></span>
                                Messages
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                                <span className='icon'><MdNotificationsActive /></span>
                                Notifications
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                                <span className='icon'><IoIosSettings /></span>
                                Settings
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                                <span className='icon'><MdShoppingCart /></span>
                                Orders
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>

                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                                <span className='icon'><SiGooglemessages /></span>
                                Messages
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}>
                                <span className='icon'><MdNotificationsActive /></span>
                                Notifications
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 11 ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)}>
                                <span className='icon'><IoIosSettings /></span>
                                Settings
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 12 ? 'active' : ''}`} onClick={() => isOpenSubmenu(12)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 13 ? 'active' : ''}`} onClick={() => isOpenSubmenu(13)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 14 ? 'active' : ''}`} onClick={() => isOpenSubmenu(14)}>
                                <span className='icon'><MdShoppingCart /></span>
                                Orders
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 15 ? 'active' : ''}`} onClick={() => isOpenSubmenu(15)}>
                                <span className='icon'><SiGooglemessages /></span>
                                Messages
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 16 ? 'active' : ''}`} onClick={() => isOpenSubmenu(16)}>
                                <span className='icon'><MdNotificationsActive /></span>
                                Notifications
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 17 ? 'active' : ''}`} onClick={() => isOpenSubmenu(17)}>
                                <span className='icon'><IoIosSettings /></span>
                                Settings
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 18 ? 'active' : ''}`} onClick={() => isOpenSubmenu(18)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 19 ? 'active' : ''}`} onClick={() => isOpenSubmenu(19)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 20 ? 'active' : ''}`} onClick={() => isOpenSubmenu(20)}>
                                <span className='icon'><MdShoppingCart /></span>
                                Orders
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link >
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 21 ? 'active' : ''}`} onClick={() => isOpenSubmenu(21)}>
                                <span className='icon'><SiGooglemessages /></span>
                                Messages
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link >
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 22 ? 'active' : ''}`} onClick={() => isOpenSubmenu(22)}>
                                <span className='icon'><MdNotificationsActive /></span>
                                Notifications
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link >
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 23 ? 'active' : ''}`} onClick={() => isOpenSubmenu(23)}>
                                <span className='icon'><IoIosSettings /></span>
                                Settings
                                <span
                                    className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>

                <br />


                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant="contained"><IoLogOut />Logout</Button>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Sidebar;