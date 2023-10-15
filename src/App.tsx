import { FormEvent, useState } from "react";
import EducationDiv from "./components/EducationDiv";
import GeneralInfo from "./components/GeneralInformation";
import PracticalDiv from "./components/PracticalDiv";
import Preview from "./components/Preview";
import { education, profExp } from "./types";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function handleChanges(f: (s: string) => void, e: React.FormEvent<HTMLInputElement> | undefined): void {
  if (e) f(e.currentTarget.value);
}
function checkValue(element: HTMLInputElement) {
  element.classList.add("required");
  if (element.value === "" || element.value === "mm/dd/yyyy") {
    return false;
  }
  return true;
}

function checkForm(arr: HTMLInputElement[]): boolean {
  let success: boolean = true;
  for (let i = 0; i < arr.length; i++) {
    if (!checkValue(arr[i])) {
      success = false;
    }
  }
  return success;
}

function App() {
  const emptyJob: profExp = {
    company: "",
    jobTitle: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    id: "",
  };
  const emptyEducation: education = {
    degree: "",
    fos: "",
    location: "",
    university: "",
    startDate: "",
    endDate: "",
    id: "",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [{ imageURL, imageName }, setImage] = useState({ imageURL: "", imageName: "" });
  const [jobs, setJobs] = useState<profExp[]>([]);
  const [editJob, setEditJob] = useState(false);
  const [jobToEdit, setJobToEdit] = useState<profExp>(emptyJob);
  const [editEducation, setEditEducation] = useState(false);
  const [educations, setEducations] = useState<education[]>([]);
  const [educationToEdit, setEducationToEdit] = useState<education>(emptyEducation);

  const fullName: string = firstName + " " + lastName;

  function getKeyFromElement(e: React.MouseEvent<HTMLButtonElement>): string {
    const button: HTMLButtonElement = e.target as HTMLButtonElement;
    const div: HTMLDivElement = button.parentElement!.parentElement as HTMLDivElement;
    const key = div.getAttribute("data-key") as string;
    return key;
  }

  function sortArray(arr: profExp[] | education[]): profExp[] | education[] {
    return arr.sort((a, b) => {
      if (a.startDate > b.startDate) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  function filterArrDeleteID(e: React.MouseEvent<HTMLButtonElement>, arr: profExp[] | education[]): profExp[] | education[] {
    const key = getKeyFromElement(e);
    const newArr = arr.filter((el) => {
      return !(el.id === key);
    });
    return newArr as profExp[] | education[];
  }

  function handleDeleteJob(e: React.MouseEvent<HTMLButtonElement>) {
    let newJobs = filterArrDeleteID(e, jobs);
    newJobs = sortArray(newJobs) as profExp[];
    setJobs([...newJobs]);
  }

  function handleDeleteEducation(e: React.MouseEvent<HTMLButtonElement>) {
    let newEducations = filterArrDeleteID(e, educations);
    newEducations = sortArray(newEducations) as education[];
    setEducations([...newEducations]);
  }

  function handleEditJob(e: React.MouseEvent<HTMLButtonElement>) {
    let theJob: profExp = { ...emptyJob };
    const key = getKeyFromElement(e);
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === key) {
        theJob = jobs[i];
      }
    }
    setEditJob(true);
    setJobToEdit(theJob);
  }

  function handleEditEducation(e: React.MouseEvent<HTMLButtonElement>) {
    let theEducation: education = { ...emptyEducation };
    const key = getKeyFromElement(e);
    for (let i = 0; i < educations.length; i++) {
      if (educations[i].id === key) {
        theEducation = educations[i];
      }
    }
    setEditEducation(true);
    setEducationToEdit(theEducation);
  }

  function handleSaveJob(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addProfExp") as HTMLFormElement;
    const elements: HTMLInputElement[] = [
      form.company,
      form.jobTitle,
      form.location,
      form.startDateJob,
      form.endDateJob,
    ];
    if (checkForm(elements)) {
      if (jobToEdit.id != "") {
        let jobIndex = 0;
        for (let i = 0; i < jobs.length; i++) {
          if (jobs[i].id === jobToEdit.id) {
            jobIndex = i;
          }
        }
        jobs.splice(jobIndex, 1);
      }
      const newJob: profExp = {
        id: uuidv4(),
        company: form.company.value,
        jobTitle: form.jobTitle.value,
        description: form.jobDescription.value,
        startDate: form.startDateJob.value,
        endDate: form.endDateJob.value,
        location: form.location.value,
      };
      jobs.push(newJob);
      jobs.sort((a, b) => {
        if (a.startDate.substring(3) > b.startDate.substring(3)) {
          return -1;
        } else if (a.startDate.substring(3) === b.startDate.substring(3)) {
          if (a.startDate.substring(0, 2) > b.startDate.substring(0, 2)) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      });
      setJobToEdit({ company: "", jobTitle: "", startDate: "", endDate: "", location: "", description: "", id: "" });
      setJobs([...jobs]);
      setEditJob(false);
    }
  }

  // function to handle both Add clicks on the professional exp and the education divs. Takes a funtion and that sets the edit status to true (setJobEdit or setEducationEdit)
  function handleAddClick(f: (b: boolean) => void) {
    f(true);
  }

  function handleCancelJob() {
    setJobToEdit(emptyJob);
    setEditJob(false);
  }

  function handleCancelEducation() {
    setEducationToEdit(emptyEducation);
    setEditEducation(false);
  }

  function handleSaveEducation(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addEducation") as HTMLFormElement;
    const elements: HTMLInputElement[] = [
      form.degree,
      form.university,
      form.locationED,
      form.startDateED,
      form.endDateED,
      form.fos,
    ];
    if (checkForm(elements)) {
      if (educationToEdit.id != "") {
        let educationIndex = 0;
        for (let i = 0; i < educations.length; i++) {
          if (educations[i].id === educationToEdit.id) {
            educationIndex = i;
          }
        }
        educations.splice(educationIndex, 1);
      }
      const newEducation: education = {
        id: uuidv4(),
        university: form.university.value,
        degree: form.degree.value,
        fos: form.fos.value,
        startDate: form.startDateED.value,
        endDate: form.endDateED.value,
        location: form.locationED.value,
      };
      educations.push(newEducation);
      educations.sort((a, b) => {
        if (a.startDate.substring(3) > b.startDate.substring(3)) {
          return -1;
        } else if (a.startDate.substring(3) === b.startDate.substring(3)) {
          if (a.startDate.substring(0, 2) > b.startDate.substring(0, 2)) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      });
      setEducationToEdit({ degree: "", university: "", startDate: "", endDate: "", location: "", fos: "", id: "" });
      setEducations([...educations]);
      setEditEducation(false);
    }
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      // ...
    } else {
      const imgURL: string = URL.createObjectURL(e.target.files[0]);
      const imgName: string = e.target.files[0].name;
      setImage({ imageURL: imgURL, imageName: imgName });
    }
  }
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4 flex-grow no-print">
        <GeneralInfo
          onFirstNameChange={(e) => handleChanges(setFirstName, e)}
          onLastNameChange={(e) => handleChanges(setLastName, e)}
          onLocationChange={(e) => handleChanges(setLocation, e)}
          onProfessionChange={(e) => handleChanges(setProfession, e)}
          onImageUpload={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>)}
          image={{ imageURL, imageName }}
        />
        <PracticalDiv
          jobs={jobs}
          onDelete={(e) => {
            handleDeleteJob(e);
          }}
          onSave={(e) => {
            handleSaveJob(e);
          }}
          edit={editJob}
          onAdd={() => {
            handleAddClick(setEditJob);
          }}
          onCancel={() => {
            handleCancelJob();
          }}
          onEdit={(e) => {
            handleEditJob(e);
          }}
          jobToEdit={jobToEdit}
        />
        <EducationDiv
          educations={educations}
          onAdd={() => {
            handleAddClick(setEditEducation);
          }}
          onCancel={() => {
            handleCancelEducation();
          }}
          onDelete={(e) => {
            handleDeleteEducation(e);
          }}
          onEdit={(e) => {
            handleEditEducation(e);
          }}
          onSave={(e) => {
            handleSaveEducation(e);
          }}
          edit={editEducation}
          educationToEdit={educationToEdit}
        />
      </div>
      <Preview
        name={fullName}
        location={location}
        profession={profession}
        image={{ imageURL, imageName }}
        jobs={jobs}
        educations={educations}
      />
    </div>
  );
}

export default App;
