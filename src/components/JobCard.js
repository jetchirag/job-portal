import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const JobCard = () => {
  return (
    <div className='accordian-job'>
      <Accordion>
        <Accordion.Item eventKey='0' className='acc'>
          <Accordion.Header className='hell'>
            Invites application for the post of Assistant Professor @ Manipal
            University Jaipur
          </Accordion.Header>
          <Accordion.Body className='new-cl'>
            <h2 className='text-center'>Manipal University Jaipur</h2>
            <hr />
            <div className='acc-div'>
              <img src='./images/carriers.jpg' alt='' />
              <div className='acc-div-div'>
                <p>
                  We are searching for a well-organized, trustworthy assistant
                  professor to join our excellent faculty. The assistant
                  professor’s responsibilities include teaching a requisite
                  number of classes, providing guidance and supervision to
                  graduate students, participating in departmental meetings, and
                  providing academic support to Professors and other faculty
                  members. You should be able to pace your lessons and publish
                  articles regularly. An assistant professors has the
                  responsibility to teach and conduct research. They assist full
                  professors, guide and supervise graduates, and spend time
                  conducting investigations and studies. Assistant professors
                  may also serve on university committees.
                </p>
                <p>
                  <b>End Date: 24.01.2023</b>
                </p>
                <p>
                  <b>Faculty: Engineering</b>
                </p>
                <p>
                  <b>School: Computing</b>
                </p>
                <p>
                  <b>Department: AI-ML</b>
                </p>
                <p>
                  <b>Positions Available: 2</b>
                </p>
                <a href='/testing' className='acc-btn'>
                  <button className='btn btn-primary'>Apply Now</button>
                </a>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default JobCard;
