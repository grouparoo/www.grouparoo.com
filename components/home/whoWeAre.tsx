import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import TeamMember, { TeamMemberProps } from "./teamMember";

interface TeamMember extends Omit<TeamMemberProps, "description"> {
  emojis: string[];
  previously: {
    role: string;
    company: string;
    website: string;
  }[];
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
    previously: [
      {
        role: "CTO, Technical Co-Founder",
        company: "TaskRabbit",
        website: "https://www.taskrabbit.com",
      },
    ],
  },
  {
    name: "Evan Tahler",
    image: "evan_tahler.png",
    title: "CTO",
    emojis: ["🤖", "🎮", "👫"],
    github: "https://github.com/evantahler",
    twitter: "https://twitter.com/evantahler",
    linkedIn: "https://www.linkedin.com/in/evantahler",
    previously: [
      {
        role: "Founder",
        company: "ActionheroJS",
        website: "https://actionherojs.com",
      },
      {
        role: "CPO",
        company: "Voom",
        website:
          "https://www.airbus.com/innovation/urban-air-mobility/voom.html",
      },
    ],
  },
  {
    name: "Andy Jih",
    image: "andy_jih.png",
    title: "COO",
    emojis: ["🏳️‍🌈", "🏃🏻‍♂️", "🎻"],
    github: "https://github.com/andyjih",
    twitter: "https://twitter.com/andyjih",
    linkedIn: "https://www.linkedin.com/in/andyjih/",
    previously: [
      {
        role: "Product",
        company: "Stripe",
        website: "https://www.stripe.com",
      },
      {
        role: "Head of Product",
        company: "Remedy",
        website: "https://www.crunchbase.com/organization/remedy-labs-inc",
      },
    ],
  },
  {
    name: "Pedro S Lopez",
    image: "pedro_lopez.png",
    title: "Full Stack Software Engineer",
    github: "https://github.com/pedroslopez",
    twitter: "https://twitter.com/pedroslopez",
    linkedIn: "https://www.linkedin.com/in/pedroslopez/",
    emojis: ["🤖", "🎹", "👨🏽‍💻", "🎮"],
    previously: [
      {
        role: "Engineering and Technical Vetting",
        company: "G2i",
        website: "https://www.g2i.co/",
      },
    ],
  },
  {
    name: "Teal Larson",
    image: "teal_larson.jpg",
    title: "Full Stack Software Engineer",
    github: "https://github.com/tealjulia",
    twitter: "https://twitter.com/tealdoestech",
    linkedIn: "https://www.linkedin.com/in/teal-larson",
    emojis: ["🚴🏼", "📚", "🏔", "☕️"],
    previously: [
      {
        role: "Freelance",
        company: "Full Stack Engineer",
        website: "https://www.tealjulia.com/",
      },
    ],
  },
  {
    name: "Krishna Glick",
    image: "krishna_glick.jpg",
    title: "Senior Software Engineer",
    github: "https://github.com/krishnaglick",
    linkedIn: "https://www.linkedin.com/in/krishnaglick",
    emojis: ["🥦", "🧗🏻", "🐶", "🐱"],
    previously: [
      {
        role: "Senior Software Engineer",
        company: "iHeartMedia",
        website: "https://www.iheart.com",
      },
    ],
  },
  {
    name: "Edmundo Ruiz Ghanem",
    image: "edmundo_ruiz_ghanem.png",
    title: "Senior Software Engineer",
    github: "https://github.com/edmundito",
    linkedIn: "https://www.linkedin.com/in/edmundito",
    emojis: ["🌎", "👨‍👩‍👦", "🎥", "🎛"],
    previously: [
      {
        role: "Engineering",
        company: "Drift",
        website: "https://www.drift.com",
      },
    ],
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
