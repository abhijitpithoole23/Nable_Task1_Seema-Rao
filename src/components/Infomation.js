import React from "react";
import { information } from "../Auth/auth";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Departmentconstant } from "../Assets/Countryconstants";
import { Paymentconst } from "../Assets/Paymentconstant";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Infomation() {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        CustomerName: "",
      },
      validationSchema: information,

      onSubmit: (values) => {
        console.log("values", values);
      },
    });
  return (
    <div>
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontSize: "18px",
            fontWeight: "Bold",
            display: "flex",
          }}
        >
          CREATE QUOTATION
        </Typography>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontSize: "13px",
            display: "flex",
          }}
        >
          Please fill in all fields, attach/upload all supporting documents to
          proceed with the registeration.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                id="companyName"
                label="CUSTOMER NAME"
                variant="outlined"
                color="primary"
                type="text"
                fullWidth
                size="small"
                name="companyName"
                placeholder="Customer Name"
                // autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.companyName}
                error={touched.companyName && errors.companyName ? true : false}
                helperText={touched.companyName && errors.companyName}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Outfit",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                id="abbr"
                label="EMAIL"
                variant="outlined"
                type="email"
                fullWidth
                name="abbr"
                size="small"
                placeholder="username@example.com"
                // autoFocus
                value={values.abbr}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.abbr && errors.abbr ? true : false}
                helperText={touched.abbr && errors.abbr}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Outfit",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                id="uploadLogo"
                label="MOBILE NO."
                type="number"
                name="uploadLogo"
                placeholder="Mobile Number"
                variant="outlined"
                fullWidth
                size="small"
                value={values.uploadLogo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.uploadLogo && errors.uploadLogo ? true : false}
                helperText={touched.uploadLogo && errors.uploadLogo}
                InputProps={{
                  style: { borderRadius: "10px", fontFamily: "Outfit" },
                }}
              />
              {/* <PhotoCamera />   */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">COUNTRY</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    label="COUNTRY"
                    size="small"
                    sx={{ borderRadius: "10px" }}
                  >
                    {Departmentconstant.map((item, index) => (
                      <MenuItem
                        value={item.value}
                        sx={{ fontFamily: "Outfit" }}
                        key={index + 1}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                id="website"
                label="CITY"
                type="city"
                variant="outlined"
                name="website"
                placeholder="City"
                size="small"
                fullWidth
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.website && errors.website ? true : false}
                helperText={touched.website && errors.website}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Outfit",
                    // background: "#ffffff"
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                id="website"
                label="ADDRESS"
                type="address"
                variant="outlined"
                name="website"
                placeholder="Address"
                size="small"
                fullWidth
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.website && errors.website ? true : false}
                helperText={touched.website && errors.website}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Outfit",
                    // background: "#ffffff"
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    PAYMENT TERMS
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    label="PAYMENT TERMS"
                    size="small"
                    sx={{ borderRadius: "10px" }}
                  >
                    {Paymentconst.map((item, index) => (
                      <MenuItem
                        value={item.value}
                        sx={{ fontFamily: "Outfit" }}
                        key={index + 1}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default Infomation;
