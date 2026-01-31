import React from 'react'
import neptune from '../assets/Union.png'
import jessica from '../assets/Jessica.png'
import home from '../assets/Home.png'
import doc from '../assets/Main_img.png'
import chat from '../assets/Message.png'
import help from '../assets/Help.png'
import setting from '../assets/Setting.png'
import phone from '../assets/Phone.png'


function SideNav() {

    const navImgClass = "h-6 w-6 object-contain";
    const navTextClass = "font-['Spline_Sans'] font-normal text-base leading-relaxed flex items-center pl-3";
    const divClass = 'flex ';
    const headingClass = "font-['Spline_Sans'] font-medium text-[24px] leading-[1.2] tracking-normal text-[#1F4451]";
    const bottomTextClass = "font-['Spline_Sans'] font-normal text-base leading-[1.4] tracking-normal font-400 text-[#626D82]";


    return (

        <div className='m-5  w-92.75 h-screen '>

            <div className='pl-4 py-2'>
                <img src={neptune} alt="" className='h-8 w-42' />
            </div>

            <div className='border-[#B5BDCD] border m-4 p-3 rounded-lg h-17.25 w-71.5 flex items-center'>                <div>
                <img src={jessica} alt="" className='w-10.25 h-10.25' />
            </div>
                <div className='pl-2'>
                    <div className='w-39.75 h-4.5 font-600 font-semibold  font-sans'><p>Jessica Thompson</p></div>
                    <div className='font-400 font-regular text-[#626D82]'><p>Primary User</p></div>
                </div>

            </div>

            <div className='flex flex-col justify-between h-175 overflow-hidden'>
                <div className='ml-8 flex flex-col gap-6.75 mt-10  ' >
                    <div className={divClass}>
                        <img src={home} alt="" className={navImgClass} />
                        <p className={navTextClass}>Home</p>
                    </div>
                    <div className="flex items-center w-71.5 h-12.75 bg-[#D3F7B5] rounded-lg  ">
                        <img src={doc} alt="" className='h-6 w-6 ml-2' />
                        
                        <h1 className={navTextClass}>Documents</h1>
                    </div>
                    <div className={divClass}>
                        <img src={chat} alt="" className={navImgClass} />
                        <p className={navTextClass}>Chat with Neptune</p>
                    </div>
                    <div className={divClass}>
                        <img src={help} alt="" className={navImgClass} />
                        <p className={navTextClass}>Help</p>
                    </div>
                    <div className={divClass}>
                        <img src={setting} alt="" className={navImgClass} />
                        <p className={navTextClass}>Settings</p>
                    </div>
                </div>

                <div className='pl-7'>

                    <div className=' h-39 w-73.25 flex flex-col justify-between gap-2'>
                        <div>
                            <img src={phone} alt="" className='h-[27.35px] w-[27.4px]' />
                        </div>
                        <div>
                            <h1 className={headingClass}>Having trouble?</h1>
                            <p className={bottomTextClass} >Feel free to contact us and we will always help you through the process.</p>
                        </div>
                        <div>
                            <button className='w-24.25 h-8.5 rounded-lg bg-[#1F4451] text-[#FFFFFF] font-bold '>Contact us</button>
                        </div>
                    </div >
                </div>
            </div>
        </div>

    )
}

export default SideNav