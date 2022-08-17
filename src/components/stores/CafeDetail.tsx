import { Link, useParams } from "react-router-dom";
import { ReactComponent as XIcon } from './x-svgrepo-com.svg';

const CafeDetail = () => {
  
  const { cafename } = useParams();

  return(
    <div className="lg:flex lg:flex-col lg:basis-2/5 basis-full h-128">
      
        <div>
        <Link to='/store'>
          <button className="mt-3">
            <XIcon/>
          </button>
        </Link>
        </div>

        <div className="w-full lg:w-[28rem]">
          <div className="pb-5 text-center">
            <h1 className='text-lg text-bold pr-7'></h1>
              <p>
                <span></span>
                <span></span>
                <span></span>
              </p>
            <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-40 text-center h-8' type="submit">Get Location</button>
          </div>
          
          <div className="pt-2 -ml-5 text-center">
            <h3 className="text-base text-bold px-4 bg-gray-300">PICTURE</h3>
            <div className="px-4 pt-4 pb-5">
              <p></p>
            </div>
          </div>
          
          <div className="pt-2 -ml-5 text-center">
            <h3 className="text-base text-bold px-4 bg-gray-300">COMMENT</h3>
            <div className="px-4 pt-4 pb-5">
              <p></p>
            </div>
            <h3 className="text-base text-bold px-4 bg-gray-300"></h3>
            <div className="px-4 pt-4 pb-5">
              <p></p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default CafeDetail;