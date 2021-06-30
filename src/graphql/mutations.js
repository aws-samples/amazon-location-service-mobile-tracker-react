/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $trackerName: String
    $deviceId: String
    $Latitude: String
    $Longitude: String
  ) {
    updateLocation(
      trackerName: $trackerName
      deviceId: $deviceId
      Latitude: $Latitude
      Longitude: $Longitude
    )
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      name
      trackerName
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      name
      trackerName
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      name
      trackerName
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
