
const SectionTitle = ({children}) => {
    return (
        <div>
            <h2 className='text-center text-2xl md:text-4xl font-semibold md:font-bold py-5 mt-10 uppercase'>{children}</h2>
        </div>
    );
};

export default SectionTitle;