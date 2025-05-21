// server.js
require('dotenv').config();
const axios = require('axios');
const pLimit = require('p-limit');

const API_BASE = process.env.API_BASE || 'https://api.todoist.com/rest/v2';
// If you don't have a Todoist account, you can use my token (included in the .env file) for testing purposes only.
const TOKEN = process.env.TODOIST_TOKEN || "ed44d68ba616351b033e0c749912056982bde0a8"

const headers = {
    Authorization: `Bearer ${TOKEN}`
};

// Concurrency limiter to avoid rate limits (max 4 requests at once)
const limit = pLimit(4);

// Fetch all projects
async function fetchProjects() {
    const res = await axios.get(`${API_BASE}/projects`, { headers });
    return res.data;
}

// Fetch all sections in a project
async function fetchSections(projectId) {
    const res = await axios.get(`${API_BASE}/sections?project_id=${projectId}`, { headers });
    return res.data;
}

// Fetch tasks in a section
async function fetchTasks(sectionId) {
    const res = await axios.get(`${API_BASE}/tasks?section_id=${sectionId}`, { headers });
    return res.data;
}

// Fetch comments for a task
async function fetchComments(taskId) {
    const res = await axios.get(`${API_BASE}/comments?task_id=${taskId}`, { headers });
    return res.data;
}

// Build the hierarchical JSON tree
async function buildDataTree() {
    const projects = await fetchProjects();

    const projectData = await Promise.all(projects.map(project => limit(async () => {
        const sections = await fetchSections(project.id);

        const sectionData = await Promise.all(sections.map(section => limit(async () => {
            const tasks = await fetchTasks(section.id);

            const taskData = await Promise.all(tasks.map(task => limit(async () => {
                const comments = await fetchComments(task.id);
                return {
                    task,
                    comments
                };
            })));

            return {
                section,
                tasks: taskData
            };
        })));

        return {
            project,
            sections: sectionData
        };
    })));

    return projectData;
}

// Run the integration and print the result
(async () => {
    try {
        const tree = await buildDataTree();
        console.dir(tree, { depth: null });
    } catch (error) {
        console.error('Error building data tree:', error?.response?.data || error.message);
    }
})();
