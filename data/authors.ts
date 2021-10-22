export interface Author {
  name: string;
  slug: string;
  image: string;
  url: string;
  twitter?: string;
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
    name: "Guest Contributor",
    slug: "guest",
    image: "",
    url: "",
    twitter: "",
    description: "",
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
      "Sean is a tinkerer and a teacher who enjoys long walks in the woods, spending time with his family, baking bread, playing music, and eating sandwiches.",
  },
  {
    name: "Pedro S Lopez",
    slug: "pedroslopez",
    image: "pedro_s_lopez.png",
    url: "https://pedroslopez.me/",
    twitter: "@pedroslopez",
    description:
      "Pedro is a full-stack Software Engineer working on Grouparoo, an open source data framework that easily connects your data to business tools. He's a tinkerer that enjoys reverse engineering, automation and technology in general. When he's not programming, Pedro spends his time playing and listening to music.",
  },
  {
    name: "Paulo Ouriques",
    slug: "pauloouriques",
    image: "paulo_ouriques.jpg",
    url: "https://pauloouriques.com/",
    twitter: "@PauloOuriques",
    description:
      "Paulo is a passionate Software Engineer who loves to solve problems, especially those that have a positive impact on people's lives. Paulo is also an enthusiast of astronomy, physics and a great defender of scientific divulgation. Cooking and playing percussion are some of his hobbies.",
  },
  {
    name: "Teal Larson",
    slug: "teal_larson",
    image: "teal_larson.jpg",
    url: "https://www.tealjulia.com",
    twitter: "@tealdoestech",
    description:
      "Teal is a Full Stack Engineer at Grouparoo, an open source data framework that easily connects your data to business tools.  Teal loves building products that solve real-world needs.  If she isn't coding, Teal is probably riding her bike or nose-deep in a book",
  },
  {
    name: "Jaden Baptista",
    slug: "jaden_baptista",
    image: "jadenbaptista.jpg",
    url: "https://jaden.baptista.dev",
    twitter: "@jadenguitarman",
    description:
      "Jaden is the dev advocate at TakeShape.io and a caffeine-powered freelance Jamstack and full-stack web developer. When he is not behind a computer screen, he is usually just playing the guitar and simultaneously thinking about programming.",
  },
  {
    name: "Yashovardhan Agrawal",
    slug: "yashovardhan",
    image: "yashovardhan.jpg",
    url: "https://yashovardhan.dev",
    twitter: "@yashovardhan",
    description:
      "Yash is an Open Source Developer Evangelist and a total Javascript nerd. He loves sharing his ideas, through writings, talks or just being around at hackathons and tech events. While not coding, you can always find Yash singing some random Indian bollywood song!",
  },
  {
    name: "Krishna Glick",
    slug: "kc",
    image: "krishna_glick.png",
    url: "https://github.com/krishnaglick",
    description:
      "Krishna (KC) Glick is a Senior Software Engineer at Grouparoo. He started his career as a C# dev, before falling in love with Javascript and later Typescript. KC has four pets which he is happy to talk about at length if asked, and can be found rock climbing several evenings a week.",
  },
];

export default Authors;
