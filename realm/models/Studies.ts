import Realm, { ObjectSchema, BSON } from "realm";

// interface IStudies {
//   name: string;
//   address: string;
//   phone?: number;
//   email?: string;
//   publication?: string;
//   dateConducted: string;
// }

export class Studies extends Realm.Object<Studies> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;

  static schema: ObjectSchema = {
    name: "Studies",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: { type: "string", indexed: true },
      address: "string",
      phone: { type: "int", optional: true },
      email: { type: "string", optional: true },
      publication: { type: "string", optional: true },
      student: {
        type: "linkingObjects",
        objectType: "Student",
        property: "studies",
      },
      dateConducted: { type: "date", default: new Date() },
    },
  };
}
