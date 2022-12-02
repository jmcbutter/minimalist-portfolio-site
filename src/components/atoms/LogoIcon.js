import IconButton from "./IconButton";

import logo from "../../images/icons/logo";

// let logo = {
//   viewBox: "0 0 61 32",
//   href: '/',
//   path: (
//     <path fill="currentColor" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/>
//   )
// }

const LogoIcon = (props) => {
  return <IconButton {...props} iconObject={logo} />;
};

export default LogoIcon;
