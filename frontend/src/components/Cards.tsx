export const Cards = ({children} :{children: React.ReactNode}) => {
    return(
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm"> 
            {children}
        </div>
    )
}