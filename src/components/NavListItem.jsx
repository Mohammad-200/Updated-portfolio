import React from "react";

function NavListItem({ item, activateTag }) {
  return (
    <li>
      <a
        onClick={() => activateTag(item.id)}
        className={item.active ? "active" : ""}
        href={item.link}
      >
        {item.name}
      </a>
    </li>
  );
}

export default NavListItem;
