import "./card.css";

const Card = ({ name="", gifUrl, bodyPart, target, equipment }) => {
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <img src={gifUrl} alt="exercises ilustration" onLoad={() => console.log("gif ready!")}/>
      <div className="card-footer">
        <p>Body Part <span>{bodyPart}</span></p>
        <p>Target Muscles <span>{target}</span></p>
        <p>Equipment <span>{equipment}</span></p>
      </div>
    </div>
  );
};

export default Card;
