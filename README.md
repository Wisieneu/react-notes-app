# React notes

It's a simple React app made for note taking. It features adding, editing, deleting notes with a database cloud sync. It debounces updates, uses useState and useEffect hooks to keep it dynamic. Pretty cool.

## Project demo:

### Optimizations:

If i had the time, I would implement authentication so that users won't need their own database, also some note folders and additional styling. As I'm just getting started with react, more complex concepts like that will most likely be practiced in more complex and more ambitious React projects so that they could have of a **_wow_** effect.

### Project setup

In order to start developing, you will need your own [Firebase DB](https://firebase.google.com/). Once you get the configuration creds, create a **dbconfig.db** file in the project's root folder and `export default` your config object. It will get imported by **firebase.js** and unless there are some backward compatibility issues, the cloud sync should work.
