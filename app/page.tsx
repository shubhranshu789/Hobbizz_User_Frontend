'use client';

import { useRouter } from 'next/navigation';
import ArtCub from "./Components/ArtClub/page"

import DanceClub from "./Components/DanceClub/page"
import Auth from "./Components/Auth/page"
import WelcomePage from "../app/HobbizzWelcomePage/page"


export default function Page() {
  const router = useRouter();
  const data = 20;
  const str = "shubh"

  const handleClick = () => {
   router.push(`./Components/home?data=${data}&str=${str}`);
  };
  const handleClick2 = () => {
    router.push('./Components/About');
  };


  return (
    <div>
      {/* <h1>Welcome to the Main Page</h1>
      <button onClick={handleClick}>Go to Home</button>
      <button onClick={handleClick2}>Go to About</button> */}


<<<<<<< HEAD
        {/* <DanceClub/> */}
      {/* <Auth/> */}

      <WelcomePage/>
=======
      <DanceClub/>
      {/* <ArtCub/> */}
      {/* <Auth/> */}
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
    </div>
  );
}
