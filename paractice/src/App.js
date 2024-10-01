import './App.css';
import Profile from './components/profile';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const profiles = [ 
  {
    name: "Rehan ", 
    img: "https://avatars.githubusercontent.com/u/182517802?v=4",
    About: "I am Web Developer",
    profileUrl: "https://github.com/Rehandossa"
  },
  {
    name: "Samit",
    img: "https://avatars.githubusercontent.com/u/182517915?v=4",
    About: "I am Web Developer",
    profileUrl: "https://github.com/samit46/"
  },
  {
    name: "Huzaif", 
    img: "https://baybee.co.in/cdn/shop/files/1_56958294-8270-4b9d-a18a-8d6419e5e314_1400x.jpg?v=1702119480",
    About: "I am student",
    profileUrl: "https://github.com/itachi644"
  },
  {
    name: "muizz", 
    img: "https://5.imimg.com/data5/SELLER/Default/2022/8/EH/MN/SW/158056117/dsc-2172-500x500.jpg",
    About: "I am senior citizen",
    profileUrl: "https://github.com/SKmuizz"
  }
]
  return (
    <div className='container mt-5 mb-5'>
      
     <div className='row'>
     <h1 className='mb-5'>GitHubs Profile</h1>
     {
      profiles.map((profile, key) => {
       return <Profile key={key} profile={profile} />
      })
     }
     </div>
    </div>
  );
}

export default App;
