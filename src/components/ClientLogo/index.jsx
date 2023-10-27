import { Google } from "./Pack/Google";
import { AirBnb } from "./Pack/AirBnb";
import { Facebook } from "./Pack/Facebook";
import { Netflix } from "./Pack/Netflix";
import { Amazon } from "./Pack/Amazon";
import { Grab } from "./Pack/Grab";

const ClientLogo = ({ children }) => {
  return <>{children}</>;
};

ClientLogo.Google = Google;
ClientLogo.Airbnb = AirBnb;
ClientLogo.Facebook = Facebook;
ClientLogo.Netflix = Netflix;
ClientLogo.Amazon = Amazon;
ClientLogo.Grab = Grab;

export default ClientLogo;
