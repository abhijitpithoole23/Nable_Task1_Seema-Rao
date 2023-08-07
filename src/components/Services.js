import React from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Services() {
  const columns = [
    { field: "id", headerName: "S. No.", width: 70 },
    { field: "services", headerName: "Services", width: 160 },
    { field: "price", headerName: "Price", type: "number", width: 130 },
    {
      field: "selectServices",
      headerName: "Select Services",
      width: 190,
    },
  ];

  const rows = [
    { id: 1, price: 52.0, services: "Arabian Horse", selectServices: 35 },
    { id: 2, price: 5000.0, services: "Farrier For Horse", selectServices: 35 },
    {
      id: 3,
      price: 5000.0,
      services: "jumping training for Horse",
      selectServices: 35,
    },
    {
      id: 4,
      price: 490.0,
      services: "FarrierFarrierFarrier",
      selectServices: 35,
    },
    { id: 5, price: 5000.0, services: "Racing", selectServices: 35 },
  ];
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
          SERVICES
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        <Grid container rowSpacing={0} columnSpacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} style={{ alignContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                alignContent: "center",
                height: "100%",
              }}
            >
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField
                    label="PRICE"
                    variant="outlined"
                    color="primary"
                    type="number"
                    sx={{ width: "50%" }}
                    size="small"
                    placeholder="Enter price"
                    // autoFocus
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        fontFamily: "Outfit",
                      },
                    }}
                  />
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      label="DISCOUNT"
                      variant="outlined"
                      color="primary"
                      type="number"
                      sx={{ width: "50%" }}
                      size="small"
                      placeholder="Ex: 1000Rs"
                      // autoFocus
                      InputProps={{
                        style: {
                          borderRadius: "10px",
                          fontFamily: "Outfit",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      label="TAX"
                      variant="outlined"
                      color="primary"
                      type="number"
                      sx={{ width: "50%" }}
                      size="small"
                      placeholder="Ex: 10%"
                      // autoFocus
                      InputProps={{
                        style: {
                          borderRadius: "10px",
                          fontFamily: "Outfit",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      label="TOTAL PRICE"
                      variant="outlined"
                      color="primary"
                      type="number"
                      sx={{ width: "50%" }}
                      size="small"
                      placeholder="Total Price"
                      // autoFocus
                      InputProps={{
                        style: {
                          borderRadius: "10px",
                          fontFamily: "Outfit",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Button
                      variant="contained"
                      size="large"
                      disableElevation
                      type="submit"
                      sx={{
                        paddingLeft: "25px",
                        paddingRight: "25px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        borderRadius: "10px",
                        fontFamily: "Poppins",
                        mt: "6px",
                        mb: "6px",
                        fontWeight: 500,
                        backgroundColor: "#FD771A",
                        color: "#FFFFFF!important",
                        "&:hover": {
                          backgroundColor: "#FD771A",
                          color: "#FFFFFF!important",
                        },
                      }}
                    >
                      CREATE
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Services;
