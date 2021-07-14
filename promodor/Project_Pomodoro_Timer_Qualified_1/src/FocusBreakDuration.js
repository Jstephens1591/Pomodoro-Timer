import React, { useState } from "react";


function RenderDuration({
  focusDuration,
  breakDuration,
  isTimerRunning,
  session,
  minutesToDuration,
  handleDecreaseFocus,
  handleIncreseFocus,
  handleDecreaseBreak,
  handleIncreseBreak,
}) {
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
          
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
         
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleDecreaseFocus}
              disabled={session || isTimerRunning ? true : false}
            >
              <span className="oi oi-minus" />
            </button>
        
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleIncreseFocus}
              disabled={session || isTimerRunning ? true : false}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
             
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
            
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleDecreaseBreak}
                disabled={session || isTimerRunning ? true : false}
              >
                <span className="oi oi-minus" />
              </button>
            
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleIncreseBreak}
                disabled={session || isTimerRunning ? true : false}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderDuration;