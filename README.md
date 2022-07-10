# Note Taker
    
Milestone Project III for NJIT Coding Bootcamp, created by Alex C

## Note Taking App

Note Taker is an interactive and flexible application that allows a user or multiple users to track and plan events.

### Features

Interactive to-do lists with a single or multiple users, shared chatrooms to plan events.

### Bonus Features

Bill splitting application.

## Data Models

Models for SQL Tables

### UserTable

| UserId | UserName | Password | DisplayName |

### UserEvents

| EventId | EventTitle | UserId | DateCreated |

### Notes

| NoteId | EventId | NoteTitle | NoteContent | DateModified |

### Routes

| Controller | Method | Route | Description|
| --- | --- | --- | --- |
| Notes | Get | 'notes/' | Fetches list of notes |
| Notes | Get | 'notes/:id' | Fetches specific note |
| Notes | Get | 'notes/event/:eventId' | Notes for specific user|
| Notes | Post | 'notes/' | Creates a new note |
| Notes | Put | 'notes/:id' | Modifies an existing note |
| Notes | Delete | 'notes/:id' | Deletes an existing note |
| --- | --- | --- | --- |
| Events | Get | 'events/' | Fetches list of events |
| Events | Get | 'events/:id' | Fetches specific events |
| Events | Get | 'events/user/userId' | Fetches events for specific user |
| Events | Post | 'events/' | Creates a new event |
| Events | Put | 'events/:id' | Modifies an existing event |
| Events | Delete | 'events/:id' | Deletes an existing event |
| --- | --- | --- | --- |
| Users | Get | 'users/' | Fetches list of users |
| Users | Get | 'users/:id' | Fetches specific user |
| Users | Post | 'users/' | Creates a new user |
| Users | Put | 'users/:id' | Modifies an existing user |
| Users | Delete | 'users/:id' | Deletes an existing user |

## Completed Tasks
| Date | Summary |
| ---- | ------- |
| July 5, 2022 | ReadMe file, Initial Commit. |
| July 7, 2022 | Controllers, Models, Database |


