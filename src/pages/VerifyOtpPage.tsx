import styled from "../styles/modules/pages/VerifyOtpPage.module.scss";
import OTPInput from "../components/OtpInput";

const VerifyOTPPage = () => {
  // const location = useLocation();
  // const email = location.state.email || null;

  const handleOTPVerify = (data: { email: string; otp: string }) => {
    console.log(data);
  };

  return (
    <>
      <div className={styled["verify-otp-container"]}>
        <div
          className={`${styled["verify-otp"]} d-flex flex-column justify-content-center align-item-center gap-3`}
        >
          <img
            src="https://w7.pngwing.com/pngs/553/212/png-transparent-email-computer-icons-email-miscellaneous-blue-angle-thumbnail.png"
            alt="Email_img"
            className={styled.img}
          />
          <h3 className="text-center">Please check your email</h3>
          <p className="text-center">
            We've sent a code to
            {/* {email} */}
          </p>
          <OTPInput length={6} email={"yudlinh0810@gmail.com"} onsubmit={handleOTPVerify} />
          <div className="d-flex justify-content-center">
            <p>Didn't get the code?</p>
            <p>
              <u className="text-primary"> Click to the send.</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTPPage;
