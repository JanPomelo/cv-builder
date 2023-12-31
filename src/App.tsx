import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import EducationDiv from "./components/EducationDiv";
import GeneralInfo from "./components/GeneralInformation";
import PracticalDiv from "./components/PracticalDiv";
import Preview from "./components/Preview";
import { education, profExp } from "./types";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import ContactInfo from "./components/ContactInfo";
import Options from "./components/Options";
import { gimmeDaFilter } from "./svgColorChanger.js";
import Skills from "./components/Skills.js";

// function to handle all string stateChanges in one
function handleChanges(
  f: (s: string) => void,
  e: React.FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | undefined
): void {
  if (e) f(e.currentTarget.value);
}

// function to check if the values of the forms are empty or not
function checkValue(element: HTMLInputElement) {
  element.classList.add("required");
  if (element.value === "" || element.value === "mm/dd/yyyy") {
    return false;
  }
  return true;
}

// function to check the form before submitting (for Job experience and education)
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
  // create empty job experience and education
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
  // General Information States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [{ imageURL, imageName }, setImage] = useState({ imageURL: "", imageName: "" });

  // Professional Experiences States
  const [jobs, setJobs] = useState<profExp[]>([]);
  const [editJob, setEditJob] = useState(false);
  const [jobToEdit, setJobToEdit] = useState<profExp>(emptyJob);

  // Education States
  const [editEducation, setEditEducation] = useState(false);
  const [educations, setEducations] = useState<education[]>([]);
  const [educationToEdit, setEducationToEdit] = useState<education>(emptyEducation);

  // Contact Info States
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");

  //skill States
  const [technicSkills, setTechnicSkills] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [languageSkills, setLanguageSkills] = useState("");

  //customization States
  const [blackLine, setBlackLine] = useState(true);
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#375356");
  const [fontColor, setFontColor] = useState({ fontColor: "white", svgFilter: "" });
  const [fontSize, setFontSize] = useState("");
  const [theme, setTheme] = useState("");

  // combine first and lastname to fullName
  const fullName: string = firstName + " " + lastName;

  // function to get the key of the experience div when pressing the edit or delete button on the div get the data of the experience element
  function getKeyFromElement(e: React.MouseEvent<HTMLButtonElement>): string {
    const button: HTMLButtonElement = e.target as HTMLButtonElement;
    const div: HTMLDivElement = button.parentElement!.parentElement as HTMLDivElement;
    const key = div.getAttribute("data-key") as string;
    return key;
  }

  // sort the array so the experiences are ordered from newest to latest
  function sortArray(arr: profExp[] | education[]): profExp[] | education[] {
    return arr.sort((a, b) => {
      if (a.startDate > b.startDate) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  // function to change the theme, set the favicon and write the meta description
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    document.title = "CV Builder";
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/favicon.svg";
    const metaTags = document.getElementsByTagName("meta") as HTMLCollectionOf<HTMLMetaElement>;
    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute("name") === "description") {
        metaTags[i].remove();
      }
    }
    const metaDescr = document.createElement("meta") as HTMLMetaElement;
    metaDescr.setAttribute("name", "description");
    metaDescr.setAttribute(
      "content",
      "Create your professional CV with ease on this CV builder platform. Tailor your resume to perfection and download it as PDF. Craft your career story today!"
    );
    document.getElementsByTagName("head")[0].appendChild(metaDescr);
  }, []);
  // function to delete an element(profExp or education) out of the experiences array
  function filterArrDeleteID(
    e: React.MouseEvent<HTMLButtonElement>,
    arr: profExp[] | education[]
  ): profExp[] | education[] {
    const key = getKeyFromElement(e);
    const newArr = arr.filter((el) => {
      return !(el.id === key);
    });
    return newArr as profExp[] | education[];
  }

  //function for the handle of the delete job button click
  function handleDeleteJob(e: React.MouseEvent<HTMLButtonElement>) {
    let newJobs = filterArrDeleteID(e, jobs);
    newJobs = sortArray(newJobs) as profExp[];
    setJobs([...newJobs]);
  }

  // function for the handle of the delete education button click
  function handleDeleteEducation(e: React.MouseEvent<HTMLButtonElement>) {
    let newEducations = filterArrDeleteID(e, educations);
    newEducations = sortArray(newEducations) as education[];
    setEducations([...newEducations]);
  }

  // function for the handle of the edit job button click
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

  // function for the handle of the edit education button click
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

  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value);
  }

  // function to get the current index of the experience element in the array
  function getElementIndex(experiences: profExp[] | education[], expToEdit: profExp | education): number | undefined {
    let index;
    if (expToEdit.id !== "") {
      for (let i = 0; i < experiences.length; i++) {
        if (experiences[i].id === expToEdit.id) {
          index = i;
        }
      }
    }
    return index;
  }

  //function to create a new experience
  function createNewExperience(form: HTMLFormElement, type: string) {
    if (type === "job") {
      return {
        id: uuidv4(),
        company: form.company.value,
        jobTitle: form.jobTitle.value,
        description: form.jobDescription.value,
        startDate: form.startDateJob.value,
        endDate: form.endDateJob.value,
        location: form.location.value,
      };
    } else {
      return {
        id: uuidv4(),
        university: form.university.value,
        degree: form.degree.value,
        fos: form.fos.value,
        startDate: form.startDateED.value,
        endDate: form.endDateED.value,
        location: form.locationED.value,
      };
    }
  }

  function getElementsFromForm(form: HTMLFormElement): HTMLInputElement[] {
    if (form.id === "addProfExp") {
      return [form.company, form.jobTitle, form.location, form.startDateJob, form.endDateJob];
    } else {
      return [form.degree, form.university, form.locationED, form.startDateED, form.endDateED, form.fos];
    }
  }

  function handleSaveJob(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addProfExp") as HTMLFormElement;
    const elements: HTMLInputElement[] = getElementsFromForm(form);
    if (checkForm(elements)) {
      const index = getElementIndex(jobs, jobToEdit);
      if (index !== undefined) {
        jobs.splice(index, 1);
      }
      const newJob: profExp = createNewExperience(form, "job") as profExp;
      jobs.push(newJob);
      const newJobs: profExp[] = sortArray(jobs) as profExp[];
      setJobToEdit(emptyJob);
      setJobs([...newJobs]);
      setEditJob(false);
    }
  }

  function handleSaveEducation(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addEducation") as HTMLFormElement;
    const elements: HTMLInputElement[] = getElementsFromForm(form);
    if (checkForm(elements)) {
      const index = getElementIndex(educations, educationToEdit);
      if (index !== undefined) {
        educations.splice(index, 1);
      }
      const newEducation: education = createNewExperience(form, "education") as education;
      educations.push(newEducation);
      const newEducations: education[] = sortArray(educations) as education[];
      setEducationToEdit(emptyEducation);
      setEducations([...newEducations]);
      setEditEducation(false);
    }
  }

  // function to handle both Add clicks on the professional exp and the education divs. Takes a funtion and that sets the edit status to true (setJobEdit or setEducationEdit)
  function handleAddClick(f: (b: boolean) => void) {
    f(true);
  }

  // function to handle the cancel button click
  function handleCancelClick(initVal: profExp | education, fEdit: (b: boolean) => void) {
    if ("company" in initVal) {
      setJobToEdit(initVal);
    } else {
      setEducationToEdit(initVal);
    }
    fEdit(false);
  }

  // function to handle the click and show the black horizontal lines on the CV or not
  function handleBlackLineClick() {
    const button = document.getElementById("blackLine") as HTMLButtonElement;
    if (button.classList.contains("checked")) {
      button.classList.add("unchecked");
      button.classList.remove("checked");
      setBlackLine(false);
    } else {
      button.classList.remove("unchecked");
      button.classList.add("checked");
      setBlackLine(true);
    }
  }

  function handleFontChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFont(value);
  }

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setColor(value);
  }

  function handleFontColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const filter = gimmeDaFilter(e.target.value);
    setFontColor({ fontColor: value, svgFilter: filter });
  }

  function handleFontSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFontSize(value);
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const imgURL: string = URL.createObjectURL(e.target.files[0]);
      const imgName: string = e.target.files[0].name;
      setImage({ imageURL: imgURL, imageName: imgName });
    }
  }

  return (
    <div className={theme + " flex flex-col justify-start gap-1 relative"}>
      <header className="flex flex-col items-center mb-2 relative no-print">
        <h1 className="text-xl font-bold">CV Builder</h1>
        <p>
          made by <a href="https://www.janpomelo.com">JanPomelo</a>
        </p>
      </header>
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
          <ContactInfo
            onEmailChange={(e) => {
              handleChanges(setEmail, e);
            }}
            onPhoneChange={(e) => {
              handleChanges(setPhone, e);
            }}
            onWebsiteChange={(e) => {
              handleChanges(setWebsite, e);
            }}
            onGitHubChange={(e) => {
              handleChanges(setGitHub, e);
            }}
            onLinkedInChange={(e) => {
              handleChanges(setLinkedIn, e);
            }}
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
              handleCancelClick(emptyJob, setEditJob);
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
              handleCancelClick(emptyEducation, setEditEducation);
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
          <Skills
            onSoftChange={(e) => handleChanges(setSoftSkills, e)}
            onTechnicalChange={(e) => {
              handleChanges(setTechnicSkills, e);
            }}
            onLanguageChange={(e) => {
              handleChanges(setLanguageSkills, e);
            }}
          />
          <Options
            onClick={() => {
              handleBlackLineClick();
            }}
            onFontChange={(e) => {
              handleFontChange(e);
            }}
            onColorChange={(e) => {
              handleColorChange(e);
            }}
            onFontColorChange={(e) => {
              handleFontColorChange(e);
            }}
            onThemeChange={(e) => {
              handleThemeChange(e);
            }}
            onFontSizeChange={(e) => {
              handleFontSizeChange(e);
            }}
          />
        </div>
        <Preview
          name={fullName}
          location={location}
          profession={profession}
          image={{ imageURL, imageName }}
          jobs={jobs}
          educations={educations}
          email={email}
          phone={phone}
          website={website}
          linkedIn={linkedIn}
          gitHub={gitHub}
          blackLine={blackLine}
          font={font}
          color={color}
          fontColor={fontColor}
          technicSkills={technicSkills}
          softSkills={softSkills}
          languageSkills={languageSkills}
          fontSize={fontSize}
        />
      </div>
    </div>
  );
}

export default App;
