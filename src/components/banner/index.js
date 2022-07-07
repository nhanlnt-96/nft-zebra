import "./Banner.scss";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Image from "../../assets/zebra-image.jpeg";
import TitleBg from "../../assets/title-bg.png";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import MintBox from "../mintBox";
import {connect} from "../../redux/blockchain/blockchainActions";
import {fetchData} from "../../redux/data/dataActions";
import ToastNotification from "../toastNoti";

const Banner = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  return (
    <Container fluid className="px-0 banner">
      <div className="banner-triangle__corner"/>
      <Container fluid="xxl" className="h-100 banner-container">
        <Row className="h-100 banner-row">
          <Col xl={6} md={12} sm={12} className="banner-left">
            <div className="gap-3 w-100 banner-left__container">
              <div className="image-item__container">
                <div className="image-item__wrapper">
                  <img src={Image} alt="nft-zebra"/>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3 w-100 image-item__bottom">
                <div className="image-item__container">
                  <div className="image-item__wrapper">
                    <img src={Image} alt="nft-zebra"/>
                  </div>
                </div>
                <div className="image-item__container">
                  <div className="image-item__wrapper">
                    <img src={Image} alt="nft-zebra"/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}
               md={12}
               sm={12}
               className="d-flex flex-column justify-content-center align-items-center banner-right">
            <div className="d-flex justify-content-center align-items-center banner-right__logo">
              <img src={Image} alt="nft-zebra-logo"/>
              <h6>Zebra
                <br/>
                nft
              </h6>
            </div>
            <div className="d-flex justify-content-center align-items-center banner-right__btn">
              {
                blockchain.account ? (
                  <MintBox/>
                ) : (
                  <button className="banner-right__btn-container"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}>
                    <div className="banner-right__btn-wrapper">
                      <img src={TitleBg} alt=""/>
                      <p>
                        <span>Mint your</span>
                        <span>Zebra here</span>
                      </p>
                    </div>
                  </button>
                )
              }
            </div>
            <div className="banner-right__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iure non tenetur! Atque blanditiis
                cumque deserunt, excepturi magni repellendus vitae?</p>
            </div>
            <div className="banner-right__social">
              <a href="#" className="project-site">www.loremipsum.com</a>
              <div className="social-items">
                <a href="#" className="item">
                  <BsInstagram/>
                </a>
                <a href="#" className="item">
                  <BsFacebook/>
                </a>
                <a href="#" className="item">
                  <BsTwitter/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastNotification errorMsg={blockchain.errorMsg}/>
    </Container>
  );
};

export default Banner;