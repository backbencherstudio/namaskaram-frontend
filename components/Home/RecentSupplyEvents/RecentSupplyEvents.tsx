"use client"

import TxshareIcon from '@/components/Icons/TxshareIcon';
import ReuseAbleTable from '@/components/reusable/Features/reuseable-table';
import { useFilterPagination } from '@/hooks/useFilterHook';
import { TableRowItem } from '@/types/TableRowItem';
import React, { ReactNode } from 'react'

export default function RecentSupplyEvents() {




  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = ["DATE", "TYPE", "AMOUNT", "NOTES", "FROM", "TX"];
  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
      (item) => (
        <span className="text-[#999] lg:text-xl md:text-lg text-base font-normal leading-[150%]">
          {item?.date}
        </span>
      ),
      (item) => (
        <div className="lg:text-xl md:text-lg text-base font-normal leading-[150%]">
          <span className={`px-4 py-1 bg-[rgba(217,217,217,0.10)] rounded-[32px] ${item?.type === "Emission"
            ? "text-[#2AAFA2]"
            : item?.type === "Adjustment"
              ? "text-[#EFBE84]"
              : "text-[#999]"
            }`}>{item?.type}</span>
        </div>
      ),
      (item) => (
        <span className={`lg:text-xl md:text-lg text-base font-normal leading-[150%] ${item?.type === "Emission" ? "text-[#2AAFA2]" : item?.type === "Adjustment"
          ? "text-[#EFBE84]"
          : "text-[#999]"
          }`}>
          {item?.amount}
        </span>
      ),
      (item) => (
        <span className="text-[#999] lg:text-xl md:text-lg text-base font-normal leading-[150%]">
          {item?.title}
        </span>
      ),
      (item) => (
        <span className="text-[#999] lg:text-xl md:text-lg text-base font-normal leading-[150%] ">
          {item?.tx}
        </span>
      ),
      (item) => (
        <span className="md:text-base cursor-pointer text-sm font-semibold leading-[128%] track32 text-[#999] flex justify-end ">
          <TxshareIcon />
        </span>
      ),
    ];

  return (
    <div className='bg-[#030303] lg:p-8 p-6'>
      <h3 className='text-white  lg:mb-12 mb-6 md:mb-8 lg:text-[32px] md:text-[28px] text-2xl font-medium leading-[150%]'>Recent Supply Events</h3>
      <div>
        <ReuseAbleTable
          allClientDataList={relevantData}
          isLoadings={false}
          currentItems={currentItems}
          tableHeader={tableHeader}
          tableRowDataRenderers={tableRowDataRenderers}
          isBg={false}
        />

      </div>
      <a href='#' className='text-[#EFBE84] flex justify-center lg:pt-8 pt-6 lg:text-xl md:text-lg text-base font-normal leading-[150%] underline underline-offset-3'>View more on ASTER</a>
    </div>
  )
}

const relevantData = [
  {
    date: "Dec 30, 2024",
    type: "Buyback",
    amount: -125000,
    token: "ASTER",
    title: "Weekly buyback #12",
    tx: "0x1a2b3c",
    link: "#"
  },
  {
    date: "Dec 28, 2024",
    type: "Emission",
    amount: +50000,
    token: "ASTER",
    title: "Staking rewards distribution",
    tx: "0x4d5e6f",
    link: "#"
  },
  {
    date: "Dec 25, 2024",
    type: "Buyback",
    amount: -98500,
    token: "ASTER",
    title: "Weekly buyback #11",
    tx: "0x7g8h9i",
    link: "#"
  },
  {
    date: "Dec 23, 2024",
    type: "Emission",
    amount: +75000,
    token: "ASTER",
    title: "Team vesting unlock",
    tx: "0xj0k1l2",
    link: "#"
  },
  {
    date: "Dec 20, 2024",
    type: "Adjustment",
    amount: +15000,
    token: "ASTER",
    title: "Token migration correction",
    tx: "0xm3n4o5",
    link: "#"
  },
];
