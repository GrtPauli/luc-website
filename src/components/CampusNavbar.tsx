import type { MenuProps } from 'antd';
import { Menu, ConfigProvider, Image, Drawer } from 'antd';
import AbjLogo from "../assets/images/abj-logo.jpg"
import NsukLogo from "../assets/images/nsuk-logo.png"
import GombeLogo from "../assets/images/gombe-logo.png"
import {FaBars} from "react-icons/fa"
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

interface NavbarProps { 
  selectedKey?: string
  selectedKeys?: string[]
}

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Navigation One', 'sub1', [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),
//   getItem('Navigation Two', 'sub2', [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   getItem('Navigation Three', 'sub4', [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const CampusNavbar = ({ selectedKey, selectedKeys }: NavbarProps) => {
    let { campusName } = useParams();
    const [open, setOpen] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const items: MenuProps['items'] = [
      {
        label: <Link to={`/campus/${campusName}`} className='text-base cus-md:text-sm'>HOME</Link>,
        key: 'home',
      },
      {
        label: <Link to={`/campus/${campusName}/about-us`} className='text-base cus-md:text-sm'>ABOUT US</Link>,
        key: 'about',
      },
      {
        label: <p className='text-base cus-md:text-sm leading-none p-0 m-0 inline-block'>PROGRAMMES</p>,
        key: 'programmes',
        children: [
          {
            label: <Link to={`/campus/${campusName}/programme/software-engineering-mbte`} className='text-base cus-md:text-sm'>Software Engineering (NBTE)</Link>,
            key: 'software-engineering-mbte',
          },
          {
            label: <Link to={`/campus/${campusName}/programme/banking-operation-mbte`} className='text-base cus-md:text-sm'>Banking Operation (NBTE)</Link>,
            key: 'banking-operation-mbte',
          },
          {
            label: <Link to={`/campus/${campusName}/programme/mass-communication`} className='text-base cus-md:text-sm'>Mass Communication</Link>,
            key: 'mass-communication',
          },
          {
            label: <Link to={`/campus/${campusName}/programme/psychology`} className='text-base cus-md:text-sm'>Psychology</Link>,
            key: 'psychology',
          },
        ],
      },
      {
        label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>ADMISSION</p>,
        key: 'admission',
        // children: [
        //   {
        //     label: <Link to="/sdg">Sustainable Development Goals</Link>,
        //     key: 'sdg-main',
        //   },
        // ],
      },
      {
        label: <p className='text-base cus-md:text-sm leading-none p-0 m-0 inline-block'>STUDENTS</p>,
        key: 'students',
        children: [
          {
            label: 'Student Portal',
            key: 'student-portal',
          },
          {
            label: 'E-Library',
            key: 'e-library',
          },
        ],
      },
      {
        label: <p className='text-base cus-md:text-sm leading-none p-0 m-0 inline-block'>RESEARCH</p>,
        key: 'rd',
        children: [
          {
            label: 'Research And Development',
            key: 'r-d',
          },
          {
            label: 'Journal',
            key: 'j',
          },
          {
            label: 'Conferences',
            key: 'c',
          },
        ],
      },
      // {
      //   label: <p className='text-base cus-md:text-sm leading-none p-0 m-0 inline-block'>SDG</p>,
      //   key: 'sdg',
      //   children: [
      //     {
      //       label: <Link to="/sdg">Sustainable Development Goals</Link>,
      //       key: 'sdg-main',
      //     },
      //   ],
      // },
      {
        label: <Link to="/contact-us" className='text-base cus-md:text-sm'>CONTACT US</Link>,
        key: 'contact-us',
      },
    ];

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };

  return (
      <nav className="bg-neutral-900 shadow-lg flex justify-between px-10 md:px-14 cus-xs:!px-5 py-2 items-center fixed z-50 w-full">
          <Image
              preview={false}
              src={
                campusName == "abuja" ? AbjLogo :
                campusName == "nsuk" ? NsukLogo : GombeLogo
              }
              width="120px"
              height="50px"
          />

          <div className="w-[90%] flex cus-md2:hidden items-center gap-3">
              <div className='w-full'>
                <ConfigProvider
                  theme={{
                      token: {
                          colorTextBase: "white",
                          colorBgBase: "rgb(23 23 23 / 1)",
                          colorPrimary: "white",
                          colorBorder: "transparent",
                          fontFamily: "",  
                          fontSize: 15,
                      }
                  }}
                >
                  <Menu selectedKeys={selectedKeys as any || [selectedKey]} className='!justify-end !border-transparent' mode="horizontal" items={items} />
                </ConfigProvider>
              </div>

              <Link className='w-[120px]' to="http://apply.lincoln.edu.ng/">
                <button className='bg-red-600 text-white w-full text-sm py-3 rounded-md'>
                  Apply Now
                </button>
              </Link>
          </div>

          <button onClick={() => setOpen(true)} className='hidden cus-md2:block text-white'>
              <FaBars/>
          </button>

          <ConfigProvider
            theme={{
              token: {
                  colorPrimary: "red",
                  fontFamily: "",
              },
            }}
          >
            <Drawer 
              placement="right" 
              onClose={() => setOpen(false)} open={open}
              zIndex={6000}
              footerStyle={{ padding: 0, borderWidth: 0 }}
              bodyStyle={{ padding: 0 }}
              contentWrapperStyle={{ width: "320px" }}
              closable={false}
            >
              <div className="flex justify-between py-3 border-b px-3">
                <button onClick={() => setOpen(false)}>
                  <CloseOutlined />
                </button>
              </div>

              <div>
                <Menu
                  mode="inline"
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  items={items}
                />
              </div>
            </Drawer>
          </ConfigProvider>
      </nav>
  )
}