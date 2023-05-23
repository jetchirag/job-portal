import React from "react";
import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import Modal from "../modal/Modal";
import Form from "react-bootstrap/Form";
import PartOneDetails from "../view-details/PartOneDetails";
import PartThreeDetails from "../view-details/PartThreeDetails";
import PartTwoDetail from "../view-details/PartTwoDetail";
import PartFourDetails from "../view-details/PartFourDetails";
import PartFiveDetails from "../view-details/PartFiveDetails";
import PartSixDetails from "../view-details/PartSixDetails";
import { FormProvider, useForm } from "react-hook-form";
import PartSevenDetails from "../view-details/PartSevenDetails";
import PartEightDetails from "../view-details/PartEightDetails";
import PartNineTenDetails from "../view-details/PartNineTenDetails";
import PartElevenDetails from "../view-details/PartEleven";
import PartTwelveDetails from "../view-details/PartTwelveDetails";
import PartTwo from "../Form-Current/PartTwo";

const FormDetails = (props) => {
  const handleClose = () => {
    setUpdate(false);
  };
  const [Update, setUpdate] = useState(false);
  const methods = useForm({
    defaultValues: async () => {
      const response = await fetch(
        `https://hammerhead-app-qmja6.ondigitalocean.app/applications/${props.id}`,
        // NEW - add a Content-Type header
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return {
        firstName: data.applicant.firstName,
        middleName: data?.applicant?.middleName,
        lastName: data?.applicant?.lastName,
        dob: data?.applicant?.dob,
        gender:data?.applicant?.gender,
        mobile:data?.applicant?.mobile,
        email:data?.applicant?.email,
        

      };
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    let applicant = {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      dob: data.dob,
      gender: data.gender,
      religion: data.religion,
      marital_status: data.marital_status,
      mobile: data.mobile,
      email: data.email,
    };
    let aq_secondary = {
      country: data.aq_secondary_country,
      mode: data.secondary_mode,
      school: data.secondary_school,
      board: data.secondary_board,
      passingYear: data.secondary_passingYear,
      division: data.secondary_division,
      percentage: data.secondary_percentage,
    };
    let aq_higher_secondary = {
      country: data.aq_higher_secondary_country,
      mode: data.higher_secondary_mode,
      school: data.higher_secondary_school,
      board: data.higher_secondary_board,
      stream: data.higher_secondary_stream,
      passingYear: data.higher_secondary_passingYear,
      division: data.higher_secondary_division,
      percentage: data.higher_secondary_percentage,
    };
    let aq_graduation = {
      country: data.aq_graduation_country,
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
      country: data.aq_post_graduation_country,
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
      country: data.aq_mphil_country,
      mode: data.mphil_mode,
      institute: data.mphil_institute,
      college: data.mphil_college,
      year: data.mphil_year,
      area: data.mphil_area,
      division: data.mphil_division,
      percentage: data.mphil_percentage,
    };
    let aq_phd = {
      country: data.aq_phd_country,
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
      country: data.aq_post_doctoral_country,
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
      country: data.academicExperience_country,
      university: data.academicExperience_university,
      college: data.academicExperience_college,
      position: data.academicExperience_position,
      academicDomain: data.academicExperience_domain,
      dateFrom: data.academicExperience_datefrom,
      dateTo: data.academicExperience_dateto,
    };
    let nonAcademicExperience = {
      natureOfJob: data.nonAcademicExperience_mode,
      country: data.nonAcademicExperience_country,
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

    data["cr_country"] = data.cr_country;
    data["cr_state"] = data.cr_states;
    data["native_country"] = data.native_country;
    data["native_state"] = data.native_state;
    data["native_city"] = data.native_city;
    data["applicant"] = applicant;
    data["aq_secondary"] = aq_secondary;
    data["aq_higher_secondary"] = aq_higher_secondary;
    data["aq_graduation"] = aq_graduation;
    data["aq_post_graduation"] = aq_post_graduation;
    data["aq_mphil"] = aq_mphil;
    data["aq_phd"] = aq_phd;
    data["aq_post_doctoral"] = aq_post_doctoral;
    data["academicQualification"] = academicQualification;
    data["academicExperience"] = academicExperience;
    data["nonAcademicExperience"] = nonAcademicExperience;
    data["fellowships"] = fellowships;
    data["research"] = research;
    data["books"] = books;
    data["patent"] = patent;
    data["peerRecognition"] = peerRecognition;
    // console.log(data);
    try {
      const response = await fetch(
        `https://hammerhead-app-qmja6.ondigitalocean.app/applications/${props.id}/udpate`,
        {
          body: JSON.stringify(data),
          method: "UPDATE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      // setId(
      //   response.url.substring(
      //     response.url.lastIndexOf('/') + 1,
      //     response.url.length
      //   )
      // );
      // navigate(
      //   `/apply/upload/${response.url.substring(
      //     response.url.lastIndexOf('/') + 1,
      //     response.url.length
      //   )}`
      // );
      // const data1 = await response.json();
      // if (data1) {
      //   setId(data1);
      //   navigate(`/apply/upload/${data1.applyId}`);
      // }
      // console.log(
      //   response.url.substring(
      //     response.url.lastIndexOf('/') + 1,
      //     response.url.length
      //   )
      // );
      setUpdate(true);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <>
      <Modal
        handleClose={handleClose}
        show={Update}
        title="Application Updated ⚠️"
        body="This application data is updated!"
      />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Accordion
            defalultActiveKey={["0"]}
            alwaysClose
            style={{ padding: "0 5%" }}
          >
            <PartOneDetails data={props.data} />
            {/* <PartTwoDetail data={props.data} /> */}
            <PartTwo />
            <PartThreeDetails data={props.data} />
            <PartFourDetails data={props.data} />
            <PartFiveDetails data={props.data} />
            <PartSixDetails data={props.data} />
            <PartSevenDetails data={props.data} />
            <PartEightDetails data={props.data} />
            <PartNineTenDetails data={props.data} />
            <PartElevenDetails data={props.data} />
            <PartTwelveDetails data={props.data} />
            <Button onClick={props.reject}>Reject</Button>
            <Button onClick={props.accept}>Accept</Button>
            <Button onClick={props.delete}>Delete</Button>
            <Button type="submit">Update Form</Button>
          </Accordion>
        </Form>
      </FormProvider>
    </>
  );
};

export default FormDetails;
