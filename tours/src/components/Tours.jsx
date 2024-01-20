import Tour from "./Tour";
import SEClogo from "../assets/SEC_new_logo.png";

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="text-center mb-[3rem]">
                <img src={SEClogo} alt="SEC logo" className="mx-auto block w-[6.5rem] h-[6.5rem] animate-pulse cursor-pointer" />
                <h2 className="text-[2rem] mb-[0.5rem] capitalize leading-[1.25] tracking-[0.1rem] font-bold">SEC stadium tours</h2>
                <div className="w-[7rem] h-[0.25rem] mx-[auto] bg-gradient-to-r from-[#2c6289] to-[#4DD4C6]"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })} 
            </div>
        </section>
    )
};

export default Tours;