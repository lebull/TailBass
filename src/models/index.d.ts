import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet",
  NULL = "_null"
}

export enum EventStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export enum EventAssignmentStatus {
  DJACCEPTED = "DJACCEPTED",
  HOSTACCEPTED = "HOSTACCEPTED",
  APPROVED = "APPROVED"
}

export declare class ModelProfileConnection {
  readonly items?: (Profile | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelProfileConnection>);
}

export declare class Profile {
  readonly id: string;
  readonly owner?: string;
  readonly djname?: string;
  readonly genre?: string;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly EventAssignments?: ModelEventAssignmentConnection;
  constructor(init: ModelInit<Profile>);
}

export declare class ModelEventAssignmentConnection {
  readonly items?: (EventAssignment | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelEventAssignmentConnection>);
}

export declare class EventAssignment {
  readonly id: string;
  readonly status?: EventStatus | keyof typeof EventStatus;
  readonly slotNumber?: number;
  readonly profileID: string;
  readonly eventID: string;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly Profile?: Profile;
  constructor(init: ModelInit<EventAssignment>);
}

export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly startDateTime?: string;
  readonly hostUserName?: string;
  readonly numslots?: number;
  readonly status?: EventStatus | keyof typeof EventStatus;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly EventAssignments?: ModelEventAssignmentConnection;
  constructor(init: ModelInit<Event>);
}

export declare class ModelEventConnection {
  readonly items?: (Event | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelEventConnection>);
}

