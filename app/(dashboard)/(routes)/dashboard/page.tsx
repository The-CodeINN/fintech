import { Button } from '@/components/ui/button';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>$ 100, 000</h2>
      </section>

      <section className='flex items-center gap-2 py-3'>
        <Button variant='secondary' className=''>
          + Expense
        </Button>
        <Button className='btn btn-secondary'>+ Income</Button>
      </section>

      {/* list of transactions */}
      <section className='py-6'>
        <h3 className='text-2xl font-bold'>My Transactions</h3>
        <div className='flex flex-col gap-4 mt-6'></div>
      </section>
    </div>
  );
};

export default Dashboard;
