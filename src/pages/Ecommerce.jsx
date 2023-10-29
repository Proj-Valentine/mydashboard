import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
import { GoDotFill } from 'react-icons/go';
// import { FaCircle } from 'react-icons/fa';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {earningData, SparklineAreaData,ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  return (
    <div className = "mt-12">
      <div className = "flex flex-wrap lg:flex-nowrap justify-center">
        <div className = "bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$100,000.97</p>
            </div>
          </div>
          <div className="mt-0">
            <Button 
            color="white" 
            bgColor="blue" 
            text ="Download"
            borderRadius="10px"
            size="md">
            </Button> 
          </div>
        </div>
        <div className="flex m-3 flex-wrap lg:flex-nowrap jusity-center gap-1 items-center">
          {earningData.map((item)=>(
            <div key ={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button"
              style = {{ color: item.iconColor, backgroundColor: item.iconBg}}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
                <p className="mt-3">
                  <span className="text-lg font-semibold">
                    {item.amount}
                  </span>
                  {/* syncfusion documentaion caution about rendering dynamic values in classes; might not work eg, item.pgcolor */}
                  {/* rendering negative and positive values */}
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}
                </p>

              </button>
            </div>
          ))}
        </div>
      </div> 
     <div className="flex gap-10 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
              <span><GoDotFill/></span>
              <span>Expense</span>
            </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
              <span><GoDotFill/></span>
              <span>Expense</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap flex-wrap justify-center">
          <div className="border-r-1 boder-color m-4 pr-10">
            <div>
              <p>
                <span className="text-3xl font-semibold">$98,000</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white 
                    bg-green-400 ">23%</span>
              </p>
              <p className="text-gray-500 mt-1"> Budget</p>
            </div>
            <div className="mt-8">
              <p>
                <span className="text-3xl font-semibold">$48,000</span>
                
              </p>
              <p className="text-gray-500 mt-1"> Expense</p>
            </div>
            <div className="mt-5">
              <SparkLine
              currentColor="blue"
              id="line-sparkline"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color="blue"/>

            </div>
            <div className="mt-10">

            </div>
            

          </div>

        </div>
      </div>
     </div>
    </div>
  )
}

export default Ecommerce
