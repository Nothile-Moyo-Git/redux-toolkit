import './Notifications.scss';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = 'error';
  }
  if (props.status === 'success') {
    specialClasses = 'success';
  }

  const cssClasses = `notification ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h1>{props.title}</h1>
      <h2>{props.message}</h2>
    </section>
  );
};

export default Notification;