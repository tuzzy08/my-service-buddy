import { useRealm } from '@realm/react';

type StudentData = {
	name: string;
	address: string;
	phone?: string;
};

export function useStudent() {
	const realm = useRealm();

	function createStudent(data: StudentData) {}
}
