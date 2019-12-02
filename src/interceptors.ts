import axios from 'axios';
import LocalStorage from "./utils/SessionStore";
import { IUser } from './models/entities/IUser';
import  configureStore  from './store/configureStore';
import { push } from 'connected-react-router'
export const store = configureStore();

// Add a request interceptor
axios.interceptors.request.use(config => {
	const userInfo = LocalStorage.get<IUser>("authorizedUserDetails");
	if (userInfo) {
		config.headers = {
			Authorization: `Bearer ${userInfo.access_token}`
		}
	}
	return config;
}, (error) => Promise.reject(error));


// Add a response interceptor
axios.interceptors.response.use(response => {
	// Do something with response data
	return response;
}, (error) => {
	// ToDo - 401 refresh token
	if (error && error.response.status === 401 && error.response.data.exp === "token expired") {
		LocalStorage.clearAll();
		store.dispatch(push('/'));
	}
	// Do something with response error
	return Promise.reject(error);
});