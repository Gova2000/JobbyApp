import {CiLocationOn} from 'react-icons/ci'

import {FaSuitcase} from 'react-icons/fa'

import {AiOutlineStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './index.css'

const JobCard = props => {
  const {Details} = props

  const {
    CompanyLogo,
    EmploymentType,
    Id,
    JobDescripton,
    Location,
    Package,
    Rating,
    Title,
  } = Details

  return (
    <Link to={`/jobs/${Id}`} className="link">
      <div className="maincard">
        <div className="card">
          <img src={CompanyLogo} alt={Title} className="logo" />
          <div>
            <h1>{Title}</h1>
            <div>
              <AiOutlineStar className="star" />
              <p>{Rating}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="row1">
              <CiLocationOn className="fill" />
              <p>{Location}</p>
            </div>
            <div className="row1">
              <FaSuitcase className="fill" />
              <p>{EmploymentType}</p>
            </div>
          </div>

          <div>
            <p>{Package}</p>
          </div>
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <p>{JobDescripton}</p>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
