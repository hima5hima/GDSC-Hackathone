const SponserBox = ({src , alt}) => {
    return (
    <div className="image-box w-[300PX] flex justify-center items-center my-4 md:my-0">
        <img  src={src} alt={alt}/>
    </div>
    )
}

export default SponserBox;