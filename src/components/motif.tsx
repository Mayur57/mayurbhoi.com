export default function Motif({ children }: any) {
    return (
        <div className='not-prose dark:text-white text-center text-sm opacity-70 pointer-events-none select-none uppercase font-mono tracking-widest'>
            {children}
        </div>
    )
}