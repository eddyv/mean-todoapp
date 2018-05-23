# mean-todoapp

This repo contains a basic todo application using MongoDB, ExpressJS, Angular, and Node.

## Properties
A todo consists of 4 main properties.

1. Title
   - The title of the todo.
2. Description
   - The description of the todo.
3. Date
   - The date created of the todo. (generated at creation and in the format [Month Day, Year])
4. Status
   - The status of the todo. (Default: New)

## Features

- Add a todo
- Edit a todo
- Mark a todo as 'Done'
- Delete a todo

#### Adding a Todo

To add a todo simply fill out the form above the table and click on the  blue button labelled _Add_. At present there is no requirement for the title or description to be filled at creation.

#### Editing a Todo

There are two ways to edit a todo.

 1. Double click on a row of the todo in the table you wish to edit.
 2. In the options column click on the blue button with the pencil icon.
 
 Once clicked you will enter edit mode where the text will change into form input. To exit form input simply click the green button with the checkmark icon or press enter.
 
 #### Marking a Todo as 'Done'
 There are two ways.
 
  1. While in edit mode change the text under the status column to be 'Done' and click the green button with the checkmark icon. Capitals and spaces matter.
  2. Or when not in edit mode click the green button with the checkmark icon to set the status to 'Done'.
  
 When a todo is set to done the edit and done options will dissappear leaving only the red button with an X.
 
 #### Delete a Todo
 To delete a todo simply click the red button with an X.
 
 ## Live Demo
 
 **TBD**
 
 ## Local Environment - Windows
 
 To see this work on a local machine first you'll have to clone this repo. Open command prompt and run
 
 `git clone https://github.com/eddyv/mean-todoapp.git`
 
 Then you'll need to run the express server and start MongoDB.
 
 To start MongoDB locate the exe file mongod.exe and execute it. The command should be similar to this
 
 `& "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"`
 
 cd to the mean-todoapp folder and run `npm i`. This will install all the node dependencies. 
 
 When done run `npm start`. The command prompt will respond with _Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp_ if the express server is properly started.
 
 Then you'll  need to run the angular app.
 
 cd to the angular folder and run
 
 `npm i`. Once completed run `ng serve`.
 
 You should then be able to access the application at _localhost:4200_.
 
The local environment by default is set to localhost a.k.a 127.0.0.1 with express running on port 3000, angular running on 4200, and          mongodb at 27017.

## Credits
Based on a tutorial from Noman Hasan that can be found here: https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96
