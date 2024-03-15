import { useState } from "react";
import InputMask from 'react-input-mask';

function CreateUsers(){

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefonealuno, setTelefoneAluno] = useState("");
    const [telefoneresponsavel, setTelefoneResponsavel] = useState("");
    const [email, setEmail] = useState("");
    const [datanasc, setDataNasc] = useState("");

    function createUsers(event) {
        event.preventDefault();

        let user = JSON.stringify({name:name, cpf:cpf, rg:rg, telefonealuno:telefonealuno, telefoneresponsavel:telefoneresponsavel,
        email:email, datanasc:datanasc});
        console.log(user);
    }

    return(
        <form onSubmit={createUsers} className="form"> 
            <h1 className="cadAlunosTitle">REGISTRO DE ALUNOS</h1>
            
            <input className="input"
                type='text'
                placeholder='DIGITE SEU NOME AQUI'
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
            />

            <InputMask className="input"
                type='text'
                placeholder='CPF'
                mask ="999.999.999-99"
                value={cpf}
                onChange={(event)=>{setCpf(event.target.value)}}
            />

            <InputMask className="input"
                type='text'
                placeholder='RG'
                value={rg}
                mask ="99.999.999-9"
                onChange={(event)=>{setRg(event.target.value)}}
            />

            <InputMask className="input"
                type='text'
                placeholder='TELEFONE ALUNO'
                value={telefonealuno}
                mask ="(99) 99999-9999"
                onChange={(event)=>{setTelefoneAluno(event.target.value)}}
            />

            <InputMask className="input"
                type='text'
                placeholder='TELEFONE RESPONSÁVEL'
                value={telefoneresponsavel}
                mask ="(99) 99999-9999"
                onChange={(event)=>{setTelefoneResponsavel(event.target.value)}}
            />

            <input className="input"
                type='text'
                placeholder='EMAIL'
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
            />

            <InputMask className="input"
                type='text'
                placeholder='DATA NASCIMENTO'
                value={datanasc}
                mask ="99/99/9999"
                onChange={(event)=>{setDataNasc(event.target.value)}}
            />
            
            <button type='submit' className='button'>CADASTRAR</button>
            
        </form>
    );
}

export default CreateUsers;