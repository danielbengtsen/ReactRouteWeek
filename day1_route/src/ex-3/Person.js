import React, { useState } from "react";

const Person = () => 
{
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const [personsTable, setPersonsTable] = useState(allPersons);
    const [nameEdit, setNameEdit] = useState("");


    function handleChangeAdd(event) 
    {
        const target = event.target;
        const value = target.value;
        setName(value);
    }
    
    function handleChangeEdit(event) 
    {
        const target = event.target;
        const value = target.value;
        setNameEdit(value);
    }

    function handleSubmitAdd(event) 
    {
        event.preventDefault();
        names.push(name);
        setPersonsTable(allPersons);
    }

    function deletePerson(id) 
    {
        names.splice(id, 1);
        setPersonsTable(allPersons);
    }

    function editPerson(id)
    {
        names.splice(id, 1, nameEdit);
        setPersonsTable(allPersons);
    }

    function allPersons() 
    {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index}>
                                <td>{name}</td>
                                <td><input type="submit" onClick={() => deletePerson(index)} value="Delete" /></td>
                                <td>
                                    <input type="submit" onClick={() => editPerson(index)} value="Edit" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
    return (
        <div>
            <form>
                <p>Add new person</p>
                <input id="name" onChange={handleChangeAdd} type="text" value={name} />
                <input type="submit" value="Save" onClick={handleSubmitAdd} />
            </form>
            <p>Edit person input field</p>
            <input type="text" id="nameEdit" onChange={handleChangeEdit} value={nameEdit} />
            {personsTable}
        </div>
    );
};

export default function StateLiftDemo() 
{
    return (
        <div style={{ marginTop: 25 }}>
            <Person />
        </div>
    );
}