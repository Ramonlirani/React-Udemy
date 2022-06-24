const Challenge = () => {

    const valor1 = 5;

    const valor2 = 10;


    return (
        <div>
            <div>Challenge  {valor1} e {valor2}</div>
            <button onClick={()=> console.log(valor1 + valor2)}>Clique para somar</button>
                  
        </div>
        
    )
}

export default Challenge;