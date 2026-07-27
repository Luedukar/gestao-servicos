import clsx from 'clsx';
import { UserRoundIcon } from 'lucide-react';

export function CustomerDashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div
        className={clsx(
          'bg-slate-100 border-2 border-gray-200 rounded-lg h-40 w-80 p-4 text-sm',
        )}
      >
        <div className='flex items-center gap-2'>
          <UserRoundIcon
            className={clsx('text-slate-500 bg-slate-200 rounded-md h-12 w-12')}
          />
          <p className={clsx('text-black font-bold uppercase')}>
            Lucas Vargas Fernandes
          </p>
        </div>
        <div className='flex justify-between pb-2'>
          <p className={clsx('text-gray-400 font-medium')}>
            Data de Nascimento:
          </p>
          <p className={clsx('text-gray-400 font-medium')}>14/03/2007</p>
        </div>
        <div className='flex justify-between'>
          <p className={clsx('text-gray-400 font-medium')}>CPF:</p>
          <p className={clsx('text-gray-400 font-medium')}>068.924.070-90</p>
        </div>
      </div>

      <div
        className={clsx(
          'bg-slate-100 border-2 border-gray-200 rounded-lg h-40 w-80 p-4 text-sm',
        )}
      >
        <div className='flex items-center gap-2'>
          <UserRoundIcon
            className={clsx('text-slate-500 bg-slate-200 rounded-md h-12 w-12')}
          />
          <p className={clsx('text-black font-bold uppercase')}>
            Lucas Vargas Fernandes
          </p>
        </div>
        <div className='flex justify-between pb-2'>
          <p className={clsx('text-gray-400 font-medium')}>
            Data de Nascimento:
          </p>
          <p className={clsx('text-gray-400 font-medium')}>14/03/2007</p>
        </div>
        <div className='flex justify-between'>
          <p className={clsx('text-gray-400 font-medium')}>CPF:</p>
          <p className={clsx('text-gray-400 font-medium')}>068.924.070-90</p>
        </div>
      </div>

      <div
        className={clsx(
          'bg-slate-100 border-2 border-gray-200 rounded-lg h-40 w-80 p-4 text-sm',
        )}
      >
        <div className='flex items-center gap-2'>
          <UserRoundIcon
            className={clsx('text-slate-500 bg-slate-200 rounded-md h-12 w-12')}
          />
          <p className={clsx('text-black font-bold uppercase')}>
            Lucas Vargas Fernandes
          </p>
        </div>
        <div className='flex justify-between pb-2'>
          <p className={clsx('text-gray-400 font-medium')}>
            Data de Nascimento:
          </p>
          <p className={clsx('text-gray-400 font-medium')}>14/03/2007</p>
        </div>
        <div className='flex justify-between'>
          <p className={clsx('text-gray-400 font-medium')}>CPF:</p>
          <p className={clsx('text-gray-400 font-medium')}>068.924.070-90</p>
        </div>
      </div>
    </div>
  );
}
