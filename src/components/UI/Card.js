import './Card.scss';

const Card = (props) => {
  return (
    <section
      className={`card card--spaced ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
