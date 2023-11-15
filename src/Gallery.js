// import Profile from './Profile.js';

// export default function Gallery() {
//   return(
//     <section>
//       <h1>My Profile Library</h1>
//       <Profile />
//       <Profile />
//     </section>
//   )
// };


import { getImageUrl } from './utils.js';

export function Profile( {person, imagesize = 70}) {
  let imageSrc = getImageUrl(person.imageID);
  return(
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className='avatar'
        src = {imageSrc}
        alt = {person.name}
        width = {imagesize}
        height = {imagesize}
      />
      <ul>
        <li>
          <b>Profession:</b><br/>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b><br/>
          {person.awards.join(', ')}  
        </li>
        <li>
          <b>Discovered</b><br/>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person = {{
        name: "Maria Skłodowska-Curie",
        imageID: 'szV5sdG',
        profession: 'physicist and chemist',
        awards: [ 'Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
        discovery: 'polonium (chemical element)'
      }} />
      
      <Profile person = {{
        name: "Katsuko Saruhashi",
        imageID: 'YfeOqp2',
        profession: 'geochemist',
        awards: [ 'Miyake Prize for geochemistry', 'Tanaka Prize'],
        discovery: 'a method for measuring carbon dioxide in seawater'
      }} />
      
    </div>
  );
}
