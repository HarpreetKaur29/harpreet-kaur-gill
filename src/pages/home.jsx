import ClientLogo from "../components/ClientLogo";
import FeatureCard from "../components/FeatureCard";

//Feature Icons
import OnlineBilling from "../assets/svgs/OnlineBilling.svg";
import EasyScheduling from "../assets/svgs/EasyScheduling.svg";
import CustomerTracking from "../assets/svgs/CustomerTracking.svg";
import RoleNavigationCard from "../components/RoleNavigationCard";

//Video Thumbnail
import VideoThumbnail from "../assets/pngs/VideoThumbnail.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import PlayButton from "../assets/svgs/Playbutton.svg";
import Girl from "../assets/pngs/header-pic.png";
import heroBackground from "../assets/svgs/heroBackground.svg";

const Home = () => {
  return (
    <>
      <div className="mb-28 relative overflow-hidden bg-[#FFEBE7] ">
        <Header />
        <div className="flex justify-around items-center px-16 container mx-auto">
          <div className="w-1/2 flex flex-col gap-8 justify-center">
            <h1 className="text-primary font-extrabold text-5xl leading-[60px]">
              <span className="text-secondary font-bold">Studying</span> Online
              is now much easier
            </h1>
            <p className="text-lg w-3/4">
              Skilline is an interesting platform that will teach you in a more
              interactive way
            </p>
            <div className="flex items-center gap-3">
              <button className="bg-secondary text-white px-8 text-lg py-3 rounded-full">
                Join for free
              </button>
              {/* <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_0_414)">
                      <circle cx="98" cy="80" r="40" fill="white" />
                    </g>
                    <path
                      d="M112.575 79.8097C113.221 80.1983 113.221 81.135 112.575 81.5236L91.5154 94.1891C90.8489 94.5899 90 94.1099 90 93.3321L90 68.0012C90 67.2235 90.8489 66.7434 91.5154 67.1443L112.575 79.8097Z"
                      fill="#23BDEE"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_414"
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="20" />
                        <feGaussianBlur stdDeviation="30" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_414"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_414"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button> */}
              <button>
                <p>Watch how it works</p>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={Girl} alt="Girl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-16">
        <div className="text-center mb-28">
          <p className="text-2xl font-semibold text-typography mb-8">
            Trusted by 5,000+ Companies Worldwide
          </p>
          <div className="grid grid-cols-6 gap-4 max-w-6xl mx-auto items-center">
            <div className="w-36">
              <ClientLogo.Google />
            </div>
            <div className="w-36">
              <ClientLogo.Netflix />
            </div>
            <div className="w-36">
              <ClientLogo.Airbnb />
            </div>
            <div className="w-36">
              <ClientLogo.Amazon />
            </div>
            <div className="w-36">
              <ClientLogo.Facebook />
            </div>
            <div className="w-36">
              <ClientLogo.Grab />
            </div>
          </div>
        </div>

        <div className="text-center mb-28">
          <div className="text-primary font-bold text-4xl mb-5">
            All-In-One
            <span className="text-secondary"> Cloud Software.</span>
          </div>
          <div className="max-w-3xl text-typography leading-9 mx-auto mb-28 text-2xl">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </div>
          <div className="flex gap-11">
            <FeatureCard
              icon={OnlineBilling}
              title="Online Billing, Invoicing, & Contracts"
              description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            />
            <FeatureCard
              icon={EasyScheduling}
              title="Easy Scheduling & Attendance Tracking"
              description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
            />
            <FeatureCard
              icon={CustomerTracking}
              title="Customer Tracking"
              description="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization"
            />
          </div>
        </div>

        <div className="text-center mb-28">
          <div className="text-primary font-bold text-4xl mb-5">
            What is
            <span className="text-secondary"> Skilline?</span>
          </div>
          <div className="max-w-5xl text-typography leading-9 mx-auto mb-28 text-2xl">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </div>

          <div className="flex gap-11">
            <RoleNavigationCard />
            <RoleNavigationCard role="student" />
          </div>
        </div>

        <div className="mb-28 flex gap-12">
          <div className="text-typography flex-1">
            <div className="text-primary font-medium text-3xl leading-[50px] mb-5 relative">
              Everything you can do in a physical classroom,
              <span className="text-secondary"> you can do with Skilline</span>
              <div className="w-16 h-16 rounded-full bg-[#DCE2EE] absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/3 -z-10" />
            </div>
            <div className="text-xl leading-9 mb-8">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </div>
            <button className="text-xl underline">Learn More</button>
          </div>
          <div className="flex-1 relative p-4">
            <div className="bg-[#23BDEE] w-32 h-32 rounded-xl absolute left-0 top-0" />
            <div className="bg-primary w-56 h-56 rounded-xl absolute right-0 bottom-0" />
            <img
              src={VideoThumbnail}
              alt="Video Thumbnail"
              className="relative z-10"
            />
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Home;
