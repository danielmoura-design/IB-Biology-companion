export enum PageRoute {
  HOME = '/',
  TRACKER = '/tracker',
  CALENDAR = '/calendar',
  INTERNAL_ASSESSMENT = '/internal-assessment',
  EXERCISES = '/exercises',
  KOGNITY = '/kognity',
  SYLLABUS = '/syllabus',
}

export interface SyllabusItem {
  id: string;
  title: string;
  content: string; // HTML or Markdown supported string
  subItems?: SyllabusItem[];
}

export interface SyllabusTheme {
  id: string;
  name: string; // e.g., Theme A
  title: string; // e.g., Unity and Diversity
  description: string;
  link: string; // Link to the file provided
  items: SyllabusItem[];
}

export interface Exercise {
  id: string;
  title: string;
  pdfLink: string;
  markschemeLink: string;
}

export interface ExerciseLog {
  completed: boolean;
  dateCompleted: string | null; // ISO Date string
}

export interface CalendarEvent {
  id: string;
  title: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD, optional if single day
  type: 'deadline' | 'exam' | 'reminder';
}

export interface InternalResource {
  title: string;
  description: string;
  link: string;
  type: 'pdf' | 'folder' | 'doc';
}