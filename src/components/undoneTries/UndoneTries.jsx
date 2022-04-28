const namespace = 'undone-tries';

const UndoneTries = ({squares}) => (
  <div className="container">
    {squares.map(() => <div className={`${namespace}__block`}/>)}
  </div>
)

export default UndoneTries