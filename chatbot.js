window.sendMessage = function () {

    let input = document.getElementById("userInput");
    let question = input.value.toLowerCase();

    let answer = "Sorry, I can answer only questions about Aravind Kapilavayi.";

    if(question.includes("who are you")){
        answer = "I am Aravind Kapilavayi, Principal Quality Manager with 15+ years of experience.";
    }

    else if(question.includes("experience")){
        answer = "Aravind has 15+ years of experience in Aerospace, Automotive and IT industries.";
    }

    else if(question.includes("companies")){
        answer = "QNX BlackBerry, ZF, Infosys, Hyundai Mobis, Honeywell, Cyient and DRDO.";
    }

    else if(question.includes("aspice")){
        answer = "Experienced ASPICE Assessor with Automotive SPICE assessments and process improvements.";
    }

    else if(question.includes("functional safety")){
        answer = "Experienced in ISO 26262 Functional Safety processes and assessments.";
    }

    else if(question.includes("cybersecurity")){
        answer = "Experienced in Automotive Cybersecurity and ISO 21434.";
    }

    else if(question.includes("certification")){
        answer = "ASPICE Assessor, ISO Lead Auditor, Six Sigma Black Belt, SAFe Agilist and Scrum Master.";
    }

    else if(question.includes("skills")){
        answer = "ASPICE, ISO 9001, ISO 21434, ISO 26262, CMMI, Quality Management and Supplier Quality.";
    }

    else if(question.includes("education")){
        answer = "Aravind holds an M.Tech degree.";
    }

    document.getElementById("chat-messages").innerHTML +=
    "<p><b>You:</b> " + question + "</p>";

    document.getElementById("chat-messages").innerHTML +=
    "<p><b>Aravind AI:</b> " + answer + "</p>";

    input.value = "";

};
