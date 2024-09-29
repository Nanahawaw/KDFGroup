import assets from "../assets/image-8.png"

const AuthBanner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img alt="auth-banner-image" src={assets} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-purple-700 bg-opacity-70 flex items-center justify-center ">
        <div className="flex flex-col justify-center text-white p-8 max-w-[40%]">
          <h1 className="text-7xl mb-4 text-left leading-[70px]">
            Experience the best of K-dramas with fellow K-drama lovers!
          </h1>
          <p className="text-left text-3xl">
            Connect with fellow K-Drama Enthusiasts and dive deep into your favorite shows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthBanner
