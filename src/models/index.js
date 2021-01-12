// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet",
  "NULL": "_null"
};

const EventStatus = {
  "DRAFT": "DRAFT",
  "ACTIVE": "ACTIVE",
  "CANCELED": "CANCELED"
};

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const EventAssignmentStatus = {
  "DJACCEPTED": "DJACCEPTED",
  "HOSTACCEPTED": "HOSTACCEPTED",
  "APPROVED": "APPROVED"
};

const { ModelProfileConnection, Profile, ModelEventAssignmentConnection, EventAssignment, Event, ModelEventConnection } = initSchema(schema);

export {
  ModelAttributeTypes,
  EventStatus,
  ModelSortDirection,
  EventAssignmentStatus,
  ModelProfileConnection,
  Profile,
  ModelEventAssignmentConnection,
  EventAssignment,
  Event,
  ModelEventConnection
};