import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import WhoWeAre from "../components/home/WhoWeAre";
import JobBoard from "../components/jobs/JobBoard";
import WorkingAtGrouparooCard from "../components/jobs/WorkingAtGrouparoo";
import { getJobs } from "../utils/jobPosts";
import SEO from "../components/SEO";

export default function About({ pageProps }) {
  return (
    <>
      <SEO
        canonical={true}
        description="Join Grouparoo Open Positions Engineering Marketing Automation Support"
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/about"
        title="About Grouparoo"
      />

      <Container>
        <Row>
          <Col>
            <h1 data-testid="header">About Grouparoo</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={5} md={4}>
            <Image
              thumbnail
              src="/images/team/team.jpeg"
              alt="Team photo"
              width={530}
              height={398}
            />
            <p>
              <small>
                <em>The Grouparoo Team Meeting in San Francisco</em>
              </small>
            </p>
          </Col>
          <Col md={6}>
            <p>
              Grouparoo is a software company building open source data tools
              that make data reliable, accessible, and actionable. We believe
              that people at companies do their best work when they are able to
              focus on their areas of expertise, but they struggle because of
              dependencies on other teams.
            </p>
            <p>
              Our aim is to solve this problem by making it as simple as
              deploying your website to change how your data is synced. Funded
              by top-tier inventors, Grouparoo is creating open-core
              applications to simplify and automate the data syncing process
              within companies - solving both technical and organizational
              challenges.
            </p>
            <p>
              We’re a fully remote team too, so no matter where you are, we’d
              love to chat with you.
            </p>
          </Col>
        </Row>
        <br />
        <WhoWeAre />
        <Row>
          <Col>
            <h2>Grouparoo's Mission & Vision</h2>
            <p>
              <strong>Vision</strong>: Teams are empowered to make great
              customer experiences.
              <br />
              <strong>Mission</strong>: Build open source data tools that make
              data reliable, accessible, and actionable.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h2>What We Value</h2>
            <ul>
              <li>
                <strong>Candor + Empathy</strong>: Let's be straightforward with
                each other, be empathetic and kind in our communications, and
                seek to do great work.
              </li>
              <li>
                <strong>Analytical + Speed</strong>: Take enough time to analyze
                what is or isn't working, but strive for making a decision and
                taking action.{" "}
              </li>
              <li>
                <strong>Trust + Feedback</strong>: Trust one another, assume
                best intentions, and provide feedback to help us all improve.
              </li>
              <li>
                <strong>Customers + Value</strong>: Always think of the
                customers first and how we can create value for them and
                Grouparoo.
              </li>
              <li>
                <strong>Experiment + Automate</strong>: We have a bias towards
                experimentation and learning. When a test is successful, we
                create leverage by automating that process.
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <h2 id="investors">Our Investors</h2>
        <p>
          We're excited and humbled to be working with an amazing team of
          investors who believe in our mission.
        </p>
        <div style={{ margin: "30px" }}>
          <Row>
            <Col>
              <Link href="https://fuelcapital.com">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/fuel-capital-logo.png"
                    alt="Fuel Capital logo"
                    width={369}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://eniac.vc">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/eniac-logo.svg"
                    alt="Eniac Ventures logo"
                    width={238}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Link href="https://hack-vc.com/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <div className="investor-logo">
                    <Image
                      src="/images/investors/hack-vc-logo.svg"
                      alt="Hack VC logo"
                      width={280}
                      height={75}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://liquid2.vc/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/liquid2-ventures-logo.png"
                    alt="Liquid2 VC logo"
                    width={175}
                    height={75}
                    rounded
                  />
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://www.scmadvisors.co.uk/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/scm-advisors-logo-124.png"
                    alt="SCM Advisors logo"
                    width={217}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
          </Row>
        </div>
        <br />

        <h2 id="benefits">Benefits and Perks</h2>
        <br />

        <Row>
          <Col md={6}>
            <h4>Work from anywhere in the US</h4>
            <p>
              We're a fully remote company, so you can work from anywhere in the
              U.S.
            </p>
            <h4>Healthcare coverage</h4>
            <p>
              We offer medical, vision, and dental insurance plans to all of our
              employees.
            </p>
            <h4>401(k) matching</h4>
            <p>
              We match 100% of retirement contributions on the first 3%
              contributed and then 50% of contributions from 3% to 5%.
            </p>
          </Col>
          <Col md={6}>
            <h4>Equity</h4>
            <p>
              We believe in building for the long-term, so all employees get
              equity in Grouparoo.
            </p>
            <h4>Equipment and Internet stipend</h4>
            <p>
              We want all of our teammates to work effectively, so we provide
              stipends for your internet and a budget for equipment for your
              home office.
            </p>
            <h4>Parental leave</h4>
            <p>
              We offer 4 weeks of paid leave for the care of a new child in your
              life.
            </p>
          </Col>
        </Row>

        <br />
        <h2 id="careers">Open Positions</h2>
        <Row>
          <Col md={8}>
            <JobBoard jobs={pageProps?.jobs || []} />
          </Col>
          <Col>
            <WorkingAtGrouparooCard />
          </Col>
        </Row>

        <br />
        <h2>Working at Grouparoo</h2>

        <Image
          src="/images/team/about-team.png"
          alt="The Grouparoo Team"
          height="720"
          width="3200"
        />

        <Row>
          <Col md={6}>
            <h4>Start to Finish Ownership</h4>
            <p>We place a high degree of trust in our team members.</p>
            <p>
              As a small startup, everyone at Grouparoo is involved in the
              entire life-cycle of a feature - from ideation and prioritization,
              through development, release, monitoring, and bug-fixing. You'll
              have the latitude to choose the best tools and frameworks for the
              job and not be locked into legacy tools or decisions.
            </p>
            <p>
              We are a team of generalists switching from topic to topic and are
              looking for engineers who are excited to explore the whole stack
              (frontend, backend, devops, etc.) rather than experts who
              specialize in just one part. This way, everyone can own the whole
              feature, not just the UI or API layer. We place a greater value on
              holistic knowledge of the architecture and the ability to learn
              rather than existing expertise in any single part of the stack.
            </p>
          </Col>

          <Col md={6}>
            <h4>Safe Environment to Fail</h4>
            <p>
              We have the freedom to move quickly, make mistakes, and learn from
              them.
            </p>
            <p>
              There is a lot of stuff to build. It's exciting, but some mistakes
              are inevitable. We strive to create a safe space that's open to
              failure. We learn from our mistakes openly and support each other
              in the process. To foster a safe learning environment, we try to
              document everything so we and future team members can build off of
              what we've learned (see Open Communication).
            </p>
            <p>
              For developers, we prioritize building tools along the way to help
              reduce that risk, like CI/CD, linters, and release automation to
              help us ensure that a small number of people can be responsible
              for a large codebase. We do weekly releases to quickly fix bugs
              that crop up, and invest time to improve the upgrade process for
              our customers. We pair regularly to share new work and to
              collaboratively solve tough problems.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>Open Source Contributions</h4>
            <p>
              Grouparoo is building open source tools, so almost everything we
              do is{" "}
              <a
                href="https://github.com/grouparoo/grouparoo"
                target="_blank"
                rel="noreferrer"
              >
                in the open
              </a>
              .
            </p>
            <p>
              We know that open-source is the best channel for developers to
              adopt new tools, and we want to be as transparent with our
              customers as we can. To that end, we embrace open source tools and
              workflows like Git, GitHub, and Pull Requests in our everyday
              work. Your work will be directly attributable back to you and
              users can directly converse with you as a result. For example,
              when{" "}
              <a
                href="https://www.linkedin.com/in/evantahler/"
                target="_blank"
                rel="noreferrer"
              >
                Evan
              </a>{" "}
              rolled out the Postgres plugin, he had a great discussion with a
              customer on the pull request about some of the nuances around
              Postgres SSL and authentication. We were able to build a more
              robust product that met the customer's needs.
            </p>
            <p>
              We encourage our users to contribute and communicate with us using
              these same tools. Our customer support process is via GitHub
              Issues, our{" "}
              <a
                href="https://github.com/orgs/grouparoo/projects/26"
                target="_blank"
                rel="noreferrer"
              >
                roadmap
              </a>{" "}
              is public, and we even modify our employee handbook with pull
              requests. Grouparoo is “all-in” on open source.
            </p>
          </Col>
          <Col md={6}>
            <h4>Community Engagement</h4>
            <p>
              You'll interact directly with users and decide what we build to
              best serve{" "}
              <Link href="/docs/community">
                <a>our community</a>
              </Link>
              .
            </p>
            <p>
              Building a successful open source project is more than just
              writing code - it's also about building an engaged and satisfied
              community. As an early team member at Grouparoo, not only will you
              be writing code, but you'll also share your work with the
              community and determine what to build next. Everyone at Grouparoo
              interacts with our users and helps build our community. takes many
              forms. Whether it's via blogging, conference talks, solving
              customer issues, or supporting their deployments, you'll have a
              hand in crafting our community tools and platforms as we grow.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h4>Engineering Driven</h4>
            <p>Grouparoo is building data tools made by and for engineers.</p>
            <p>
              We spend a lot of time thinking about things like the UX of CLI
              interfaces, how to install and distribute software, and how
              painful upgrading to the next version might be. Building our
              roadmap is a collaborative exercise between all members of the
              company and our users – who are mostly other engineers.
            </p>
            <p>
              Our customers help us drive our roadmap at all levels - from
              issues to feature requests. For example, they let us know which
              connections they need and give us feedback about our deployment
              strategies.
            </p>
          </Col>

          <Col md={6}>
            <h4>Open Communication</h4>
            <p>
              Almost everything we do is shared with read and comment access.
            </p>
            <p>
              We believe the best way to run a remote company is to work
              asynchronously in the open. We carry the 'work in the open'
              mindset from our codebase to every part of the company. Almost
              everything we do, from documents to digital whiteboards, is shared
              with the rest of the company. To better enable asynchronous work,
              we share our plans and documents early, ask for feedback often,
              and we write a lot. The practice of documented sharing helps
              create safety and trust in a distributed team, along with a
              culture of enablement.
            </p>
            <p>
              We use tools like Slack, Google Meet, and Tuple to communicate
              synchronously when needed, and otherwise rely on cloud-native
              tools like Google Docs and GitHub.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h4>Flexible Work Arrangements</h4>
            <p>We have core hours, but the rest of the day is up to you!</p>
            <p>
              We try to strike a balance between coordination and flexibility.
              As a distributed team, we want to create a comfortable environment
              for our team members in different time zones and with varying
              obligations outside of work. Our core hours are from 9am to noon
              Pacific Time, which allows us time to meet synchronously and pair
              as needed, but how you schedule the rest of the day is up to you -
              we have families, friends, and hobbies, too!{" "}
              <a
                href="https://www.linkedin.com/in/andyjih/"
                target="_blank"
                rel="noreferrer"
              >
                Andy
              </a>{" "}
              likes to go for 6am runs and{" "}
              <a
                href="https://www.linkedin.com/in/brianl429/"
                target="_blank"
                rel="noreferrer"
              >
                Brian
              </a>{" "}
              helps his kids attend school remotely. We also want to help you
              build a space you can be productive in, so we chip in with a
              monthly internet stipend and a $1,000 home-office budget to get
              you set up.
            </p>
          </Col>

          <Col md={6}>
            <h4>Bonded by our Love of Product</h4>
            <p>
              Grouparoo was founded by people who have all experienced the pain
              of not getting data syncing right.
            </p>
            <p>
              At previous companies, we've been unable to meet objectives and
              created bottlenecks for our marketing and ops teams. We have
              experienced both the organizational and technical hurdles of not
              getting data syncing right. As technical founders, we want to make
              sure that no engineer ever has to worry about vendor rate limits,
              obtuse APIs, or accidentally sharing PII with the wrong vendor. We
              hope everyone who joins Grouparoo can share our goal of turning
              the slow and tedious task of data management into something that
              'just works'.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

About.getInitialProps = async (ctx) => {
  const jobs = await getJobs();
  return { jobs };
};
