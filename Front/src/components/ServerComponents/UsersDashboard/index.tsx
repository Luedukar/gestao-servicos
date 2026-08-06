import { getUsers } from '@/services/authservice';
import clsx from 'clsx';
import { UserRoundIcon } from 'lucide-react';

export async function UsersDashboard() {
  // TODO: Criar coluna de tipo de usuário (cliente ou colaborador), status (ativo, inativo), tipos de permissão na base de dados
  // TODO: Definir quais menus o sistema terá
  const users = await getUsers();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {users.map(user => (
        <div
          key={user.cpf}
          className={clsx(
            'bg-slate-100 border-2 border-gray-200 rounded-lg min-h-40 w-80 p-4 text-sm',
          )}
        >
          <div className='flex items-center gap-2'>
            <UserRoundIcon
              className={clsx(
                'text-slate-500 bg-slate-200 rounded-md h-12 w-12',
              )}
            />
            <p className={clsx('text-black font-bold uppercase')}>
              {user.nome} {user.sobrenome}
            </p>
          </div>
          <div className='flex justify-between pb-2'>
            <p className={clsx('text-gray-400 font-medium')}>
              Data de Nascimento:
            </p>
            <p className={clsx('text-gray-400 font-medium')}>
              {new Date(user.aniversario).toLocaleDateString('pt-BR')}
            </p>
          </div>
          <div className='flex justify-between'>
            <p className={clsx('text-gray-400 font-medium')}>CPF:</p>
            <p className={clsx('text-gray-400 font-medium')}>{user.cpf}</p>
          </div>
          <div className='flex justify-between'>
            <p className={clsx('text-gray-400 font-medium')}>Categoria:</p>
            <p className={clsx('text-gray-400 font-medium')}>{user.cpf}</p>
          </div>
          <div className='flex justify-between'>
            <p className={clsx('text-gray-400 font-medium')}>Situação:</p>
            <p className={clsx('text-gray-400 font-medium')}>{user.cpf}</p>
          </div>
          <div className='flex justify-between'>
            <p className={clsx('text-gray-400 font-medium')}>Permissão:</p>
            <p className={clsx('text-gray-400 font-medium')}>{user.cpf}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
