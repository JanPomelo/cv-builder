import { ReactElement } from "react";
import { education, profExp } from "../types";
import format from "date-fns/format";
import { adjustDateFormat } from "../dateFunctions";

function handlePrintClick() {
  window.print();
}

function InfoResult({
  name,
  location,
  profession,
  image,
  color,
  fontColor,
}: {
  name: string;
  location: string;
  profession: string;
  image: { imageURL: string; imageName: string };
  color: string;
  fontColor: { fontColor: string; svgFilter: string };
}): ReactElement {
  return (
    <div className="h-1/6 flex justify-around">
      <div className="flex flex-col items-start w-3/8 previewTitle">
        <div className="font-bold previewName">{name}</div>
        <div
          className="previewOccupation"
          style={{
            backgroundColor: color,
            color: fontColor.fontColor,
          }}
        >
          <span>{profession}</span>
        </div>
        <div className="flex items-center">
          <span id="locationSpan"></span>
          <h3 className="">{location}</h3>
        </div>
      </div>
      <img className="profilePic" src={image.imageURL} alt="  "></img>
    </div>
  );
}

function JobExp({
  jobs,
  color,
  fontColor,
  font,
}: {
  jobs: profExp[];
  color: string;
  fontColor: { fontColor: string; svgFilter: string };
  font: string;
}) {
  return (
    <div className="mt-2">
      <h2
        className="previewHeading"
        style={{
          backgroundColor: color,
          color: fontColor.fontColor,
        }}
      >
        Professional Experience
      </h2>
      {jobs.map((job) => {
        const startDate = adjustDateFormat(job.startDate);
        let endDate = adjustDateFormat(job.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === job.endDate) {
          endDate = "now";
        }
        return (
          <div className="previewJobDiv text-left" key={job.id}>
            <p>{startDate + " - " + endDate}</p>
            <h3>{job.company}</h3>
            <p>{job.location}</p>
            <p>{job.jobTitle}</p>
            <p></p>
            <pre
              className="previewJobDescription"
              style={{
                fontFamily: font,
              }}
            >
              {job.description}
            </pre>
          </div>
        );
      })}
    </div>
  );
}

function EducationExp({
  educations,
  color,
  fontColor,
}: {
  educations: education[];
  color: string;
  fontColor: { fontColor: string; svgFilter: string };
}) {
  return (
    <div className="mt-2">
      <h2
        className="previewHeading"
        style={{
          backgroundColor: color,
          color: fontColor.fontColor,
        }}
      >
        Education
      </h2>
      {educations.map((education) => {
        const startDate = adjustDateFormat(education.startDate);
        let endDate = adjustDateFormat(education.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === education.endDate) {
          endDate = "now";
        }
        return (
          <div className="previewJobDiv text-left" key={education.id}>
            <p>{startDate + " - " + endDate}</p>
            <h3>{education.degree}</h3>
            <p />
            <p>{education.fos}</p>
            <p />
            <p>{education.university}</p>
          </div>
        );
      })}
    </div>
  );
}

function PreviewSkills({
  color,
  fontColor,
  technicSkills,
  softSkills,
  languageSkills,
}: {
  color: string;
  fontColor: {
    fontColor: string;
    svgFilter: string;
  };
  technicSkills: string;
  softSkills: string;
  languageSkills: string;
}) {
  return (
    <div className="mt-2">
      <h2
        className="previewHeading"
        style={{
          backgroundColor: color,
          color: fontColor.fontColor,
        }}
      >
        Skills
      </h2>
      <div className="previewJobDiv text-left">
        <p className="self-start">Technical Skills:</p>
        <p>{technicSkills}</p>
      </div>
      <div className="previewJobDiv text-left">
        <p className="self-start">Soft Skills:</p>
        <p>{softSkills}</p>
      </div>
      <div className="previewJobDiv text-left">
        <p className="self-start">Language Skills:</p>
        <p>{languageSkills}</p>
      </div>
    </div>
  );
}

function ContactInfo({
  email,
  phone,
  website,
  gitHub,
  linkedIn,
  color,
  fontColor,
}: {
  email: string;
  phone: string;
  website: string;
  gitHub: string;
  linkedIn: string;
  color: string;
  fontColor: { fontColor: string; svgFilter: string };
}) {
  return (
    <div
      className="contactInfoWrapper"
      style={{
        backgroundColor: color,
        color: fontColor.fontColor,
      }}
    >
      {email === "" ? (
        <></>
      ) : (
        <div className="contactInfos">
          <span className="previewContact" id="emailSpan" style={{ filter: fontColor.svgFilter }}></span>
          <p>{email}</p>
        </div>
      )}
      {phone === "" ? (
        <></>
      ) : (
        <div className="contactInfos">
          <span className="previewContact" id="phoneSpan" style={{ filter: fontColor.svgFilter }}></span>
          <p>{phone}</p>
        </div>
      )}
      {website === "" ? (
        <></>
      ) : (
        <div className="contactInfos">
          <span className="previewContact" id="websiteSpan" style={{ filter: fontColor.svgFilter }}></span>
          <p>{website}</p>
        </div>
      )}
      {gitHub === "" ? (
        <></>
      ) : (
        <div className="contactInfos">
          <span className="previewContact" id="githubSpan" style={{ filter: fontColor.svgFilter }}></span>
          <p>{gitHub}</p>
        </div>
      )}
      {linkedIn === "" ? (
        <></>
      ) : (
        <div className="contactInfos">
          <span className="previewContact" id="linkedinSpan" style={{ filter: fontColor.svgFilter }}></span>
          <p>{linkedIn}</p>
        </div>
      )}
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
  email,
  phone,
  website,
  gitHub,
  linkedIn,
  blackLine,
  font,
  color,
  fontColor,
  technicSkills,
  softSkills,
  languageSkills,
  fontSize,
}: {
  name: string;
  location: string;
  profession: string;
  image: { imageURL: string; imageName: string };
  jobs: profExp[];
  educations: education[];
  email: string;
  phone: string;
  website: string;
  gitHub: string;
  linkedIn: string;
  blackLine: boolean;
  font: string;
  color: string;
  fontColor: { fontColor: string; svgFilter: string };
  technicSkills: string;
  softSkills: string;
  languageSkills: string;
  fontSize: string;
}) {
  return (
    <div
      id="preview"
      className={"bg-white relative text-black self-center lg:self-start overflow-hidden " + fontSize}
      style={{
        fontFamily: font,
      }}
    >
      <InfoResult
        name={name}
        location={location}
        profession={profession}
        image={image}
        color={color}
        fontColor={fontColor}
      />
      {blackLine ? <hr className="h-1 bg-black"></hr> : <></>}
      <ContactInfo
        email={email}
        phone={phone}
        website={website}
        gitHub={gitHub}
        linkedIn={linkedIn}
        color={color}
        fontColor={fontColor}
      />
      {blackLine ? <hr className="h-1 bg-black"></hr> : <></>}
      <JobExp jobs={jobs} color={color} fontColor={fontColor} font={font} />
      <EducationExp educations={educations} color={color} fontColor={fontColor} />
      <PreviewSkills
        color={color}
        fontColor={fontColor}
        technicSkills={technicSkills}
        softSkills={softSkills}
        languageSkills={languageSkills}
      />
      <button
        id="printBut"
        className="no-print"
        onClick={handlePrintClick}
        style={{
          backgroundColor: color,
          color: fontColor.fontColor,
        }}
      >
        Print
      </button>
    </div>
  );
}
