import React, {ChangeEvent, Dispatch, KeyboardEvent, useEffect, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

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
        setError('empty name');
    } else {
        addUserCallback(name);
        setName('');
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: Dispatch<React.SetStateAction<string | null>>) => {
    if (!name) {
        setError('name is empty')
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

    useEffect(() => {
        setTotalUsers(totalUsers + 1);
        setLastUserName(name);
    }, [name]
)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value ? setName(e.currentTarget.value) : (error && setError('empty name'));
        console.log(name)

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

    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [lastUserName, setLastUserName] = useState<string>('some name');

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
