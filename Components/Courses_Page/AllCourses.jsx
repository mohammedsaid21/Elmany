import { FiVideo } from 'react-icons/fi'
import { BsPatchCheck, BsPersonCheck } from 'react-icons/bs'

function AllCourses({ data }){

  return (
      <div className="container w-[100%] mx-auto flex flex-wrap md:flex-row flex-col lg:justify-c=enter justify-between pb-8 ">
      {
        data.map( (info) => ( 
          <div key={info.id} className={
          'flex flex-col lg:w-[32%] md:w-[45%] w-[80%] mx-auto md:h-[380px] h-[300px] py-8 px-6 border-2 rounded-2xl md:justify-between items-center mb-8 relative before:content[" "] before:absolute before:w-full before:h-[101%] hover:before:bg-gray-100 before:-z-10 z-10 before:top-96 hover:-translate-y-3 duration-300 hover:before:-top-0 before:duration-500 overflow-hidden before:rounded-lg shadow-xl opacitya bg-gradient-to-r from-sky-500 to-indigo-500'
          }>
            {/* <img src={pdf} alt='' className='w-16 '/> */}
            <h3 className='lg:text-3xl  mb-1 py-8 font-bold'>{info.metarial}</h3>
            <h4 className='lg:text-xl whitespace-nowrap text-blue-900 md:-mb-4 font-bold'> {info.numLecture}</h4>
            <h4 className='lg:text-xl text-blue-900 md:pb-0 pb-4'> {info.size}</h4>
            <div className=' flex w-full justify-evenly mb-4 text-sm'>
              <a href={info.link} target='_blank' className='bg-gray-200 md:w-[40%] w-[46%] flex rounded-full px-4 py-2 text-center justify-around items-center hover:bg-gray-400 transition-all duration-300'>أبدأ الآن <FiVideo /></a>
            </div>
            <div className='flex justify-between w-full text-sm'>
              <p className='flex items-center'> {info.date}<BsPatchCheck className='ml-2'/></p>
              <p className='flex items-center'>م/ {info.doctor} <BsPersonCheck className='ml-2'/></p>
            </div>
          </div>  
        ))
      }
</div>
  )
}
export default AllCourses;