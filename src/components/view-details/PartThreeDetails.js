import React, { useState,useEffect } from "react";
import { set, useFormContext } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


const PartThreeDetails = (props) => {
    var headers = new Headers();
  headers.append(
    'X-CSCAPI-KEY',
    'ZVZzdnMxQkhYVW96MHlLYlhoaVBTWXpMVXBCR0I4NVVxWXBQTEZwaw=='
  );
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };
  const [countries, setCountries] = useState(['']);
  useEffect(() => {
    const getCountries = async () => {
      await fetch(
        'https://api.countrystatecity.in/v1/countries',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setCountries(result);
        })
        .catch((error) => console.log('error', error));
    };
    getCountries();
  }, []);
  const [mphilVal, setMphil] = useState(true);
  const handleMphil = () => {
    setMphil(!mphilVal);
  };
  const [pdocVal, setPdoc] = useState(true);
  const handlePdoc = () => {
    setPdoc(!pdocVal);
  };
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [graduate, setGraduate] = useState(["set"]);
  const [postGraduate, setPostGraduate] = useState(["set"]);
  const [mPhill, setMPhill] = useState(["set"]);
  const [phD, setPhD] = useState(["set"]);
  const [pDoctoral, setpDoctoral] = useState(["set"]);

  const addGrad = () => {
    setGraduate([...graduate, "set"]);
  };
  const removeGrad = () => {
    const copyArr = [...graduate];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setGraduate(copyArr);
  };
  const addPostGrad = () => {
    setPostGraduate([...postGraduate, "set"]);
  };
  const removePostGrad = () => {
    const copyArr = [...postGraduate];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setPostGraduate(copyArr);
  };
  const addMPhill = () => {
    setMPhill([...mPhill, "set"]);
  };
  const removeMPHill = () => {
    const copyArr = [...mPhill];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setMPhill(copyArr);
  };
  const addPhD = () => {
    setPhD([...phD, "set"]);
  };
  const removePhD = () => {
    const copyArr = [...phD];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setPhD(phD);
  };
  const addPDoctoral = () => {
    setpDoctoral([...pDoctoral, "set"]);
  };
  const removePostDoc = () => {
    const copyArr = [...pDoctoral];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setpDoctoral(copyArr);
  };
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        3. Academic / Professional Qualificaiton
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Higher Seconday / Class 12th</b>
        </p>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="2"
            controlId="aq_higher_secondary_country"
            size="sm"
          >
            {/* Academic Qualification Higher Seconday Country  */}
            <Form.Label>
              Country<span style={{ color: "red" }}> *</span>
            </Form.Label>
           <Form.Select
              isInvalid={errors.aq_secondary_country}
              size='sm'
              {...register('aq_secondary_country', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* Academic Qulalification Higher Secondary Country  */}
          {/* Academic Qualification Education Mode Details  */}
          <Form.Group as={Col} md="2" controlId="higher_secondary_mode">
            <Form.Label>
              Education Mode<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.higher_secondary_mode}
              value={props?.data?.aq_higher_secondary?.mode}
              size="sm"
              {...register("higher_secondary_mode", {
                required: "Please select your mode of educatoin",
              })}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              higher_secondary_mode
              <option value="regular">Regular</option>
              <option value="part-time">Part-Time</option>
              <option value="distance-learning-online">
                Distance Learning / Online
              </option>
            </Form.Select>
          </Form.Group>
          {/* School  */}
          <Form.Group as={Col} md="2" controlId="school">
            <Form.Label>
              School<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              value={props?.data?.aq_higher_secondary?.school}
              isInvalid={errors.school}
              size="sm"
              placeholder="School Name"
              type="text"
              {...register("school", {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Board  */}
          <Form.Group as={Col} md="2" controlId="board">
            <Form.Label>
              Board<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.board}
              defaultValue={props?.data?.aq_higher_secondary?.board}
              size="sm"
              placeholder="Board Name"
              type="text"
              {...register("board", {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Passing Year  */}
          <Form.Group as={Col} md="2" controlId="passingYear">
            <Form.Label>
              Passing Year<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              defaultValue={props?.data?.aq_higher_secondary?.passingYear}
              isInvalid={errors.passingYear}
              size="sm"
              placeholder="Passing Year"
              type="number"
              {...register("passingYear", {
                required: true,
                maxLength: 4,
                minLength: 4,
              })}
            />
          </Form.Group>
          {/* Division Details  */}
          <Form.Group as={Col} md="2" controlId="division">
            <Form.Label>
              Division<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.division}
              value={props?.data?.aq_higher_secondary?.division}
              size="sm"
              {...register("division", {
                required: "Please select your division",
              })}
            >
              <option selected="" disabled="" value="">
               choose...
              </option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
            </Form.Select>
          </Form.Group>
          {/* Aggregate Percentage  */}
          <Form.Group as={Col} md="2" controlId="percentage">
            <Form.Label>
              Aggregate Percentage<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.percentage}
              defaultValue={props?.data?.aq_higher_secondary?.percentage}
              size="sm"
              placeholder="Aggregate Percentage"
              type="number"
              step=".01"
              {...register("percentage", {
                required: true,
                minValue: 0,
                maxValue: 100,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Graduate</b>
        </p>
        {props?.data?.aq_graduation?.map((item) => {
          return (
            <>
              <Row className="mb-3">
                <Form.Group as={Col} md="2" controlId="aq_graduation_country">
                  {/* Academic Qualification Graduate Country  */}
                  <Form.Label>
                    Country<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                 <Form.Select
              isInvalid={errors.aq_higher_secondary_country}
              size='sm'
              {...register('aq_higher_secondary_country', {
                required: true,
              })}
              defaultValue={props?.data?.aq_higher_secondary_country}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="2" controlId="graduation_mode">
                  <Form.Label>
                    Education Mode<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_mode}
                   value={item.mode}
                    size="sm"
                    {...register("graduation_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option selected="" disabled="" value="">
                     Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="2" controlId="graduation_institute">
                  <Form.Label>
                    University / Institute
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_institute}
                    value={item.institute}
                    size="sm"
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("graduation_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="2" controlId="graduation_college">
                  <Form.Label>
                    College<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_college}
                    value={item.college}
                    size="sm"
                    placeholder="College Name"
                    type="text"
                    {...register("graduation_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="2" controlId="graduation_year">
                  <Form.Label>
                    Graduation Year<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_year}
                    value={item.year}
                    size="sm"
                    placeholder="Graduation Year"
                    type="number"
                    {...register("graduation_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="2" controlId="graduation_area">
                  <Form.Label>
                    Area<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_area}
                    value={item.area}
                    size="sm"
                    placeholder="Area"
                    type="text"
                    {...register("graduation_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                {/* <Form.Group as={Col} md="2" controlId="graduation_course">
                  <Form.Label>
                    Course Name<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_course}
                    size='sm'
                    placeholder='Course Name'
                    type='text'
                    {...register('graduation_course', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group> */}

                {/* Course Details  */}
                <Form.Group as={Col} md="2" controlId="graduation_course">
                  <Form.Label>
                    Course Name<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_course}
                    value={item.course}
                    size="sm"
                    {...register("graduation_course", {
                      required: "Please select your course name",
                    })}
                  >
                    <option
                      selected=""
                      disabled=""
                      value=""
                    >
                      Choose...
                    </option>
                    <option value="btech">B.Tech</option>
                    <option value="regular">B.E</option>
                    <option value="regular">B.Sc</option>
                    <option value="regular">B.A</option>
                    <option value="regular">B.Arch</option>
                    <option value="regular">
                      BBA- Bachelor of Business Administration
                    </option>
                    <option value="regular">
                      BBS- Bachelor of Business Studies
                    </option>
                    <option value="regular">BCom- Bachelor of Commerce</option>
                    <option value="regular">
                      BEM- Bachelor of Event Management
                    </option>
                    <option value="regular">BFA- Bachelor of Fine Arts</option>
                    <option value="regular">
                      BFD- Bachelor of Fashion Designing
                    </option>
                    <option value="regular">
                      BJMC- Bachelor of Journalism and Mass Communication
                    </option>
                    <option value="regular">
                      BMS- Bachelor of Management Science
                    </option>
                    <option value="regular">
                      BSW- Bachelor of Social Work
                    </option>
                    <option value="regular">
                      BTTM- Bachelor of Travel and Tourism Management
                    </option>
                    <option value="regular">LLB</option>
                    <option value="regular">Bachelor of Design</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md="2" controlId="graduation_division">
                  <Form.Label>
                    Division<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_division}
                    value={item.division}
                    size="sm"
                    {...register("graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option
                      selected=""
                      disabled=""
                      value=""
                    >
                      Choose...
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group as={Col} md="2" controlId="graduation_percentage">
                  <Form.Label>
                    Aggregate Percentage<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_percentage}
                    value={item.percentage}
                    size="sm"
                    placeholder="Aggregate Percentage"
                    type="number"
                    step=".01"
                    {...register("graduation_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            </>
          );
        })}
        <button type="button" onClick={addGrad} className="add-more-btn">
          Add New
        </button>{" "}
        <button type="button" onClick={removeGrad} className="add-more-btn">
          Remove Last
        </button>
        <hr />
        <p>
          <b>Post Graduate</b>
        </p>
        {props?.data?.aq_post_graduation?.map((item) => {
          return (
            <>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="aq_post_graduate_country"
                >
                  {/* Academic Qualification Post Graduate Country  */}
                  <Form.Label>
                    Country<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                       <Form.Select
                    isInvalid={errors.aq_graduation_country}
                    size='sm'
                    {...register('aq_graduation_country', {
                      required: true,
                    })}
                    defaultValue={props?.data?.aq_graduation_country}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="2" controlId="graduation_mode">
                  <Form.Label>
                    Education Mode<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_mode}
                    value={item.mode}
                    size="sm"
                    {...register("graduation_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option
                      selected=""
                      disabled=""
                      value=""
                    >
                      Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="post_graduation_institute"
                >
                  <Form.Label>
                    University / Institute
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_institute}
                    placeholder="University/Institute Name"
                    value={item.institute}
                    type="text"
                    {...register("post_graduation_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="2" controlId="post_graduation_college">
                  <Form.Label>
                    College<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_college}
                    value={item.college}
                    size="sm"
                    placeholder="College Name"
                    type="text"
                    {...register("post_graduation_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="2" controlId="post_graduation_year">
                  <Form.Label>
                    Graduation Year<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_year}
                    value={item.year}
                    size="sm"
                    placeholder="Graduation Year"
                    type="number"
                    {...register("post_graduation_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="2" controlId="post_graduation_area">
                  <Form.Label>
                    Area<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_area}
                    value={item.area}
                    size="sm"
                    placeholder="Area"
                    type="text"
                    {...register("post_graduation_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                {/* <Form.Group as={Col} md="2" controlId="post_graduation_course">
                  <Form.Label>
                    Course Name<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_course}
                    size='sm'
                    placeholder='Course Name'
                    type='text'
                    {...register('post_graduation_course', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group> */}
                {/* Course Details  */}
                <Form.Group as={Col} md="2" controlId="post_graduation_course">
                  <Form.Label>
                    Course<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_graduation_course}
                    size="sm"
                    value={item.course}
                    {...register("post_graduation_course", {
                      required: "Please select your course",
                    })}
                  >
                    <option
                      selected=""
                      disabled=""
                      value=""
                    >
                      Choose...
                    </option>
                    <option value="first">MA</option>
                    <option value="first">MSc</option>
                    <option value="first">MRes</option>
                    <option value="first">MPhil</option>
                    <option value="first">MFA</option>
                    <option value="first">M.Arch</option>
                    <option value="first">MLitt</option>
                    <option value="first">M.S (by research)</option>
                    <option value="first">LLM</option>
                    <option value="first">LPC</option>
                    <option value="first">GDL</option>
                    <option value="first">MBA</option>
                    <option value="first">MCom</option>
                    <option value="first">MIM</option>
                    <option value="first">ME</option>
                    <option value="mtech">MTech</option>
                    <option value="first">MSW</option>
                    <option value="first">PGCert</option>
                    <option value="first">PGDip</option>
                    <option value="first">PGCE</option>
                    <option value="first">PGDE</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="post_graduation_division"
                >
                  <Form.Label>
                    Division<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_graduation_division}
                    value={item.division}
                    size="sm"
                    {...register("post_graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option
                      selected=""
                      disabled=""
                      value=""
                    >
                      Choose...
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Post Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="post_graduation_percentage"
                >
                  <Form.Label>
                    Aggregate Percentage<span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_percentage}
                    size="sm"
                    value={item.percentage}
                    placeholder="Aggregate Percentage"
                    type="number"
                    step=".01"
                    {...register("post_graduation_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            </>
          );
        })}
        <button type="button" onClick={addPostGrad} className="add-more-btn">
          Add New
        </button>{" "}
        <button type="button" onClick={removePostGrad} className="add-more-btn">
          Remove Last
        </button>
        <hr />
        <p>
          <b>Ph.D</b>
        </p>
        {props?.data?.aq_phd?.map((item) => {
          return (
            <Row className="mb-3">
              {/* PHD Status Details  */}
              <Form.Group as={Col} md="2" controlId="phd_status">
                <Form.Label>
                  Status<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Select
                  size="sm"
                  isInvalid={errors.phd_status}
                  value={item.status}
                  {...register("phd_status", {
                    required: "Please select your status",
                  })}
                >
                  <option value="">
                    Choose...
                  </option>
                  <option value="pursuing">Pursuing</option>
                  <option value="awarded">awarded</option>
                  <option value="thesis-submitted">Thesis Submitted</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="aq_phd_country">
                {/* Academic Qualification PhD Country  */}
                <Form.Label>
                  Country<span style={{ color: "red" }}> *</span>
                </Form.Label>
                   <Form.Select
                  isInvalid={errors.aq_phd_country}
                  size='sm'
                  {...register('aq_phd_country', {
                    required: true,
                  })}
                  defaultValue={props?.data?.aq_phd_country}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  {countries?.map((element) => {
                    return <option value={element.iso2}>{element.name}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              {/* Academic Qualification Education Mode Details  */}
              <Form.Group as={Col} md="2" controlId="phd_mode">
                <Form.Label>
                  Education Mode<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Select
                  title="Choose.."
                  size="sm"
                  value={item.mode}
                  isInvalid={errors.phd_mode}
                  {...register("phd_mode", {
                    required: "Please select your mode of educatoin",
                  })}
                >
                 
                  <option value="regular">Regular</option>
                  <option value="part-time">Part-Time</option>
                  <option value="distance-learning-online">
                    Distance Learning / Online
                  </option>
                </Form.Select>
              </Form.Group>
              {/* University / Institute  */}
              <Form.Group as={Col} md="2" controlId="phd_institute">
                <Form.Label>
                  University / Institute<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  size="sm"
                  isInvalid={errors.phd_institute}
                  value={item.institute}
                  placeholder="University/Institute Name"
                  type="text"
                  {...register("phd_institute", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* College Name  */}
              <Form.Group as={Col} md="2" controlId="phd_college">
                <Form.Label>
                  College<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  size="sm"
                  value={item.college}
                  isInvalid={errors.phd_college}
                  placeholder="College Name"
                  type="text"
                  {...register("phd_college", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Completion Year  */}
              <Form.Group as={Col} md="2" controlId="phd_year">
                <Form.Label>
                  Completion Year<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_year}
                  size="sm"
                  value={item.year}
                  placeholder="Completion Year"
                  type="number"
                  {...register("phd_year", {
                    required: true,
                    maxLength: 4,
                    minLength: 4,
                  })}
                />
              </Form.Group>
              {/* Area Details  */}
              <Form.Group as={Col} md="2" controlId="phd_area">
                <Form.Label>
                  Area<span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_area}
                  size="sm"
                  value={item.area}
                  placeholder="Area"
                  type="text"
                  {...register("phd_area", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* If pursuilng teaching experiance during phd  */}
              <Form.Group as={Col} md="2" controlId="phd_teaching_experience">
                <Form.Label>
                  If pursuing, teaching experience during PhD
                  <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Select
                  isInvalid={errors.phd_teaching_experience}
                  size="sm"
                  value={item.teaching_experience}
                  {...register("phd_teaching_experience", {
                    required: "Please select your mode of educatoin",
                  })}
                >
                 
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
              {/* Anticipated Completion Year  */}
              <Form.Group as={Col} md="2" controlId="phd_anti_completion_year">
                <Form.Label>
                  Anticipated Completion Year
                  <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_anti_completion_year}
                  size="sm"
                  value={item.year2}
                  placeholder="Anticipated Completion Year"
                  type="number"
                  {...register("phd_anti_completion_year", {
                    required: true,
                    maxLength: 4,
                    minLength: 4,
                  })}
                />
              </Form.Group>
            </Row>
          );
        })}
        <button type="button" onClick={addPhD} className="add-more-btn">
          Add New
        </button>{" "}
        <button type="button" onClick={removePhD} className="add-more-btn">
          Remove Last
        </button>
        <hr />
        <p>
          <b>M Phil</b>
          {/* <Form.Check
            type="checkbox"
            label="if Yes?"
            onClick={handleMphil}
          ></Form.Check> */}
        </p>
        {mphilVal &&
          props?.data?.aq_mphil?.map((item) => {
            return (
              <Row className="mb-3">
                <Form.Group as={Col} md="2" controlId="aq_mphil_country">
                  {/* Academic Qualification M Phil Country  */}
                  <Form.Label>Country</Form.Label>
                    <Form.Select
                    isInvalid={errors.aq_mphil_country}
                    size='sm'
                    {...register('aq_mphil_country', {
                      required: true,
                    })}
                    defaultValue={props?.data?.aq_mphil_country}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="2" controlId="mphil_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    isInvalid={errors.mphil_mode}
                    value={item.mode}
               
                    {...register("mphil_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option value="">
                     Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="2" controlId="mphil_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_institute}
                    value={item.institute}
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("mphil_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="2" controlId="mphil_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_college}
                    value={item.college}
              
                    placeholder="College Name"
                    type="text"
                    {...register("mphil_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="2" controlId="mphil_year">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_year}
                    value={item.year}
                    placeholder="Graduation Year"
                    type="number"
                    {...register("mphil_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="2" controlId="mphil_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_area}
                    value={item.area}
                    placeholder="Area"
                    type="text"
                    {...register("mphil_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* M Phil Division Details  */}
                <Form.Group as={Col} md="2" controlId="mphil_division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    isInvalid={errors.mphil_division}
               
                    value={item.division}
                    {...register("mphil_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="">
                    Choose..
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                </Form.Group>
                {/* M Phil Aggregate Percentage  */}
                <Form.Group as={Col} md="2" controlId="mphil_percentage">
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_percentage}
                    value={item.percentage}
                    placeholder="Aggregate Percentage"
                    type="number"
                    step=".01"
                    {...register("mphil_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            );
          })}
        {mphilVal && (
          <>
            <button type="button" onClick={addMPhill} className="add-more-btn">
              Add New
            </button>{" "}
            <button
              type="button"
              onClick={removeMPHill}
              className="add-more-btn"
            >
              Remove Last
            </button>
          </>
        )}
        <hr />
        <p>
          <b>Post Doctoral</b>
          {/* <Form.Check
            type="checkbox"
            label="if Yes?"
            onClick={handlePdoc}
          ></Form.Check> */}
        </p>
        {pdocVal &&
          props?.data?.aq_post_doctoral?.map((item) => {
            return (
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="aq_post_doctoral_country"
                >
                  {/* Academic Qualification Post Doctoral Country  */}
                  <Form.Label>Country</Form.Label>
                   <Form.Select
                    isInvalid={errors.aq_post_doctoral_country}
                    size='sm'
                    {...register('aq_post_doctoral_country', {
                      required: true,
                    })}
                    defaultValue={props?.data?.aq_post_doctoral_country}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                   value={item.mode}
                    isInvalid={errors.post_doctoral_mode}
                    {...register("post_doctoral_mode", {
                      required: "Please select your mode of education",
                    })}
                  >
                    <option value="">
                      Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                  {/* <Form.Select
                    isInvalid={errors.mphil_mode}
                    disabled={mphilVal}
                    {...register('mphil_mode', {
                      required: 'Please select your mode of educatoin',
                    })}
                  >
                    <option value='' />
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select> */}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                
                    isInvalid={errors.post_doctoral_institute}
                    placeholder="University/Institute Name"
                    value={item.institute}
                    type="text"
                    {...register("post_doctoral_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                  
                    isInvalid={errors.post_doctoral_college}
                    placeholder="College Name"
                    value={props?.data?.post_doctoral_college}
                    type="text"
                    {...register("post_doctoral_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
              
                    placeholder="Graduation Year"
                    type="number"
                    value={item.year}
                    isInvalid={errors.post_doctoral_year}
                    {...register("post_doctoral_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
          
                    placeholder="Area"
                    value={item.area}
                    type="text"
                    isInvalid={errors.post_doctoral_area}
                    {...register("post_doctoral_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_course">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
               
                    isInvalid={errors.post_doctoral_course}
                    value={item.course}
                    placeholder="Course Name"
                    type="text"
                    {...register("post_doctoral_course", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md="2" controlId="post_doctoral_division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                 
                   value= {item.division}
                    isInvalid={errors.post_doctoral_division}
                    {...register("post_doctoral_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="">
                    Choose...
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md="2"
                  controlId="post_doctoral_percentage"
                >
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
          
                    placeholder="Aggregate Percentage"
                    value={item.percentage}
                    type="number"
                    step=".01"
                    isInvalid={errors.post_doctoral_percentage}
                    {...register("post_doctoral_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            );
          })}
        {pdocVal && (
          <>
            <button
              type="button"
              onClick={addPDoctoral}
              className="add-more-btn"
            >
              Add New
            </button>{" "}
            <button
              type="button"
              onClick={removePostDoc}
              className="add-more-btn"
            >
              Remove Last
            </button>
          </>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartThreeDetails;
