import ForStudents from "../../assets/pngs/ForStudents.png";
import ForInstructors from "../../assets/pngs/ForInstructors.png";

const RoleNavigationCard = ({ role }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img src={role === "student" ? ForStudents : ForInstructors} alt={role} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
        <div className="text-white text-3xl font-semibold mb-3 leading-10 uppercase">
          {role === "student" ? "For Students" : "For Instructors"}
        </div>
        <button className="border border-white text-white hover:bg-[#23BDEEE5] hover:border-[#23BDEEE5] font-bold text-xl px-8 py-4 rounded-full">
          {role === "student" ? "Enter access code" : "Start a class today"}
        </button>
      </div>
    </div>
  );
};

export default RoleNavigationCard;
