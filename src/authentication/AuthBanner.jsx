import assets from "../assets/image-8.png"

function AuthBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-screen">
      <img alt="auth-banner-image" src={assets} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-purple-700 bg-opacity-70 flex items-center pl-12 xl:pl-[100px]">
        <div className="flex flex-col justify-center text-white w-full max-w-[621px] ">
          <h1 className="text-4xl md:text-6xl xl:text-[78px] mb-4 text-left leading-[46px] md:leading-[78px] xl:leading-[106.22px] font-semibold">
            Experience the best of K-dramas with fellow K-drama lovers!
          </h1>
          <p className="text-left text-xl md:text-3xl leading-[25px] md:leading-[45px] -tracking-[0.6px] font-semibold">
            Connect with fellow K-Drama Enthusiasts and dive deep into your favorite shows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthBanner
