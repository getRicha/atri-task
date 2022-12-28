import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "contact": {},
  "projects": {},
  "blogs": {}
}});

export default useIoStore;
