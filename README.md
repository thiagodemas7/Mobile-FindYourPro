# Stamplay Ionic Starter Social

<table>
  <tbody>
    <tr>
    <td>
    <img width="150" src="http://s30.postimg.org/3t2sk19pd/Simulator_Screen_Shot_Apr_1_2016_10_07_24_AM.png" />
    </td>
    <td>
    <img width="150" src="http://s9.postimg.org/wcndop0vz/Simulator_Screen_Shot_Apr_1_2016_10_06_35_AM.png" />
    </td>
    <td>
    <img width="150" src="http://s18.postimg.org/xi5ifii55/Simulator_Screen_Shot_Mar_30_2016_3_30_02_PM.png" />
    </td>
    <td>
    <img width="150" src="http://s18.postimg.org/9buv4dw0p/Simulator_Screen_Shot_Mar_30_2016_3_30_18_PM.png" />
    </td>
    </tr>
  </tbody>
</table>



The Stamplay Ionic Starter Social kit is a simple way to get a Stamplay Ionic project up off the ground.

The starter kit comes with a fully featured task list, based on user social accounts. If a user does not wish to create an account, they may use the shared guest Task list to manage their tasks by adding, updating, deleting and marking them complete or incomplete.

Social Account Providers:

- Facebook
- Google
- Twitter
- LinkedIn
- DropBox
- Instagram
- Github
- Angellist

Setup Instructions

1. Clone and cd into repo: `git clone https://github.com/Stamplay/stamplay-ionic-starter-with-social-login`
2. Run `npm install -g ionic`
4. Run `ionic state restore`
5. Run `npm install && gulp install`
6. Run `stamplay init`, add Stamplay app credentials
7. In the `www/index.html`, update the `Stamplay.init("YOUR APP ID")` to include your `APP ID`
8. Inside `www/js/app.js` change the `constant` for `socialProvider` to the lowercase string of the provider (default value:`facebook`).
9. Follow the instructions in the documentation to setup Stamplay to use the social provider login [here](https://stamplay.com/docs/platform/users/authentication).
10. Inside the Stamplay Editor, add a `task` object schema with:
  - **title** - *string*
  - **body** - *string*
  - **complete** - *boolean*
11. Ensure any development domains is enabled on the CORS section of your Stamplay App Dashboard.
12. Run `ionic serve --lab -p 8080`


#### Enjoy!
