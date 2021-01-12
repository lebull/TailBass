/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createEventAssignment = /* GraphQL */ `
  mutation CreateEventAssignment(
    $input: CreateEventAssignmentInput!
    $condition: ModelEventAssignmentConditionInput
  ) {
    createEventAssignment(input: $input, condition: $condition) {
      id
      status
      slotNumber
      profileID
      eventID
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
export const updateEventAssignment = /* GraphQL */ `
  mutation UpdateEventAssignment(
    $input: UpdateEventAssignmentInput!
    $condition: ModelEventAssignmentConditionInput
  ) {
    updateEventAssignment(input: $input, condition: $condition) {
      id
      status
      slotNumber
      profileID
      eventID
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
export const deleteEventAssignment = /* GraphQL */ `
  mutation DeleteEventAssignment(
    $input: DeleteEventAssignmentInput!
    $condition: ModelEventAssignmentConditionInput
  ) {
    deleteEventAssignment(input: $input, condition: $condition) {
      id
      status
      slotNumber
      profileID
      eventID
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      startDateTime
      hostUserName
      numslots
      status
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      startDateTime
      hostUserName
      numslots
      status
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      startDateTime
      hostUserName
      numslots
      status
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
