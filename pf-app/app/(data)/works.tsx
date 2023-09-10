interface Work {
  title: string;
  img: string;
  caption: string;
  repo: string;
}

const works: Work[] = [
  {
    img: "url(/assets/linkedinCover.png)",
    title: "Linkedin Clone",
    caption:
      "LinkedIn clone replicates the social networking features of the famous platform. It includes a login, paired with a pre-registered token, and allows access to one's profile page, the feed page, other profiles, posting and settings services.",
    repo: "https://github.com/mindthediv/Portfolio/tree/main/LinkedinClone",
  },
  {
    img: "url(/assets/spotifyCover.png)",
    title: "Spotify Clone",
    caption:
      "A simple replica that provides Home, Artist, and Album pages of the well-known music streaming service.",
    repo: "https://github.com/mindthediv/Portfolio/tree/main/SpotifyClone",
  },
  {
    img: "url(/assets/epicodeCover.png)",
    title: "Epicode Benchmark Clone",
    caption:
      "Epicode Benchmark Clone is a web application that replicates the weekly theoretical competence verification exam process for the Epicode course. It also includes the option to select the difficulty level, along with the timed questionnaire, results page, and feedback section",
    repo: "https://github.com/mindthediv/Portfolio/tree/main/Epicode%20Benchmark%20-%20Clone",
  },
  {
    img: "url(/assets/weacrCover.png)",
    title: "WeAre CR",
    caption:
      "WeAre Cr is a full-stack web application. Currently, it offers registration and login, profile page, feed, posting services and settings, users search and viewing their profiles. Designed as a tourism platform, it aims to evolve and implement distinct profiles for business and tour operators, as well as provide interactive location-based exploration of the visited area.",
    repo: "https://github.com/mindthediv/Epicode_FSCapstoneProject",
  },
  {
    img: "url(/assets/epickCover.png)",
    title: "Epick",
    caption:
      "Epick is a piece of e-commerce. Constructed during the learning of the basics of the big three: HTML, CSS, JS, it prefigures the logic of the frameworks studied later, by implementing login, roles, serial generation, and CRUD.",
    repo: "https://github.com/mindthediv/Portfolio/tree/main/Epick",
  },
];
export default works;
