
import HttpService from "./HttpService";
import {IWorkFlowTemplate} from "../models/entities/IWorkFlowTemplate";

export default class WorkflowTemplateService {

	static getWorkFlowTemplate(templateId: string): Promise<IWorkFlowTemplate> {
		return new Promise((resolve, reject) => {
				HttpService.get<IWorkFlowTemplate>(`workflow/template/${templateId}`)
					.then((response) => resolve(response))
					.catch(error => reject(error))
			}
		)
	}
}