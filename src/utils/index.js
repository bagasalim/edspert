export const rupiahLocale = (x) => {
  return "Rp" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const mockApi = Axios.create({
  baseURL: "https://64412eaa792fe886a8a09abc.mockapi.io",
});
