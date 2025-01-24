import React from 'react';
import '../styles/components/MainFooter.scss';
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainFooter: React.FC = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-top'>
        <div className='footer__contact'>
          <h3 className='green footer__contact-title'>TRUNG TÂM TỔNG ĐÀI & CSKH</h3>
          <p className='footer__contact-phone'>1900 0770</p>
          <div className='footer__contact-info'>
            <h3 className='green info-name'>
              Công ty cổ phần xe khách Phương Trang - FUTA Bus Lines
            </h3>
            <p className='gray info-address'>
              Địa chỉ:
              <span> 254 Đ. Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng.</span>
            </p>
            <p className='gray info-email'>
              Email:<span> yudlinh0810@gmail.com</span>
            </p>
            <div className='info-phone-fax'>
              <p className='gray phone'>
                Phone:<span> 0796777777</span>
              </p>
              <p className='gray fax'>
                Fax:<span> 0972727272</span>
              </p>
            </div>
            <div className='green info-social'>
              <h3>KẾT NỐI CHÚNG TÔI:</h3>
              <div className='social-icons'>
                <a href='https://www.facebook.com/duy.linh.828933'>
                  <FontAwesomeIcon className='facebook-icon' icon={faFacebook} />
                </a>
                <a href=''>
                  <FontAwesomeIcon className='youtube-icon' icon={faYoutube} />
                </a>
                <a href='https://github.com/yudlinh0810/fe-bookticket-v.git'></a>
                <FontAwesomeIcon className='github-icon' icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
        <div className='footer__links'>
          <div className='footer__links-group'>
            <h4 className='green'>IUA Bus Lines</h4>
            <ul className='links-list'>
              <li className='link-item'>Về chúng tôi</li>
              <li className='link-item'>Lịch trình</li>
              <li className='link-item'>Tuyển dụng</li>
              <li className='link-item'>Tin tức & Sự kiện</li>
            </ul>
          </div>
          <div className='footer__links-group'>
            <h4 className='green'>Hỗ Trợ</h4>
            <ul className='links-list'>
              <li className='link-item'>Tra cứu thông tin đặt vé</li>
              <li className='link-item'>Điều khoản sử dụng</li>
              <li className='link-item'>Giải đáp thắc mắt</li>
              <li className='link-item'>Hướng dẫn đặt vé</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
