export const JOBS_URL = "https://api.lever.co/v0/postings/grouparoo?mode=json";

export interface LeverJob {
  id: string;
  text: string;
  hostedUrl: string;
  applyUrl: string;
  additionalPlain: string;
  additional: string;
  categories: { commitment: string; location: string; team: string };
  createdAt: number;
  descriptionPlain: string;
  description: string;
  lists: LeverJobListItem[];
}

export interface LeverJobListItem {
  text: string;
  content: string;
}

export async function getJobs() {
  const jobs: LeverJob[] = await fetch(JOBS_URL).then((response) =>
    response.json()
  );
  return jobs;
}

export async function getJob(id: string) {
  const jobs = await getJobs();
  return jobs.find((j) => j.id === id);
}
