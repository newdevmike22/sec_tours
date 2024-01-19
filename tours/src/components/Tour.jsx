const Tour = ({ id, name, team, info, image, price }) => {
    return (
        <article className="bg-white rounded-md shadow-md relative transition-all duration-300 ease-in-out h-full">
            <img className="w-[100%] block object-cover h-[20rem] rounded-tr-lg rounded-tl-lg" src={image} alt={name} />
            <span className="absolute top-0 right-0 p-2 text-white bg-[#bd020e] tracking-wide rounded-tr-[0.25rem] font-bold">${price}</span>
            <div className="py-[2rem] px-[1.5rem]">
                <h1 className="text-center mb-[1.25rem] text-[1.5rem] font-semibold">{name}</h1>
                <h3 className="mb-2 uppercase font-semibold text-base text-[#0c11a6]">Team: {team}</h3>
                <p className="mb-[1.25rem] text-[#64748b]">{info}</p>
            </div>
        </article>
    )
};

export default Tour; 