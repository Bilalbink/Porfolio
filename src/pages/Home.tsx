const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-row-reverse items-start">
                <img
                    src="https://res.cloudinary.com/dcmewemzs/image/upload/v1771499745/bilal_bin_khalid_uoqcmq.png"
                    alt="Muhammad Bilal Bin Khalid"
                    className="h-[40vh] lg:h-[75vh] object-contain self-end relative z-10 -ml-[8vw] lg:-ml-55 drop-shadow-2xl/25"
                />
                <div>
                    <h1 className="text-5xl lg:text-9xl font-black leading-none tracking-tight">
                        <span className="block relative z-0">Muhammad</span>
                        <span className="block relative z-20">Bilal Bin</span>
                        <span className="block relative z-20">Khalid</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
