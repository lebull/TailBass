import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Profile {
  readonly id: string;
  readonly userid: string;
  readonly djname?: string;
  readonly genre?: string;
  readonly untitledfield?: string;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}