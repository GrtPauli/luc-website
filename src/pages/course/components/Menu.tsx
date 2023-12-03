import type { MenuProps } from 'antd';
import { Menu, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

interface CourseMenuProps { 
    selectedKey?: string
    selectedKeys?: string[]
}

const CourseMenu = ({ selectedKey, selectedKeys }: CourseMenuProps) => {
    const items: MenuProps['items'] = [
        {
            label: <Link to="" className='!font-bold'>COURSE OVERVIEW</Link>,
            key: 'course-overview',
        },
        {
            label: <Link to="" className='!font-bold'>SUBJECT HIGHLIGHTS</Link>,
            key: 'subject-highlights',
        },
        {
          label: <Link to="" className='!font-bold'>ENTRY REQUIREMENTS</Link>,
          key: 'entry-requirements',
        },
        {
            label: <Link to="" className='!font-bold'>SCHOLARSHIP PROGRAMME</Link>,
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

export default CourseMenu