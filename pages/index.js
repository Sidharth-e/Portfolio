import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/avatar.jpg";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">My-Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/Sidharth-e/Portfolio/raw/main/public/Sidharth_E_Resume_FullStack.pdf" download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="type text-center p-15 py-10">
            <h2 className="text-4xl py-5 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hi this is Sidharth E
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-left">
            I&apos;m a Full Stack developer. I spend my whole day, practically every day, 
            experimenting with HTML, CSS,JavaScript and web framework dabbling with Python and Asp.net
            </p>
            <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto: sidharthe38943@gmail.com"><AiFillMail/></a>
            <a href="https://www.linkedin.com/in/sidharth-e-6057081bb"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/_sidharth_e_/"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image alt="img" src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Innovative tech mind with 1.11 years of experience working as a computer programmer. Capable of working with a
                      variety of technology and software solutions, and managing databases. Valuable team member who has experience
                      diagnosing problems and developing solutions.Talented person with unique ideas and a history of successful contributions in the field.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-left shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1 hover:shadow-2xl">
              <h3 className="text-2xl font-medium pt-8 pb-2">
                FrontEnd technologies
              </h3>
              <p className="text-gray-800 py-1">* HTML</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* CSS</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* JavaScript</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* React</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* Angular</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* Vue</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">* Asp.net</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1 hover:shadow-2xl">
              <h3 className="text-2xl font-medium pt-8 pb-2 ">
                Backend technologies
              </h3>
              <p className="text-gray-800 py-1">*Python </p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Django</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*MySQL</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Flask</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1 hover:shadow-2xl">
              <h2 className="text-2xl font-large pt-8 pb-2 ">Data Science</h2>
              <p className="text-gray-800 py-1">*Data Wrangling</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Data Visualization</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Programming using python</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Statistical analysis and computing</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
              <p className="text-gray-800 py-1">*Machine learning</p>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I got various opportunities to work on multiple technologies and developed application from scratch.
            Below are some of the projects i worked.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
          <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">1.Host override testing</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">  
                              The application is created as part of SRE automation.
                              The tool is created
                              using c# and selenium which will check overall response time of the web
                              application by host overriding through different servers and calculate the
                              performance of the web site.The application helped SRE to reduce workload by 30%.<br/>
                              <strong>Tech stack:- Asp.net,C#,Selenium</strong>
                            </p>
                          </div>
                        </div>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">2.Python voice assistant bot</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">
                                Developed a personal assistant using python which can perform various actions based on voice commands like sending email,
                    surfing on web, mathematical calculation, playing music, opening files, etc.<br/>
                    <strong>Tech stack:- Python</strong>
                            </p>
                          </div>
                        </div>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">3.Daily Expense Tracker</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">
                                DAILY EXPENSE TRACKER”is a project which proposes to form a process that can help to store and retrieve details regarding the expense of a person or an organazation. My project has severalmodules which are, login Dashboard. It can generate various reports as per
                                requirements. It follows the two- tier architecture with front-end php and back-end SQL Server. My project is capable of generating exepense report
                                based on months ,year aswell as days.<br/>
                                <strong>Tech stack:- PHP,SQL</strong>
                            </p>
                          </div>
                        </div>
            </div>
            <div className="text-center shadow-xl p-5 rounded-xl my-5  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-4">4.Individual household electric power consumption Data Set</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">
                             Performed various techniques in data set and created model<br/>
                                  * Data exploration and analysis.<br/>
                                  * Data Visualization .<br/>
                                  * Regression and Time series analysis.<br/>
                                  * Frequency Domain Analysis.<br/>
                                  <strong>Tech stack:- Python,Data Science</strong>
                            </p>
                          </div>
                        </div>
          </div>
          <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-5">5.Mask detection</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">
                                Developed a deep learning based model for detecting masks over faces in public place to curtail community spread of
                    Coronavirus is presented. The proposed model efficiently handles varying kinds of occlusions in dense situation by
                    making use of ensemble of single and two stage detectors. The ensemble approach not only helps in achieving high
                    accuracy but also improves detection speed considerably. The model is 98.2% accurate at mask detection with aver‐
                    ageinference times of 0.05 seconds per image.<br/>
                    <strong>Tech stack:- Python,Data Science</strong>
                            </p>
                          </div>
                        </div>
                      </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                        <input class="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-6">6.SL triage tool</label>
                        <div class="faq-drawer__content-wrapper">
                          <div class="faq-drawer__content">
                            <p className="text-left">
                              Developed a full stack application for SRE team, &ldquo;SL Triage Tool&rdquo; using Asp.net that allow users to access
multiple advance features related to SRE core analysis.<br/>
<strong>Techstack:- Asp.net,MySQL,Rest api</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                      <input class="faq-drawer__trigger" id="faq-drawer-7" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-7">7.Akaname report genarator</label>
                      <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                          <p className="text-left">
                            Developed a console application for SRE, &ldquo;Akaname report generator&rdquo; using C# that allow users to generate a
                            report for the vendors by Cross verifying the production details with vendors details.<br/>
                           <strong>Tech stack:- C#, MySql</strong> 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                      <input class="faq-drawer__trigger" id="faq-drawer-8" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-8">8.Infra prediction</label>
                      <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                          <p className="text-left">
                            Developed a full-stack web application, &ldquo;Infra prediction&rdquo;, using Angular js that allows users to predict future
Servicenow tickets and Categorize using AI/ML.<br/>
<strong>Techstack:- Angular js,Flask, Python ,chartjs.</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                      <input class="faq-drawer__trigger" id="faq-drawer-9" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-9">9.FootUL</label>
                      <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                          <p className="text-left">
                            Developed a web application,&ldquo;FootUL&rdquo;, using vue.js that allow user to scan the foot and predict the various
stages of footulcer using AI/ML.<br/>
<strong>Techstack:- Vuejs ,Flask, Python.</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                      <input class="faq-drawer__trigger" id="faq-drawer-10" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-10">10.Blockchain-Dashboard-Django</label>
                      <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                          <p className="text-left">
                            I have developed Blockchain-Dashboard using django to fetch and display crypto currency prices/Trade Prices from the Coingecko cryptocurrency API and Binance api.The app will fetch the deatils on every 15sec.
                            Github link:<a href="https://github.com/Sidharth-e/Blockchain-Dashboard-Django">https://github.com/Sidharth-e/Blockchain-Dashboard-Django</a><br/>
<strong>Techstack:- DJango,Python.</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                      <input class="faq-drawer__trigger" id="faq-drawer-11" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-11">11.Portfolio</label>
                      <div class="faq-drawer__content-wrapper">
                        <div class="faq-drawer__content">
                          <p className="text-left">
                            This is my first Portfolio website created usng HTML, CSS and jquery
                            Website link:<a href="https://sidharth-e.github.io/">https://sidharth-e.github.io/</a><br/>
<strong>Techstack:- HTML,CSS,Jquery,JavaScript</strong>
                          </p>
                        </div>
                      </div>
                    </div>
          </div>
        </section>
      </main>
    </div>
  );
}
