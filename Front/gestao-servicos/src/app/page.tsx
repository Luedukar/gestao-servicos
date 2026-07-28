import { CustomerDashboard } from '@/components/ServerComponents/CustomerDashboard';

export default function HomePage() {
  return (
    <main className='w-full'>
      <h1 className='text-2xl font-semibold text-slate-800 mb-4'>
        Gestão de Serviços
      </h1>
      <p className='text-slate-600 mb-6'>
        Visualização de clientes cadastrados.
      </p>
      <CustomerDashboard />
    </main>
  );
}
