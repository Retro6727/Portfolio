import Link from "next/link";

export default function Project() {
    return (
        <>
        <h1>Projects</h1>
        <h2>Cafetaria Management System</h2>
        <strong>Technologies Used: HTML, CSS, Bootstrap, Django, Python, REST API </strong><br />
        <Link href={"https://github.com/Retro6727/EDjango.git"} target="_blank">GitHub</Link>
        <h4>Description</h4>
        <p>
        The Cafeteria Management System is a web-based application designed to streamline the operations of a cafeteria. It allows users to view the menu, place orders, track inventory, and manage payments. The system provides an admin dashboard for cafeteria staff to manage the menu, view orders, and track sales. Built using Django for the backend and REST APIs for efficient communication between the frontend and backend, the system ensures smooth user interaction and operational efficiency. HTML, CSS, and Bootstrap are used to create a responsive, user-friendly interface that can be accessed across devices. 
        </p>

        <h2>Web Based Airline Showroom</h2>
        <strong>Technologies Used: HTML, CSS, Bootstrap</strong>
        <h4>Description</h4>
        <p>
        The Airline Showroom project showcases a virtual showroom for airlines, where users can explore different airline options, view flight details, and learn about the services provided. The website is designed to help users easily navigate through various offerings of the airline, providing an attractive and informative platform. Built with HTML and CSS, the project uses Bootstrap to ensure that the website is responsive and looks good across all screen sizes. The layout provides a seamless browsing experience, making it ideal for showcasing airline services online.
        </p>

        <h2>Multiplayer Table Tennis Game</h2>
        <strong>Tools: Unity3D</strong><br />
        <Link href={"https://github.com/Retro6727/Group-4-multiplayer-table-tennis.git"} target="_blank">GitHub</Link>
        <p>
        The Multiplayer Table Tennis Game is an interactive game built using Unity3D that allows players to compete against each other in a virtual table tennis match. The game features a real-time multiplayer mode, where players can challenge others across the globe. Using Unity’s powerful game engine, the game supports high-quality graphics, responsive controls, and an immersive user experience. The game also includes multiple difficulty levels, a leaderboard, and multiplayer match-making capabilities, making it both fun and competitive. It highlights the use of Unity3D for developing immersive, interactive games with a focus on multiplayer gameplay.
        </p>
        </>
    )
}