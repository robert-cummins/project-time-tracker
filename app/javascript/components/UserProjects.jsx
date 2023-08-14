import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Grid,
} from '@mui/material'
import { getProjects } from "../actions/projects";
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from './ProjectCard'

const UserProjects = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.currentUser);
  const projects = useSelector(state => state.projects.list);
  
  useEffect(() => {
    dispatch(getProjects(user.id));
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Typography sx={{mt: 3, mb: 3}} align="left" variant="h4">{user.first_name}'s Projects</Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard key={project.id} {...{project}} />
          ))
        ) : (
          <Typography align="center" variant="body1">Loading projects...</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default UserProjects;

