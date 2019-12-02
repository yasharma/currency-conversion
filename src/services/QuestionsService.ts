import { IQuestion } from "../models/entities/ICurrencyConverter";
import { IPaginatedData } from "../models/entities/IPaginatedData";
import HttpService from "./HttpService";
import { IQuestionFilterBody } from '../models/requests/IQuestionFilter';
import { CancelToken } from 'axios';
import { IUpdateItemRequest } from '../models/requests/IUpdateItemRequest';

export default class QuestionsService {

	static getQuestionById(id: string, revision: string): Promise<IQuestion> {
		return new Promise((resolve, reject) => {
			HttpService.get<IQuestion>(`items/${id}/${revision}`)
				.then((response) => resolve(response))
				.catch(error => reject(error))
		}
		)
	}

	static filterQuestions(filter: IQuestionFilterBody, cancelToken?: CancelToken): Promise<IPaginatedData<IQuestion>> {
		return new Promise((resolve, reject) => {
			HttpService.post<IPaginatedData<IQuestion>, IQuestionFilterBody>('search', filter, cancelToken)
				.then((response) => resolve(response))
				.catch(error => reject(error))
		}
		)
	}

	static updateQuestion(id: string, question: IUpdateItemRequest) {
		return new Promise((resolve, reject) => {
			HttpService.put<any, IUpdateItemRequest>(`items/${id}`, question)
				.then((response) => resolve(response))
				.catch(error => reject(error))
		}
		)
	}
}