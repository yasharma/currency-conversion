import HttpService from "./HttpService";
import {ISubjectPagination} from "../models/entities/IMetadata";

export default class SubjectService {
	static getSubjects(page = 1, size = 100): Promise<ISubjectPagination> {
		return new Promise((resolve, reject) => {
				HttpService.get<ISubjectPagination>(`subjects?index=${page}&size=${size}`)
					.then((response) => resolve(response))
					.catch(error => reject(error))
			}
		)
	}
}