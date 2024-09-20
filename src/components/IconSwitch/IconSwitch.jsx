const IconSwitch = ({ icon, onSwitch }) => {

  return (
    <button className="material-icons" onClick={onSwitch}>
      {icon}
    </button>
  );
};

export default IconSwitch;
