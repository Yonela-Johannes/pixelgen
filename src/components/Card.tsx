import styled from "styled-components";

function Card({ image }) {
  return (
    <CardStyled>
      <div
        data-aos="fade-up-right"
        data-aos-duration="3000"
        className="image"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay"></div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  height: 500px;
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  .overlay {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 25%;
    background: linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06) 99%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default Card;
