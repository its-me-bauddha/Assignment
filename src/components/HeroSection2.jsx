import { Button, Navbar } from "keep-react";
import vid5 from "../assets/videos/vido5.mp4";
import vid6 from "../assets/videos/vido6.mp4";
import vid7 from "../assets/videos/vido7.mp4";
import vid8 from "../assets/videos/vido8.mp4";
import { useEffect, useState } from "react";

const HeroSection2 = () => {
  const videos = [vid5, vid6, vid7, vid8];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const video = document.querySelector("video");
    const handlerPlayVideo = () => {
      if (index === videos.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    video.addEventListener("ended", handlerPlayVideo);

    return () => {
      video.removeEventListener("ended", handlerPlayVideo);
    };
  }, [index, videos.length]);

  return (
    <div className="pt-7 bg-white">
      <div className="mx-40 flex justify-center  ">
        <Button.Group>
          <Button size="lg" position="start" onClick={() => setIndex(0)}>
            Tab 1
          </Button>
          <Navbar.Divider className="m-0 p-0"></Navbar.Divider>
          <Button size="lg" position="center" onClick={() => setIndex(1)}>
            Tab 2
          </Button>
          <Navbar.Divider className="m-0 p-0"></Navbar.Divider>
          <Button size="lg" position="center" onClick={() => setIndex(2)}>
            Tab 4
          </Button>
          <Navbar.Divider className="m-0 p-0"></Navbar.Divider>
          <Button size="lg" position="end" onClick={() => setIndex(3)}>
            Tab 3
          </Button>
        </Button.Group>
      </div>
      <div className="flex items-center  justify-evenly pt-8">
        <div className="border m-4">
          <video
            id="video"
            autoPlay
            controls
            muted
            src={videos[index]}
            className="w-[32rem]  rounded-md"
          ></video>
        </div>
        <Button color="success" variant="outline">
          Get Started ➡️
        </Button>
      </div>
    </div>
  );
};
export default HeroSection2;
