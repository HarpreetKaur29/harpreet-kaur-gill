import google from "../assets/svgs/clients/google.svg";
import airbnb from "../assets/svgs/clients/airbnb.svg";
import facebook from "../assets/svgs/clients/facebook.svg";
import netflix from "../assets/svgs/clients/netflix.svg";
import amazon from "../assets/svgs/clients/amazon.svg";
import grab from "../assets/svgs/clients/grab.svg";

const ClientLogo = {
  Google: () => {
    return (
      <div>
        <img src={google} alt="Google" />
      </div>
    );
  },
  Airbnb: () => {
    return (
      <div>
        <img src={airbnb} alt="Airbnb" />
      </div>
    );
  },
  Facebook: () => {
    return (
      <div>
        <img src={facebook} alt="Facebook" />
      </div>
    );
  },
  Netflix: () => {
    return (
      <div>
        <img src={netflix} alt="Netflix" />
      </div>
    );
  },
  Amazon: () => {
    return (
      <div>
        <img src={amazon} alt="Amazon" />
      </div>
    );
  },
  Grab: () => {
    return (
      <div>
        <img src={grab} alt="Grab" />
      </div>
    );
  },
};

export default ClientLogo;
