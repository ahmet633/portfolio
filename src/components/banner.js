const Banner = () => {

    return (
        <section id="page-1" className="pt-0 pb-10 md:pt-0 md:pb-0 h-screen">
            <div className="grid grid-cols-8 md:grid-cols-12 gap-x-[24px] mt-7 pt-0 md:pt-5 px-3 lg:pl-[13%]">
                <div className="hidden md:block col-span-2 lg:hidden"></div>
                <div className="col-span-8 lg:col-span-4 lg:mt-36 pt-10 lg:pt-50 md:pt-0">
                    <div 
                        className="block lg:hidden ml-[16%] w-[66%] aspect-square rounded-full mt-3 mb-5"
                        style={{
                            backgroundImage: "background-image: url('mobile-high-res.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: "center"
                        }}>
                    </div>
                    <h1 className="text-2xl md:text-[39px] pl-10 lg:pl-0 pb-2 md:mt-0 lg:mt-36 leading-normal font-semibold">
                        Merhaba,<br />
                        ben Ahmet Yiğit Özdoğan.
                    </h1>
                    <h2 className="text-xs md:leading-normal pl-10 lg:pl-0 md:text-[28px] pt-2 text-[#4A4949] font-medium">
                        İnsanların hayatlarını kolaylaştıran <br />
                        web tecrübeleri geliştiriyorum.
                    </h2>
                    <div className="text-left mx-auto lg:mx-0">
                        <button
                            className="w-[calc(40% - 24px)] ml-10 lg:ml-0 mt-7 border-2 border-solid border-black bg-black text-white rounded-full px-9 py-2 font-[600] text-center">
                            İletişime
                            geç
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block col-span-8 bg-no-repeat mt-[-1.5rem] z-30"
                    style={{
                        /**TODO: alternatif_ammett.png */
                        backgroundImage: "url('alternatif_ammett_fake.png')",
                        backgroundSize: "contain",
                        backgroundPositionX: "left",
                        backgroundPositionY: "center",
                        height: "100vh"
                    }}>

                </div>

            </div>
        </section>
    )
}

export default Banner