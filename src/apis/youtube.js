import axios from 'axios';

const KEY ='AIzaSyDvR52hXY5-i_OYd0KhF-5-x4qxEe9rUDo';

export default axios.create({

	baseURL:'https://www.googleapis.com/youtube/v3',

	params:{
		part :'snippet',
		maxResults:5,
		key:KEY,
	}

});
