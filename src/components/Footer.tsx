import "../styles/components/Footer.scss";
import { faFacebook, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkList from "./LinkList";
import CustomLink from "./CustomLink";

const Footer = () => {
  const linksAbout = [
    {
      id: 1,
      title: "Về chúng tôi",
      to: "/",
    },
    {
      id: 2,
      title: "Lịch trình",
      to: "/",
    },
    {
      id: 3,
      title: "Tuyển dụng",
      to: "/",
    },
    {
      id: 4,
      title: "Tin tức & Sự kiện",
      to: "/",
    },
  ];
  const linksSupport = [
    {
      id: 1,
      title: "Tra cứu thông tin đặt vé",
      to: "/",
    },
    {
      id: 2,
      title: "Điều khoản sử dụng",
      to: "/",
    },
    {
      id: 3,
      title: "Giải đáp thắc mắt",
      to: "/",
    },
    {
      id: 4,
      title: "Hướng dẫn đặt vé",
      to: "/",
    },
  ];
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-t-right">
          <div className="footer-contact">
            <h3 className="font-medium perano-800 text-start">TRUNG TÂM TỔNG ĐÀI & CSKH</h3>
            <p className="mg-t-1 mg-b-1 perano-800 fs-2 font-bold">1900 0770</p>
            <div className="footer-contact-info">
              <h3 className="font-medium perano-800 text-start l-h-sm">
                Công ty cổ phần xe khách IUA Bus Lines
              </h3>
              <p className="info-address gray l-h-sm">
                Địa chỉ:
                <span> 254 Đ. Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng.</span>
              </p>
              <p className="info-email gray l-h-sm">
                Email:<span> yudlinh0810@gmail.com</span>
              </p>
              <div className="info-phoneNumber-fax">
                <p className="gray l-h-sm">
                  Phone:<span> 0796777777</span>
                </p>
                <p className="gray l-h-sm">
                  Fax:<span> 0972727272</span>
                </p>
              </div>
              <div className="info-social">
                <h3 className="font-medium perano-800 l-h-sm">KẾT NỐI CHÚNG TÔI:</h3>
                <div className="social-icons">
                  <CustomLink href="https://www.facebook.com/duy.linh.828933">
                    <FontAwesomeIcon className="ic-fb ic" icon={faFacebook} />
                  </CustomLink>
                  <CustomLink to="/">
                    <FontAwesomeIcon className="ic-yt ic" icon={faYoutube} />
                  </CustomLink>
                  <CustomLink href="https://github.com/yudlinh0810/fe-bookticket-v.git">
                    <FontAwesomeIcon className="ic-github ic" icon={faGithub} />
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footer-t-left">
          <ul className="footer-links">
            <li className="mg--1">
              <h4 className="text-start perano-800 font-medium">IUA Bus Lines</h4>
              <LinkList items={linksAbout} />
            </li>
            <li className="mg-t-1 mg-b-1">
              <h4 className="text-start perano-800 font-medium">Hỗ Trợ</h4>
              <LinkList items={linksSupport} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const example = {
//   productList: {
//     productItem: {
//       product: {
//         header: {

//         },
//         body: {
//           title: '',
//           description, ''
//         },
//         footer: {
//           action
//         }
//       }
//     }
//   }
// }
