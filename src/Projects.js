import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <section className="Worktop">
      <a id="Work" />
      <div className="Work"> Projects </div>
      <section className="Right">
        <ProjectItem name="Website" link="https://github.com/scoges" />
        <ProjectItem name="Red Ogre Adventures" link="https://www.youtube.com/watch?v=vS9EwFlGxeY&t" />
        <ProjectItem name="lyric Lord" link="https://elitehuskie.github.io/project-01-music-lyrics-game/" />
        <ProjectItem name="MapBrew" link="https://mapbrew-websitee-20a575919a4b.herokuapp.com/login" />
        <ProjectItem name="Surf Tracker" link="https://github.com/scoges" />
      </section>
    </section>
  );
}

export default Projects;