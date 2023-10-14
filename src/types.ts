export type changeHandler = (e: React.FormEvent<HTMLInputElement> | undefined) => void;

export type profExp = { id: string, company: string, jobTitle: string, location: string, description: string, startDate: string, endDate: string };

export type education = { id: string, degree: string, university: string, fos: string, startDate: string, endDate: string, location: string };