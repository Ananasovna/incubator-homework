import React, {ChangeEvent, Dispatch, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (
    name: string,
    setError: Dispatch<React.SetStateAction<string | null>>,
    setName: Dispatch<React.SetStateAction<string>>,
    addUserCallback: (name: string) => void,
) => {
    if (!name) {
        setError('Ошибка! Введите имя!');
    } else {
        addUserCallback(name);
        setName('');
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: Dispatch<React.SetStateAction<string | null>>) => {
    if (!name) {
        setError('Ошибка! Введите имя!')
    } else {
        setError('')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === 'Enter') {
        addUser();
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value ? setName(e.currentTarget.value) : (error && setError('Ошибка! Введите имя!'));
        console.log(e)

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let totalUsers = users.length;
    let lastUserName = users[users.length - 1]?.name;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
