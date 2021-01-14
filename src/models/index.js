// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventStatus = {
  "DRAFT": "DRAFT",
  "ACTIVE": "ACTIVE",
  "CANCELED": "CANCELED"
};

const { Profile, EventAssignment, Event } = initSchema(schema);

export {
  Profile,
  EventAssignment,
  Event,
  EventStatus
};