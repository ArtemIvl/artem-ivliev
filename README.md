**A coding challenge for Full Stack JavaScript role at Miyagami by Artem Ivliev**

To start the application simply clone the repository on your local machine.

Then, after opening it in any code editor run npm install.

After that start a server by running npm start.

Finally, run the frontend part by navigating to /frontend directory and running npm run dev.

The app dispalys images from a public API and allows user to search images based on tags.

NOTE: The api used in this application is a json file with public images cloned from Flickr to my git repository.
The reason for not accessing the API directly from Flickr website is a HTTP 429 Too Many Requests error, though only one request was being made.
Tried different things such as implementing rate limiting within my app or clearing all the browser cache, but nothing worked. Waiting some time to reset the timer also did not help.
The decision was made to clone the file to a public github repository and access it via API.

Enjoy!
