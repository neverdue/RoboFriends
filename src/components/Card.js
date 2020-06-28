import React from 'react';

const Card = (props) => {
  const { id, name, email, } = props;
  return (
    <div className="tc dib br3 shadow-5 bg-light-green ma2 pa2 grow bw3">
      <img alt="robots" src={`https://robohash.org/${id}?size=250x250`} />
      <div className="second">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
