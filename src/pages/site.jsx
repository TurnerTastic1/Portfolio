import React from "react";

import ParticlesComponent from "../components/particles/stars.jsx";


function Site() {

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="promptInput" className="form-label">Input question</label>
          <input type="text" className="form-control" id="promptInput" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Symbols</div>
        </div>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-info">+</button>
            <button type="button" className="btn btn-info">-</button>
            <button type="button" className="btn btn-info">*</button>
            <button type="button" className="btn btn-info">/</button>
          </div>
          <div className="btn-group" role="group" aria-label="Second group">
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Site;
