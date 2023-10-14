import { ReactElement } from "react";
import { education, profExp } from "../types";
import format from "date-fns/format";
import { adjustDateFormat } from "../dateFunctions";

function InfoResult({
  name,
  location,
  profession,
  image,
}: {
  name: string;
  location: string;
  profession: string;
  image: { imageURL: string; imageName: string };
}): ReactElement {
  return (
    <div className="h-1/6 flex justify-between">
      <div className="flex flex-col items-start w-3/8 previewTitle">
        <div className="font-bold previewName">{name}</div>
        <div className="previewOccupation">{profession}</div>
        <div className="flex items-center">
          <span id="locationSpan"></span>
          <h3 className="">{location}</h3>
        </div>
      </div>
      <img className="profilePic" src={image.imageURL}></img>
    </div>
  );
}

function JobExp({ jobs }: { jobs: profExp[] }) {
  return (
    <div className="mt-2">
      <h2 className="previewHeading">Professional Experience</h2>
      {jobs.map((job) => {
        const startDate = adjustDateFormat(job.startDate);
        let endDate = adjustDateFormat(job.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === job.endDate) {
          endDate = "now";
        }
        return (
          <div className="previewJobDiv items-start justify-start text-left" key={job.id}>
            <p>{startDate + " - " + endDate}</p>
            <h3>{job.company}</h3>
            <p>{job.location}</p>
            <p>{job.jobTitle}</p>
            <p></p>
            <p className="previewJobDescription">{job.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function EducationExp({ educations }: { educations: education[] }) {
  return (
    <div className="mt-2">
      <h2 className="previewHeading">Education</h2>
      {educations.map((education) => {
        const startDate = adjustDateFormat(education.startDate);
        let endDate = adjustDateFormat(education.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === education.endDate) {
          endDate = "now";
        }
        return (
          <div className="previewJobDiv items-start justify-start text-left" key={education.id}>
            <p>{startDate + " - " + endDate}</p>
            <h3>{education.degree}</h3>
            <p/>
            <p>{education.fos}</p>
            <p/>
            <p>{education.university}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Preview({
  name,
  location,
  profession,
  image,
  jobs,
  educations,
}: {
  name: string;
  location: string;
  profession: string;
  image: { imageURL: string; imageName: string };
  jobs: profExp[];
  educations: education[];
}) {
  return (
    <div id="preview" className="bg-white relative text-black">
      <InfoResult name={name} location={location} profession={profession} image={image} />
      <hr className="h-1 bg-black"></hr>
      <JobExp jobs={jobs} />
      <EducationExp educations={educations} />
    </div>
  );
}
