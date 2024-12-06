import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

const Tabs = ({ tabs, setSelected, children }) => {
  return (
    <div className="w-full px-1 sm:px-0">
      <TabGroup>
        <TabList className="flex space-x-6 rounded-xl p-1">
          {tabs.map((tab, index) => (
            <Tab as={Fragment} key={tab.title}>
              {({ hover, selected }) => (
                <button
                  className={clsx(
                    "w-fit flex items-center outline-none gap-2 px-3 py-2.5 text-base font-medium leading-5 bg-gray-700 rounded-lg",
                   
                    selected
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-neutral-300 hover:text-blue-400"
                  )}
                  onClick={() => setSelected(index)}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full mt-2">{children}

        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Tabs;