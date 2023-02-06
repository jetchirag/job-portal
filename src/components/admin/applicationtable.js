import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import axios from "axios";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer
} from "recharts";

import graph_data from "./graph_data.js";
import barchart_data from "./barchar_data.js";

// import { useSelector } from "react-redux";
// import axios from 'axios';

// material-ui
// import { useTheme } from "@mui/material/styles";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridToolbarContainer,
} from "@mui/x-data-grid";
// import { GridSelectionModel } from "@mui/x-data-grid";

import {
  Button,
  Chip,
  Grid,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Avatar,
  LinearProgress,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
import { jobTypeOptions, statusOptions, statusColor } from "./constants";
import classes from "./ApplicationTable.module.css";

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const ApplicationsTable = ({ isLoading }) => {
  const URL = "http://localhost:3000/applications";
  const URLFaculties = "http://localhost:3000/applications/faculties";

  // const URL = "http://localhost:3000/applications";
  // const URLFaculties = "http://localhost:3000/applications/faculties";

  const [loading, setLoading] = useState(false);
  const [facultiesData, setFacultiesData] = useState({});
  const [AdminStats, setAdminStats] = useState({});

  const [facultiesSelect, setFacultiesSelect] = useState([""]);
  const [schoolSelect, setSchoolSelect] = useState([""]);
  const [departmentSelect, setDepartmentSelect] = useState([""]);

  const [applicantList, setApplicantList] = useState([]);
  const [, setStats] = useState([]);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  // const [searchQuery, setSearchQuery] = useState("");

  const [searchName, setSearchName] = useState("");
  const [pageState, setPageState] = useState(1);
  const pageStateHandler = () => {
    if (applicantList.length === pageState) setPageState(pageState + 10);
    else setPageState(applicantList.length);
  };
  const pageStateHandlerNegative = () => {
    if (applicantList.length === pageState && pageState > 10)
      setPageState(pageState - 10);
    else setPageState(1);
  };

  //Getting values from Data Grid of Selected Items
  const [selected, setSelected] = useState([]);
  // console.log(select);

  const [filters, setFilters] = useState({
    jobType: "",
    faculty: "",
    school: "",
    department: "",
    status: "",
  });
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const FetchingData = useCallback(async () => {
    // console.log(encodeURIComponent(filters.department));

    setLoading(true);
    try {
      await fetch(
        URL +
          "?limit=" +
          encodeURIComponent(pageState) +
          "?jobType=" +
          encodeURIComponent(filters.jobType) +
          "&faculty=" +
          encodeURIComponent(filters.faculty) +
          "&school=" +
          encodeURIComponent(filters.school) +
          "&department=" +
          encodeURIComponent(filters.department) +
          "&status=" +
          encodeURIComponent(filters.status) +
          "&startDate=" +
          "&endDate=" +
          "&searchName="
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          // Loop over the results and create a new array of objects
          setAdminStats({
            // totalsubmitted: val.stats.totalSubmitted,
            // totalacad: val.stats.totalAcademic,
            // totalnacad: val.stats.totalNonAcademic,
            // totalAdmin: val.stats.totalAdmin,
          });
          const newApplicantList = val.results.map((item) => {
            return {
              id: item.id,
              _id: item._id,
              status: item.status,
              avatar: item.photo,
              name: item.applicant.firstName + " " + item.applicant.lastName,
              email: item.applicant.email,
              phone: item.applicant.mobile,
              dob: item.applicant.dob,
              jobType: item.jobType,
              faculty: item.faculty,
              school: item.school,
              department: item.department,
              status: item.status,
              date: item.date,
              resume: item.resume,
              createdDate: item.createdDate,
            };
          });

          // console.log(newApplicantList);

          setApplicantList(newApplicantList);
          setStats(val.stats);
        });
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  }, [filters, dateRange, searchName, pageState]);

  const FetchingFacultyData = useCallback(async () => {
    setLoading(true);
    try {
      await fetch(URLFaculties)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          // console.log(val);
          setFacultiesData(val);

          const newFacultiesSelect = ["Any"];
          for (var key of Object.keys(val)) {
            newFacultiesSelect.push(key);
          }
          setFacultiesSelect(newFacultiesSelect);
        });
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // console.log(dateRange);

    FetchingData();
  }, [FetchingData]);

  useEffect(() => {
    FetchingFacultyData();
  }, []);

  const DownloadCSV = async () => {
    let data = [];
    selected.map((id) => {
      data.push(
        applicantList.filter((e) => {
          return id === e.id;
        })
      );
    });
    // console.log(data);
    let ids = [];
    data.forEach((e) => {
      return ids.push(e[0]._id);
    });
    console.log(ids);

    // try {
    //   await fetch("http://localhost:4000/applications/downloadcsv", {
    //     method: "POST",
    //     body: JSON.stringify(ids),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    const payload = {
      ids,
    };

    axios
      .post("http://localhost:3000/applications/downloadcsv", payload, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilterChange = (
    propertyName,
    event: SelectChangeEvent<typeof filters>
  ) => {
    setFilters({ ...filters, [propertyName]: event.target.value });
    // console.log({ Filters: filters });
  };

  const handleFacultyChange = (event: SelectChangeEvent<typeof filters>) => {
    if (event.target.value === "Any") {
      setFilters({ ...filters, faculty: "", school: "", department: "" });
    } else {
      setFilters({ ...filters, faculty: event.target.value });
      const newSchoolSelect = [""];
      for (var key of Object.keys(facultiesData[event.target.value])) {
        newSchoolSelect.push(key);
      }
      setSchoolSelect(newSchoolSelect);
    }
  };

  const handleSchoolChange = (event: SelectChangeEvent<typeof filters>) => {
    setFilters({ ...filters, school: event.target.value });
    // console.log(event.target.value);
    const newDepartmentSelect = [""];
    console.log(facultiesData[filters.faculty][event.target.value]);
    for (var key of Object.keys(
      facultiesData[filters.faculty][event.target.value]
    )) {
      newDepartmentSelect.push(
        facultiesData[filters.faculty][event.target.value][key]
      );
    }
    setDepartmentSelect(newDepartmentSelect);
  };

  const handleDepartmentChange = (event: SelectChangeEvent<typeof filters>) => {
    setFilters({ ...filters, department: event.target.value });
  };

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbar
          excelOptions={{ allColumns: true }}
          csvOptions={{ allColumns: true }}
        />
        {/* <GridToolbarExport
          
        /> */}
      </GridToolbarContainer>
    );
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Applicant",
      width: 90,
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value} />
          </>
        );
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "createdDate", headerName: "Date Applied", width: 200 },
    { field: "faculty", headerName: "Faculty", width: 200, hide: true },
    { field: "school", headerName: "School", width: 200, hide: true },
    { field: "department", headerName: "Department", width: 200, hide: true },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <Chip
            label={params.value}
            sx={{ bgcolor: statusColor[params.value], color: "#fff" }}
          />
        );
      },
    },
    {
      field: "resume",
      headerName: "Resume",
      width: 120,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            href={params.value}
            target="_blank"
          >
            Download
          </Button>
        );
      },
    },
    {
      field: "_id",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            href={"/dashboard/application/" + params.value}
            target="_blank"
          >
            View Details
          </Button>
        );
      },
    },
  ];

  return (
    <div className={classes.padding}>
      <div
        className="graphs container border rounded"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
          margin: "0.5rem",
        }}
      >
        <div className="row">
        <ResponsiveContainer width="98.1%" height={350}>
          <AreaChart
            data={graph_data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="row">
          <BarChart width={650} height={250} data={barchart_data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div> */}
        
      </div>
      <div className="row">
        <div
          className="alert alert-secondary col"
          role="alert"
          style={{ maxWidth: "20rem", marginLeft: "20px" }}
        >
          <h5>
            Total Submission: 14<span>{AdminStats.totalsubmitted}</span>
          </h5>
        </div>
        <div
          className="alert alert-secondary col"
          role="alert"
          style={{ maxWidth: "20rem", marginLeft: "20px" }}
        >
          <h5>
            Total Academic Submissions: 14<span>{AdminStats.totalacad}</span>
          </h5>
        </div>
        <div
          className="alert alert-secondary col"
          role="alert"
          style={{ maxWidth: "20rem", marginLeft: "20px" }}
        >
          <h5>
            Total Non Academic Submision: 0<span>{AdminStats.totalnacad}</span>
          </h5>
        </div>
        <div
          className="alert alert-secondary col"
          role="alert"
          style={{ maxWidth: "20rem", marginLeft: "20px" }}
        >
          <h5>
            Total Admins: 1<span>{AdminStats.totalAdmin}</span>
          </h5>
        </div>
      </div>

      <Grid container>
        <Grid item xs={12} md={2.4}>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel>Job Type</InputLabel>
            <Select
              value={filters.jobType}
              label="Job Type"
              onChange={(e) => handleFilterChange("jobType", e)}
            >
              {jobTypeOptions?.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label ?? option.value}
                  </MenuItem>
                );
              })}
            </Select>
            {/* <FormHelperText>Read only</FormHelperText> */}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel>Faculty</InputLabel>
            <Select
              default={""}
              value={filters.faculty}
              label="Faculty"
              onChange={(e) => handleFacultyChange(e)}
            >
              {facultiesSelect?.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
            {/* <FormHelperText>Read only</FormHelperText> */}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel>School</InputLabel>
            <Select
              default={""}
              value={filters.school}
              label="School"
              onChange={(e) => handleSchoolChange(e)}
            >
              {schoolSelect?.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel>Department</InputLabel>
            <Select
              value={filters.department}
              label="Faculty"
              onChange={(e) => handleDepartmentChange(e)}
            >
              {departmentSelect?.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={2.4}>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel>Status</InputLabel>
            <Select
              default={""}
              value={filters.status}
              label="Status"
              onChange={(e) => handleFilterChange("status", e)}
            >
              {statusOptions?.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label ?? option.value}
                  </MenuItem>
                );
              })}
            </Select>
            {/* <FormHelperText>Read only</FormHelperText> */}
          </FormControl>
        </Grid>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{
            marginTop: "15px",
            width: "48%",
            marginBottom: "10px",
            marginRight: "4%",
          }}
          onClick={() =>
            openInNewTab("https://job-portal-olive.vercel.app/admin/joblisting")
          }
        >
          Add New Job Listing
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{ marginTop: "15px", width: "48%", marginBottom: "10px" }}
          onClick={DownloadCSV}
        >
          Download CSV (Selected items)
        </Button>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={applicantList}
              columns={columns}
              density="comfortable"
              loading={loading}
              rowsPerPageOptions={[]}
              components={{
                Toolbar: CustomToolbar,
                LoadingOverlay: LinearProgress,
              }}
              checkboxSelection
              hideFooterPagination
              onSelectionModelChange={(itm) => setSelected(itm)}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </div>
        </Grid>
        <div className={classes.lowerbtn}>
          <Button
            variant="contained"
            onClick={pageStateHandlerNegative}
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            ⬅️ Prev 10
          </Button>
          <Button
            variant="contained"
            onClick={pageStateHandler}
            style={{ marginTop: "10px" }}
          >
            Next 10 ➡️
          </Button>
        </div>
      </Grid>
    </div>
  );
};

ApplicationsTable.propTypes = {
  isLoading: PropTypes.bool,
};

export default ApplicationsTable;
