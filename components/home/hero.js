

export default function Hero() {
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">또갱의 파란만장 여행일지</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">사막과 초원, 도시를 한 눈에 볼 수 있는 나라가 있다?? <br></br>힐링 여행이 아닌 거의 생존에 가까운 바로 전날 밤에 귀국한 또갱의 따끈따끈한 몽골 여행 후기 지금 바로 시작합니다~</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.lifeandyouth.com/wp-content/uploads/2020/07/20180823_130618-1024x576.jpg"/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://mblogthumb-phinf.pstatic.net/20160620_230/mongolia7day_1466403166346GhnAP_JPEG/150907165655-beautiful-mongolia7-lake-khovgol-2-super-169.jpg?type=w800"/>
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://mblogthumb-phinf.pstatic.net/20160719_20/mongolia7day_1468914101814wSWX2_PNG/1.PNG?type=w800"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://modo-phinf.pstatic.net/20191120_233/1574227076510zg2CW_JPEG/mosa3dG0xm.jpeg?type=w1100"/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://blog.kakaocdn.net/dn/mLFI3/btqvCe8iLe2/EOkuF6zG0xUYw4MxHQ1c30/img.jpg"/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://modo-phinf.pstatic.net/20191129_294/1575010064936ARFtK_JPEG/mosapwwEn4.jpeg?type=w1100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}