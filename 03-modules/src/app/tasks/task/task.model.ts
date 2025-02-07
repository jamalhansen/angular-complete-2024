export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface EnteredTask {
  title: string;
  summary: string;
  date: string;
  userId: string;
}
