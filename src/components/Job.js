import React, {useContext, useState} from 'react';
import {
  Collapse,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import {ThemeContext} from './ThemeState';

const Job = ({job}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {darkMode} = useContext(ThemeContext);

  return (
    <div>
      <Card className='my-3' style={{backgroundColor: darkMode ? '#2a2a2a' : 'white'}}>
        <CardBody className='d-flex justify-content-between'>
          <div>
            <CardTitle className='job-title'><strong>{job.title}</strong> - <span className='company-name text-muted'>{job.company}</span></CardTitle>
            <CardSubtitle className='mb-2 text-muted'>{new Date(job.created_at).toLocaleDateString()}</CardSubtitle>
            <Badge color='secondary' className='mr-2'>{job.type}</Badge>
            <Badge color='secondary'>{job.location}</Badge>
            <div style={{wordBreak: 'break-all'}}>
              <ReactMarkdown children={job.how_to_apply} />
            </div>
            <Button className='mb-3' onClick={() => setIsOpen(!isOpen)} color='primary'>{isOpen ? 'Hide Details' : 'View Details'}</Button>
            <Collapse isOpen={isOpen}>
              <ReactMarkdown children={job.description} />
            </Collapse>
          </div>
          <div>
          <img className='d-none d-md-block' src={job.company_logo} alt={job.company} height='50px'/>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Job
