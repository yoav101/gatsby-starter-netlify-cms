import * as React from "react";
import "./FeedBack.sass";
import Carousel from "react-material-ui-carousel";
import Avatar from "@mui/material/Avatar";

export default function FeedBack() {
  let items = [
    {
      picturePath: "Guy_Eldar_feedback.png",
      name: "Guy Eldar",
      company: "App my Day sold to HoneyBook",
      companyLink: "https://www.honeybook.com/",
      description:
        `We started working with MS Apps when an iOS project we had took priority over other projects and had to be delivered in a very short timetable.
            As a very young startup, we didn't have the required resources in-house so we looked for a quick help with coding from a 3rd party company.
            Right from the start, Michal and her team were very responsive and even more important - flexible, to fit our needs and schedule.
            We were joined by an engineer who was professional and thorough enough to go through the required learning curve without us noticing it at all.
            Furthermore, with the great uncertainty every startup has, I had to make some changes both in terms of budget and the required availability of the engineer along the way - and Michal was super cooperative to accommodate my requests time and time again.
            Eventually, thanks to the professional help from Michal and her team, we shipped the project on time and with the highest quality.`,
    },
    {
      picturePath: "Avsha_Shilin_feedback.png",
      name: "Avsha Shilin",
      company: "Moblin",
      companyLink: "http://www.moblin.com",
      description:
        `MSApps assisted Moblin in developing our core apps in times of pressure and lack of suitable stuff.
        They were fast, smart and to the point. Now that we have a relationship with them we know that we always have someone to depend on with our products.`,
    },
  ];
  return (
    <>
    <div style={{position: "relative"}}>
      <Carousel autoPlay={false} duration={1000} animation="fade" swipe>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      </div>
    </>
  );
}

function Item(props) {
  return (
    <div className="carouselContent">
      <Avatar
        alt={props.item.name}
        src={`../img/feedback/${props.item.picturePath}`}
        sx={{ width: 100, height: 100, border: "3px solid #D1DE35" }}
      />
      <h2 style={{ fontWeight: 700, color: "#3F3C55" }}>{props.item.name}</h2>
      <h3>
        <a href={props.item.companyLink} target="_blank" rel="noreferrer">
          {props.item.company}
        </a>
      </h3>
      <p style={{ color: "#3F3C55" }}>{props.item.description}</p>
    </div>
  );
}
