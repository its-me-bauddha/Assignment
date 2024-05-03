import { Button } from "keep-react";
import vid1 from '../assets/videos/vid1.mp4'
import vid2 from "../assets/videos/vid2.mp4"
import vid3 from "../assets/videos/vido3.mp4"
import vid4 from "../assets/videos/vido4.mp4"
import { useEffect, useState } from "react";
const HeroSection1 = () => {
  const videos =  [vid2,vid3,vid4,vid1];
  const [index ,setIndex] = useState(0);

  useEffect(() =>{
    const video = document.querySelector('video');
    const handlerPlayVideo = () => {
      
     if(index === videos.length){
      setIndex(0);
     }else{
      setIndex(index + 1);
     }

    };

    video.addEventListener('ended', handlerPlayVideo);

    return () => {
      video.removeEventListener('ended', handlerPlayVideo);
    }

  },[index, videos.length])

  

  return (
    <div className="bg-gray-200">
      <div className="text-center">
        <h1 className="text-2xl font-bold pt-5">Here's how it Works</h1>
        <p className="">Start A Free Trial ➡️</p>
      </div>
      <div className="flex items-center justify-between mx-40 border">
        <div className="px-x8 ">
          <Button onClick={()=> {setIndex(0)}} color="secondary">Lambo Car </Button>
          <Button  onClick={()=> {setIndex(1)}} className="mt-48"  color="success">Technology</Button>
        </div>
        <div className="border m-4  ">
          <video id="video" autoPlay controls muted  src={videos[index]}  className="w-[40rem]  rounded-md"   ></video>
        </div>
        <div className="px-4">
          <Button onClick={()=> {setIndex(2)}}  color="warning">Coding</Button>
          <Button onClick={()=> {setIndex(3)}}   className="mt-48" color="error">Nature</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
