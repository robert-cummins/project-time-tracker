import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent
} from '@mui/material'

const ProjectCard = ({ project }) => {

  const calculateTimeRemaining = (timeAllocated, timeUsed) => {
    const timeLeftinSeconds = timeAllocated - timeUsed;
    const hours = Math.floor(timeLeftinSeconds / 3600);
    const minutes = Math.floor((timeLeftinSeconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  const calculateTotalTime = (startTime, stopTime) => {
    const startDate = new Date(startTime);
    const stopDate = new Date(stopTime);
    const timeDifferenceMs = stopDate - startDate;
    const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
  debugger
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card>
        <CardHeader
          title={project.name}
          titleTypographyProps={{ align: 'center' }}
          sx={{ backgroundColor: '#9f9f8b' }}
        />
        <CardContent sx={{ backgroundColor: '#f6f7e1' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Set the direction to column
              justifyContent: 'center',
              alignItems: 'center', // Align items in the center
              mb: 2,
            }}
          >
            <Typography variant="h6" color="text.primary">
              Time Remaining: {calculateTimeRemaining(project.time_allocated, project.time_used)}
            </Typography>
            {project.time_entries.map(timeEntry => (
              <Box key={timeEntry.id} mt={1}>
                <Typography>{`${timeEntry.description}: ${calculateTotalTime(timeEntry.start_time, timeEntry.stop_time)}`}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectCard;