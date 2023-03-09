import { useEffect, useRef, useState } from 'react'
import {BiEditAlt} from 'react-icons/bi'
import styled from 'styled-components';

export default function EditButton(){
    const [description,setDescription] = useState('ALOUU');
    const [isEditing, setIsEditing] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState(description);
    const inputRef = useRef(null);
    const openEdit = () => {
        setIsEditing(true);
    }
    
    const cancelEdit = () => {
        setDescriptionInput(description);
        setIsEditing(false);
    }

    useEffect(() => { 
        if(isEditing) inputRef.current.focus()
    },[isEditing]);

    const handleKeyDown = async (event) => {
        if(event.key === 'Enter'){
            // Requisição Put para o Back-End atualizar o texto
            // Se a requisição der certo setDescription(descriptionInput) e setIsEditing(false);
            // Se nao der certo cancelEdit()
        }
        if(event.key === 'Escape') cancelEdit();
    }
    return(
        <Container>
            <BiEditAlt onClick={() => isEditing ? cancelEdit():openEdit()} color='#FFF' size='20px'/>
            {isEditing ? 
                <input ref={inputRef} onKeyDown={handleKeyDown} onChange={(e) => setDescriptionInput(e.target.value)} value={descriptionInput} type="text" />
                :
                <p>{description}</p>
            }
        </Container>
    )
}


const Container = styled.div`
    margin: 0 auto;
    width: 200px;
    height: 100px;
    background-color: #000;
    p{
        color: #FFF;
        width: 200px;
        text-align: center;
    }
    input {
        display: block;
        width: 200px;
        
    }
`