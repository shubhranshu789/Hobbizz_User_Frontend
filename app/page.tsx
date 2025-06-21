'use client';

import { useRouter } from 'next/navigation';
import AllClubs from "./Components/AllClubs/page"
import ArtCub from "./Components/ArtClub/page"
<<<<<<< HEAD
=======
import DanceClub from "./Components/DanceClub/page"
import Auth from "./Components/Auth/page"
>>>>>>> e0b5f0305757c4775e6567bb4b78c9e165bc9f8a


export default function Page() {
  const router = useRouter();
<<<<<<< HEAD
    const data = 20;
=======
  const data = 20;
>>>>>>> e0b5f0305757c4775e6567bb4b78c9e165bc9f8a
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
      <ArtCub/>
=======
        {/* <DanceClub/> */}
      <Auth/>
>>>>>>> e0b5f0305757c4775e6567bb4b78c9e165bc9f8a
    </div>
  );
}
