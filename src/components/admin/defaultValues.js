import React from "react";
const dataFunction = (data) => {
  const val = {
    //part one values

    jobType: data?.jobtype,
    faculty: data?.faculty,
    school_main: data?.school,
    department: data?.department,
    nature_of_job: data?.natureofjob,

    cr_country: data?.cr_country,
    cr_state: data?.cr_states,
    native_country: data?.native_country,
    native_state: data?.native_state,
    native_city: data?.native_city,
    //applicant
    firstName: data?.applicant?.firstName,
    lastName: data?.applicant?.lastName,
    dob: data?.applicant?.date,
    gender: data?.appliacant?.gender,
    religion: data?.applicant?.religion,
    marital_status: data?.applicant?.marital_status,
    mobile: data?.applicant?.mobile,
    email: data?.applicant?.email,

    //aq_secondary
    aq_secondary_country: data?.aq_secondary?.country,
    aq_secondary_state: data?.aq_secondary?.state,
    aq_secondary_city: data?.aq_secondary?.city,
    secondary_mode: data?.aq_secondary?.mode,
    secondary_school: data?.aq_secondary?.school,
    secondary_board: data?.aq_secondary?.oard,
    secondary_passingYear: data?.aq_secondary?.passingYear,
    secondary_division: data?.aq_secondary?.division,
    secondary_percentage: data?.aq_secondary?.percentage,

    aq_higher_secondary_country: data?.aq_higher_secondary?.country,
    aq_higher_secondary_state: data?.aq_higher_secondary?.state,
    aq_higher_secondary_city: data?.aq_higher_secondary?.ity,
    higher_secondary_mode: data?.aq_higher_secondary?.mode,
    higher_secondary_school: data?.aq_higher_secondary?.school,
    higher_secondary_board: data?.aq_higher_secondary?.board,
    higher_secondary_stream: data?.aq_higher_secondary?.stream,
    higher_secondary_passingYear: data?.aq_higher_secondary?.passingYear,
    higher_secondary_division: data?.aq_higher_secondary?.ivision,
    higher_secondary_percentage: data?.aq_higher_secondary?.percentage,

    aq_graduation_country: data?.aq_graduation?.country,
    aq_graduation_state: data?.aq_graduation?.state,
    aq_graduation_city: data?.aq_graduation?.city,
    graduation_mode: data?.aq_graduation?.mode,
    graduation_institute: data?.aq_graduation?.institute,
    graduation_college: data?.aq_graduation?.college,
    graduation_year: data?.aq_graduation?.year,
    graduation_area: data?.aq_graduation?.area,
    graduation_course: data?.aq_graduation?.course,
    graduation_division: data?.aq_graduation?.division,
    graduation_percentage: data?.aq_graduation?.percentage,

    aq_post_graduation_country: data?.aq_post_graduation?.country,
    aq_post_graduation_state: data?.aq_post_graduation?.state,
    aq_post_graduation_city: data?.aq_post_graduation?.city,
    post_graduation_mode: data?.aq_post_graduation?.mode,
    post_graduation_institute: data?.aq_post_graduation?.institute,
    post_graduation_college: data?.aq_post_graduation?.college,
    post_graduation_year: data?.aq_post_graduation?.year,
    post_graduation_area: data?.aq_post_graduation?.area,
    post_graduation_course: data?.aq_post_graduation?.course,
    post_graduation_division: data?.aq_post_graduation?.division,
    post_graduation_percentage: data?.aq_post_graduation?.percentage,

    aq_mphil_country: data?.aq_mphil?.country,
    aq_mphil_state: data?.aq_mphil?.state,
    aq_mphil_city: data?.aq_mphil?.city,
    mphil_mode: data?.aq_mphil?.mode,
    mphil_institute: data?.aq_mphil?.institute,
    mphil_college: data?.aq_mphil?.college,
    mphil_year: data?.aq_mphil?.year,
    mphil_area: data?.aq_mphil?.area,
    mphil_division: data?.aq_mphil?.division,
    mphil_percentage: data?.aq_mphil?.percentage,

    aq_phd_country: data?.aq_phd?.country,
    aq_phd_state: data?.aq_phd?.state,
    aq_phd_city: data?.aq_phd?.city,
    phd_status: data?.aq_phd?.status,
    phd_mode: data?.aq_phd?.mode,
    phd_institute: data?.aq_phd?.institute,
    phd_college: data?.aq_phd?.college,
    phd_year: data?.aq_phd?.year,
    phd_area: data?.aq_phd?.area,
    phd_teaching_experience: data.aq_phd?.teachingExperience,
    phd_anti_completion_year: data.aq_phd?.year2,

    aq_post_doctoral_country: data.aq_post_doctoral?.country,
    aq_post_doctoral_state: data.aq_post_doctoral?.state,
    aq_post_doctoral_city: data.aq_post_doctoral?.city,
    post_doctoral_mode: data.aq_post_doctoral.mode,
    post_doctoral_institute: data.aq_post_doctoral?.institute,
    post_doctoral_college: data.aq_post_doctoral?.college,
    post_doctoral_year: data.aq_post_doctoral?.year,
    post_doctoral_area: data.aq_post_doctoral?.area,
    post_doctoral_course: data.aq_post_doctoral?.course,
    post_doctoral_division: data.aq_post_doctoral?.division,
    post_doctoral_percentage: data.aq_post_doctoral?.percentage,

    gate: data?.academicQualification?.gate,
    ugcNet: data?.academicQualification?.ugcNet,
    ugcJrf: data?.academicQualification?.ugcJrf,
    urcCsir: data?.academicQualification?.urcCsir,
    icmr: data?.academicQualification?.icmr,
    icar: data?.academicQualification?.icar,

    academicExperience_mode: data?.academicExperience?.natureOfJob,
    academicExperience_country: data?.academicExperience?.country,
    academicExperience_state: data?.academicExperience?.state,
    academicExperience_city: data?.academicExperience?.city,
    academicExperience_university: data?.academicExperience?.university,
    academicExperience_college: data?.academicExperience?.college,
    academicExperience_position: data?.academicExperience?.position,
    academicExperience_academicDomain: data?.academicExperience?.domain,
    academicExperience_dateFrom: data?.academicExperience?.datefrom,
    academicExperience_dateTo: data?.academicExperience?.dateto,

    nonAcademicExperience_mode: data.nonAcademicExperience?.natureOfJob,
    nonAcademicExperience_country: data.nonAcademicExperience_country,
    nonAcademicExperience_state: data.nonAcademicExperience_state,
    nonAcademicExperience_city: data.nonAcademicExperience_city,
    nonAcademicExperience_organization:
      data.nonAcademicExperience?.organization,
    nonAcademicExperience_designation: data.nonAcademicExperience?.designation,
    nonAcademicExperience_department: data.nonAcademicExperience?.department,
    nonAcademicExperience_dateFrom: data.nonAcademicExperience?.datefrom,
    nonAcademicExperience_dateTo: data.nonAcademicExperience?.dateto,

    fellowship_detail: data?.fellowships?.fellowshipDetails,
    fellowship_year: data?.fellowships?.year,
    fellowship_amount: data?.fellowships?.amount,
    fellowship_status: data?.fellowships?.fellowshipStatus,

    research_orcid: data?.research?.orcid,
    research_scopus: data?.research?.scopus,
    research_webofscience: data?.research?.webofscience,
    research_cif: data?.research?.cif,
    research_nop_total: data?.research?.nop_total,
    research_nop_ugc_care_list: data?.research?.nop_ugc_care_list,
    research_nop_sci: data?.research?.nop_sci,
    research_nop_web_science: data?.research?.nop_web_science,
    research_nop_google_scholar: data?.research?.nop_google_scholar,
    research_nop_scopus: data?.research?.nop_scopus,
    research_nop_three_total: data?.research?.nop_three_total,
    research_nop_three_ugc_care_list: data?.research?.nop_three_ugc_care_list,
    research_nop_three_sci: data?.research?.nop_three_sci,
    research_nop_three_web_science: data?.research?.nop_three_web_science,
    research_nop_three_google_scholar: data?.research?.nop_three_google_scholar,
    research_nop_three_scopus: data?.research?.nop_three_scopus,
    research_number_citations: data?.research?.number_citations,
    research_completed_funded_projects:
      data?.research?.completed_funded_projects,
    research_amount_completed_funded_projects:
      data?.research?.amount_completed_funded_projects,
    research_ongoing_funded_projects: data?.research?.ongoing_funded_projects,
    research_amount_ongoing_funded_projects:
      data?.research?.amount_ongoing_funded_projects,
    research_presented_total: data?.research?.presented_total,
    research_presented_national: data?.research?.presented_national,
    research_presented_international: data?.research?.presented_international,
    research_attended_total: data?.research?.attended_total,
    research_attended_national: data?.research?.attended_national,
    research_attended_international: data?.research?.attended_international,
    research_organized_total: data?.research?.organized_total,
    research_organized_national: data?.research?.organized_national,
    research_organized_international: data?.research?.organized_international,
    research_guidance_completed_independent_mphil:
      data?.research?.guidance_completed_independent_mphil,
    research_guidance_completed_independent_phd:
      data?.research?.guidance_completed_independent_phd,
    research_guidance_completed_supervisor_mphil:
      data?.research?.guidance_completed_supervisor_mphil,
    research_guidance_completed_supervisor_phd:
      data?.research?.guidance_completed_supervisor_phd,
    research_guidance_supervision_independent_mphil:
      data?.research?.guidance_supervision_independent_mphil,
    research_guidance_supervision_independent_phd:
      data?.research?.guidance_supervision_independent_phd,
    research_guidance_supervision_supervisor_mphil:
      data?.research?.guidance_supervision_supervisor_mphil,
    research_guidance_supervision_supervisor_phd:
      data?.research?.guidance_supervision_supervisor_phd,

    book_detail: data?.books?.details,
    book_isbn: data?.books?.ISBNNumber,
    book_written: data?.books?.writtenAs,

    patent_details: data?.patent?.patentDetail,
    patent_year: data?.patent?.year,
    patent_status: data?.patent?.status,

    peerRecognition_awards: data?.peerRecognition?.awards,
    peerRecognition_agency: data?.peerRecognition?.agency,
    peerRecognition_year: data?.peerRecognition?.year,
  };
  console.log(val);
  return val;
};

export default dataFunction;
