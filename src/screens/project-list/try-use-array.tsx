import { useMount,useArray } from 'utils';

export const TsReactTest = () => {
    const person: { name: string; age: number}[] = [
        {name: "jack", age: 25},
        {name: "ma", age: 22},
    ]
    const { value, clear, removeIndex, add} = useArray(person)

    useMount(() => {
        
        // console.log(value.notExist)
        // add({name:"david"})
        // removeIndex('123')
    })
    return (
        <div>
            <button onClick={() => add({name: "john", age: 22})}>add john</button>
            {/* 点击删除第一项 */}
            <button onClick={() => removeIndex(0)}>remove 0 </button>
            <button onClick={() => clear()}>clear</button>
            {value.map((person,index) => (
               <>
                <div>{index}</div>
                <div>{person.name}</div>
                <div>{person.age}</div>
               </>
            ))}
        </div>
    )
}