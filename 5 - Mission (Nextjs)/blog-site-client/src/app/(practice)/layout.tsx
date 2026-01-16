import Link from 'next/link';
import React from 'react';

const PracticeLayout = (
    { children, marketingSlot, salesSlot }:
        {
            children: React.ReactNode
            marketingSlot: React.ReactNode
            salesSlot: React.ReactNode
        }
) => {
    return (
        <div className=''>
            <nav className='flex gap-10 m-8'>
                <Link className='hover:underline' href="/development">Development</Link>
                <Link className='hover:underline' href="/marketing">Marketing</Link>
                <Link className='hover:underline' href="/settings">Settings</Link>
                <Link className='hover:underline' href="/sales">Sales</Link>
            </nav>
            <div className='flex'>
                {marketingSlot}
                {salesSlot}
            </div>
            {children}
        </div>
    );
};

export default PracticeLayout;