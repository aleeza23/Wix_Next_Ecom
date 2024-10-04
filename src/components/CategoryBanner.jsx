import Image from 'next/image';
import Link from 'next/link';

const CategoryBanners = ({ banner }) => {


    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banner.map((banner) => (
                    <div
                        key={banner.id}
                        className="relative overflow-hidden rounded-md group cursor-pointer"
                    >
                        <Image
                            src={banner.imgSrc}
                            alt={banner.title}
                            width={400}
                            height={300}                           
                            className="w-full h-auto transition-transform duration-500 transform group-hover:scale-110 group-hover:translate-x-2"
                        />
                        <div className="absolute top-0 left-0 p-4 w-[70%] lg:w-[60%] text-black h-full flex flex-col justify-center">
                            <h5 className=" text-md sm:text-4xl md:text-2xl lg:text-lg font-semibold ">
                                {banner.subtitle}
                            </h5>
                            <small className=" text-sm sm:text-lg lg:text-xs mt-2">{banner.price}</small>
                            <div className="mt-4">
                                <Link
                                    href={banner.actionHref}
                                    className="inline-block py-1 px-3 sm:px-4 text-sm lg:text-xs sm:py-2  bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                                >
                                    {banner.actionText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBanners;
