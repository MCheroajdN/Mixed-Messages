
//create messages arrays

function mixedMessages() {
const inspirationsArrObj = [{writer: "Antonio Gub", resite: "The greatest assets is the 24hours in front of you."},
{writer: "Mfon Chris", resite: "Luck is an excuse for the loser looking at a winner."},
{writer: "Dav Bland ", resite: "Busyness does not equal productiveness."},
{writer: "Bandy Jest", resite: "Forget yourself for others and others will not forget you."},
{writer: "Gurind Ray", resite: "If you do not stand for somethiing you will fall for anything."}];
const moneyArr = [ "pay off debts", "give it away", "start a business", "save it for retirement", "go shopping"]
const healthFactsArr = ["sleeping", "listening to music", "calling a friend", "exercise"];


//variable to store length of arrays
const inspirationsArrLen = inspirationsArrObj.length;
const moneyLen = moneyArr.length;
const healthFactsLen = healthFactsArr.length;

//generate and concatenate random messages from arrays
const createRandomMessages = () => {

//to generate index to use to retrieve message from inspirationsArrObj array
const inspirationIndex = Math.floor(Math.random() * inspirationsArrLen);

const inspirationMessage = `Food for thought by ${inspirationsArrObj[inspirationIndex]['writer']}: "${inspirationsArrObj[inspirationIndex]['resite']}"`;
const moneyMessage = `I won a million pounds and I want to ${moneyArr[Math.floor(Math.random() * moneyLen)]}.`;
const healthFactsMessage = `If you are tired ${healthFactsArr[Math.floor(Math.random() * healthFactsLen)]} will help.`;

//generate message on a new line
const messageOutput = `${inspirationMessage} \n${moneyMessage} \n${healthFactsMessage}`;

return messageOutput;
}
const greatMessage = createRandomMessages();
return greatMessage;
}

console.log(mixedMessages());