import React from 'react';

const Jumbo = () => {
  return (
    <div className="container my-4">
      <div className="p-5 mb-4 bg-secondary bg-opacity-25 rounded-3">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, 
          eligendi, in quo sunt possimus non incidunt odit vero aliquid similique 
          quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbo;