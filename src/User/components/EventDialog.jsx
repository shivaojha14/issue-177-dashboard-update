import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IconButton, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { path_url } from "../../Config/config";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Priority options
const priorityOptions = [
  "Emergency",
  "High",
  "Low",
  "Medium",
  "Normal",
  "Deferred",
  "Critical",
];

// Status options
const statusOptions = [
    "CANCELED",
    "COMPLETED",
    "PLANNED",
    "SCHEDULED",
    "ONGOING",
  ];

//this is the static content for each textfields and date labels
const formFields = [
  { label: "Name", id: "name", name: "name", type: "text" },
  {
    label: "Description",
    id: "description",
    name: "description",
    type: "text",
  },
  { label: "Read Status", id: "readstatus", name: "readstatus", type: "text" },
  { label: "Status", id: "status", name: "status", type: "select",options: statusOptions },
  { label: "Start Date", id: "startdate", name: "startdate", type: "date" },
  { label: "End Date", id: "enddate", name: "enddate", type: "date" },
  {
    label: "Priority",
    id: "priority",
    name: "priority",
    type: "select",
    options: priorityOptions,
  },
  { label: "Assigned To", id: "asignedto", name: "asignedto", type: "text" },
  { label: "Budget", id: "budget", name: "budget", type: "number" },
  { label: "Notes", id: "notes", name: "notes", type: "text" },
  { label: "Location", id: "location", name: "location", type: "text" },
  {
    label: "Target Audience",
    id: "targetaudience",
    name: "targetaudience",
    type: "text",
  },
];

const EventDialog = ({ onClose }) => {
  //state for storing user provided data
  const [eventData, setEventData] = useState(() => ({
    name: "",
    description: "",
    readstatus: "",
    status: "",
    startdate: null,
    enddate: null,
    priority: "",
    asignedto: "",
    budget: "",
    notes: "",
    location: "",
    targetaudience: "",
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevEventData) => ({
      ...prevEventData,
      [name]: value,
    }));
  };

  const submitEventData = async () => {
    const userId = localStorage.getItem("userId");
    const adminId = localStorage.getItem("adminId");
    const token = localStorage.getItem("accessToken");
    const apiUrl = `${path_url}/events`;

    const postData = {
      ...eventData,
      usercid: userId,
      useradminid: adminId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };



    try {
      const response = await axios.post(apiUrl, postData, config);
      if (response.status === 200) {
        toast.success("Submission successful");
        onClose();
      } else {
        toast.error("Failed to submit");
      }
    } catch (error) {
      toast.error("Failed to submit");
    }
  };

  const handleSubmit = () => {

    submitEventData();
    onClose();
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">
        Event Details Form
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {formFields.map((field) =>
            field.type === "date" ? (
              <DatePicker
                key={field.id}
                label={field.label}
                value={eventData[field.name]}
                onChange={(newValue) =>
                  setEventData((prevEventData) => ({
                    ...prevEventData,
                    [field.name]: newValue,
                  }))
                }
                fullWidth
                sx={{ mr: field.name === "startdate" ? 4 : 0 }}
                renderInput={(params) => (
                  <TextField {...params} margin="dense" fullWidth />
                )}
              />
            ) : field.type === "select" ? (
                
                <FormControl sx={{ marginBlock: 1, minWidth: 120 }} fullWidth>
                <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
                <Select
                  labelId={`${field.id}-label`}
                  id={field.id}
                  value={eventData[field.name]}
                  label={field.label}
                  onChange={(e) =>
                    setEventData((prevEventData) => ({
                      ...prevEventData,
                      [field.name]: e.target.value,
                    }))
                  }
                >
                  {field.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                key={field.id}
                margin="dense"
                id={field.id}
                label={field.label}
                type={field.type}
                fullWidth
                name={field.name}
                value={eventData[field.name]}
                onChange={handleChange}
              />
            )
          )}
        </LocalizationProvider>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;