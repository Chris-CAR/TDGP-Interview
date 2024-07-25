export type TTabValue = 'overview' | 'persons' | 'projects';

export interface AppContext {
  errorMessages: any[];
  setError: (error: any, status?: boolean) => void;
  loadingMessages: string[];
  setLoading: (loading: string, status?: boolean) => void;
}

export interface IProject {
  id: string;
  titleFull: string;
  titleShort: string;
  coordinator: string;
  interlocutor: string;
  startDate: string | null;
  durationMonths: number | null;
  investimentType: string | null;
  institutionalLink: string | null;
  petrobrasManagement: string | null;
  description: string | null;
  [key: string]: string | number | null;
}
