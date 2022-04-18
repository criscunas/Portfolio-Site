import Carousel from "react-material-ui-carousel";
import Image from 'next/image'

const Carou = ({ imgs }) => {

  return (
    <Carousel
    navButtonsAlwaysInvisible={true}
      autoPlay={false}
      indicatorContainerProps={{
        style: {
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          padding:"1rem",
          gap: "0.5rem",
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "#60A5FA",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "50",
          
          
        },
      }}
    >
      {imgs.map((item, i) => {
        return (
          <Image
            src={item.src}
            alt="profile-photo"
            width={300}
            layout="responsive"
            height={250}
          />
        );
      })}
    </Carousel>
  );

};

export default Carou