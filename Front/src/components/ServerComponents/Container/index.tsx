type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='bg-slate-50 h-screen pt-16'>
      <div className="max-w-screen-lg mx-auto px-8 flex justify-center">{children}</div>
    </div>
  );
}
