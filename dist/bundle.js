(()=>{var e={78:(e,t,n)=>{var o=n(404),i=n(672),s=o.submitQuiz;void 0===i.submitQuiz&&(i.submitQuiz=s),e.exports=o},672:(e,t,n)=>{"use strict";e.exports=function(){if("object"==typeof globalThis)return globalThis;var e;try{e=this||new Function("return this")()}catch(e){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==n.g)return n.g}return e}()},404:(e,t,n)=>{"use strict";n.r(t),n.d(t,{submitQuiz:()=>s});let o=[{question:"You may start treatment on a victim when",options:["The victim is unconscious","The victim is a small child with no guardian present","You ask permission and the victim consents to treatment","All of the above."],correct_answer:"All of the above."},{question:"You may stop treatment on a victim when",options:["Medical help takes over","The victim vomits","The victim’s heart stops beating","All of the above."],correct_answer:"Medical help takes over"},{question:"What do you do first when responding to an unwitnessed, unconscious child?",options:["Do a foreign body check","Assess the environment for hazards","Activate EMS","Open the airway."],correct_answer:"Assess the environment for hazards"},{question:"If a wound continues to bleed through a dressing bandage, you should",options:["Remove the dressing and apply a clean one","Lower the bleeding part further if possible","Apply another dressing on top of the old one","Both A and B."],correct_answer:"Apply another dressing on top of the old one"},{question:"A secondary assessment involves",options:["Assessing and recording vital signs","Carrying out a thorough head-to-toe examination of the victim.","Recording the relevant history.","All of the above"],correct_answer:"All of the above"},{question:"Signs and symptoms of hypothermia are",options:["Shivering; very active; shock","Shivering; loss of muscle coordination; confusion","Sweating profusely; red skin; unconsciousness","Blood loss; nausea; dryness"],correct_answer:"Shivering; loss of muscle coordination; confusion"}];var i="When assisting someone who is suffering from a first aid emergency, a first aider may assist the\nvictim if they have first identified themselves, asked for and received the victim’s permission for\ntreatment, or the victim is unconscious. A first aider may also assist a child if no parents or\nguardians are present; however, if there is a parent or guardian present, then permission must\nbe obtained.\nOnce a first aider has initiated first aid treatment, they are not to abandon the victim.\nAccordingly, they must remain with the victim and may only stop treatment if medical\nassistance is administered by another trained professional. A first aider may be justified in\n\nceasing treatment if there is a threat to that first aider’s life or they are too exhausted to\ncontinue and there are no other alternative sources of help available.\nWhen responding to an unconscious victim, regardless of age, there are several steps that must\nbe taken. First, the first aider must assess the area for hazards that could harm the first aider or\nthe victim. Secondly, the first aider must assess the victim’s level of consciousness. Third, if the\nvictim is unresponsive, the first aider should activate EMS. Fourth, the first aider should open\nthe victim’s airway before starting CPR.\nTo treat a wound that is bleeding the first aider should apply a clean sterile dressing to the\nwound and apply pressure to that area. First aiders are no longer required to elevate the\naffected area unless the wound is an arterial bleed. If the blood soaks through the dressing\napply additional dressing over the original dressing and continue to apply pressure. Do not\nremove the original dressing as this may remove any clotting that has formed.\nA secondary assessment is initiated once the primary first aid emergency has been treated. It is\na systematic search with three steps. First, the first aider will assess the victim’s vital signs and\nrecord it in an effective manner. Next, the first aider will perform a head-to-toe examination to\nlook for other injuries. Finally, the first aider will attempt to obtain and record relevant medical\nhistory of the victim.\nHypothermia is a condition that causes one’s body to lose heat faster than it can produce. The\nprimary signs and symptoms include, shivering, loss of muscle coordination, confusion, and\ndisorientation.";function s(){let e=0,t=[];o.forEach(((n,o)=>{let i=document.querySelector(`input[name="question${o}"]:checked`).value;i===n.correct_answer?e++:t.push({question:n.question,selected:i})})),document.getElementById("result").innerText=`Your score: ${e}/${o.length}`;let n="";t.length>0&&t.forEach((e=>{n+=`- Question: ${e.question} Your answer: ${e.selected}`})),n+=`\n Give feedback on the wrong answers based on the following data ${i}`,document.getElementById("loading").style.display="block",document.getElementById("feedback").innerHTML="",async function(e){const t={model:"gpt-3.5-turbo",messages:[{role:"user",content:e}],temperature:.7};try{return(await axios.post("https://api.openai.com/v1/chat/completions",t,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}})).data.choices[0].message.content}catch(e){throw console.error("An error occurred:",e),e}}(n).then((e=>{document.getElementById("feedback").innerText=e,document.getElementById("loading").style.display="none"})).catch((e=>{console.error(e),document.getElementById("loading").style.display="none"})),document.getElementById("myModal").style.display="block"}const r="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";!function(){let e=document.getElementById("quiz");o.forEach(((t,n)=>{let o=document.createElement("div");o.innerHTML=`<h2>${t.question}</h2>`,t.options.forEach(((e,t)=>{o.innerHTML+=`<input type="radio" name="question${n}" value="${e}">${e}<br>`})),e.appendChild(o)}))}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(78)})();