import Realm, { ObjectSchema, BSON } from 'realm';

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
			email: { type: 'string', optional: true },
			current_publication: { type: 'string', optional: true },
			// A student's list of bible studies done.
			studies: 'Studies[]',
			createdAt: { type: 'date', default: new Date() },
		},
	};
}
