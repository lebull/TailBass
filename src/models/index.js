// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EventAssignment, Profile, Event } = initSchema(schema);

export {
  EventAssignment,
  Profile,
  Event
};