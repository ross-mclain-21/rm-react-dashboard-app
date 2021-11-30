![image](https://user-images.githubusercontent.com/92451171/144085427-9e55eace-0648-48ff-95a5-4bb00280a590.png)

https://mclaindevelopment.com/

<div>
<h1>My React Portfolio</h1>
<p>This app has been built to both display a list of personal projects while also acting as an example of my development capabilities. This project is the first <b>personal</b> project I have fully built by myself using ReactJS, SCSS and TypeScript but it will not be the last! This project was not created using create-react-app, I instead went through tutorials on how to construct the pieces of a react app separately to help demystify how react actually works.</p>

<p>The application consists of my resume and an interactive portfolio in which you can filter projects using a list of relevant technologies. I generated two json files to contain these lists of both the technology filters and my personal projects meta data. I then implemented axios as a way of getting those json files into my functional components as lists using react hooks. When the contextualized selectedTechnologies list is changed, the list is sorted and I am using Framer motion to easily enable animations.</p>

<p>Coming from a background of using jQuery as my primary form of JS development, I have found an absolute love for React. More and more I am seeing the difference between the imperative style of development which jQuery in my case represents and the declarative style of development which React provides. The difference as I understand it is that in imperative development you have to explain to the program each specific action you require it to take, whereas in declarative programming you assume it knows how to do the action you need it to do so you merely tell it to do the action. Just focusing on the portfolio side of my application. If I were to build in jQuery the filtering that I currently have on the page in which you can click on a technology and see all related projects, I would have to:</p>

<h5>Imperative Style (jQuery)</h5>
<ul>
  <li>
    Listen to the click event
  </li>
  <li>
    Manage the state of some sort of array of selected technologies so that I can store multiple selected technologies
  </li>
  <li>
    Highlight the technology icon
  </li>
  <li>
    Look for all elements in the dom matching a css selector
  </li>
  <li>
    Check a data attribute containing technologies to determine which items match
  </li>
  <li>
    Get the technology elements that are children of the matching portfolio item
  </li>
  <li>
    Highlight the matching elements on each portfolio item
  </li>
  <li>
    Find elements that don't match and fade them out since they do not match our filtering.
  </li>
  <li>
    Sort the dom by how many technologies are matching
  </li>
 </ul>
 
 <p>But with React I simply had to:</p>
 <h5>Declarative Style (React)</h5>
<ul>
  <li>
    OnClick update the selectedTechnologies array using setSelectedTechnologies provided by UseState().
  </li>
 </ul>
 
 <p>In order to actually make it that simple I of course had to build my components based on the selectedTechnologies array and both store it's state as well as share that state using the PortfolioContext. More specifically I defined a sort function in my Portfolio.tsx that runs before I map out all of my portolio items. This means that any change to selectedTechnologies automatically recomputes the sort and any change and only the change is reflected in the view. I also added checks based on the contextually stored selectedTechnologies in both PortfolioItem.tsx and PortfolioSkill.tsx to highlight themselves if they exist within the selectedTechnologies array.</p>
 
 <p>This shift in mentality and thinking has been extremely enlightening and enjoyable, and I plan to continue improving this application while my study of React best practice continues. Please feel free to reach out @mclain.development@gmail.com with any thoughts or feedback related to this application or my portfolio.</p> 
 
 </div>
 
 
