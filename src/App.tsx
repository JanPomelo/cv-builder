import { FormEvent, useState } from "react";
import EducationDiv from "./components/EducationDiv";
import GeneralInfo from "./components/GeneralInformation";
import PracticalDiv from "./components/PracticalDiv";
import Preview from "./components/Preview";
import { profExp } from "./types";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

function handleChanges(f: (s: string) => void, e: React.FormEvent<HTMLInputElement>): void {
  f(e.currentTarget.value);
}

function adjustDateFormat(date: string): string {
  const year: string = date.substring(0, 4);
  const month: string = date.substring(5, 7);
  const newDate: string = month + "/" + year;
  return newDate;
}

function checkValue(element: HTMLInputElement) {
  element.classList.add("required");
  if (element.value === "" || element.value === "mm/dd/yyyy") {
    return false;
  }
  return true;
}

function checkJobForm(form: HTMLFormElement) {
  const elements: HTMLInputElement[] = [form.company, form.jobTitle, form.location, form.startDateJob, form.endDateJob];
  let success: boolean = true;
  for (let i = 0; i < elements.length; i++) {
    if (!checkValue(elements[i])) {
      success = false;
    }
  }
  if (form.endDateJob.value < form.startDateJob.value) {
    form.endDateJob.classList.add("wrongsens");
    success = false;
  }
  return success;
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [{ imageURL, imageName }, setImage] = useState({ imageURL: "", imageName: "" });
  const [jobs, setJobs] = useState<profExp[]>([]);
  const [edit, setEdit] = useState(false);

  function handleDeleteJob(e: React.MouseEvent<HTMLButtonElement>) {
    const button: HTMLButtonElement = e.target as HTMLButtonElement;
    const div: HTMLDivElement = button.parentElement!.parentElement as HTMLDivElement;
    const jobKey = div.getAttribute("data-key") as string;
    const newJobs = jobs.filter((job) => {
      return !(job.id === jobKey);
    });
    newJobs.sort((a, b) => {
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
    setJobs([...newJobs]);
  }

  const fullName: string = firstName + " " + lastName;

  function handleSaveClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addProfExp") as HTMLFormElement;
    if (checkJobForm(form)) {
      const startDate = adjustDateFormat(form.startDateJob.value);
      let endDate = adjustDateFormat(form.endDateJob.value);
      const today = format(new Date(), "yyyy-MM-dd");
      if (today === form.endDateJob.value) {
        endDate = "now";
      }
      const newJob: profExp = {
        id: uuidv4(),
        company: form.company.value,
        jobTitle: form.jobTitle.value,
        description: form.jobDescription.value,
        startDate: startDate,
        endDate: endDate,
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
      setJobs(jobs);
      setEdit(false);
    }
  }

  function handleAddClick() {
    setEdit(true);
  }

  function handleCancelClick() {
    setEdit(false);
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
          onImageUpload={(e) => handleImageUpload(e)}
          image={{ imageURL, imageName }}
        />
        <PracticalDiv
          jobs={jobs}
          onDelete={(e) => {
            handleDeleteJob(e);
          }}
          onSave={(e) => {
            handleSaveClick(e);
          }}
          edit={edit}
          onAdd={() => {
            handleAddClick();
          }}
          onCancel={() => {
            handleCancelClick();
          }}
          onEdit={() => {}}
        />
        <EducationDiv />
      </div>
      <Preview
        name={fullName}
        location={location}
        profession={profession}
        image={{ imageURL, imageName }}
        jobs={jobs}
      />
    </div>
  );
}

export default App;
