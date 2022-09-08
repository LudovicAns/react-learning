import {useState} from 'react'
import Item from '../Item/Item';
import {v4 as uuidv4} from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {text: "Faire les courses", id: uuidv4()},
        {text: "Promener le chien", id: uuidv4()},
        {text: "Faire le virement", id: uuidv4()},
        {text: "Acheter un ordinateur", id: uuidv4()}
    ])

    const [stateInput, setStateInput] = useState();

    const deleteElement = uuid => {
        const newDataArr = dataArr.filter(({id}) => id !== uuid);
        setDataArr(newDataArr);
    };

    const modifyElement = (uuid, text) => {
        let array = []
        dataArr.forEach(item => {
            if (item.id === uuid) {
                array.push({
                    'text': text,
                    id: item.id
                });
            } else {
                array.push(item);
            }
        })
        setDataArr(array);
    }

    const addElement = (text) => {
        if (!text) {
            alert("La saisie est vide")
            return;
        }
        const newDataArr = dataArr.concat([{
            'text': text,
            id: uuidv4()
        }]);
        setDataArr(newDataArr);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addElement(stateInput);
        let input = document.querySelector('#todo');
        setStateInput(null);
        input.value = null;
    };

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => onSubmit(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input
                type="text"
                className="form-control"
                id="todo"
                onInput={({target}) => setStateInput(target.value)} />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button> 
            </form>
            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
                {dataArr.map((value) => {
                    return <Item text={value.text} key={value.id} id={value.id} delFunc={deleteElement} modifyFunc={modifyElement}/>
                })}
            </ul>
        </div>

    );
}