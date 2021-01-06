/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventAssignment = /* GraphQL */ `
  subscription OnCreateEventAssignment {
    onCreateEventAssignment {
      slotNumber
      profileID
      eventID
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Profile {
        id
        owner
        djname
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateEventAssignment = /* GraphQL */ `
  subscription OnUpdateEventAssignment {
    onUpdateEventAssignment {
      slotNumber
      profileID
      eventID
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Profile {
        id
        owner
        djname
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteEventAssignment = /* GraphQL */ `
  subscription OnDeleteEventAssignment {
    onDeleteEventAssignment {
      slotNumber
      profileID
      eventID
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Profile {
        id
        owner
        djname
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      name
      hostUserName
      startDateTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      name
      hostUserName
      startDateTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      name
      hostUserName
      startDateTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
      id
      owner
      djname
      genre
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
      id
      owner
      djname
      genre
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
      id
      owner
      djname
      genre
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventAssignments {
        nextToken
        startedAt
      }
    }
  }
`;
