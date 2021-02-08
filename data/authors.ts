export interface Author {
  name: string;
  slug: string;
  image: string;
  url: string;
  twitter: string;
  description: string;
}

const Authors: Author[] = [
  {
    name: "Evan Tahler",
    slug: "evan_tahler",
    image: "evan_tahler.png",
    url: "https://www.evantahler.com",
    twitter: "@evantahler",
    description:
      "Evan is the CTO and co-founder of Grouparoo, an open source data framework that easily connects your data to business tools. Evan is an open-source innovator, and frequent speaker at software development conferences focusing on Product Management, Node.JS, Rails, and databases.  ",
  },
  {
    name: "Andy Jih",
    slug: "andy_jih",
    image: "andy_jih.png",
    url: "https://www.linkedin.com/in/andyjih",
    twitter: "@andyjih",
    description:
      "Andy is the COO and co-founder of Grouparoo, an open source data framework that easily connects your data to business tools.  Andy loves building products that help people.",
  },
  {
    name: "Brian Leonard",
    slug: "brian_leonard",
    image: "brian_leonard.png",
    url: "https://www.linkedin.com/in/brianl429",
    twitter: "@bleonard",
    description:
      "Brian is the CEO and co-founder of Grouparoo, an open source data framework that easily connects your data to business tools.  Brian is a leader and technologist who enjoys hanging out with his family, traveling, learning new things, and building software that makes people's lives easier.",
  },
  {
    name: "Tiger Oakes",
    slug: "tiger_oakes",
    image: "tiger_oakes.png",
    url: "https://tigeroakes.com",
    twitter: "@not_woods",
    description:
      "Tiger is a guest writer working on Microsoft Edge. He has previously worked on PWA support in Firefox for Android, web projects for Google Chrome and Yelp, and studies at the University of British Columbia. In his spare time, Tiger searches for geocaches with his partner.",
  },
  {
    name: "Sean C Davis",
    slug: "seancdavis",
    image: "sean_c_davis.jpg",
    url: "https://www.seancdavis.com/",
    twitter: "@seancdavis29",
    description:
      "Sean is a full-stack developer working on Grouparoo, an open source data framework that easily connects your data to business tools. Sean is a tinkerer and a teacher who enjoys long walks in the woods, spending time with his family, baking bread, playing music, and eating sandwiches.",
  },
];

export default Authors;
