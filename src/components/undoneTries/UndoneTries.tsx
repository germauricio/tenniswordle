import React from 'react';
const namespace = 'undone-tries';

type UndoneTriesType = {
  squares: string[],
}

const UndoneTries = ({squares}: UndoneTriesType) => (
  <div className="container">
    {squares.map(() => <div className={`${namespace}__block`}/>)}
  </div>
)

export default UndoneTries