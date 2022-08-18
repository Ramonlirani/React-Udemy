import { useEffect, useState } from "react";

const HookUserEffect = () => {
    //1 - useEffect, sem dependencias
    useEffect(()=>{
        console.log("Estou sendo executado")
    })

    const[number, setNumber]  = useState(1);

    const changeSomething = () =>{
        setNumber(number +1);
    };

    // 2 - array de dependencias vazio(o [] é usado para ser executado apenas uma vez)
    useEffect(()=>{

        console.log("Serei executado apenas uma vez")
    
    },[]);

    // 3 - item no array de dependencia 
    const [ anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {

        if ( anotherNumber > 0){
            console.log("Sou executado apenas quanto o anotherNumber muda!")
        }    
    }, [anotherNumber]);

    //4 - cleanup do useEffect - limpar quando atualizar para outra pagina e o useEffect nao continuar rodando
    useEffect(()=>{

        //const timer = setTimeout(() =>{
        //    console.log("Hello world");

            //setAnotherNumber(anotherNumber +1);
        //}, 2000);

        
        //return () => clearTimeout(timer);
    },  [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>
            Executar!
        </button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber +1)}>
            Mudar anotherNumber!
        </button>
        <hr />
    </div>
  )
}

export default HookUserEffect