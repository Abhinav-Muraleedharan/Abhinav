//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Engineer",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Flipkart",
    time: "(May, 2020 - present)",
    desp: "<li>Developed Algorithms for computational design of aircraft components.</li> <li>New Product Introduction in Aerospace.</li>",
  },
  {
    title: "founder",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "bendreality.ai",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Spearheaded exoskeleton development.</li><li>Pitched and won seed funding.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Worked on lateral stability of airships.</li><li>Developed Lyapunov based control algorithms.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


