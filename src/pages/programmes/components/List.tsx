import { ConfigProvider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const panelStyle: React.CSSProperties = {
  backgroundColor: "#373633",
  color: "#fff",
};

const underGraduateItems: (panelStyle: CSSProperties, programmes: (faculty: string) => JSX.Element) => CollapseProps["items"] = (
  panelStyle, programmes
) => [
  {
    key: "1",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Medicine</h1>,
    children: programmes('Faculty of Medicine'),
    style: { ...panelStyle, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  },
  {
    key: "2",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Nursing</h1>,
    children: programmes('Faculty of Nursing'),
    style: panelStyle,
  },
  {
    key: "3",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty Med. & Health Sciences</h1>,
    children: programmes('Faculty Med. & Health Sciences'),
    style: panelStyle,
  },
  {
    key: "4",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Business and Accounting</h1>,
    children: programmes('Faculty of Business and Accounting'),
    style: panelStyle,
  },
  {
    key: "5",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Computer Sciences And Engineering</h1>,
    children: programmes('Faculty of Computer Sciences And Engineering'),
    style: panelStyle,
  },
  {
    key: "6",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Social Sciences</h1>,
    children: programmes('Faculty of Social Sciences'),
    style: panelStyle,
  },
  {
    key: "7",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Computer Science and Multimedia</h1>,
    children: programmes('Faculty of Computer Science and Multimedia'),
    style: panelStyle,
  },
  {
    key: "8",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Applied Science</h1>,
    children: programmes('Faculty of Applied Science'),
    style: {
      ...panelStyle,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  },
];

const postGraduateItems: (panelStyle: CSSProperties, programmes: (faculty: string) => JSX.Element) => CollapseProps["items"] = (
  panelStyle, programmes
) => [
  {
    key: "1",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Business and Accounting</h1>,
    children: programmes('Faculty of Business and Accounting'),
    style: { ...panelStyle, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  },
  {
    key: "2",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Computer Sciences</h1>,
    children: programmes('Faculty of Computer Sciences'),
    style: panelStyle,
  },
  {
    key: "3",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Hospitality</h1>,
    children: programmes('Faculty of Hospitality'),
    style: panelStyle,
  },
  {
    key: "4",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Nursing</h1>,
    children: programmes('Faculty of Nursing'),
    style: panelStyle,
  },
  {
    key: "5",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Pharmacy</h1>,
    children: programmes('Faculty of Pharmacy'),
    style: panelStyle,
  },
  {
    key: "6",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Science</h1>,
    children: programmes('Faculty of Science'),
    style: panelStyle,
  },
  {
    key: "7",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Social Science Art and Humanity</h1>,
    children: programmes('Faculty of Social Science Art and Humanity'),
    style: panelStyle,
  },
  {
    key: "8",
    label: <h1 className="text-white font-bold text-lg cus-xs:text-sm">Faculty of Engineering</h1>,
    children: programmes('Faculty of Engineering'),
    style: {
      ...panelStyle,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  },
];

export const ProgrammeList = ({type, programmes}: any) => {

  console.log(programmes)

  const Programmes = (faculty: string) => { 

    return (
      <ul className="list-disc text-white text-sm cus-xs:text-xs flex flex-col gap-3 px-5">
        {programmes?.map((item: any, i: any) => {
          if(item?.faculty?.toLowerCase() == faculty?.toLowerCase()){
            return (
              <Link
                key={i} 
                className="hover:text-red-600 duration-150 ease-in cursor-pointer" 
                to={`/programme/${item?.code}`}
              >
                  {item?.course}
              </Link>
            )
          }
        })}
      </ul>
    )
  }

  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5">
      <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
        In order to develop into complete individuals who will go out into the world and change it,
        Lincoln University and College are drawing the best-qualified qualified thinkers,
        unconventional entrepreneurs, and hyper-resourceful technical experts in all fields
        Lincoln University and College are drawing the best-qualified qualified thinkers,
        unconventional entrepreneurs, and hyper-resourceful technical experts in all fields  
        of human endeavor.
      </p>

      <div className="w-full mt-5">
        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: "white",
              fontFamily: "",
            },
          }}
        >
          <div className="footer-exp text-white w-[50%]">
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              rootClassName="!text-white"
              bordered={false}
              accordion
              style={{
                borderRadius: 20,
                color: "white",
              }}
              items={getItems(panelStyle)}
            />
          </div>
        </ConfigProvider> */}

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "white",
              fontFamily: "",
            },
          }}
        >
          <div className="footer-exp text-white w-full">
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              rootClassName="!text-white"
              bordered={false}
              accordion
              style={{
                borderRadius: 20,
                color: "white",
              }}
              items={
                type == "postgraduate" ? postGraduateItems(panelStyle, Programmes)
                : underGraduateItems(panelStyle, Programmes)
              }
            />
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
};
