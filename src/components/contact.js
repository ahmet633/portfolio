const Contact = () => {

    return (
        <section id="page-3" className="pt-10 pb-10 md:pt-0 mt-0 md:mt-52 h-full md:pb-28">
            <div className="grid grid-cols-12 w-[100vw] px-3 lg:px-[11%] lg:pt-16 lg:pb-6">
                <div className="col-span-0 md:col-span-2 lg:col-span-2 hidden md:block"></div>

                <form className="col-span-12 md:col-span-8 lg:col-span-3 lg:my-32">
                    <div className="text-2xl lg:text-2xl font-semibold mb-2 md:mb-8"> Mesaj Bırak. </div>
                    <input className="w-full my-2 lg:my-2 pl-2 h-10 lg:h-10"
                        style={{
                            border: "1px solid black",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }} type="text"
                        placeholder="Ad Soyad:" required />
                    <input className="w-full my-2 lg:my-2 pl-2 h-10 lg:h-10"
                        style={{
                            border: "1px solid black",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }} type="email"
                        placeholder="E-posta Adresiniz:" required />
                    <textarea className="w-full mt-2 pl-2 pt-1" rows={4}
                        style={{
                            border: "1px solid black",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}
                        placeholder="Mesaj:"></textarea>
                    <div className="text-center lg:text-right">
                        <button
                            className="bg-black text-white py-2 lg:py-1 px-14 lg:px-[2.2rem] mx-auto relative bottom-[-20px] font-semibold"
                            style={{
                                border: "black 1px solid",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}> Gönder </button>
                    </div>
                </form>

                <div className="col-span-0 lg:col-span-1"></div>
                <div style={{ borderLeft: "black 2px dashed" }}
                    className="hidden lg:block col-span-0 lg:col-span-1 mt-[12.5rem] mb-[10.15rem]"></div>
                <div
                    className="bg-white col-span-12 lg:col-span-3 lg:my-48 mt-12 lg:mt-[13.5rem] flex flex-col justify-center border-t-2 border-dashed border-black lg:border-0">
                    <div className="my-3 text-sm lg:text-[16px] text-center lg:text-left align-middle pt-2 lg:pt-0">
                        {/**<ion-icon name="mail-outline" class="align-middle" style="font-size: 24px;"></ion-icon>  */}

                        <div className="h-full align-middle inline-block pl-2">ahmetyigitozdogan@gmail.com</div>
                    </div>
                    <div className="my-3 text-sm lg:text-[16px] text-center lg:text-left align-middle">
                        {/** <ion-icon name="call-outline" class="align-middle" style="font-size: 24px;"></ion-icon> */}

                        <div className="h-full align-middle inline-block pl-2">+90 534 518 00 81</div>
                    </div>
                    <div className="my-3 text-sm lg:text-[16px] text-center lg:text-left align-middle">
                        {/** <ion-icon name="logo-whatsapp" class="align-middle" style="font-size: 24px;"></ion-icon> */}

                        <div className="h-full align-middle inline-block pl-2">+90 534 518 00 81</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact