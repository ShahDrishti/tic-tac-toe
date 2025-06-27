export default function Player({ name, symbol }) {
    return (
        <li>
            <span className="player">
                <span className="player-name">Player 1</span>
                <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>

            <button></button>
        </li>
    );
}