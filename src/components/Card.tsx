import React from "react";
import "tachyons";

interface CardProps {
  name: string;
  id: number;
  email: string;
  username: string;
}

const Card = ({ id, name, username, email }: CardProps): JSX.Element => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" key={id} data-testid="card">
      <img alt="cat" src={`https://robohash.org/${username}?set=set4`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
