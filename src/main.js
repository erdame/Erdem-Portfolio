import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const collages = [
  "./website/collage 1.jpg",
  "./website/collage 2.jpg",
  "./website/gallery source.jpg",
  "./website/gallery source 2.jpg",

];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const A2 = [
  "./A2/Comparison 1.jpg",
  "./A2/chart 2.jpg",
  "./A2/chart 3.jpg",
  "./A2/Model.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>

      <br>
      
      
      "Whispers of Love, Echoes of the Past"
    </section>

    <section id="projects">
      <div id="project-row">
     
        <div class="three-model">
          <img src="./Exquisite corpse  final.jpg" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
  <a href="./website/collage 1.jpg" target="_blank">
    <img src="./website/collage 1.jpg" alt="collage 1" />
  </a>
  <a href="./website/collage 2.jpg" target="_blank">
    <img src="./website/collage 2.jpg" alt="collage 2" />
  </a>
  <a href="./website/gallery source.jpg" target="_blank">
    <img src="./website/gallery source.jpg" alt="gallery source" />
  </a>
  <a href="./website/gallery source 2.jpg" target="_blank">
    <img src="./website/gallery source 2.jpg" alt="gallery source 2" />
  </a>
</div>
          <h4 id="description">This collage explores the profound connection between identity and ancestry. Growing up in the mountains of Mongolia, surrounded by traditions, nature, and the heritage of my ancestors, has deeply shaped who I am today. Each layer of the collage represents a step in my personal evolution, seamlessly blending past and present. The process of creating this piece taught me to critically examine how my cultural roots influence my aspirations. The accompanying quote, "Let the whispers of your ancestors guide you towards wisdom," encapsulates the message of honoring one's origins while embracing growth. This experience highlighted the power of storytelling through visual language and deepened my understanding of blending traditional and digital art to convey complex ideas.</h4>
        </div>
      </div>
<img src="./ezgif.com-optimize.gif" id="model1" alt="Model 1 Image" />

      ${/* Model 2 commented out   
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */ ""} 

       Assignment 2
      <div id="project-row">
      
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
  <a href="./A2/Comparison 1.jpg" target="_blank">
    <img src="./A2/Comparison 1.jpg" alt="Comparison 1" />
  </a>
  <a href="./A2/chart 2.jpg" target="_blank">
    <img src="./A2/chart 2.jpg" alt="chart 2" />
  </a>
  <a href="./A2/chart 3.jpg" target="_blank">
    <img src="./A2/chart 3.jpg" alt="chart 3" />
  </a>
  <a href="./A2/Model.jpg" target="_blank">
    <img src="./A2/Model.jpg" alt="model" />
  </a>
</div>
          <h4 id="description">This assignment made me appreciate the technical aspect of 3D modeling more than before. Making something appear attractive is only one aspect of it; another is ensuring that it functions well with various programs and applications. Even though I still have a lot to learn, I think I'm beginning to grasp the connections between 3D workflows, which will be useful for projects in the future. git add .</h4>
        </div>
      </div>
    </section>
    */ ""} 

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//  createThreeScene("#model1", "/3D file/ model 3 export 2.obj");
//  createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/Erdem model.obj");
