import { useRealm } from '@realm/react';
import Realm, { ObjectSchema, BSON } from 'realm';
import { Student } from '@/realm/models';

export type StudentData = {
	name: string;
	address: string;
	phone?: string;
	email?: string;
	current_publication?: string;
};

export function useStudent() {
	const realm = useRealm();

	function createStudent(data: StudentData) {
		console.log('in create student handler');
		console.log(data);
		realm.write(() => {
			realm.create('Student', { ...data, _id: new BSON.ObjectId() });
		});
	}

	return { createStudent };
}
