import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface CatalogCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
  };
}

export const CatalogCard = ({ id, image, title, price, rating: { rate } }: CatalogCardProps) => {

  return (
    <div className="shadow-md p-2 rounded-md hover:scale-105 transition-transform flex flex-col gap-4">
      <div className='w-full h-36 flex justify-center'>
        <img src={image} alt={title} className='w-36 h-36 block justify-center' />
      </div>

      <h3 className='font-bold text-xl' title={title}>
        {title.length > 13 ? title.slice(0, 14) + '...' : title}
      </h3>

      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <IoStar className='w-4 h-4 text-yellow-500' />
          {rate}
        </div>

        <div className='font-bold'>
          ${price}
        </div>
      </div>

      <div className='w-full'>
        <Link to={`/details-${id}`} className='bg-blue-500 block text-center rounded-md p-1 w-full text-white hover:cursor-pointer hover:bg-blue-600'>Details</Link>
      </div>
    </div>
  )
}