const ContainerX = ({children, className}) => {

    return (
        <div className={`max-w-screen-xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default ContainerX;