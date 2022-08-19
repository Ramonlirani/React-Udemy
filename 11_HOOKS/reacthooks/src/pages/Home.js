//useContext
import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

import HookUseReducer  from "../components/HookUseReducer"
import HookUserEffect from "../components/HookUserEffect"
import HookUseState from "../components/HookUseState"
import HookUseRef from "../components/HookUseRef"



const Home = () => {
    const { contextValue } = useContext(SomeContext);

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUserEffect/>
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef/>
    </div>
  )
}

export default Home