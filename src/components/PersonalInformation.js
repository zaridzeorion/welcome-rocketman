import React from "react";

const PersonalInformation = () => {
  return (
    <>
      <div>
        <h2>Hey, Rocketeer, what are your coordinates?</h2>
        <input type="text" placeholder="First Name" /> <br />
        <input type="text" placeholder="Last Name" /> <br />
        <input type="text" placeholder="E Mail" /> <br />
        <input type="text" placeholder="+995 5__ __ __ __" />
      </div>

      <div>
        <h2>Redberry Origins</h2>
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
      </div>
    </>
  );
};

export default PersonalInformation;
