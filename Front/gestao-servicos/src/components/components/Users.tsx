import clsx from 'clsx';
import { UserRoundIcon } from 'lucide-react';

type User = {
  id: string | number;
  nome: string;
  sobrenome: string;
  aniversario: string;
  cpf: string;
};

type UsersProps = {
  users?: User[];
};

function Users(props: UsersProps) {
  const users: User[] = props.users || [];

  if (users.length === 0) {
    return (
      <p className='rounded-lg bg-white p-6 text-center text-gray-600 shadow-sm'>
        Nenhum usuarios cadastrado.
      </p>
    );
  }

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {users.map(info => {
          return (
            <section
              key={info.id}
              className={clsx(
                'bg-slate-100 border-2 border-gray-200 rounded-lg h-40 w-80 p-4 text-sm',
              )}
            >
              <div className='flex items-center gap-2'>
                <UserRoundIcon
                  className={clsx(
                    'text-slate-500 bg-slate-200 rounded-md h-12 w-12',
                  )}
                />
                <p className={clsx('text-black font-bold uppercase')}>
                  {info.nome} {info.sobrenome}
                </p>
              </div>
              <div className='flex justify-between pb-2'>
                <p className={clsx('text-gray-400 font-medium')}>
                  Data de Nascimento:
                </p>
                <p className={clsx('text-gray-400 font-medium')}>
                  {info.aniversario}
                </p>
              </div>
              <div className='flex justify-between'>
                <p className={clsx('text-gray-400 font-medium')}>CPF:</p>
                <p className={clsx('text-gray-400 font-medium')}>{info.cpf}</p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
