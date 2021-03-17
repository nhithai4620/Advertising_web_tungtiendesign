import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import '../css/Home.css';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import BG1 from '../assets/background_header.jpg';
import BG2 from '../assets/background_header1.jpg';
import BG3 from '../assets/background_header2.jpg';
import BG4 from '../assets/background_header3.jpg';
import IMG1 from '../assets/intro-img.jpg';
import IMG2 from '../assets/line.png';
import ITEM1 from '../assets/item1.jpg';
import ITEM2 from '../assets/item2.jpg';
import ITEM3 from '../assets/item3.jpg';
import ITEM4 from '../assets/item4.jpg';
import ITEM5 from '../assets/item5.jpg';
import ITEM6 from '../assets/item6.jpg';
import ITEM7 from '../assets/item7.jpg';
import ITEM8 from '../assets/item8.jpg';
import ITEM9 from '../assets/item9.jpg';

export class Home extends React.Component{
    static contextType = DataContext;
    render(){
        const {products} = this.context;
        var settings = {  
            dots: true, 
            infinite: true,  
            speed: 500,  
            // centerMode: true,  
            slidesToShow: 1,  
            slidesToScroll: 1 ,
            autoplay:true , 
            arrows:true , 
            autoplaySpeed:2700
            };  
            return (  
              <div id="home">
                <div className="slider">
                  <p>Thiết kế chuyên nghiệp</p>
                  <h5>CHI TIẾT</h5> 
                  <Link to="/product">
                  <Slider {...settings} >  
                  <div className="wdt">  
                  <img  className="img" src= {BG1}/> 
                  </div>  
                  <div className="wdt">  
                  <img className="img"   src= {BG2}/>  
                  </div>  
                  <div className="wdt">  
                  <img  className="img" src= {BG3}/>  
                  </div>  
                  <div className="wdt"> 
                  <img  className="img" src= {BG4}/>  
                  </div >                  
                  </Slider>
                  </Link>
                </div>
                <div className="intro">
                    <div className="intro-text">
                        <p className="intro-title">
                            GIỚI THIỆU
                        </p>
                        <img src={IMG2} style={{width:"120px", height:"30px"}}/>
                        <p>
                            Mở đầu câu chuyện, chúng tôi muốn các bạn hiểu đây không phải là bài viết quảng cáo để chúng tôi tìm kiếm khách hàng hoặc tranh giành khách hàng. Ngày nay, thị phần quá rộng để chúng tôi đấu đá lẫn nhau, vậy vấn đề chúng tôi muốn nói tới đây là gì? Đơn giản chúng tôi chỉ muốn làm những người đam mê nghệ thuật đúng nghĩa.
                        </p>
                        <p style={{color: "lightcoral"}}> Xem thêm...</p>
                    </div>
                    <div className="intro-img">
                        <img src={IMG1}/>
                    </div>
                </div>
                <div className="service-content">
                  <p>DỊCH VỤ CỦA <span>CHÚNG TÔI</span></p>
                <div className="flex-container">
                  <div><p>Thiết kế nhãn giấy</p><img src={ITEM1}/></div>
                  <div><p>Thiết kế bao bì hộp giấy</p><img src={ITEM2}/></div>
                  <div><p>Thiết kế bao bì nhựa</p><img src={ITEM3}/></div>  
                  <div><p>Bao bì màng đơn</p><img src={ITEM4}/></div>
                  <div><p>Thiết kế hộp giấy</p><img src={ITEM5}/></div>
                  <div><p>Thiết kế banner</p><img src={ITEM6}/></div>  
                  <div><p>Bao bì PP dệt</p><img src={ITEM7}/></div>
                  <div><p>Bao bì túi giấy</p><img src={ITEM8}/></div>
                  <div><p>Thiết kế logo</p><img src={ITEM9}/></div>   
                </div>
                <div className="button-more"><button>XEM THÊM</button></div>  
              </div> 
              </div>  
            );  
          } 
    }

export default Home;