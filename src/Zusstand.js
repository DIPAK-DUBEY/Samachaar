import { create } from "zustand"

const useStore = create((set) => ({
  //  This is for the search  bar 
  Input: '',
  setInput: (value) => set({ Input: value }),

  fetchData: '',
  setFetchData: (value) => set({ fetchData: value }),

  sortbychoices: '',
  setsorteddata: (value) => set({ sortbychoices: value })
}))
export default useStore