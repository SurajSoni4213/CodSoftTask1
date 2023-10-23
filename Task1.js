document.addEventListener("DOMContentLoaded", function () {
    // Sample projects data
    const projects = [
        { name: "Project 1", description: "Creating a personal portfolio using CSS and HTML." },
        { name: "Project 2", description: "Build a simple to-do list application that allows users to add,edit and delete tasks." },
        { name: "Project 3", description: "To create a basic calculator using CSS, HTML, and JavaScript." }
    ];

    const projectList = document.getElementById("project-list");

    // Dynamically populate project items
    projects.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";
        projectItem.innerHTML = `<h3>${project.name}</h3>
                                 <p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });
});
