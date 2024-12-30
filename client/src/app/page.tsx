"use client";

import React, { useState } from "react";

const App = () => {
  const [huntStatus, setHuntStatus] = useState(false);

  const hunterHandler = (e) => {
    const status = e.target.checked;

    setHuntStatus(status);
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <section className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          {huntStatus ? (
            <h1 className="text-green-600 font-bold text-3xl text-center">
              Hunting...
            </h1>
          ) : (
            <h1 className="text-red-600 font-bold text-3xl text-center">OFF</h1>
          )}
        </div>
        <input
          type="checkbox"
          className="toggle toggle-lg mt-5"
          checked={huntStatus}
          onChange={hunterHandler}
        />
      </section>
    </main>
  );
};

export default App;
