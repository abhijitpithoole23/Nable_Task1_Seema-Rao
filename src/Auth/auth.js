import * as Yup from "yup";

export const information = Yup.object().shape({
  companyName: Yup.string().required("Please enter a valid company Name"),
  abbr: Yup.string().required("Please enter a valid Abbrivation"), // defaultCurrency: Yup.string().required( //   "Please enter a valid default currency"
  // dateOfIncorporation: Yup.string().required("Please select a date first"),
  uploadLogo: Yup.string().required("Please enter a valid text"),
  website: Yup.string().required("Please enter a valid url"),
});

