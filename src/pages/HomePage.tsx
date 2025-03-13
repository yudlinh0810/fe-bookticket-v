import SearchTrip from "../components/SearchTrip";
import Slides from "../components/Slides";
import VideoPlayer from "../components/Video";
import styles from "../styles/modules/pages/HomePage.module.scss";
import img_slide_1 from "../assets/images/img_slide_1.png";
import img_slide_2 from "../assets/images/img_slide_2.png";
import img_slide_3 from "../assets/images/img_slide_3.png";
import img_slide_4 from "../assets/images/img_slide_4.png";
import img_slide_5 from "../assets/images/img_slide_5.png";

const HomePage = () => {
  const slideList = [
    {
      title: "Banner",
      img: img_slide_1,
    },
    {
      title: "Banner",
      img: img_slide_2,
    },
    {
      title: "Banner",
      img: img_slide_3,
    },
    {
      title: "Banner",
      img: img_slide_4,
    },
    {
      title: "Banner",
      img: img_slide_5,
    },
  ];
  return (
    <div className={styles["homepage-container"]}>
      <div className="slider">
        <Slides slideList={slideList} />
      </div>
      <div className={styles["banner-wrapper"]}>
        <img
          className={styles["img-banner"]}
          src="https://static.vexere.com/production/banners/1209/leaderboard_1440x480.jpg"
          alt="banner-wrapper"
        />
        <div className={styles["content-wrapper"]}>
          <SearchTrip />
        </div>
      </div>
      <div className={styles["search-trip-mobile"]}>
        <SearchTrip />
      </div>
      <VideoPlayer />
    </div>
  );
};

export default HomePage;
