import create from 'zustand';

const useStore = create((set) => ({
  showAvatars: true,
}));

export default useStore;
