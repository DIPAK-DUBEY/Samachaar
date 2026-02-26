import { create } from "zustand"

const useStore = create((set) => ({
  //  This is for the search  bar 
  Input: '',
  setInput: (value) => set({ Input: value }),

  fetchData: '',
  setFetchData: (value) => set({ fetchData: value }),

  sortbychoices: '',
  setsorteddata: (value) => set({ sortbychoices: value }),
  Menu:false,
  setMenu:(value)=>set({Menu:value})
}))
export default useStore

/*

https://api.worldnewsapi.com/search-news?source-country=in&language=hi&number=100&api-key=8382fe2eecc549f585f8c0eeb69780bf
*/

