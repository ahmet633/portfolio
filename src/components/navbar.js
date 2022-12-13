const Navbar = () => {


    return (
        <nav className="grid grid-cols-8 md:grid-cols-12 px-3 lg:pl-[13%] gap-x-[24px] mt-5 md:mt-0 lg:mt-[-3px] fixed z-10">
            <div className="col-span-1 lg:hidden"></div>
            <a id="homenav" href="#page-1"
                style={{
                    boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.25);"
                }}
                className="whitespace-nowrap col-span-2 lg:col-span-1 pb-1 border-b-2 border-b-black border-solid w-fit font-medium">Ana
                Sayfa</a>
            <a id="projectsnav" href="#page-2"
                className="col-span-2 lg:col-span-1 pb-1 text-[#4A4949] border-b-2 w-fit border-solid border-b-transparent font-medium">Projelerim</a>
            <a id="contactnav" href="#page-3"
                className="col-span-2 lg:col-span-1 pb-1 text-[#4A4949] border-b-2 w-fit border-solid border-b-transparent font-medium">İletişim</a>
        </nav>
    )

}

export default Navbar