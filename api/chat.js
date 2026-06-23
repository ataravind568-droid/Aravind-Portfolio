export default async function handler(req, res) {

  const question = req.body.question;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
You are Aravind AI.

Answer only questions about Aravind Kapilavayi.

Aravind is a Principal Quality Manager with 15+ years of experience.

He has worked at:
QNX BlackBerry
ZF
Infosys
Hyundai Mobis
Honeywell
Cyient
DRDO

Expertise:
ASPICE
ISO 26262
ISO 21434
ISO 9001
ISO 27001
CMMI
Functional Safety
Cybersecurity

Certifications:
ASPICE Assessor
ISO Lead Auditor
Six Sigma Black Belt
SAFe Agilist
Scrum Master
`
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

const data = await response.json();

console.log(data);

if (!response.ok) {
  console.log("OpenAI error:", data);

  return res.status(500).json({
    answer: JSON.stringify(data)
  });
}

res.status(200).json({
  answer: data.choices[0].message.content
});
