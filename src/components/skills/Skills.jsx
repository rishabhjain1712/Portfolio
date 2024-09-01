import React from "react";
import "./skills.css";
import { HiCheckBadge } from "react-icons/hi2";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills & Tools</h2>
      <div className="skills__container container grid">

        {/* Programming Languages & Frameworks */}
        <div className="skills__content">
          <h3 className="skills__title">Programming Languages & Frameworks</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-C++-gray?logo=cplusplus&logoColor=white" alt="C++" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Node.js-gray?logo=node.js&logoColor=white" alt="Node.js" />
                </div>
              </div>
              
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-TypeScript-gray?logo=typescript&logoColor=white" alt="TypeScript" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-JavaScript-gray?logo=javascript&logoColor=white" alt="JavaScript" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-React-gray?logo=react&logoColor=white" alt="React" />
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Java-gray?logo=java&logoColor=white" alt="Java" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Python-gray?logo=python&logoColor=white" alt="Python" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Angular-gray?logo=angular&logoColor=white" alt="Angular" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Django-gray?logo=django&logoColor=white" alt="Django" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Express-gray?logo=express&logoColor=white" alt="Express" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skills__content">
          <h3 className="skills__title">Databases</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-MySQL-gray?logo=mysql&logoColor=white" alt="MySQL" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Oracle-gray?logo=oracle&logoColor=white" alt="Oracle" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-MongoDB-gray?logo=mongodb&logoColor=white" alt="MongoDB" />
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Postgres-gray?logo=postgresql&logoColor=white" alt="Postgres" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Redis-gray?logo=redis&logoColor=white" alt="Redis" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                <img src="https://img.shields.io/badge/-Firebase-gray?logo=firebase&logoColor=white" alt="Firebase" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills__content">
          <h3 className="skills__title">Tools</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-GitHub-gray?logo=github&logoColor=white" alt="GitHub" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Git-gray?logo=git&logoColor=white" alt="Git" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Hadoop-gray?logo=apachehadoop&logoColor=white" alt="Hadoop" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-AWS-gray?logo=amazonaws&logoColor=white" alt="AWS" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-GCP-gray?logo=google-cloud&logoColor=white" alt="GCP" />
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Linux-gray?logo=linux&logoColor=white" alt="Linux" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Docker-gray?logo=docker&logoColor=white" alt="Docker" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Kubernetes-gray?logo=kubernetes&logoColor=white" alt="Kubernetes" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Apache%20Spark-gray?logo=apache-spark&logoColor=white" alt="Apache Spark" />
                </div>
              </div>
              <div className="skills__data">
                <HiCheckBadge />
                <div>
                  <img src="https://img.shields.io/badge/-Tableau-gray?logo=tableau&logoColor=white" alt="Tableau" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
