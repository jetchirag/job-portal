import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { FormProvider, useForm } from 'react-hook-form';
import Partone from './Form-Current/PartOne';
import PartTwo from './Form-Current/PartTwo';
import PartThree from './Form-Current/PartThree';
import PartFour from './Form-Current/PartFour';
import PartFive from './Form-Current/PartFive';
import PartSix from './Form-Current/PartSix';
import PartSeven from './Form-Current/PartSeven';
import PartEight from './Form-Current/PartEight';
import PartNineTen from './Form-Current/PartNineTen';
import PartEleven from './Form-Current/PartEleven';
import PartTwelve from './Form-Current/PartTwelve';

import Col from 'react-bootstrap/Col';

import './css/Recognition.css';
import { Navigate, useNavigate } from 'react-router-dom';
import FormUpload from './FormUpload';

const FormComponent = ({ id, setId }) => {
  const [cr_country, setcr_Country] = useState('');
  const [cr_region, setcr_Region] = useState('');
  const [native_country, setnative_Country] = useState('');
  const [native_region, setnative_Region] = useState('');
  const [aq_secondary_country, setaq_secondary_country] = useState('');

  const [aq_higher_secondary_country, setaq_higher_secondary_country] =
    useState('');
  const [aq_graduation_country, setaq_graduation_country] = useState('');
  const [aq_post_graduation_country, setaq_post_graduation_country] =
    useState('');
  const [aq_mphil_country, setaq_mphil_country] = useState('');
  const [aq_phd_country, setaq_phd_country] = useState('');
  const [aq_post_doctoral_country, setaq_post_doctoral_country] = useState('');
  const [academicExperience_country, setacademicExperience_country] =
    useState('');
  const [nonAcademicExperience_country, setnonAcademicExperience_country] =
    useState('');

  const [part9, setPart9] = useState(true);
  const handlePart9 = () => {
    setPart9(!part9);
  };
  const hand = () => {
    setCheck(!check);
  };
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let applicant = {
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      gender: data.gender,
      religion: data.religion,
      marital_status: data.marital_status,
      mobile: data.mobile,
      email: data.email,
    };
    let aq_secondary = {
      country: aq_secondary_country,
      mode: data.secondary_mode,
      school: data.secondary_school,
      board: data.secondary_board,
      passingYear: data.secondary_passingYear,
      division: data.secondary_division,
      percentage: data.secondary_percentage,
    };
    let aq_higher_secondary = {
      country: aq_higher_secondary_country,
      mode: data.higher_secondary_mode,
      school: data.higher_secondary_school,
      board: data.higher_secondary_board,
      stream: data.higher_secondary_stream,
      passingYear: data.higher_secondary_passingYear,
      division: data.higher_secondary_division,
      percentage: data.higher_secondary_percentage,
    };
    let aq_graduation = {
      country: aq_graduation_country,
      mode: data.graduation_mode,
      institute: data.graduation_institute,
      college: data.graduation_college,
      year: data.graduation_year,
      area: data.graduation_area,
      course: data.graduation_course,
      division: data.graduation_division,
      percentage: data.graduation_percentage,
    };
    let aq_post_graduation = {
      country: aq_post_graduation_country,
      mode: data.post_graduation_mode,
      institute: data.post_graduation_institute,
      college: data.post_graduation_college,
      year: data.post_graduation_year,
      area: data.post_graduation_area,
      course: data.post_graduation_course,
      division: data.post_graduation_division,
      percentage: data.post_graduation_percentage,
    };
    let aq_mphil = {
      country: aq_mphil_country,
      mode: data.mphil_mode,
      institute: data.mphil_institute,
      college: data.mphil_college,
      year: data.mphil_year,
      area: data.mphil_area,
      division: data.mphil_division,
      percentage: data.mphil_percentage,
    };
    let aq_phd = {
      country: aq_phd_country,
      status: data.phd_status,
      mode: data.phd_mode,
      institute: data.phd_institute,
      college: data.phd_college,
      year: data.phd_year,
      area: data.phd_area,
      teachingExperience: data.phd_teaching_experience,
      year2: data.phd_anti_completion_year,
    };
    let aq_post_doctoral = {
      country: aq_post_doctoral_country,
      mode: data.post_doctoral_mode,
      institute: data.post_doctoral_institute,
      college: data.post_doctoral_college,
      year: data.post_doctoral_year,
      area: data.post_doctoral_area,
      course: data.post_doctoral_course,
      division: data.post_doctoral_division,
      percentage: data.post_doctoral_percentage,
    };
    let academicQualification = {
      gate: data.gate,
      ugcNet: data.ugcNet,
      ugcJrf: data.ugcJrf,
      urcCsir: data.urcCsir,
      icmr: data.icmr,
      icar: data.icar,
    };
    let academicExperience = {
      natureOfJob: data.academicExperience_mode,
      country: academicExperience_country,
      university: data.academicExperience_university,
      college: data.academicExperience_college,
      position: data.academicExperience_position,
      academicDomain: data.academicExperience_domain,
      dateFrom: data.academicExperience_datefrom,
      dateTo: data.academicExperience_dateto,
    };
    let nonAcademicExperience = {
      natureOfJob: data.nonAcademicExperience_mode,
      country: nonAcademicExperience_country,
      organization: data.nonAcademicExperience_organization,
      designation: data.nonAcademicExperience_designation,
      department: data.nonAcademicExperience_department,
      dateFrom: data.nonAcademicExperience_datefrom,
      dateTo: data.nonAcademicExperience_dateto,
    };
    let fellowships = {
      fellowshipDetail: data.fellowship_details,
      year: data.fellowship_year,
      amount: data.fellowship_amount,
      fellowshipStatus: data.fellowship_status,
    };
    let research = {
      orcid: data.research_orcid,
      scopus: data.research_scopus,
      webofscience: data.research_webofscience,
      cif: data.research_cif,
      nop_total: data.research_nop_total,
      nop_ugc_care_list: data.research_nop_ugc_care_list,
      nop_sci: data.research_nop_sci,
      nop_web_science: data.research_nop_web_science,
      nop_google_scholar: data.research_nop_google_scholar,
      nop_scopus: data.research_nop_scopus,
      nop_three_total: data.research_nop_three_total,
      nop_three_ugc_care_list: data.research_nop_three_ugc_care_list,
      nop_three_sci: data.research_nop_three_sci,
      nop_three_web_science: data.research_nop_three_web_science,
      nop_three_google_scholar: data.research_nop_three_google_scholar,
      nop_three_scopus: data.research_nop_three_scopus,
      number_citations: data.research_number_citations,
      completed_funded_projects: data.research_completed_funded_projects,
      amount_completed_funded_projects:
        data.research_amount_completed_funded_projects,
      ongoing_funded_projects: data.research_ongoing_funded_projects,
      amount_ongoing_funded_projects:
        data.research_amount_ongoing_funded_projects,
      presented_total: data.research_presented_total,
      presented_national: data.research_presented_national,
      presented_international: data.research_presented_international,
      attended_total: data.research_attended_total,
      attended_national: data.research_attended_national,
      attended_international: data.research_attended_international,
      organized_total: data.research_organized_total,
      organized_national: data.research_organized_national,
      organized_international: data.research_organized_international,
      guidance_completed_independent_mphil:
        data.research_guidance_completed_independent_mphil,
      guidance_completed_independent_phd:
        data.research_guidance_completed_independent_phd,
      guidance_completed_supervisor_mphil:
        data.research_guidance_completed_supervisor_mphil,
      guidance_completed_supervisor_phd:
        data.research_guidance_completed_supervisor_phd,
      guidance_supervision_independent_mphil:
        data.research_guidance_supervision_independent_mphil,
      guidance_supervision_independent_phd:
        data.research_guidance_supervision_independent_phd,
      guidance_supervision_supervisor_mphil:
        data.research_guidance_supervision_supervisor_mphil,
      guidance_supervision_supervisor_phd:
        data.research_guidance_supervision_supervisor_phd,
    };
    let books = {
      detail: data.book_details,
      ISBNNumber: data.book_isbn,
      writtenAs: data.book_written,
    };

    let patent = {
      patentDetail: data.patent_details,
      year: data.patent_year,
      status: data.patent_status,
    };

    let peerRecognition = {
      awards: data.peerRecognition_awards,
      agency: data.peerRecognition_agency,
      year: data.peerRecognition_year,
    };

    data.jobType = data.jobtype;
    data.faculty = data.faculty;
    data.school_main = data.school;
    data.department = data.department;
    data.nature_of_job = data.natureofjob;

    data['cr_country'] = cr_country;
    data['cr_state'] = cr_region;
    data['native_country'] = native_country;
    data['native_state'] = native_region;
    data['applicant'] = applicant;
    data['aq_secondary'] = aq_secondary;
    data['aq_higher_secondary'] = aq_higher_secondary;
    data['aq_graduation'] = aq_graduation;
    data['aq_post_graduation'] = aq_post_graduation;
    data['aq_mphil'] = aq_mphil;
    data['aq_phd'] = aq_phd;
    data['aq_post_doctoral'] = aq_post_doctoral;
    data['academicQualification'] = academicQualification;
    data['academicExperience'] = academicExperience;
    data['nonAcademicExperience'] = nonAcademicExperience;
    data['fellowships'] = fellowships;
    data['research'] = research;
    data['books'] = books;
    data['patent'] = patent;
    data['peerRecognition'] = peerRecognition;
    console.log(data);
    try {
      const response = await fetch('https://hammerhead-app-qmja6.ondigitalocean.app/applications', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      setId(
        response.url.substring(
          response.url.lastIndexOf('/') + 1,
          response.url.length
        )
      );
      navigate(
        `/apply/upload/${response.url.substring(
          response.url.lastIndexOf('/') + 1,
          response.url.length
        )}`
      );
      const data1 = await response.json();
      if (data1) {
        setId(data1);
        navigate(`/apply/upload/${data1.applyId}`);
      }
      console.log(
        response.url.substring(
          response.url.lastIndexOf('/') + 1,
          response.url.length
        )
      );
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const handleSub = () => {};
  return (
    <FormProvider {...methods}>
      <div className='my-4'>
        <div className='container'>
          <div className='heading'>
            <p>Job Application Form</p>
          </div>
        </div>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* This is part 1 */}
          <Accordion
            defalultActiveKey={['0']}
            alwaysOpen
            style={{ padding: '0 5%' }}
          >
            <Partone />
            {/* This is part 2 */}
            <PartTwo />
            {/*This is part 3  */}
            <PartThree />
            {/* This is part 4  */}
            <PartFour />
            {/* This is part 5 */}
            <PartFive />
            {/* This is part 6 */}
            <PartSix />
            {/* This is part 7  */}
            <PartSeven />
            {/*This is part 8  */}
            <PartEight />
            {/* This is part 9 & 10 */}
            <PartNineTen />
            {/* This is part 11 */}
            <PartEleven />
            {/* This is part 12  */}
            <PartTwelve />
            <hr />
            <Form.Group as={Col} md='12' controlId='accept'>
              <Form.Label>
                T&Cs<span style={{ color: 'red' }}> *</span>
              </Form.Label>
              {/* <Form.Check
                type='checkbox'
                isInvalid={errors.accept}
                size='sm'
                label='I confirm that I have not been convicted by a court in India for any criminal offense and/or sentenced to imprisonment. There are no criminal proceedings pending against me before any court in India. I have not been issued a warrant or summons for appearance or a warrant for arrest by any court in India. I certify that the above statements made by me are true, complete and correct. I agree that in case Manipal University Jaipur will finds at any time that the information given by me in this form is not correct or incomplete, Manipal University Jaipur will have the right to withdraw my letter of appointment or to terminate my appointment at any time without notice or compensation.'
                onClick={() => setCheck(!check)}
                {...register('board', {
                  required: true,
                })}
              ></Form.Check> */}
              <Form.Check
                type='checkbox'
                isInvalid={errors.accept}
                label='I confirm that I have not been convicted by a court in India for any criminal offense and/or sentenced to imprisonment. There are no criminal proceedings pending against me before any court in India. I have not been issued a warrant or summons for appearance or a warrant for arrest by any court in India. I certify that the above statements made by me are true, complete and correct. I agree that in case Manipal University Jaipur will finds at any time that the information given by me in this form is not correct or incomplete, Manipal University Jaipur will have the right to withdraw my letter of appointment or to terminate my appointment at any time without notice or compensation.'
                onClick={() => setCheck(!check)}
              ></Form.Check>
            </Form.Group>
            <hr />
            <p style={{ color: 'red' }}>
              You'll need to upload all the necessary documents on the next
              page.
            </p>
            {console.log(check)}
            {check ? (
              <Button type='submit' style={{ width: '10%' }}>
                Next
              </Button>
            ) : (
              <Button
                disabled
                type='submit'
                style={{ width: '10%', background: 'grey' }}
              >
                Next
              </Button>
            )}
          </Accordion>
        </Form>
      </div>
    </FormProvider>
  );
};

export default FormComponent;
