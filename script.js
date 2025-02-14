// education
document.addEventListener("DOMContentLoaded", function () {
    const tableData = [
        { year: "B. Tech (CSE) 2022-26", IN: "Gandhi Institute of Engineering Technology University, Gunupur", BU: "GIET UNIVERSITY", CGPA: 7.5 },
        { year: "+2 Science in 2022 ", IN: "Maharshi Gurukul Gunupur", BU: "CHSE", CGPA: 69 },
        { year: "10th in 2020", IN: "Saraswati Sishu Vidya Mandira Gunupur ", BU: "BSE", CGPA: 75 }
    ];

    const tableBody = document.querySelector("#dataTable tbody");

    tableData.forEach(row => {
        const tr = document.createElement("tr");

        Object.values(row).forEach(text => {
            const td = document.createElement("td");
            td.textContent = text;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imagesHTML = `
        <section id="images">
        <h1>Training / Certification</h1>
        <div class="image-container">
            <div class="image-item">
                <img src="hebaleLogo.png" alt="Image 1">
                <p style="font-weight:bold;">Hebbale Academy</p>
                <p>fullstack web development</p>
            </div>
            <div class="image-item">
                <img src="nptel.png" alt="Image 1">
                <p style="font-weight:bold;">NPTEL IIT Kharagpur</p>
                <p>Programming in Java</p>
            </div>
            <div class="image-item">
                <img src="nptel.png" alt="Image 1">
                <p style="font-weight:bold;">NPTEL IIT Kharagpur</p>
                <p>DSA Using Java</p>
            </div>
            <div class="image-item">
                <img src="nptel.png" alt="Image 1">
                <p style="font-weight:bold;">NPTEL IIT Ropar</p>
                <p>Joy of Computing using Python</p>
            </div>
            <div class="image-item">
                <img src="giet.png" alt="Image 1">
                <p style="font-weight:bold;">GIET University</p>
                <p>Android Application Development</p>
            </div>
        </div>
    </section>
    `;

    // Insert the projects section into a container div
    document.getElementById("images-container").innerHTML = imagesHTML;
});

document.addEventListener("DOMContentLoaded", function () {
    const imagesHTML = `
        <section id="images">
        <h1>Internship Programs</h1>
        <div class="image-container">
            <div class="image-item" style="margin-right:300px;">
                <img src="hebaleLogo.png" alt="Image 1">
                <p style="font-weight:bold;">Hebbale Academy</p>
                <p>fullstack web development</p>
            </div>
            <div class="image-item">
                <img src="giet.png" alt="Image 1">
                <p style="font-weight:bold;">GIET University</p>
                <p>Android Application Development</p>
            </div>
        </div>
    </section>
    `;

    // Insert the projects section into a container div
    document.getElementById("internship").innerHTML = imagesHTML;
});

// Projects
document.addEventListener("DOMContentLoaded", function () {
    const projectsHTML = `
        <section id="projects">
            <h1>Project</h1>
            <h2>Internship Project Details</h2>

            <div class="project">
                <h3>Full Stack Development using AWS Cloud On Hebbale Academy (Inventory Management System) </h3>
                <p>Developed a full-stack Inventory Management System 
deployed on AWS for scalable and secure operations. The frontend 
was built using HTML, CSS, and JavaScript to deliver a user-friendly 
interface for inventory tracking and management. The backend was 
developed in Python, leveraging APIs to ensure seamless data 
handling and communication between client and server. AWS 
services such as lambda function  and S3 bucket were used for 
hosting and storage, ensuring high availability, reliability, and 
efficient performance of the system. </p>
            </div>

            <div class="project">
                <h3>Android Development On GIET University </h3>
                <p>Developed a feature-rich Android music application using 
Java, offering seamless music playback with intuitive controls. The 
app includes a built-in music library, playlist creation, and efficient 
music storage within the application. Implemented a user-friendly 
interface with smooth navigation to enhance user experience. 
Integrated media player functionalities for play, pause, skip, and 
shuffle features. </p>
            </div>

            <h2>Personal Project</h2>
            <div class="project">
                <h3>E Commerce Web Site</h3>
                <p>Developed an intuitive and responsive e-commerce 
website using HTML, CSS, and JavaScript for the frontend. The site 
features a user-friendly interface with smooth navigation, product 
browsing, and a secure shopping cart. Integrated product 
categories, search functionality, and filters for easy navigation. 
Designed with mobile responsiveness in mind, ensuring seamless 
performance across all devices. The backend use MySql database 
to store user data. </p>
            </div>

            <div class="project">
                <h3>Smart Parking System using IoT </h3>
                <p>Created a Smart Parking System using IoT to optimize 
parking space management. The system features a web interface 
built with HTML, CSS, and JavaScript for real-time monitoring and 
control. An Android app in Java allows users to book slots and check 
availability. A NoSQL database stores parking data for efficient and 
scalable access. </p>
            </div>

            <div class="project">
                <h3>Smart Irrigation System using IoT </h3>
                <p>Developed a Smart Irrigation System using IoT, combining 
a microcontroller with a web interface (HTML, CSS, JS) and an 
Android app (Java) for real-time monitoring and control. The 
system automatically adjusts irrigation based on soil moisture 
levels, ensuring water conservation. Data is stored in a NoSQL 
database, enabling efficient management and tracking of 
irrigation patterns and system performance. </p>
            </div>

        </section>
    `;

    // Insert the projects section into a container div
    document.getElementById("projects-container").innerHTML = projectsHTML;
});

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

function downloadPDF() {
    const link = document.createElement("a");
    link.href = "Rakesh_CV.pdf"; // Replace with your actual PDF file path
    link.download = "Rakesh_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}