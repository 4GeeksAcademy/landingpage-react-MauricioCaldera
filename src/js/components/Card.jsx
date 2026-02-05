function Card() {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        src="https://placehold.co/500x325"
        className="card-img-top"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero,
          nesciunt dolores laborum in vitae repudiandae est! Saepe non, quas,
          veritatis accusantium reiciendis ea nisi ad eum nam possimus mollitia!
        </p>
        <a href="#" className="btn btn-primary">
          Find out more
        </a>
      </div>
    </div>
  );
}

export default Card;
