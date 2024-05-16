import { ChangeEvent, ReactElement } from "react";



// All Component And Page Types
export interface I_Box_Progress_Task {
  title: string | ReactElement,
  addButton?: boolean,
  taskData: I_Tasks_Type[]
  setIsOpen?: () => void;
  dropId: string;
}


export interface I_Company_Name_Type {
  params: string;
  setIsOpen: () => void;
}


export interface I_Companies_Item_Types {
  id: string,
  companyName: string,
}


export interface Todo_Context_Type {
  todo: I_CompanyData[];
  addNewCompany: (newCompany: I_CompanyData) => void;
  addNewTask: (newTask: I_Tasks_Type) => void;
  task: I_Tasks_Type[];
  handleDragDrop: (id: string, dragDropStatus: string) => void;
}


export interface I_Task_Input {
  placeholder?: string;
  name?: string;
  id?: string,
  autofocus?: true;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}


export interface I_Modal {
  openModal: boolean,
  setIsModal: () => void
}


export interface I_Open_Modal {
  setIsOpen: () => void
}


export interface I_Task_Button {
  setIsOpen?: () => void;
}


export interface I_Todo_column {
  id: string;
  columnTitle: string;
  addButton: boolean;
  todoList: I_Tasks_Type[];
}


export interface I_Tasks_Type {
  id: string,
  title: string,
  assigned: string,
  status: string,
  defined: string;
}


export interface I_Defined_Task_Props {
  id: string,
  title: string,
  assigned: string,
  status: string,
  defined: string;
  keyId: string
};


export interface I_CompanyData {
  id: number | string;
  companyName: string;
  tasks?: I_Tasks_Type[]
}


export interface I_Todo {
  todo: I_CompanyData[],
}





export interface I_Add_New_Task {
  setIsOpen: () => void;
}


// Initialization examples
export const initialNewTask: I_Tasks_Type = {
  id: "",
  assigned: "",
  status: "todo",
  title: "",
  defined: "",
};


export const initialTodoContext: Todo_Context_Type = {
  todo: [],
  addNewCompany: ({ }) => { },
  addNewTask: ({ }) => { },
  task: [],
  handleDragDrop: (id, dragDropStatus) => { },
};

export const initialCompanyData = {
  id: 0,
  companyName: '',
  tasks: ['']

}
