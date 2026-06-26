
import { useEffect } from 'react';
import './App.css'
import { Landing } from './components/Landing'
import { Signin } from './components/Signin';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import { Topbar } from './components/Topbar';
import { Cards } from './components/Cards';


function App() {
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
}

function StoreApp(){
  const[user, setUser] = useRecoilState(userAtom)

  useEffect(() => {
    onAuthStateChanged(auth ,function(user) {
    if (user && user.email) {
        setUser({
          Loading: false,
          user:{
            email: user.email
          }
        })
        console.log('This is the user: ', user)
    } else {
        setUser({
          Loading: false
        })
        console.log('There is no logged in user');
    }
});
  }, [])

  if(user.Loading){
    return <div>
      Loading....
    </div>
  }

  if(!user.user){
    return <div>
      <Signin/>
    </div>
  }

  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar/>
        <Cards> hi there </Cards>
      </div>
    </div>
  )
}

export default App
