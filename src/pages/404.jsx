import React from "react";

function MissingPage() {
  function SendHome() {
    window.location.href = "/home";
  }
	
  return (
    <div>
      <p>404!</p>
      <button onClick={SendHome}> Take me home </button>
    </div>
  )
}

export default MissingPage;
