import { Row, Col } from "react-bootstrap";
import TeamMember from "./teamMember";

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
          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Brian Leonard"
              image="brian_leonard.png"
              title="CEO"
              description={
                <span>
                  👨‍👩‍👧‍👦 🛠
                  <br />
                  Previously:
                  <br />
                  CTO, Technical Co-Founder{" "}
                  <a
                    href="https://www.taskrabbit.com"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @TaskRabbit
                  </a>
                </span>
              }
              github="https://github.com/bleonard"
              twitter="https://twitter.com/bleonard"
              linkedIn="https://www.linkedin.com/in/brianl429"
            />
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Evan Tahler"
              image="evan_tahler.png"
              title="CTO"
              description={
                <span>
                  🤖 🎮 👩🏻‍🤝‍👨🏼
                  <br />
                  Previously:
                  <br />
                  Founder{" "}
                  <a
                    href="https://actionherojs.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ActionheroJS
                  </a>{" "}
                  <br />
                  CPO{" "}
                  <a
                    href="https://www.airbus.com/innovation/urban-air-mobility/voom.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @Voom
                  </a>
                </span>
              }
              github="https://github.com/evantahler"
              twitter="https://twitter.com/evantahler"
              linkedIn="https://www.linkedin.com/in/evantahler"
            />
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Andy Jih"
              image="andy_jih.png"
              title="COO"
              description={
                <span>
                  🏳️‍🌈 🏃🏻‍♂️ 👨🏻‍🤝‍👨🏼
                  <br /> Previously:
                  <br />
                  Product{" "}
                  <a
                    href="https://www.stripe.com"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @Stripe
                  </a>{" "}
                  <br />
                  Head of Product{" "}
                  <a
                    href="https://www.crunchbase.com/organization/remedy-labs-inc"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @Remedy
                  </a>
                </span>
              }
              github="https://github.com/andyjih"
              twitter="https://twitter.com/andyjih"
              linkedIn="https://www.linkedin.com/in/andyjih/"
            />
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Sean C Davis"
              image="sean_c_davis.jpg"
              title="Senior Software Engineer"
              description={
                <span>
                  👨‍👩‍👧 🦮 🎸 ✍️
                  <br /> Previously:
                  <br />
                  Director of Technology{" "}
                  <a
                    href="https://www.ample.co/"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @Ample
                  </a>
                </span>
              }
              github="https://github.com/seancdavis"
              twitter="https://twitter.com/seancdavis29"
              linkedIn="https://www.linkedin.com/in/seancdavis29/"
            />
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Pedro S Lopez"
              image="pedro_lopez.png"
              title="Full Stack Software Engineer"
              description={
                <span>
                  🤖 🎹 👨🏽‍💻 🎮
                  <br /> Previously:
                  <br />
                  Engineering and Technical Vetting{" "}
                  <a
                    href="https://www.g2i.co/"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    @G2i
                  </a>
                </span>
              }
              github="https://github.com/pedroslopez"
              twitter="https://twitter.com/pedroslopez"
              linkedIn="https://www.linkedin.com/in/pedroslopez/"
            />
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <TeamMember
              name="Teal Larson"
              image="teal_larson.jpg"
              title="Full Stack Software Engineer"
              description={
                <span>
                  🚴🏼 📚 🏔 ☕️
                  <br /> Previously:
                  <br />
                  ///{" "}
                  <a href="https:///" target="_blank" rel="noreferrer nofollow">
                    ///
                  </a>
                </span>
              }
              github="https://github.com/tealjulia"
              twitter="https://twitter.com/tealdoestech"
              linkedIn="www.linkedin.com/in/teal-larson"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
