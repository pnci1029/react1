export default function TabButton({children, onSelect, isSelected}) {
    // function handleClick() {
    //     console.log('hello world!');
    // }

    return (
        <li>
            <button className={isSelected ? "active" : null} onClick={onSelect}>{children}</button>
        </li>
    )
};