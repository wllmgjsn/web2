import './App.css';
import UserCard from './components/UserCard';
import type { User } from './types';

const App = () => {
    const users : User[] = [
        {name : "Alice", age : 23, online : false},
        {name : "Bob", age : 45, online : false},
        {name : "Charlie", age : 20, online : true}
    ]

    return (
        users.map((user) => (
            <UserCard
            name={user.name}
            age={user.age}
            online={user.online}
            ></UserCard>
        ))
    );
};

export default App;
