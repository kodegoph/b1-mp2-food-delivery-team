import * as React from "react";
import { Paper } from "@material-ui/core";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2021-06-14";
const schedulerData = [
  {
    startDate: "2021-06-14T09:45",
    endDate: "2021-06-14T11:00",
    title: "Meeting",
  },
  {
    startDate: "2021-06-14T12:00",
    endDate: "2021-06-14T13:30",
    title: "Go to a gym",
  },
];

export default () => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <DayView startDayHour={9} endDayHour={14} />
      <Appointments />
    </Scheduler>
  </Paper>
);
