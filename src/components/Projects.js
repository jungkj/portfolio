
import projImg4 from "../assets/img/Budget app 1.png"
export const Projects = () => {
    
    const projects = [
        {
            title: "iOS Movie App",
            description: "",
            technologies: "Swift, SwiftUI, Google Firebase, MVVM Design",
            imgURL: projImg1,
            
        },
        {
            title: "Xv6 MFQ Scheduler",
            description: "Engineered and implemented a Multi-Level Feedback Queue (MFQ) scheduler in xv6, replacing the basic Round Robin algorithm. Created four priority levels with specifically tailored time quantums ranging from 200 ms to 1600 ms", 
            technologies: "C",
            imgURL: projImg2,

        },
        {
            title: "Stock Market Sentiment Bot",
            description: "Used Twitter Developer API to evaluate over 500,000 tweets per month to generate sentiment score on market with 85% accuracy. Equipped Bot with natural language processing (NLP) to convert raw data into market sentiment.",
            technologies: "Python, NLP, Web Scraping", 
            imgURL: projImg3,
        },
        {
            title: "Budget Badger",
            description: "Designed and developed Budget Badger, a gamified budgeting web-app tailored for college students, allowing for budgeting to become fun and rewarding. Deployed the app to fellow students and gained 100+ student users in one week.",
            technologies: "React, JavaScript, Bootstrap, MongoDB, CSS",
            imgURL: projImg4,
        }
    ]
    return (
        
    ) 
}