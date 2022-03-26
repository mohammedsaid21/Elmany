import pdf from '../../assets/pdf.png'
import { VscFilePdf } from 'react-icons/vsc'
import { FiVideo } from 'react-icons/fi'

function Items({ data }){

  return (
      <div className="container w-[100%] mx-auto flex flex-wrap md:flex-row flex-col lg:justify-c=enter justify-between pb-8 ">
      {
        data.map( (info) => ( 
          <div key={info.id} className={
          'flex flex-col lg:w-[30%] md:w-[45%] w-[80%] mx-auto h-[380px] py-8 px-6 border-2 rounded-2xl md:justify-between items-center mb-8 relative before:content[" "] before:absolute before:w-full before:h-[101%] hover:before:bg-gray-100 before:-z-10 z-10 before:top-96 hover:before:-top-0 before:duration-500 overflow-hidden before:rounded-lg shadow-xl opacitya '
          }>
            <img src={pdf} alt='' className='w-16 '/>
            <h3 className='text-3xl text-red-500 mb-2'>{info.metarial}</h3>
            <h4 className='text-2xl text-blue-900 pb-1'>المحاضرة {info.numLecture}</h4>
            <p className='mb-8 '>{info.size} ميجا</p>
            <div className=' flex w-full justify-evenly mb-4 text-sm'>
              <p className='bg-gray-200 w-[40%] flex rounded-full px-4 py-2 text-center justify-around items-center'>pdf المحاضرة <VscFilePdf /></p>
              <a href={info.link} target='_blank' className='bg-gray-200 w-[40%] flex rounded-full px-4 py-2 text-center justify-around items-center hover:bg-gray-400 transition-all duration-300'>video <FiVideo /></a>
            </div>
            <div className='flex justify-between w-full text-sm'>
              <p>د/ {info.doctor}</p>
              <p>التاريخ {info.date}</p>
            </div>
          </div>  
        ))
      }
</div>
  )
}
export default Items;