import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import Phone from './assets/phone.png';
import {DataContext} from './Context';
import {Link} from 'react-router-dom';
import './css/Header.css';
import Mail from './assets/mail.png';
import Location from './assets/location.png';


export class Header extends React.Component{
    static contextType = DataContext;

    state ={
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

  render() {
    const {toggle} = this.state;
    const {cart} = this.context;
    return (
    <div>
    <marquee className="contact"><span className="contact-header"><img src={Location} style={{width:"14px"}}/>Liên hệ tư vấn : 273 Mỹ Hội Đông, An Giang</span><span className="contact-header"><img src={Mail} style={{width:"16px"}}/>Email : nguyennhithai4620@gmail.com</span><span className="contact-header"><img src={Phone} style={{width:"16px"}}/> 0395996992 ( Mr. Tùng)</span><span className="contact-header"><img src={Phone} style={{width:"16px"}}/>0123456789 (Ms. Diệu Tiên)</span></marquee>
    <header>
      <div className="menu" onClick={this.menuToggle}> 
        <img src={Menu} alt="" width="20"/>
      </div>
      <div className="logo">      
        <p style={{display:"flex",alignItems:"center",padding:"20px"}}><Link to="/"><img src="https://farm1.staticflickr.com/31/99884127_6bc0c8bd85.jpg" /></Link><Link to="/">Tung Tiền design</Link></p>
      </div>
      <nav>
          <ul className={toggle ? "toggle" : ""}>
              <li className="hometext"><Link to="/home">TRANG CHỦ</Link></li>
              <li className="dropdown"><Link to="/product">SẢN PHẨM</Link>
              <div class="dropdown-content">
                            <a>TẤT CẢ</a>
                            <a>BAO BÌ GIẤY - NHÃN GIẤY, DECAL</a>
                            <a >BAO BÌ MÀNG GHÉP PHỨC HỢP</a>
                            <a >BAO BÌ MÀNG ĐƠN</a>
                            <a >BAO BÌ PP DỆT</a>
                            <a >BAO BÌ NHỰA KHÔNG TRỤC</a>
                     </div>    
              </li>
              <li><Link to="/contact">DỊCH VỤ</Link></li>              
              <li><Link to="/about">LIÊN HỆ</Link></li>
              <li><Link to="/login">ĐĂNG NHẬP</Link></li>
              <li className="close" onClick={this.menuToggle}>
                  <img src={Close} alt="" width="20"/>
              </li>
          </ul>
          <div className="nav-cart">
                <span>{cart.length}</span>
                <Link to="/cart">
                <img src={CartIcon} alt="" width="20"></img>
                </Link>
                
          </div>
 
      </nav>
    </header>
    </div>
    );
  }
}

export default Header;