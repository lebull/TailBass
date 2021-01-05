/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const profilesByOwner = /* GraphQL */ `
  query ProfilesByOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
