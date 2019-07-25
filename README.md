# Dog Train Website
## Table of content
* [About](#about)
* [Problem definition](#problem-definition)
* [Functionality](#functionality)
* [Feature](#feature)
* [Tech stack](#tech-stack)
* [Instruction](#instruction)
* [Design process](#design-process)
* [User Story](#user-story)
* [A workflow diagram of the user journey](#a-workflow-diagram-of-the-user-journey)
* [WireFrames](#wireframes)
* [Database Entity Relationship Diagrams](#database-entity-relationship-diagrams)
* [Project plan and timeline](#project-plan-and-timeline)
* [Trello](#trello)
* [Answers to the Short Answer questions](#short-answer-questions)



## About
1. Link to [App AmazonS3](http://react-keep-static.s3-website-ap-southeast-2.amazonaws.com/)
2. Link to [Github Repo Frond-end](https://github.com/keshibat/dogtrain_react)
3. Link to [Github Repo Back-end](https://dogsdata.herokuapp.com/)




[![Imgur](https://i.imgur.com/Ko5Tu9u.png)](http://react-keep-static.s3-website-ap-southeast-2.amazonaws.com/)



## Problem definition

#### Problem definition:

1. Limited accessibility via mobile device
2. out of date website
3. No existing booking calendar
4. No existing dynamic social media feed into the homepage
5. No existing searchable service area feature
6. Has to be user/non coding friendly for client to manage contents by herself (i.e. Currently using Wix to make website.

#### Solution:
Implementing/resolving all of the above using the most recent technology using the javascript MERN stack, to work with all modern devices. Headless CMS (Content Management System) will enable client to easily update content on the web app by herself without understanding the code. API’s for implementing external content, such as facebook, instagram, twitter, google maps, shopify, will enable more content to be available on clients app, making their products more accessible to potential clients.


### Functionality

Functional modern responsive website that admin user is able to create/read/delete/edit for blog, testimonials, and promotional sections. Enduser will be able to book through webiste which send a booking information to admin.


### Feature
#### Booking
![Imgur](https://i.imgur.com/Oqr9b0C.png)
#### Map
![Imgur](https://i.imgur.com/Uv11dPc.png)



### Tech stack

![Imgur](https://i.imgur.com/rpYWJva.png)

![Imgur](https://i.imgur.com/nDYvIL8.png)


### Instruction for running your lcoal computer

#### Backend(Node, Express, MongoDB)
```
keep your MongoDB running
$ mongod --config /usr/local/etc/mongod.conf

$ git clone https://github.com/keshibat/dogtrain_react.git
$ cd <project directory>
$ npm install
$ npm run dev-server
```

#### Frontend(React)
```
$ git clone https://github.com/josephine-c/doggystyle.git
$ cd <project directory>
$ npm install
$ npm start
```



### Design process


#### original website
![Imgur](https://i.imgur.com/tMCtznI.png)
#### mood baord
![Imgur](https://i.imgur.com/uyp2d7x.jpg)




### User Story

As Maria,
> I want more exposure for my business so that I can train more dogs in Sydney.

> I want a modern way to promote my business so that I can attract more clients.

As Mark,

>I want a professional dog trainer I can refer to, so that I can refer my vet customers to them after they ask me about dog training questions.

As James,
> I want to train my dogs so that they stop crapping in the house.

As Sally,
>I want to leave my dog with someone reliable while on holiday so that I can have peace of mind that they are looked after.

As Kim,
>I want to be able to stay at a dog friendly location when in Hunter Valley, so that I can bring my best friend/dog.

As Nathaniel,
>I'd like to have a dog trainer that is available to come to my house due to time constraints.

### A workflow diagram of the user journey
![Imgur](https://i.imgur.com/tk0MF4x.png)


### WireFrames ###
### /
![Imgur](https://i.imgur.com/OF9qwS0.png)


### /about
![Imgur](https://i.imgur.com/gQghObQ.png)
![Imgur](https://i.imgur.com/0RSfAJy.png)
![Imgur](https://i.imgur.com/9dJMBZN.png)
![Imgur](https://i.imgur.com/GQeGPRv.png)
![Imgur](https://i.imgur.com/I5dD1Kf.png)
![Imgur](https://i.imgur.com/HOhW14P.png)


### /trainning
![Imgur](https://i.imgur.com/Pr7uyo9.png)


### /testimonials
![Imgur](https://i.imgur.com/YcGuY7M.png)


### /blog
![Imgur](https://i.imgur.com/opEAtYp.png)


### /shop
![Imgur](https://i.imgur.com/u0MgHEe.png)


### /booking
![Imgur](https://i.imgur.com/K281kc7.png)


### Database Entity Relationship Diagrams

![Relationship_Diagrams](https://i.imgur.com/Zwy1ONQ.jpg)


### Data Flow Diagram
![Imgur](https://i.imgur.com/biRVqaY.png)

### OO design documentation
![Imgur](https://i.imgur.com/fOBybQw.png)


### Project plan and timeline

### Trello
[![Imgur](https://i.imgur.com/P6egEdG.png)](https://trello.com/b/njBkUzsO/kenjonajo)


### Client communications

Link to [Client communications](https://docs.google.com/document/d/1JxuJsxpX3NBv26FV6oxxyRl3j9TD3vLqCBmjX5Mm0gw/edit?usp=sharing)


### Short Answer Questions

#### 1. What are the most important aspects of quality software?

The most important aspects of quality software are:

1. **Functions as expected** (i.e.buttons work) - The software was designed to serve a purpose (minimum viable product - MVP) and ultimately it should function as intended. This is ultimately the most important aspect of quality software and the MVP should be working, such as booking forms should be able to make a booking and inform the business. The intended user should be able to use the MVP as intended.

2. **No bugs** - In keeping with the first aspect of “functions as expected” - Quality software should have no bugs (or very minimal bugs), which means continuous testing and maintenance of the software would be something that quality software has.

3. Software code is **well documented** and has **code comments** - Good documentation and code comments help the next developers update/maintain the software, as well as give new users a guide to how to use the software when they are starting out.

4. Easy **usability/navigation** - Quality software should be intuitive to use and not require a thick manual to enable clients/users to use it. Using recognizable icons and having a typical standard layout for a web app/site, allows ease of use and thus better user experience. Accessibility, such as color contrast for color blind users and also accessibility while using a mobile device is also important, as more people are using mobile devices to access software.

#### 2. What libraries are being used in the app and why?

- React-DOM - this is the library we need to access for frontend

- **React** - this is the library we need to access for frontend
- **React-DOM** - this is the library we need to access for frontend
- **React-Router-DOM** - for frontend
- **React-redux** - for frontend
- **Express** - this is used for the backend
- **Bulma CSS Framework** - this is used for front end styling
- **Mongoose** - helps create schemas and models for MongoDB
- **React-BingMaps** - importing a map into the react application
- **React-Calendar** - importing a calendar into the react application for booking appointments for customers to the client
- **Node-sass** - sass styling package for the mern stack
- **Axios** - connected our express to react to access our end points
- **FortAwesome** - custom icons used for styling inside the application
- **DotENV** - A package to be able to use our env file inside our application
- **CORS** - Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts
- **Morgan** - To help show in our terminal what was currently happening during events in our app
- **Celebrate** - middleware validation for our express backend



#### 3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?


The team would need to know the scope of the project and what the client/small business wants, the problems which needs fixing, and how the project/website will help resolve these problems. They would need to be able to define the minimum viable product (MVP) and the tools required for the build and release.


The team should be equipped with the following knowledge and skills in order to develop the project:


1. Know the programming **language** for the build (i.e. MERN, HTML/CSS)
2. Be able to **test** the app during build/production/release
3. Be comfortable with **deploying** the app (e.g. AWS and Heroku)
4. Be able to **debug** and fix any errors/problems during coding
5. **Communicate** well with clients and team members to have a sound  understanding of tasks required and expectations, as well as having well defined **user stories**
6. Be able to **work** in a team towards a deadline, using project management tools like Trello boards
7. Be able to **learn** on the job if the client wants to use certain packages that you have not used before, you should have the skill to be able to learn new things
8. Basic **knowledge of design**, and design skills as it would be required for using design tools to make the website look good. Also being aware of accessibility (i.e. Color contrasts for color blind people).
9. Be able to make **responsive design** - responsive websites - different designs for different size devices, such as mobiles and tablets
10. Understand common **security** attacks (i.e. SQL injection, cross-site scripting) and how to prevent them (i.e. protecting your API keys and .env files) and displaying error messages
11. Have good **time management** and have detailed planning, these can include:
  * a. Setting long-term goals as well as short-term.
  * b. Planning tasks in detail to avoid re-planning.
  * c. Make a to-do list to follow each day.
  * d. Breaking difficult tasks into smaller ‘do-able’ piece




#### 4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

With the current project of rebuilding the Mutts With Manners (Sydney dog training app), the skills and knowledge required to complete the project and overcome challenges include the mentioned knowledge and skills requirements from the answers to question 3, specifically knowing the programing language Javascript (MERN stack), tools required (i.e. Postman, AWS, MongoDB & Heroku accounts), being comfortable deploying and debugging.

Also after communicating with the client and her main concern was to update the app’s content without knowing how to code, we were faced with the challenge of learning how to implement a CMS (content management system), such as Strapi. However after learning Strapi and trying to use it for our web app, it was found to be too challenging to implement into our app as the version of strapi we were using was being updated with bugs and Strapi engineers were slow at responding. Therefore, we ultimately decided to change our direction with how we built the app and make an admin dashboard using MERN stack to allow the client to easily make changes to their blog, client testimonials, bookings and advertising post on the homepage. Trello boards were used to keep track of member tasks and participation. Git was used for version control, with GitKraken used to visualise the latest branches and resolve merge conflicts. Balsamic was used to draw our final wireframes.

In terms of keeping the client’s design and branding on point, we took colors from her logo to use in the color scheme for the training information pages, and kept navigation bar at the top of the app and had all her original endpoint/pages. However to modernise the site/app we reassigned tabs and organised and structured her endpoints/pages depending on category, and added new features such as a calendar booking feature for her clients, which would email both the trainer and client on the booking. Other new features include the admin login and forms on the dashboard to change the homepage advert, blogs and testimonials. We improved some of her pages, such as better visualisation of locations of service with a BingMaps API, as well as the layout of the homepage to be cleaner, with all her social media tags at the bottom and a dynamic live twitter feed at the bottom.

As a group, we all had challenges we all faced during our project. Some of these issues were regarding application and usage of codes, to reading through dozens of documents and tutorials. It was also challenging for one of the members to use some of the npm packages (i.e. testing with Cypress and Jest) when using a windows subsystems and therefore had to pair program to complete the task. Near the end of the project it was also quite challenging to communicate with the client, as either they had a busy schedule which did not allow them to respond on time.


#### 5. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

Overall we had an effective level of knowledge and skill in the team to deliver and build the MVP, within the given time frame. However, given more time we would really like to implement a CMS system to enable the client to edit every page of her web app.


Nathaniel - moving around and getting used to the states and class components in React. Improvements for future would be more practice with the framework and applications.


