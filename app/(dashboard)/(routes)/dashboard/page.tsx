import { Button } from '@/components/ui/button';
import React from 'react';

const Dashboard = () => {
  const data = [
    {
      id: 1,
      title: 'Salary',
      amount: 100000,
      type: 'income',
    },
    {
      id: 2,
      title: 'Rent',
      amount: 100000,
      type: 'expense',
    },
    {
      id: 3,
      title: 'Salary',
      amount: 100000,
      type: 'income',
    },
    {
      id: 4,
      title: 'Debt',
      amount: 100000,
      type: 'expense',
    },
    {
      id: 5,
      title: 'Salary',
      amount: 100000,
      type: 'income',
    },
  ];

  return (
    <div>
      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>₦ 100, 000</h2>
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
        <div className='flex flex-col gap-4 mt-6'>
          {data.map((data) => (
            <div key={data.id}>
              <Button className='w-full py-6 flex justify-between items-center'>
                <div>{data.title}</div>
                <div>
                  {data.type === 'income' ? (
                    <span className='text-green-500 text-xl font-bold'>
                      ₦ {data.amount}
                    </span>
                  ) : (
                    <span className='text-red-500 text-xl font-bold'>
                      ₦ {data.amount}
                    </span>
                  )}
                </div>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
