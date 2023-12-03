import type { MenuProps } from 'antd';
import { Menu, ConfigProvider, Image, Drawer } from 'antd';
import Logo from "../assets/images/logo1.png"
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom';
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

export const Navbar = ({ selectedKey, selectedKeys }: NavbarProps) => {
    const [open, setOpen] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const items: MenuProps['items'] = [
      {
        label: <Link to="/" className='text-[15px] cus-md:text-sm'>HOME</Link>,
        key: 'home',
      },
      {
        label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>ABOUT US</p>,
        key: 'about-us',
        children: [
          {
            label: <Link to="/about-us">About LUC</Link>,
            key: 'about-luc',
          },
          {
            label: <Link to="/about-us/vision-and-mission">Vision and Mission</Link>,
            key: 'vision-mission',
          },
          {
            label: <Link to="">Our Achievements</Link>,
            key: 'achievements',
          },
          {
              label: <Link to="">Facilities and Services</Link>,
              key: 'facilities-services',
          },
          {
              label: <Link to="">International Affairs</Link>,
              key: 'international-affairs',
          },
        ],
      },
      {
        label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>PROGRAMMES</p>,
        key: 'programmes',
        children: [
          {
            label: 'Undergraduate',
            key: 'undergraduate',
            children: [
              {
                label: <Link to="/programmes/undergraduate/bachelor">Bachelor</Link>,
                key: 'bachelor',
              },
              {
                label: <Link to="/programmes/undergraduate/diploma">Diploma</Link>,
                key: 'diploma',
              } 
            ]
          },
          {
            label: 'Postgraduate',
            key: 'postgraduate',
            children: [
              {
                label: <Link to="/programmes/postgraduate/phd">PhD</Link>,
                key: 'phd',
              },
              {
                label: <Link to="/programmes/postgraduate/master">Master</Link>,
                key: 'master',
              } 
            ]
          },
          {
            label: 'Open Distance Learning',
            key: 'odl',
            children: [
              {
                label: <Link to="/programmes/open-distance-learning/undergraduate">Undergraduate Programmes</Link>,
                key: 'odl-undergraduate',
              },
              {
                label: <Link to="/programmes/open-distance-learning/postgraduate">Postgraduate Programmes</Link>,
                key: 'odl-postgraduate',
              } 
            ]
          },
          {
            label: 'Professional Development',
            key: 'program:4',
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
          label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>CAMPUSES</p>,
          key: 'campus',
          children: [ 
            {
              label: <Link to="/campus/abuja">Lincoln College (Abuja Campus)</Link>,
              key: 'campus:1',
            },
            {
              label: <Link to="/campus/nsuk">Lincoln University Malaysia (NSUK Campus)</Link>,
              key: 'campus:2',
            },
            {
              label: <Link to="/campus/gombe">Lincoln University Malaysia (Gombe Campus)</Link>,
              key: 'campus:3',
            },
          ],
      },
      {
        label:  <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>STUDENT LIFE</p>,
        key: 'gallery',
        children: [
          {
            label: <Link to="">News</Link>,
            key: 'news',
          },
          {
            label: <Link to="">Events</Link>,
            key: 'events',
          },
          {
            label: <Link to="/gallery/photo">Facilities</Link>,
            key: 'photo-gallery',
          },
          // {
          //   label: <Link to="/gallery/video">Video Gallery</Link>,
          //   key: 'video-gallery',
          // },
        ],
      },
      // {
      //     label: <p className='text-base cus-md:text-sm leading-none p-0 m-0 inline-block'>E-LIBRARY</p>,
      //     key: 'e-library',
      // },
      {
        label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>SDG</p>,
        key: 'sdg',
        children: [
          {
            label: <Link to="/sdg">Sustainable Development Goals</Link>,
            key: 'sdg-main',
          },
        ],
      },
      {
        label: <p className='text-[15px] cus-md:text-sm leading-none p-0 m-0 inline-block'>RESEARCH</p>,
        key: 'rd',
        children: [
          {
            label: 'Research And Development',
            key: 'program:1',
          },
          {
            label: 'Journal',
            key: 'program:1',
          },
          {
            label: 'Publications',
            key: 'program:1',
          },
        ],
      },
      {
        label: <Link to="/contact-us" className='text-[15px] cus-md:text-sm'>CONTACT US</Link>,
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
      <nav className="bg-white shadow-md flex justify-between px-10 md:px-14 cus-xs:!px-5 py-2 items-center fixed z-50 w-full">
          <Image
              preview={false}
              src={Logo}
              width="120px"
              height="50px"
          />

          <div className="w-[90%] block cus-md2:hidden">
            <ConfigProvider
              theme={{
                  token: {
                      colorPrimary: "red",
                      colorBorder: "transparent",
                      fontFamily: "",  
                      fontSize: 15,
                  }
              }}
            >
                <Menu selectedKeys={selectedKeys as any || [selectedKey]} className='!justify-end !border-transparent' mode="horizontal" items={items} />
            </ConfigProvider>
          </div>

          <button onClick={() => setOpen(true)} className='hidden cus-md2:block'>
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