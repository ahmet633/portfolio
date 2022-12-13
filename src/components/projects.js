const Projects = () => {

    return (
        <section id="page-2" className="pt-28 h-[calc(100vh-8rem)] md:pt-[18vh] bg-repeat-x bg-center bg-[length:100%_95%] md:bg-[length:100%_0%]"
            style={{
                transition: "transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s",
                backgroundImage: "url('banner.png')"
            }}>
            <div className="grid grid-cols-12 px-3 lg:px-[12%] gap-x-[0px] bg-no-repeat md:bg-repeat-x bg-[length:100%_0%] md:bg-contain bg-center"
                style={{
                    backgroundImage: "url('banner.png')"
                }}>
                <div className="col-span-1"></div>

                <div className="col-span-10 relative">

                    <div
                        className="absolute bottom-[-30px] md:right-[-30px] z-9 flex flex-col justify-around w-full md:w-fit md:h-[78.75vh]">
                        <div className="flex flex-col justify-center h-[47%] items-center"></div>
                        <div id="c2-control" className="flex flex-row md:flex-col justify-center h-[47%] items-center">
                            <span className="mx-1  my-1 w-3 h-3 border-solid border-black border-0 rounded-full bg-black"
                                style={{ cursor: "pointer" }}></span>
                            <span className="mx-1  my-1 w-[10px] h-[10px] border-solid border-[#4A4949] border-2 rounded-full"
                                style={{ cursor: "pointer" }}></span>
                        </div>
                    </div>

                    <ProjectCarousel />

                    <div className="h-[6vh]"></div>

                    <div className="h-[20vh] md:h-[33vh] overflow-hidden rounded-3xl lg:rounded-none"
                        style={{
                            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"

                        }}>
                        <div className="h-full w-full relative"
                            style={{
                                backgroundImage: "url('boehlerit.png')",
                                transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s",
                                backgroundSize: "cover",
                            }}>
                        </div>
                        <div className="h-full w-full relative"
                            style={{
                                backgroundImage: "url('jd1.png')",
                                transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s",
                                backgroundSize: "cover"
                            }}>

                        </div>
                        <button id="c2-info-button" className="absolute top-3 right-3 w-10 h-10 bg-red-600 md:hidden z-10"></button>
                    </div>
                </div>

            </div>

        </section >
    )
}

const ProjectCarousel = () => {

    const nextPage = () => {

    }

    return (
        <>
            <div
                className="absolute top-[-30px] md:left-[-30px] z-9 flex flex-col justify-around w-full md:w-fit md:h-[78.75vh]">
                <div id="c1-control" className="flex flex-row md:flex-col justify-center md:h-[47%] items-center">
                    <span className="mx-1  my-1 w-3 h-3 border-solid border-black border-0 rounded-full bg-black"
                        style={{ cursor: "pointer" }}></span>
                    <span className="mx-1 my-1 w-[10px] h-[10px] border-solid border-[#4A4949] border-2 rounded-full"
                        style={{ cursor: "pointer" }}></span>
                </div>
                <div className="flex flex-col justify-center h-[47%] items-center"></div>
            </div>
            <div className="h-[20vh] md:h-[33vh] overflow-hidden rounded-3xl lg:rounded-none"
                style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));" }}>

                <div className="h-full w-full relative"
                    style={{
                        backgroundImage: "url('jd1.png')",
                        transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s",
                        backgroundSize: "cover"
                    }}>
                    <button
                        className="p-1 absolute top-3 right-3 bg-slate-800 text-slate-100 border-2 border-solid border-white z-10 rounded-full aspect-square">
                        X
                    </button>
                </div>
                <div className="h-full w-full relative"
                    style={{
                        backgroundImage: "url('boehlerit.png')",
                        transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s",
                        backgroundSize: "cover"
                    }}>
                </div>
            </div>
        </>
    )
}

export default Projects