import './Card.scss';

const Card = (props) => {
  return (
    <div className={`card card--spaced card--thin ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Card;
