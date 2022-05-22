import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import * as emailjs from "@emailjs/browser";
import "./index.sass";
import InfoCard from "../../components/InfoCard";
import MapGoogle from "../../components/MapGoogle";
import emailIcon from "../../img/email-icon.png";
import phoneIcon from "../../img/phone-icon.png";
import mapIcon from "../../img/map-icon.png";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById("contact_submit");
    btn.value = "Sending...";

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
        btn.value = "Send";
        navigate(form.getAttribute("action"));
      })
      .catch((error) => {
        btn.value = "Send";
        alert(error);
      });
  };

  contactComponent = () => {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="main_container">
                <div className="left_container">
                  <h1>
                    <span id="green-text">Reach</span> out to us
                  </h1>
                  <div className="intro">Got a project in mind?</div>
                  <div className="intro" id="second-div">
                    Start your business with an expert software egineering team
                  </div>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type={"text"}
                          name={"from_name"}
                          onChange={this.handleChange}
                          id={"from_name"}
                          required={true}
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="emailPhone_container">
                        <div className="field" style={{ flex: 2 }}>
                          <div className="control">
                            <input
                              className="input"
                              type={"email"}
                              name={"reply_to"}
                              onChange={this.handleChange}
                              id={"reply_to"}
                              required={true}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="field" style={{ flex: 2 }}>
                          <div className="control">
                            <input
                              className="input"
                              type={"phone"}
                              name={"phone_number"}
                              onChange={this.handleChange}
                              id={"phone_number"}
                              required={true}
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={"message"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
                          placeholder="Write Us"
                        />
                      </div>
                    </div>
                    <div className="field" id="button-send">
                      <input
                        id="contact_submit"
                        value="Send"
                        className="is-link"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
                <div className="container_cards">
                  <InfoCard
                    icon={emailIcon}
                    title="Email Us"
                    detail="info@msapps.mobi"
                  />
                  <InfoCard
                    icon={phoneIcon}
                    title="Call Us"
                    detail="+972 54 425 5549"
                  />
                  <InfoCard
                    icon={mapIcon}
                    title="Visit Us"
                    detail="Galgalei ha-Plada St. 6, Herzliya"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <MapGoogle height="500px" />
      </>
    );
  };

  render() {
    return !this.props.noLayout ? (
      <Layout>
        <this.contactComponent />
      </Layout>
    ) : (
      <div>
        <this.contactComponent />
      </div>
    );
  }
}
