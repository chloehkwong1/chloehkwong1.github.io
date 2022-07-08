import React from "react";

const Form = () => {
  return (
    <form>
      <input id="tired-mood" type="radio" value="Tired" />
      <label for="tired-mood">Tired</label>
      <input type="radio" value="Happy" />
      <input type="radio" value="Rested" />
      <input type="radio" value="Excited" />
      <input type="radio" value="Sad" />
      <input type="radio" value="Angry" />
      <input type="radio" value="Calm" />
      <input type="radio" value="Frustrated" />
      <input type="radio" value="Scared" />
    </form>
  );
};

export default Form;
