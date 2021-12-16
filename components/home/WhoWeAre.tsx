import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import TeamMember, { TeamMemberProps } from "./TeamMember";

interface TeamMember extends Omit<TeamMemberProps, "description"> {
  emojis: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Brian Leonard",
    image: "brian_leonard.png",
    title: "CEO",
    github: "https://github.com/bleonard",
    twitter: "https://twitter.com/bleonard",
    linkedIn: "https://www.linkedin.com/in/brianl429",
    emojis: ["👨‍👩‍👧‍👦", "🛠", "📚"],
  },
  {
    name: "Evan Tahler",
    image: "evan_tahler.png",
    title: "CTO",
    emojis: ["🤖", "🎮", "👫"],
    github: "https://github.com/evantahler",
    twitter: "https://twitter.com/evantahler",
    linkedIn: "https://www.linkedin.com/in/evantahler",
  },
  {
    name: "Andy Jih",
    image: "andy_jih.png",
    title: "COO",
    emojis: ["🏳️‍🌈", "🏃🏻‍♂️", "🎻"],
    github: "https://github.com/andyjih",
    twitter: "https://twitter.com/andyjih",
    linkedIn: "https://www.linkedin.com/in/andyjih/",
  },
  {
    name: "Pedro S Lopez",
    image: "pedro_lopez.png",
    title: "Full Stack Software Engineer",
    github: "https://github.com/pedroslopez",
    twitter: "https://twitter.com/pedroslopez",
    linkedIn: "https://www.linkedin.com/in/pedroslopez/",
    emojis: ["🤖", "🎹", "👨🏽‍💻", "🎮"],
  },
  {
    name: "Teal Larson",
    image: "teal_larson.jpg",
    title: "Full Stack Software Engineer",
    github: "https://github.com/tealjulia",
    twitter: "https://twitter.com/tealdoestech",
    linkedIn: "https://www.linkedin.com/in/teal-larson",
    emojis: ["🚴🏼", "📚", "🏔", "☕️"],
  },
  {
    name: "Krishna Glick",
    image: "krishna_glick.jpg",
    title: "Senior Software Engineer",
    github: "https://github.com/krishnaglick",
    linkedIn: "https://www.linkedin.com/in/krishnaglick",
    emojis: ["🥦", "🧗🏻", "🐶", "🐱"],
  },
  {
    name: "Edmundo Ruiz Ghanem",
    image: "edmundo_ruiz_ghanem.png",
    title: "Senior Software Engineer",
    github: "https://github.com/edmundito",
    linkedIn: "https://www.linkedin.com/in/edmundito",
    emojis: ["🌎", "👨‍👩‍👦", "🎥", "🎛"],
  },
];

export default function WhoWeAre() {
  return (
    <>
      <div id="whoWeAre">
        <Row>
          <Col>
            <h2>Who We Are</h2>
            <p>
              We’re a team of engineers and product people who have encountered
              this problem many times over and want to fix it.
            </p>
          </Col>
        </Row>
      </div>

      <div
        id="team-images"
        className="homePageSection"
        style={{ textAlign: "center" }}
      >
        <Row className="justify-content-center">
          {teamMembers.map(({ emojis, previously, ...teamMemberProps }) => (
            <Col
              md={4}
              className="d-flex justify-content-center"
              key={teamMemberProps.name}
            >
              <TeamMember
                {...teamMemberProps}
                description={
                  <span>
                    {emojis && emojis.length > 0 && (
                      <>
                        {emojis.join(" ")}
                        <br />
                      </>
                    )}
                    {previously?.length && (
                      <>
                        {" "}
                        Previously:
                        <br />
                        {previously.map(({ role, company, website }) => (
                          <Fragment key={company}>
                            {role}{" "}
                            <a
                              href={website}
                              target="_blank"
                              rel="noreferrer nofollow"
                            >
                              @{company}
                            </a>
                            <br />
                          </Fragment>
                        ))}
                      </>
                    )}
                  </span>
                }
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
