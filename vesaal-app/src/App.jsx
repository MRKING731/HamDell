import { useState } from "react";
import "./App.css";

const profiles = [
  {
    name: "مهسا",
    age: ۲۴,
    bio: "عاشق کتاب و سفر",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "پوریا",
    age: ۲۷,
    bio: "ورزشکار و اهل ماجراجویی",
    image: "https://i.pravatar.cc/300?img=2",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];

  const next = () => setIndex((index + 1) % profiles.length);

  return (
    <div className="app">
      <h1>وصـال</h1>
      <div className="card">
        <img src={profile.image} alt={profile.name} />
        <h2>{profile.name}، {profile.age} ساله</h2>
        <p>{profile.bio}</p>
        <div className="actions">
          <button onClick={next} className="reject">رد</button>
          <button onClick={next} className="like">لایک</button>
        </div>
      </div>
    </div>
  );
}

export default App;