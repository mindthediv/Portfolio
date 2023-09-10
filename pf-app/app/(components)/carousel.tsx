"use client";
import Carousel from "react-bootstrap/Carousel";

function WorksCarousel() {
  const worksArray = [
    { img: "url(/assets/linkedinCover.png)", title: "Linkedin Clone" },
    { img: "url(/assets/spotifyCover.png)", title: "Spotify Clone" },
    { img: "url(/assets/epicodeCover.png", title: "Epicode Benchmark Clone" },
  ];
  let x = 0;
  const count = () => {
    x = x + 1;
    return x;
  };
  return (
    <>
      <h6 className="mb-0">Showcase</h6>
      <Carousel className="my-caro w-100">
        {worksArray.map((work) => {
          return (
            <Carousel.Item
              interval={5000}
              style={{
                backgroundImage: work.img,
                height: 250 + "px",
              }}
              key={count()}
            >
              <div className="h-100 d-flex justify-content-center align-items-center ">
                <h3 className="p-4 shadow">{work.title}</h3>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default WorksCarousel;
