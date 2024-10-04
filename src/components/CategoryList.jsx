import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-1/9 "
            key={item._id}
          >
            <div className="relative h-full w-32 rounded-lg overflow-hidden">
              <div className="relative group bg-gray-100 h-32 w-32 ">
                <Image
                  src={item.media?.mainMedia?.image?.url || "cat.png"}
                  alt={item.name}
                  fill
                  sizes="20vw"
                  className="object-contain w-full group-hover:scale-105 transition-transform duration-200 h-full" // Scale up on hover
                />
                
              </div>
              <small className="p-4 font-medium text-sm  text-center">
                  {item.name}
                </small>
            </div>


          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
