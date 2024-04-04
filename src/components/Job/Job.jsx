import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
  const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="mt-4">
          <button className="px-5 text-[#8A7EFE] py-2 font-extrabold border mr-4 rounded border-[#8A7EFE]">{remote_or_onsite}</button>
          <button  className="px-5 text-[#8A7EFE] py-2 font-extrabold border mr-4 rounded border-[#8A7EFE]">{job_type}</button>
        </div>
        <div className="flex">
          <h2 className="mr-4 flex text-center  "> <MdLocationOn className="justify-center mr-2 text-xl" />{location}</h2>
          <h2 className="flex"><BsCurrencyDollar  className="text-xl" /> {salary}</h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
