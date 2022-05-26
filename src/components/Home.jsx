import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import heroText from "../assets/heroText.png";
import Button from "./Button";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Explore Our{" "}
            <span>
              <img src={heroText} alt="Hero Text" />
            </span>{" "}
            Digital NFT Market Place
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="buttons">
            <Button blue text="Explore Now" />
            <Button text="Create NFT" />
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>40K</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12K</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20K</h2>
              <h5>Artist</h5>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse {
    height: 30rem;
    width: 30rem;
    background-color: #ae54c27d;
    border-radius: 100%;
    filter: blur(2000px);
    opacity: 0.5;
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1 {
        color: white;
        font-size: 5rem;
        span {
          .img {
          }
        }
      }
      p {
        color: #a6a6a6;
      }
      .buttons {
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;
        .dataTab {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2 {
            font-size: 2rem;
            color: white;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
    .image {
      img {
        height: 40rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`;
