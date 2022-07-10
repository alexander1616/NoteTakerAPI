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
| UserEvents | Get | 'userevents/' | Fetches list of events |
| UserEvents | Get | 'userevents/:id' | Fetches specific events |
| UserEvents | Get | 'userevents/user/userId' | Fetches events for specific user |
| UserEvents | Post | 'userevents/' | Creates a new event |
| UserEvents | Put | 'userevents/:id' | Modifies an existing event |
| UserEvents | Delete | 'userevents/:id' | Deletes an existing event |
| --- | --- | --- | --- |
| UserTable | Get | 'usertables/' | Fetches list of users |
| UserTable | Get | 'usertables/:id' | Fetches specific user |
| UserTable | Post | 'usertables/' | Creates a new user |
| UserTable | Put | 'usertables/:id' | Modifies an existing user |
| UserTable | Delete | 'usertables/:id' | Deletes an existing user |

### ERD 
|                                     |         
| --- |
| public |
| UserTables |                                    
| userId integer |                                
| userName character varying (255) |              
| password character varying (255) |.             
| displayName character varying (255) |          
                                                  
|                                     |           
| --- |                                           
| public |                                       
| UserEvents |
| eventId integer |
| eventTitle character varying (255) |
| userId integer |
| dateCreated timestamp with time zone |

|                                     |
| --- |
| public |
| Notes |
| noteId integer |
| eventId integer |
| noteContent character varying (255) |
| createdAt timestamp with time zone |
| updatedAt timestamp with time zone |

|              |
| --- |
| public |
| SequelizeMeta |
| name character varying (255) |


## Completed Tasks
| Date | Summary |
| ---- | ------- |
| July 5, 2022 | ReadMe file, Initial Commit. |
| July 7, 2022 | Controllers, Models, Database |


