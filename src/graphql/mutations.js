/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
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
    }
  }
`;
