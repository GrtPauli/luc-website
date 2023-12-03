import type { MenuProps } from 'antd';
import { Menu, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

interface CourseMenuProps { 
    selectedKey?: string
    selectedKeys?: string[]
}

export const AboutMenu = ({ selectedKey, selectedKeys }: CourseMenuProps) => {
    const items: MenuProps['items'] = [
        {
            label: <Link to="/about-us" className='!font-bold'>ABOUT OVERVIEW</Link>,
            key: 'about-overview',
        },
        {
            label: <Link to="/about-us/vision-and-mission" className='!font-bold'>VISION & MISSION</Link>,
            key: 'vision-mission',
        },
        {
          label: <Link to="" className='!font-bold'>OUR ACHIEVEMENTS</Link>,
          key: 'entry-requirements',
        },
        {
            label: <Link to="" className='!font-bold'>FACILITIES & SERVICES</Link>,
            key: 'scholarship-programme',
        },
        {
            label: <Link to="" className='!font-bold'>INTERNATIONAL AFFAIRS</Link>,
            key: 'scholarship-programme',
        },
    ];

  return (
    <div className='bg-red-600 shadow-md fixed z-30 w-full pt-[65px] px-8'>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "white",
                    colorTextBase: 'white',
                    colorBorder: "transparent",
                    fontFamily: "",  
                    fontSize: 13,
                }
            }}
        >
            <Menu selectedKeys={selectedKeys as any || [selectedKey]} className='!bg-red-600 !border-transparent' mode="horizontal" items={items} />
        </ConfigProvider>
    </div>
  )
}

