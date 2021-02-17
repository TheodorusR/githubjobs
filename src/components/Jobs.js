import Job from './Job';
import useFetch from './useFetch';
import {Spinner} from 'reactstrap';

const Jobs = ({params, page}) => {
  const {jobs, loading, error} = useFetch(params, page);

  return (
    <div>
      {loading && 'Please wait...'}
      {jobs && jobs.map((item) => {
        return (<Job key={item.id} job={item}/>)
      })}
      {error && 'An error has occured, please retry.'}
    </div>
  )
}

export default Jobs
