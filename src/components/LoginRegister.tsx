import React, { useEffect, useState } from "react";
import { Modal, Button, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";
import { LoginPayLoad, RegisterPayLoad } from "../types";
import "../styles/components/LoginRegister.scss";

const LoginRegister = ({
  show = false,
  onChangeStatus,
}: {
  show: boolean;
  onChangeStatus: (status: boolean) => void;
}) => {
  const [statusLogin, setStatusLogin] = useState<boolean>(show);
  const [statusRegister, setStatusRegister] = useState<boolean>(false);
  const [formDataLogin, setFormDataLogin] = useState<LoginPayLoad>({ email: "", password: "" });
  const [formDataRegister, setFormDataRegister] = useState<RegisterPayLoad>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClose = () => {
    setStatusLogin(false);
    setStatusRegister(false);
    if (onChangeStatus) {
      onChangeStatus(false);
    }
  };

  const handleOnChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDataLogin({
      ...formDataLogin,
      [name]: value,
    });
  };

  const handleOnChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDataRegister({
      ...formDataRegister,
      [name]: value,
    });
  };

  const handleClickShowRegister = () => {
    setStatusLogin(false);
    setStatusRegister(true);
  };

  const handleClickLogin = () => {
    setStatusRegister(false);
    setStatusLogin(true);
  };

  useEffect(() => {
    setStatusLogin(show);
  }, [show]);
  return (
    <>
      {/* Login */}
      <Modal show={statusLogin} onHide={handleClose} centered={true}>
        <ModalHeader closeButton>
          <ModalTitle className="w-100 text-center">Đăng Nhập</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form className="login">
            {/* <div className="phone">
              <label htmlFor="phone">Số điện thoại</label>
              <input id="phone" name="phone" className="input-phone"/>
            </div> */}
            <div className="email relative">
              <input
                id="email"
                name="email"
                className=" input"
                placeholder=" "
                value={formDataLogin.email}
                onChange={handleOnChangeLogin}
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            <div className="password relative">
              <input
                id="password"
                name="password"
                className="input"
                placeholder=" "
                value={formDataLogin.password}
                onChange={handleOnChangeLogin}
              />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" type="submit">
            Đăng nhập
          </Button>
          <Button variant="primary" onClick={handleClickShowRegister}>
            Đăng ký
          </Button>
        </ModalFooter>
      </Modal>

      {/* Register */}
      <Modal show={statusRegister} onHide={handleClose} centered={true}>
        <ModalHeader closeButton>
          <ModalTitle className="w-100 text-center">Đăng Ký</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form className="login">
            {/* <div className="phone">
              <label htmlFor="phone">Số điện thoại</label>
              <input id="phone" name="phone" className="input-phone"/>
            </div> */}
            <div className="relative">
              <input
                id="email"
                name="email"
                className="input"
                placeholder=""
                value={formDataRegister.email}
                onChange={handleOnChangeRegister}
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                className="input"
                placeholder=""
                value={formDataRegister.password}
                onChange={handleOnChangeRegister}
              />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                className="input"
                placeholder=""
                value={formDataRegister.confirmPassword}
                onChange={handleOnChangeRegister}
              />
              <label htmlFor="confirm-password" className="label">
                Confirm Password
              </label>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" type="submit">
            Đăng ký
          </Button>
          <Button variant="primary" onClick={handleClickLogin}>
            Đăng nhập
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LoginRegister;
