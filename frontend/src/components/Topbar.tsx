export const Topbar = () => {
    return( 
            <div className="max-w-screen-lg w-full mx-auto bg-black align-center px-1">
                <div>
                    <img src="/logo1.png" className="max-w-40 p-3"/>
                </div>
                <NavBar/>
            </div>
        )
}


const topBarItems = [
    {
        title:"About",
        route:"/about"
    },{
        title:"Activity",
        route:"/activity"
    },{
        title:"Problems",
        route:"/problems"
    },{
        title:"Leaderboard",
        route:"/leaderboard"
    }
]

function NavBar(){
    return <div className="flex p-5 mt-5">
        {topBarItems.map(item => <NavBarItems route={item.route} title={item.title}/>)}
    </div>
}


function NavBarItems({title,route}:{
    title:string,
    route:string
}){
    return <div className="mr-10 text-slate-400 cursor-pointer text-lg hover:text-white font-light text-base "> 
        {title}
    </div>
}