import React from 'react';

function ProjectItem({ name, link }) {
  return (
    <figure className={name}>
      <a href={link}>{name}</a>
    </figure>
  );
}

export default ProjectItem;