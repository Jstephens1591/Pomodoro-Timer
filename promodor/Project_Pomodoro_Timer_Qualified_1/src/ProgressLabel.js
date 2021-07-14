import React, { useState } from "react";

function ProgressLabel({
  session,
  focusDuration,
  breakDuration,
  minutesToDuration,
  secondsToDuration,
  isTimerRunning,
  showLabel,
}) {
  const progressWidth =
    session.label === "Focusing"
      ? parseInt(focusDuration * 60 - session.timeRemaining) /
        ((focusDuration * 60) / 100)
      : parseInt(breakDuration * 60 - session.timeRemaining) /
        ((breakDuration * 60) / 100);

 
  return (
    <div>
    
      <div className="row mb-2">
        <div className="col">
       
          <h2 data-testid="session-title">
            {session.label} for{" "}
            {session.label === "Focusing"
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)}{" "}
            minutes
          </h2>
       
          <p className="lead" data-testid="session-sub-title">
            {session.label === "Focusing"
              ? secondsToDuration(session.timeRemaining)
              : secondsToDuration(session.timeRemaining)}{" "}
            remaining
          </p>
          {!isTimerRunning && showLabel ? <h2>PAUSED</h2> : null}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressWidth} 
              style={{ width: `${progressWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressLabel;