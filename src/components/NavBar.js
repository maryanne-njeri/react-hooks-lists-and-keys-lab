import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLInks = links.map((link) => 
  <a key={link} href={"#" + link}>{link}</a>
  )

  return (
    <nav>
      {navLInks}
    </nav>
    )
}

export default NavBar;
