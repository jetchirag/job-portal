import React from "react";
import Carousel from "./Carousel";

const Contact = () => {
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "1rem",
  };

  const tableDivStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const h2Style = {
    margin: "2% 0",
    fontSize: "3rem",
    fontWeight: "400",
    textAlign: "center",
  };

  const h3Style = {
    margin: "1% 0",
    fontSize: "1.5rem",
    fontWeight: "400",
  };

  return (
    <>
      <Carousel />
      <h2 style={h2Style}>Important Contacts</h2>
      <div className="tableDiv" style={tableDivStyle}>
        <div className="mx-5 my-4">
          <table cellSpacing={0} cellPadding={4} style={tableStyle}>
            <tbody>
              <tr>
                <td style={tableStyle}>
                  <span>
                    <b>OFFICE</b>
                  </span>
                </td>
                <td style={tableStyle}>
                  <span>
                    <b>PHONE</b>
                  </span>
                </td>
                <td style={tableStyle}>
                  <span>
                    <b>EXTENSION</b>
                  </span>
                </td>
                <td style={tableStyle}>
                  <span>
                    <b>EMAIL ID</b>
                  </span>
                </td>
              </tr>
              <tr>
                <td style={tableStyle} height={21}>
                  ACADEMICS
                </td>
                <td style={tableStyle} rowSpan={13}>
                  <br />
                  0141 - 3999100
                </td>
                <td style={tableStyle}>263</td>
                <td style={tableStyle}>
                  <p>academic@jaipur.manipal.edu</p>
                  <p>ams@jaipur.manipal.edu</p>
                </td>
              </tr>
              <tr>
                <td style={tableStyle}>ADMISSIONS</td>
                <td style={tableStyle}>142, 257, 297&nbsp;</td>
                <td style={tableStyle}>admissions@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>CONTROLLER OF EXAMINATIONS</td>
                <td style={tableStyle}>204</td>
                <td style={tableStyle}>coe@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>CHIEF WARDEN OFFICE</td>
                <td style={tableStyle}>108, 493&nbsp;</td>
                <td style={tableStyle}>
                  office.chiefwarden@jaipur.manipal.edu
                </td>
              </tr>
              <tr>
                <td style={tableStyle}>
                  CHIEF OFFICER (GENERAL SERVICES &amp; ADMINISTRATION)
                </td>
                <td style={tableStyle}>
                  119, 105
                  <br />
                </td>
                <td style={tableStyle}>admin.office@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>CHIEF FINANCE OFFICER</td>
                <td style={tableStyle}>252, 236, 109</td>
                <td style={tableStyle}>fin.muj@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>HUMAN RESOURCES</td>
                <td style={tableStyle}>666, 253, 728</td>
                <td style={tableStyle}>hr.muj@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>IT INFRA</td>
                <td style={tableStyle}>778, 300</td>
                <td style={tableStyle}>it.support@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>LIBRARY</td>
                <td style={tableStyle}>179</td>
                <td style={tableStyle}>library@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>REGISTRAR OFFICE</td>
                <td style={tableStyle}>
                  134, 225
                  <br />
                </td>
                <td style={tableStyle}>registrar.office@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>STUDENT WELFARE</td>
                <td style={tableStyle}>327, 207</td>
                <td style={tableStyle}>dean.dswmuj@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>TRAINING &amp; PLACEMENT</td>
                <td style={tableStyle}>751</td>
                <td style={tableStyle}>tpo@jaipur.manipal.edu</td>
              </tr>
              <tr>
                <td style={tableStyle}>WEBMASTER</td>
                <td style={tableStyle}>441</td>
                <td style={tableStyle}>webmaster@jaipur.manipal.edu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 style={h2Style}>Contact Us</h2>
      <div className="container">
        <h3 style={h3Style}>Campus Address</h3>
        <div>
          <p>
            Manipal University Jaipur, Dehmi Kalan, Off Jaipur-Ajmer Expressway,
            Jaipur, (Raj.) Rajasthan 303007. Phone: +91 141-3999100
          </p>
        </div>
      </div>
      <h2 style={h2Style}>Reaching Campus</h2>
      <div className="container">
        <h3 style={h3Style}>By Road</h3>
        <div>
          <p>
            Jaipur is well linked by a good network of roadways and road
            transport to all the important cities . There are excellent bus
            services between Jaipur – Delhi by Rajasthan State Road Transport
            Corporation with buses approximately running every half an hour both
            ways. A bus journey typically takes 6 hours by (Volvo) or 6- 7 hrs
            by other deluxe buses. Travel by car from Delhi to Jaipur takes
            about 5 hours. The Jaipur bus stand is situated 25 Kms. away from
            Manipal University Jaipur.
          </p>
        </div>
      </div>
      <div className="container">
        <h3 style={h3Style}>By Train</h3>
        <div>
          <p>
            The Jaipur station is situated within the city area. Indian Railways
            connects Jaipur from all importent cities of the country and is one
            of the most cost -effective means of travel. Overnight trains
            arrives from many major cities including Delhi, Agra, Chennai &
            Mumbai. Jaipur Railway Station is 24 Kms away from the Manipal
            University Jaipur. A prepaid taxi / cab service can be used to reach
            Manipal University.
          </p>
        </div>
      </div>
      <div className="container">
        <h3 style={h3Style}>By Air</h3>
        <div>
          <p>
            Jaipur Airport is situated in the satellite town of Sanganer. It has
            also well connected domestic air links with many Indian cities such
            as Jodhpur , Udaipur, Delhi, Hyderabad, Kolkatta, Goa, Bangalore &
            Mumbai. The distance from Jaipur Airport to Manipal University
            Jaipur is 27 Kms.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
