import Realm, { ObjectSchema, BSON } from 'realm';

// interface IStudent {
//   name: string;
//   address: string;
//   phone?: number;
//   email?: string;
//   current_publication?: string;
//   createdAt: string;
// }

export class Student extends Realm.Object<Student> {
	_id: BSON.ObjectId = new BSON.ObjectId();
	name!: string;

	static schema: ObjectSchema = {
		name: 'Student',
		primaryKey: '_id',
		properties: {
			_id: 'objectId',
			name: { type: 'string', indexed: true },
			address: 'string',
			phone: { type: 'int', optional: true },
			// publication: { type: 'string', optional: true },
			email: { type: 'string', optional: true },
			current_publication: { type: 'string', optional: true },
			// A student's list of bible studies done.
			studies: 'Studies[]',
			createdAt: { type: 'date', default: new Date() },
		},
	};
}
