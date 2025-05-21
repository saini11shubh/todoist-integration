# Todoist Integration – Project → Sections → Tasks → Comments

This Node.js project connects to the [Todoist REST API v2](https://developer.todoist.com/rest/v2/) to:

- Fetch all **Projects**
- Fetch all **Sections** within each Project
- Fetch all **Tasks** within each Section
- Fetch all **Comments** on each Task
- Consolidate all data into a **hierarchical JSON tree**

---

## Project Structure

├── .env # Environment config (contains Todoist token and api bash)  
├── server.js # Main integration script  
├── package.json  
├── README.md

---

## Requirements

- Node.js (v14+)
- A [Todoist](https://todoist.com) account
- A Todoist **Personal Access Token (PAT)**

---

## Setup

### 1. Clone this repository

```bash
git clone https://github.com/saini11shubh/todoist-integration.git
cd todoist-integration
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```properties
TODOIST_TOKEN=your_token_here
API_BASE =https://api.todoist.com/rest/v2
```

> if you have not account on todoist, so you can use my token for testing purpose as a "ed44d68ba616351b033e0c749912056982bde0a8"

### Run the integration to fetch and display the full data tree:

```bash
node server.js
```

### Example Output

```json
[
  {
    "project": {
      "id": "2354122843",
      "parent_id": null,
      "order": 0,
      "color": "charcoal",
      "name": "Inbox",
      "comment_count": 0,
      "is_shared": false,
      "is_favorite": false,
      "is_inbox_project": true,
      "is_team_inbox": false,
      "url": "https://app.todoist.com/app/project/6c3Fh3MprVfRrM4H",
      "view_style": "list",
      "description": ""
    },
    "sections": []
  },
  {
    "project": {
      "id": "2354122923",
      "parent_id": null,
      "order": 1,
      "color": "charcoal",
      "name": "Integration Test",
      "comment_count": 0,
      "is_shared": false,
      "is_favorite": false,
      "is_inbox_project": false,
      "is_team_inbox": false,
      "url": "https://app.todoist.com/app/project/6c3FhGWr3rr8FJv2",
      "view_style": "list",
      "description": ""
    },
    "sections": []
  },
  {
    "project": {
      "id": "2354124002",
      "parent_id": null,
      "order": 2,
      "color": "charcoal",
      "name": "NodeJS Integration Demo",
      "comment_count": 0,
      "is_shared": false,
      "is_favorite": false,
      "is_inbox_project": false,
      "is_team_inbox": false,
      "url": "https://app.todoist.com/app/project/6c3FpJQWqghj67Gh",
      "view_style": "list",
      "description": ""
    },
    "sections": [
      {
        "section": {
          "id": "191943449",
          "v2_id": "6c3FpJVmc5qwVwg9",
          "project_id": "2354124002",
          "v2_project_id": "6c3FpJQWqghj67Gh",
          "order": 1,
          "name": "Demo Section"
        },
        "tasks": [
          {
            "task": {
              "id": "9181297904",
              "assigner_id": null,
              "assignee_id": null,
              "project_id": "2354124002",
              "section_id": "191943449",
              "parent_id": null,
              "order": 1,
              "content": "Test Task",
              "description": "",
              "is_completed": false,
              "labels": [],
              "priority": 1,
              "comment_count": 1,
              "creator_id": "53964069",
              "created_at": "2025-05-20T16:16:46.172624Z",
              "due": null,
              "url": "https://app.todoist.com/app/task/9181297904",
              "duration": null,
              "deadline": null
            },
            "comments": [
              {
                "id": "3789866027",
                "task_id": "9181297904",
                "project_id": null,
                "content": "Auto-created comment",
                "posted_at": "2025-05-20T16:16:47.352816Z",
                "posted_by_id": "53964069",
                "updated_at": "2025-05-20T16:16:47.326598Z",
                "attachment": null,
                "upload_id": null,
                "reactions": {},
                "uids_to_notify": []
              }
            ]
          },
          {
            "task": {
              "id": "9181304080",
              "assigner_id": null,
              "assignee_id": null,
              "project_id": "2354124002",
              "section_id": "191943449",
              "parent_id": null,
              "order": 2,
              "content": "Second Task",
              "description": "",
              "is_completed": false,
              "labels": [],
              "priority": 1,
              "comment_count": 1,
              "creator_id": "53964069",
              "created_at": "2025-05-20T16:18:25.217483Z",
              "due": null,
              "url": "https://app.todoist.com/app/task/9181304080",
              "duration": null,
              "deadline": null
            },
            "comments": [
              {
                "id": "3789869039",
                "task_id": "9181304080",
                "project_id": null,
                "content": "check comment",
                "posted_at": "2025-05-20T16:18:38.916000Z",
                "posted_by_id": "53964069",
                "updated_at": "2025-05-20T16:18:39.850320Z",
                "attachment": null,
                "upload_id": null,
                "reactions": {},
                "uids_to_notify": []
              }
            ]
          },
          {
            "task": {
              "id": "9181488795",
              "assigner_id": null,
              "assignee_id": null,
              "project_id": "2354124002",
              "section_id": "191943449",
              "parent_id": null,
              "order": 3,
              "content": "Project Task",
              "description": "",
              "is_completed": false,
              "labels": [],
              "priority": 1,
              "comment_count": 2,
              "creator_id": "53964069",
              "created_at": "2025-05-20T17:08:42.709456Z",
              "due": null,
              "url": "https://app.todoist.com/app/task/9181488795",
              "duration": null,
              "deadline": null
            },
            "comments": [
              {
                "id": "3789915051",
                "task_id": "9181488795",
                "project_id": null,
                "content": "Task for checking purposes",
                "posted_at": "2025-05-20T17:09:05.122000Z",
                "posted_by_id": "53964069",
                "updated_at": "2025-05-20T17:09:06.490033Z",
                "attachment": null,
                "upload_id": null,
                "reactions": {},
                "uids_to_notify": []
              },
              {
                "id": "3789915109",
                "task_id": "9181488795",
                "project_id": null,
                "content": "second comment for test",
                "posted_at": "2025-05-20T17:09:19.750000Z",
                "posted_by_id": "53964069",
                "updated_at": "2025-05-20T17:09:20.666650Z",
                "attachment": null,
                "upload_id": null,
                "reactions": {},
                "uids_to_notify": []
              }
            ]
          }
        ]
      }
    ]
  }
]
```
