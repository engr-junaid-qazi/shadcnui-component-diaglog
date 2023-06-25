import Image from 'next/image';
import {DialogDemo} from '@/components/dialog';

export default function Home() {
  return (
    <div className='text-center'>
    <div> 
      <h1 className='text-center text-2xl font-bold text-red-600'> I am Engr. Junaid Qazi and 
      you are welcome to my first "shadcn-ui" Webpage that contacins a Dialog 
      component</h1>
      <br/>
    </div>
    <DialogDemo/>
    </div>
    
  )
}
