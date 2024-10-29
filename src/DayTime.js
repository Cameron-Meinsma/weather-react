import React from "react";

export default function DayTime({ day, time }) {
    return (
        <div className="DayTime">
            {day} {time}
        </div>
    );
}
