import React from "react";
function Header(props) {
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img
          alt="test"
          src="https://as2.ftcdn.net/jpg/03/11/48/85/1000_F_311488581_Yu4WPdLLNt47cymWU3VmHmOnH7BHqp9F.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
