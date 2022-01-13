import PropTypes from "prop-types";
import BsDropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const propTypes = {
  /** Specifies a large or small Dropdown */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Manually set the visual state of the Dropdown to `:active` */
  active: PropTypes.bool,

  /** Specifies a split in the Dropdown */
  split: PropTypes.bool,

  /** Set the Dropdown text */
  label: PropTypes.string,

  /** Set icon */
  icon: PropTypes.oneOf([
    "coffee",
    "star",
  ]),
};

export const Dropdown = ({ split, label, icon, children, ...props }) => {
  const splitClass = split ? "split-border" : "";

  return (
    <BsDropdown className = {splitClass}>
      <BsDropdown.Toggle {...props}>
        <span>
          {icon ? <FontAwesomeIcon icon={icon}></FontAwesomeIcon> : ""}
          {label}
        </span>
      </BsDropdown.Toggle>

      <BsDropdown.Menu>
        {children}
      </BsDropdown.Menu>
    </BsDropdown>
  );
};
Dropdown.propTypes = propTypes;