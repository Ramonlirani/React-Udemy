import HookUseReducer  from "../components/HookUseReducer"
import HookUserEffect from "../components/HookUserEffect"
import HookUseState from "../components/HookUseState"

const Home = () => {
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUserEffect/>
    </div>
  )
}

export default Home