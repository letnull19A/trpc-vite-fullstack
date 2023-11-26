import { trpc } from "./utils/trpc"

export const Message = () => {

    const query = trpc.createUsers.useQuery()
    const query1 = trpc.user.getUser.useQuery()
    const groups = trpc.group.get.useQuery()
    const hobies = trpc.user.hobies.get.useQuery()

    return (
        <>
            <div>Current message: 
                {query.data}
            </div>
            <p>
                {query1.data?.name}
                {query1.data?.surname}
            </p>
            <h2>Hobies:</h2>
            <ul>
                {hobies.data?.map(item => (<li>{item}</li>))}
            </ul>
            <h2>Groups:</h2>
            <ul>
                {groups.data?.map(item => (<li>{item}</li>))}
            </ul>
        </>
    )
}