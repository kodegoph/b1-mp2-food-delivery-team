import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {ViewState} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    DayView,
    Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2021-06-19";
const schedulerData = [
    {
        startDate: "2021-06-19T09:45",
        endDate: "2021-06-19T11:00",
        title: "Dalgona",
    },
    {
        startDate: "2021-06-19T12:00",
        endDate: "2021-06-19T13:30",
        title: "Go to a gym",
    },
];

export default () => (
    <Paper>
        <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate} />
            <DayView startDayHour={9} endDayHour={15} />
            <Appointments />
        </Scheduler>
    </Paper>
);
