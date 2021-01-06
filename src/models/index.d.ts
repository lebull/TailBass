import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class EventAssignment {
  readonly id: string;
  readonly Profile?: Profile;
  readonly slotNumber?: number;
  readonly profileID: string;
  readonly eventID: string;
  constructor(init: ModelInit<EventAssignment>);
  static copyOf(source: EventAssignment, mutator: (draft: MutableModel<EventAssignment>) => MutableModel<EventAssignment> | void): EventAssignment;
}

export declare class Profile {
  readonly id: string;
  readonly owner?: string;
  readonly djname?: string;
  readonly genre?: string;
  readonly EventAssignments?: (EventAssignment | null)[];
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

export declare class Event {
  readonly id: string;
  readonly startDateTime?: string;
  readonly hostUserName?: string;
  readonly EventAssignments?: (EventAssignment | null)[];
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}