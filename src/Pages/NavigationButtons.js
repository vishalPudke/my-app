import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  let goToHomeAction = () => {
    navigate("/home");
  };
  let goToTodoAction = () => {
    navigate("/todo");
  };
  let goToRegistrationAction = () => {
    navigate("/registration");
  };

  return (
    <div>
      <input type="button" value="Home" onClick={goToHomeAction} />
      <input type="button" value="Todo" onClick={goToTodoAction} />
      <input
        type="button"
        value="Registartion"
        onClick={goToRegistrationAction}
      />
    </div>
  );
}

export default NavigationButtons;
