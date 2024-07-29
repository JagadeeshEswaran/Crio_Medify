import React from "react";

const Navbar = () => {
  return (
    <>
      <section>
        <nav
          className="topNavBar"
          style={{
            background: "#2AA7FF",
            height: "3rem",
            color: "aliceblue",
            fontSize: "1.2rem",
          }}
        >
          <p className="topnavBar_message">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </p>
        </nav>

        <nav>
          <article className="favIcon">
            <img src="" alt="" />
            <p>Medify</p>
          </article>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
