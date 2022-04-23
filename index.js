const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const generateReadme = require("./utils/generateReadme")


// creating prompted questions in comand line
function promptUser() {
  inquirer
    .prompt([
      //asking questions with user input
      {
          type: "input",
          name: "userName",
          message: "What is your name?"
      },
      {
          type: "input",
          name: "year",
          message: "What year was this project licensed?"
      },
      {
        type: "input",
        name: "Title",
        message: "What is the Title of your Project?",
      },
      {
        type: "input",
        name: "description",
        message: "write a brief description of your project",
      },
      {
        type: "input",
        name: "Motivation",
        message: "What was your motivation for building this project?",
      },

      {
        type: "input",
        name: "whatProblem",
        message: "What problem does your project aim to solve?",
      },

      {
        type: "input",
        name: "learn",
        message: "What did you learn through making this project?",
      },

      {
        type: "input",
        name: "challenges",
        message: "What challenges did you face in making this project?",
      },

      {
        type: "input",
        name: "futureDevelopment",
        message: "What plans do you have for future development?",
      },

      {
        type: "input",
        name: "link",
        message: "Provide a link to your deployed application.",
      },

      {
        type: "input",
        name: "installation",
        message: "Provide installation instructions if applicable.",
      },

      {
        type: "input",
        name: "usage",
        message: "Provide instructions for use of your application.",
      },

      {
        type: "input",
        name: "contribute",
        message: "How can other developers contribute to your project?",
      },

      {
        type: "list",
        name: "license",
        message: "Choose the license you wish to add to your project",
        choices: ["Apache", "Zero-Clause BSD", "GNU", "MIT","Unlicensed"],
      },
      {
        type: "input",
        name: "Email",
        message: "What is your e-mail?",
      },
      {
        type: "input",
        name: "GitHubUser",
        message: "What is your GitHub user name?",
      },

      {
        type: "input",
        name: "GitHubLink",
        message: "Provide a link for your GitHub:",
      },
    ])

    //send to a file
    .then(function (answers) {
      console.log(answers);

    //Adding License Img and Description
    const MITdescription =`
    Copyright ${answers.userName} ${answers.year}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
    files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, 
    copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
    subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
    Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
    const ApacheDescription = `copyright 
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`

    const GNUdescription = `Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`

    const ZeroClause = `Permission to use, copy, modify, 
    and/or distribute this software for any purpose with or without fee 
    is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
    INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
    IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
    OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER 
    RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
    NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`


    const Unlicensed = `This Project is unlicensed.`
    
    if (answers.license === "MIT"){
        console.log(MITdescription)
        

    } else if (answers.license === "Apache") {
        console.log(ApacheDescription)

    } else if (answers.license === "GNU") {
        console.log(GNUdescription)

    } else if (answers.license === "Zero-Clause BSD"){
        console.log(ZeroClause)

    } else {
        console.log(Unlicensed)
    };

    let LicensingDescription = [MITdescription,ApacheDescription,GNUdescription,Unlicensed,ZeroClause]

    //code for creating the README file layout with user input.
      const README = `
# ${answers.Title}

//img license here//
<img id="image" src=" " alt=" " width ="50px" height= "50px"> </img>

## Table of Contents

<a href="#description">1.Description </a>

<a href="#install">2.Installation </a>

<a href="#use">3.Usage </a>

<a href="#contribute">4.Contributing </a>

<a href="#license">5.License </a> //Add license badges and description on select.

<a href="#test">6.Tests </a>

<a href="#questions">7.Questions </a>



<h2 id="describe">Description</h2>

${answers.description}

 ${answers.Motivation}. 

 ${answers.whatProblem}.

 ${answers.learn}.

 ${answers.challenges}.

 ${answers.futureDevelopment}.

Check out the Project here!
${answers.link}



<h2 id="install">Installation</h2>

${answers.installation}

<h2 id="use">Usage</h2>

${answers.usage}
    
<h2 id="contribute">Contributing</h2>

${answers.contribute}

<h2 id="test"> Tests </h2>


<h2 id="questions">Questions</h2>

If you have any questions, please feel free to E-mail me at ${answers.Email}
Or reach out to me via GitHub
 ${answers.GitHubUser}
 ${answers.GitHubLink}


<h2 id="license">License</h2>
${answers.license}
${LicensingDescription[0]}  //figure out how to link selected license



`;
//function to create README.md
      fs.writeFile("professionalReadme.md", README, function (err) {
        err ? console.error(err) : console.log("success!");
      });
    });
}

promptUser();
