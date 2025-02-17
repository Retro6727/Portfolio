export default function About() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, padding: '10px' }}>
                <img 
                    src="/myprofile.jpg"
                    alt="Your Image" 
                />
            </div>
            <div style={{ flex: 1, padding: '20px'}}>
                <h1>About Me</h1>
                <p>I'm a Computer Science professional with a strong foundation in programming, web development, and 3D animation. 
                    Proficient in languages like Python, JavaScript, and C++, I specialize in creating responsive web applications using frameworks such as Next and Django. With expertise in 3D tools like Blender and Maya, I combine technical skills and creativity to deliver engaging solutions. I also have experience in database management, version control, and Agile development, and I am always eager to stay up-to-date with the latest industry trends.</p>
            </div>
        </div>
    );
}
