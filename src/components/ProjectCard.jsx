import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return <article className={`project ${project.color}`}>
    <div className="project-visual"><span className="number">0{index + 1}</span><div className="mini-window"><div/><div/><div/></div><ArrowUpRight className="project-arrow"/></div>
    <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </article>;
}
