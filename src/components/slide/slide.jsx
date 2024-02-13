
import Qoute from "../../../public/imgs/qoute.svg";
const Slide = ({ imagePath }) => {
  return (
    <div className="flex-none w-full">
      <div className="image-box mx-auto overflow-hidden">
        <img
          src={`${imagePath}`}
          alt="girl image"
          className="object-cover rounded-2xl m-auto"
        />
      </div>
      <div className="text-box bg-white shadow-lg  text-center p-2 w-4/5 box-border rounded-2xl mx-auto mt-[-4rem] z-10 relative ">
        <div className="">
          <img
            src={Qoute}
            className="mx-auto my-4 size-10
          "
          />

          <p className="text-lg text-textShade py-3">
            I am extremely happy with the Designs created by this Produce UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
