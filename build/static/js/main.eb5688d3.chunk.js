(this.webpackJsonpminpairs=this.webpackJsonpminpairs||[]).push([[0],{154:function(e,t,l){e.exports=l(319)},159:function(e,t,l){},318:function(e,t,l){},319:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),i=l(7),o=l.n(i),r=(l(159),l(29)),h=l(30),s=l(34),p=l(33),d=l(320),u=l(321),m=l(43);var c,b=function(e){var t=function(e){return Object.keys(e).map((function(t){var l=e[t],a=l.successes,n=a+l.failures;return{label:t,reps:n,accuracy:a/n}}))}(function(e){var t={};return e.outcomes.forEach((function(l){var a=e.pairs[l.pairId],n="/".concat(a.left.phoneme,"/ vs /").concat(a.right.phoneme,"/");t[n]||(t[n]={successes:0,failures:0}),l.actualAnswer===l.correctAnswer?t[n].successes+=1:t[n].failures+=1})),t}(e));return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{dataSource:t,columns:[{title:"Pair",dataIndex:"label",key:"label"},{title:"Repetitions",sorter:function(e,t){return e.reps-t.reps},dataIndex:"reps",key:"reps"},{title:"Accuracy",key:"accuracy",dataIndex:"accuracy",defaultSortOrder:"ascend",sorter:function(e,t){return e.accuracy-t.accuracy},render:function(e){return(100*e).toFixed(1)+"%"}}]}),n.a.createElement(m.a,{type:"primary",onClick:e.onDismiss},"Dismiss"))},g=l(81),f=l(323),v=l(324),k=l(322),y=l(25),w=Object(y.a)({},{"shit-sheet":{left:{id:"shit",label:"shit",phoneme:"\u026a"},right:{id:"sheet",label:"sheet",phoneme:"i:"}},"lip-leap":{left:{id:"lip",label:"lip",phoneme:"\u026a"},right:{id:"leap",label:"leap",phoneme:"i:"}},"rich-reach":{left:{id:"rich",label:"rich",phoneme:"\u026a"},right:{id:"reach",label:"reach",phoneme:"i:"}},"still-steal":{left:{id:"still",label:"still",phoneme:"\u026a"},right:{id:"steal",label:"steal",phoneme:"i:"}},"fist-feast":{left:{id:"fist",label:"fist",phoneme:"\u026a"},right:{id:"feast",label:"feast",phoneme:"i:"}},"fit-feet":{left:{id:"fit",label:"fit",phoneme:"\u026a"},right:{id:"feet",label:"feet",phoneme:"i:"}},"slip-sleep":{left:{id:"slip",label:"slip",phoneme:"\u026a"},right:{id:"sleep",label:"sleep",phoneme:"i:"}},"sin-seen":{left:{id:"sin",label:"sin",phoneme:"\u026a"},right:{id:"seen",label:"seen",phoneme:"i:"}},"lick-leak":{left:{id:"lick",label:"lick",phoneme:"\u026a"},right:{id:"leak",label:"leak",phoneme:"i:"}},"pill-peal":{left:{id:"pill",label:"pill",phoneme:"\u026a"},right:{id:"peal",label:"peal",phoneme:"i:"}},"gin-gene":{left:{id:"gin",label:"gin",phoneme:"\u026a"},right:{id:"gene",label:"gene",phoneme:"i:"}},"pick-peak":{left:{id:"pick",label:"pick",phoneme:"\u026a"},right:{id:"peak",label:"peak",phoneme:"i:"}},"rip-reap":{left:{id:"rip",label:"rip",phoneme:"\u026a"},right:{id:"reap",label:"reap",phoneme:"i:"}},"got-gut":{left:{id:"got",label:"got",phoneme:"\u0251"},right:{id:"gut",label:"gut",phoneme:"\u028c"}},"pot-put":{left:{id:"pot",label:"pot",phoneme:"\u0251"},right:{id:"put",label:"put",phoneme:"\u028c"}},"watt-what":{left:{id:"watt",label:"watt",phoneme:"\u0251"},right:{id:"what",label:"what",phoneme:"\u028c"}},"sock-suck":{left:{id:"sock",label:"sock",phoneme:"\u0251"},right:{id:"suck",label:"suck",phoneme:"\u028c"}},"shot-shut":{left:{id:"shot",label:"shot",phoneme:"\u0251"},right:{id:"shut",label:"shut",phoneme:"\u028c"}},"hot-hut":{left:{id:"hot",label:"hot",phoneme:"\u0251"},right:{id:"hut",label:"hut",phoneme:"\u028c"}},"rob-rub":{left:{id:"rob",label:"rob",phoneme:"\u0251"},right:{id:"rub",label:"rub",phoneme:"\u028c"}},"rot-rut":{left:{id:"rot",label:"rot",phoneme:"\u0251"},right:{id:"rut",label:"rut",phoneme:"\u028c"}},"not-nut":{left:{id:"not",label:"not",phoneme:"\u0251"},right:{id:"nut",label:"nut",phoneme:"\u028c"}},"top-tap":{left:{id:"top",label:"top",phoneme:"\u0251"},right:{id:"tap",label:"tap",phoneme:"\xe6"}},"hot-hat":{left:{id:"hot",label:"hot",phoneme:"\u0251"},right:{id:"hat",label:"hat",phoneme:"\xe6"}},"rock-rack":{left:{id:"rock",label:"rock",phoneme:"\u0251"},right:{id:"rack",label:"rack",phoneme:"\xe6"}},"bog-bag":{left:{id:"bog",label:"bog",phoneme:"\u0251"},right:{id:"bag",label:"bag",phoneme:"\xe6"}},"fog-fag":{left:{id:"fog",label:"fog",phoneme:"\u0251"},right:{id:"fag",label:"fag",phoneme:"\xe6"}},"gob-gab":{left:{id:"gob",label:"gob",phoneme:"\u0251"},right:{id:"gab",label:"gab",phoneme:"\xe6"}},"mop-map":{left:{id:"mop",label:"mop",phoneme:"\u0251"},right:{id:"map",label:"map",phoneme:"\xe6"}},"sock-sack":{left:{id:"sock",label:"sock",phoneme:"\u0251"},right:{id:"sack",label:"sack",phoneme:"\xe6"}},"lost-last":{left:{id:"lost",label:"lost",phoneme:"\u0251"},right:{id:"last",label:"last",phoneme:"\xe6"}},"pot-pat":{left:{id:"pot",label:"pot",phoneme:"\u0251"},right:{id:"pat",label:"pat",phoneme:"\xe6"}},"flop-flap":{left:{id:"flop",label:"flop",phoneme:"\u0251"},right:{id:"flap",label:"flap",phoneme:"\xe6"}},"lob-lab":{left:{id:"lob",label:"lob",phoneme:"\u0251"},right:{id:"lab",label:"lab",phoneme:"\xe6"}},"bat-bet":{left:{id:"bat",label:"bat",phoneme:"\xe6"},right:{id:"bet",label:"bet",phoneme:"e"}},"sad-said":{left:{id:"sad",label:"sad",phoneme:"\xe6"},right:{id:"said",label:"said",phoneme:"e"}},"had-head":{left:{id:"had",label:"had",phoneme:"\xe6"},right:{id:"head",label:"head",phoneme:"e"}},"cattle-kettle":{left:{id:"cattle",label:"cattle",phoneme:"\xe6"},right:{id:"kettle",label:"kettle",phoneme:"e"}},"lad-lead":{left:{id:"lad",label:"lad",phoneme:"\xe6"},right:{id:"lead",label:"lead",phoneme:"e"}},"gas-guess":{left:{id:"gas",label:"gas",phoneme:"\xe6"},right:{id:"guess",label:"guess",phoneme:"e"}},"slapped-slept":{left:{id:"slapped",label:"slapped",phoneme:"\xe6"},right:{id:"slept",label:"slept",phoneme:"e"}},"past-pest":{left:{id:"past",label:"past",phoneme:"\xe6"},right:{id:"pest",label:"pest",phoneme:"e"}},"stood-stewed":{left:{id:"stood",label:"stood",phoneme:"\u028a"},right:{id:"stewed",label:"stewed",phoneme:"u:"}},"look-luke":{left:{id:"look",label:"look",phoneme:"\u028a"},right:{id:"luke",label:"luke",phoneme:"u:"}},"wood-wooed":{left:{id:"wood",label:"wood",phoneme:"\u028a"},right:{id:"wooed",label:"wooed",phoneme:"u:"}},"pull-pool":{left:{id:"pull",label:"pull",phoneme:"\u028a"},right:{id:"pool",label:"pool",phoneme:"u:"}},"soot-suit":{left:{id:"soot",label:"soot",phoneme:"\u028a"},right:{id:"suit",label:"suit",phoneme:"u:"}},"cookie-kooky":{left:{id:"cookie",label:"cookie",phoneme:"\u028a"},right:{id:"kooky",label:"kooky",phoneme:"u:"}},"toll-tool":{left:{id:"toll",label:"toll",phoneme:"\u028a"},right:{id:"tool",label:"tool",phoneme:"u:"}},"ram-roam":{left:{id:"ram",label:"ram",phoneme:"\xe6"},right:{id:"roam",label:"roam",phoneme:"o\u028a"}},"bat-boat":{left:{id:"bat2",label:"bat",phoneme:"\xe6"},right:{id:"boat",label:"boat",phoneme:"o\u028a"}},"ham-home":{left:{id:"ham",label:"ham",phoneme:"\xe6"},right:{id:"home",label:"home",phoneme:"o\u028a"}},"sack-soak":{left:{id:"sack2",label:"sack",phoneme:"\xe6"},right:{id:"soak",label:"soak",phoneme:"o\u028a"}},"cat-coat":{left:{id:"cat2",label:"cat",phoneme:"\xe6"},right:{id:"coat",label:"coat",phoneme:"o\u028a"}},"nod-node":{left:{id:"nod",label:"nod",phoneme:"\u0251"},right:{id:"node",label:"node",phoneme:"o\u028a"}},"mop-mope":{left:{id:"mop2",label:"mop",phoneme:"\u0251"},right:{id:"mope",label:"mope",phoneme:"o\u028a"}},"cod-code":{left:{id:"cod",label:"cod",phoneme:"\u0251"},right:{id:"code",label:"code",phoneme:"o\u028a"}},"bought-but":{left:{id:"bought",label:"bought",phoneme:"\u0254"},right:{id:"but",label:"but",phoneme:"\u028c"}},"hall-hull":{left:{id:"hall",label:"hall",phoneme:"\u0254"},right:{id:"hull",label:"hull",phoneme:"\u028c"}},"caught-cut":{left:{id:"caught",label:"caught",phoneme:"\u0254"},right:{id:"cut",label:"cut",phoneme:"\u028c"}},"daughter-dutter":{left:{id:"daughter",label:"daughter",phoneme:"\u0254"},right:{id:"dutter",label:"dutter",phoneme:"\u028c"}},"mall-mull":{left:{id:"mall2",label:"mall",phoneme:"\u0254"},right:{id:"mull",label:"mull",phoneme:"\u028c"}},"gall-gull":{left:{id:"gall",label:"gall",phoneme:"\u0254"},right:{id:"gull",label:"gull",phoneme:"\u028c"}},"fall-full":{left:{id:"topquark_fall",label:"fall",phoneme:"\u0254"},right:{id:"topquark_full",label:"full",phoneme:"\u028a"}},"ball-bowl":{left:{id:"ball",label:"ball",phoneme:"\u0254"},right:{id:"bowl",label:"bowl",phoneme:"o\u028a"}},"wrought-wrote":{left:{id:"wrought",label:"wrought",phoneme:"\u0254"},right:{id:"wrote",label:"wrote",phoneme:"o\u028a"}},"raw-row":{left:{id:"raw",label:"raw",phoneme:"\u0254"},right:{id:"row",label:"row",phoneme:"o\u028a"}},"law-load":{left:{id:"law",label:"law",phoneme:"\u0254"},right:{id:"load",label:"load",phoneme:"o\u028a"}},"called-cold":{left:{id:"called",label:"called",phoneme:"\u0254"},right:{id:"cold",label:"cold",phoneme:"o\u028a"}},"ought-oat":{left:{id:"ought",label:"ought",phoneme:"\u0254"},right:{id:"oat",label:"oat",phoneme:"o\u028a"}},"tall-toll":{left:{id:"tall",label:"tall",phoneme:"\u0254"},right:{id:"toll",label:"toll",phoneme:"o\u028a"}},"sand-sound":{left:{id:"sand",label:"sand",phoneme:"\xe6"},right:{id:"sound",label:"sound",phoneme:"a\u028a"}},"dawn-down":{left:{id:"dawn",label:"dawn",phoneme:"\u0254"},right:{id:"down",label:"down",phoneme:"a\u028a"}},"moss-mouse":{left:{id:"moss",label:"moss",phoneme:"\u0254"},right:{id:"mouse",label:"mouse",phoneme:"a\u028a"}},"brawn-brown":{left:{id:"brawn",label:"brawn",phoneme:"\u0254"},right:{id:"brown",label:"brown",phoneme:"a\u028a"}},"ought-out":{left:{id:"ought",label:"ought",phoneme:"\u0254"},right:{id:"out",label:"out",phoneme:"a\u028a"}},"fall-foul":{left:{id:"fall",label:"fall",phoneme:"\u0254"},right:{id:"foul",label:"foul",phoneme:"a\u028a"}},"soar-sour":{left:{id:"soar",label:"soar",phoneme:"\u0254"},right:{id:"sour",label:"sour",phoneme:"a\u028a"}},"rot-route":{left:{id:"rot",label:"rot",phoneme:"\u0251"},right:{id:"route",label:"route",phoneme:"a\u028a"}},"pond-pound":{left:{id:"pond",label:"pond",phoneme:"\u0251"},right:{id:"pound",label:"pound",phoneme:"a\u028a"}},"spot-spout":{left:{id:"spot",label:"spot",phoneme:"\u0251"},right:{id:"spout",label:"spout",phoneme:"a\u028a"}},"shot-shout":{left:{id:"shot",label:"shot",phoneme:"\u0251"},right:{id:"shout",label:"shout",phoneme:"a\u028a"}},"mall-mile":{left:{id:"mall",label:"mall",phoneme:"\u0254"},right:{id:"mile",label:"mile",phoneme:"a\u026a"}},"fought-fight":{left:{id:"fought",label:"fought",phoneme:"\u0254"},right:{id:"fight",label:"fight",phoneme:"a\u026a"}},"wrought-right":{left:{id:"wrought",label:"wrought",phoneme:"\u0254"},right:{id:"right",label:"right",phoneme:"a\u026a"}},"heat-height":{left:{id:"heat",label:"heat",phoneme:"\u026a"},right:{id:"height",label:"height",phoneme:"a\u026a"}},"ream-rhyme":{left:{id:"ream",label:"ream",phoneme:"i:"},right:{id:"rhyme",label:"rhyme",phoneme:"a\u026a"}},"lead-lied":{left:{id:"to_lead",label:"lead",phoneme:"i:"},right:{id:"lied",label:"lied",phoneme:"a\u026a"}},"flea-flye":{left:{id:"flea",label:"flea",phoneme:"i:"},right:{id:"flye",label:"flye",phoneme:"a\u026a"}},"team-time":{left:{id:"team",label:"team",phoneme:"i:"},right:{id:"time",label:"time",phoneme:"a\u026a"}},"read-ride":{left:{id:"read",label:"read",phoneme:"i:"},right:{id:"ride",label:"ride",phoneme:"a\u026a"}},"creed-cried":{left:{id:"creed",label:"creed",phoneme:"i:"},right:{id:"cried",label:"cried",phoneme:"a\u026a"}},"sat-sight":{left:{id:"sat",label:"sat",phoneme:"\xe6"},right:{id:"sight",label:"sight",phoneme:"a\u026a"}},"sad-sighed":{left:{id:"sad",label:"sad",phoneme:"\xe6"},right:{id:"sighed",label:"sighed",phoneme:"a\u026a"}}},{},{"sybil-civil":{left:{id:"sybil",label:"sybil",phoneme:"b"},right:{id:"civil",label:"civil",phoneme:"v"}},"bury-very":{left:{id:"bury",label:"bury",phoneme:"b"},right:{id:"very",label:"very",phoneme:"v"}},"verb-verve":{left:{id:"verb",label:"verb",phoneme:"b"},right:{id:"verve",label:"verve",phoneme:"v"}},"trouble-travel":{left:{id:"trouble",label:"trouble",phoneme:"b"},right:{id:"travel",label:"travel",phoneme:"v"}},"saber-saver":{left:{id:"saber",label:"saber",phoneme:"b"},right:{id:"saver",label:"saver",phoneme:"v"}},"day-they":{left:{id:"day",label:"day",phoneme:"d"},right:{id:"they",label:"they",phoneme:"\xf0"}},"sore-shore":{left:{id:"sore",label:"sore",phoneme:"s"},right:{id:"shore",label:"shore",phoneme:"\u0283"}},"tusk-task":{left:{id:"tusk",label:"tusk",phoneme:"\u028c"},right:{id:"task",label:"task",phoneme:"\xe6"}},"bluster-blaster":{left:{id:"bluster",label:"bluster",phoneme:"\u028c"},right:{id:"blaster",label:"blaster",phoneme:"\xe6"}},"whistle-weasel":{left:{id:"whistle",label:"whistle",phoneme:"\u026a"},right:{id:"weasel",label:"weasel",phoneme:"i:"}}}),E=l(64),O=function(e){Object(s.a)(l,e);var t=Object(p.a)(l);function l(){var e;Object(r.a)(this,l);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={selected:e.props.initialSelection,indeterminate:e.props.initialSelection.length>0&&e.props.initialSelection.length<e.props.phonemes.length,all:e.props.initialSelection.length===e.props.phonemes.length},e}return Object(h.a)(l,[{key:"componentDidMount",value:function(){this.props.onChange(this.props.initialSelection)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{gutter:[16,16]},n.a.createElement(v.a,{offset:1,span:22},n.a.createElement(E.a,{indeterminate:this.state.indeterminate,checked:this.state.all,onChange:function(t){var l=t.target.checked?e.props.phonemes:[];e.setState({selected:l,indeterminate:!1,all:t.target.checked}),e.props.onChange(l)}},n.a.createElement("b",null,this.props.name)),n.a.createElement("br",null),n.a.createElement(E.a.Group,{options:this.props.phonemes.map((function(e){return{label:"/".concat(e,"/"),value:e}})),value:this.state.selected,onChange:function(t){var l=t.flatMap((function(e){return"string"===typeof e?[e]:[]}));e.setState({selected:l,indeterminate:l.length>0&&l.length<e.props.phonemes.length,all:l.length===e.props.phonemes.length}),e.props.onChange(l)}}))))}}]),l}(n.a.Component),S=function(e){Object(s.a)(l,e);var t=Object(p.a)(l);function l(){var e;Object(r.a)(this,l);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={pairsToTrain:Object.keys(w).length,selectedMonopthongs:[],selectedDitphthongs:[],selectedOtherPhonemes:[]},e}return Object(h.a)(l,[{key:"selectedPhonemes",value:function(){var e=this.state,t=e.selectedMonopthongs,l=e.selectedDitphthongs,a=e.selectedOtherPhonemes;return t.concat(l,a)}},{key:"onComplete",value:function(){var e=this.state.pairsToTrain,t=this.filterPairIdsBySelectedPhonemes(this.selectedPhonemes());this.props.onComplete({pairsToTrain:e,phonemePairIds:t})}},{key:"filterPairIdsBySelectedPhonemes",value:function(e){return Object.entries(w).filter((function(t){var l=t[1];return e.includes(l.left.phoneme)&&e.includes(l.right.phoneme)})).map((function(e){return e[0]}))}},{key:"uniquePhonemes",value:function(){var e={};return Object.values(w).forEach((function(t){[t.left.phoneme,t.right.phoneme].forEach((function(t){e[t]?e[t].count+=1:e[t]={phoneme:t,count:1}}))})),Object(g.a)(Object.values(e))}},{key:"render",value:function(){var e=this;this.uniquePhonemes().map((function(e){return{label:"/".concat(e.phoneme,"/"),value:e.phoneme}})).sort((function(e,t){return e.value.localeCompare(t.value)}));var t=this.filterPairIdsBySelectedPhonemes(this.selectedPhonemes()).length,l=["\xe6","\u0251","e","i:","\u026a","\u0254","u:","\u028a","\u028c"],a=["a\u026a","a\u028a","o\u028a"],i=this.uniquePhonemes().map((function(e){return e.phoneme})).filter((function(e){return l.indexOf(e)<0&&a.indexOf(e)<0})).sort((function(e,t){return e.localeCompare(t)}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{gutter:[16,16],style:{textAlign:"left"}},n.a.createElement(v.a,{span:12,style:{textAlign:"right",lineHeight:"32px"}},"Pairs to train"),n.a.createElement(v.a,{span:12},n.a.createElement(k.a,{min:1,max:t,style:{width:"4em"},value:this.state.pairsToTrain,onChange:function(l){return e.setState({pairsToTrain:Math.max(l||t,1)})}}),"\xa0 / ",t)),n.a.createElement(O,{name:"Monopthongs",phonemes:l,initialSelection:l,onChange:function(t){e.setState({selectedMonopthongs:t})}}),n.a.createElement(O,{name:"Diphthongs",phonemes:a,initialSelection:[],onChange:function(t){e.setState({selectedDitphthongs:t})}}),n.a.createElement(O,{name:"Other phonemes",phonemes:i,initialSelection:i,onChange:function(t){e.setState({selectedOtherPhonemes:t})}}),n.a.createElement(m.a,{type:"primary",onClick:this.onComplete.bind(this),disabled:0===t},"Start training"))}}]),l}(n.a.Component),Q=l(150),C=l.n(Q);!function(e){e.Left="left",e.Right="right"}(c||(c={}));var P,j=function(e){Object(s.a)(l,e);var t=Object(p.a)(l);function l(e){var a;Object(r.a)(this,l),(a=t.call(this,e)).playNextSound=function(e){return e.sound||0===e.soundQueue.length?e:Object(y.a)({},e,{sound:e.soundQueue[0],soundQueue:e.soundQueue.slice(1)})};var n=a.chooseNextQuestion(a.props.pairsToQuiz);return a.state={activePairs:a.props.pairsToQuiz,currentQuestion:n,questionOutcomes:[],sound:n.correctAnswer,soundQueue:[]},a}return Object(h.a)(l,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownListener.bind(this),!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownListener.bind(this),!0)}},{key:"keydownListener",value:function(e){var t=this.state,l=t.currentQuestion,a=t.sound,n=l.correctAnswer,i=l.actualAnswer;switch(e.keyCode){case 37:i?a||this.play(c.Left):this.doAnswer(c.Left);break;case 39:i?a||this.play(c.Right):this.doAnswer(c.Right);break;case 32:i?a||this.nextQuestion():a||this.play(n)}}},{key:"chooseNextQuestion",value:function(e){var t=Math.random()<.5?c.Left:c.Right;return{pairId:e[Math.floor(Math.random()*e.length)],correctAnswer:t,actualAnswer:void 0}}},{key:"play",value:function(e){this.setState((function(t){return Object(y.a)({},t,{sound:e,soundQueue:[]})}))}},{key:"onFinishSound",value:function(){var e=this;this.setState((function(t){return e.playNextSound(Object(y.a)({},t,{sound:void 0}))}))}},{key:"doAnswer",value:function(e){var t=this;this.setState((function(l){var a=Object(y.a)({},l.currentQuestion,{actualAnswer:e}),n=[].concat(Object(g.a)(l.questionOutcomes),[a]),i=t.areWeDoneWithPair(l.currentQuestion.pairId,n)?l.activePairs.filter((function(e){return!l.currentQuestion||e!==l.currentQuestion.pairId})):l.activePairs;return Object(y.a)({},l,{activePairs:i,currentQuestion:a,sound:e,soundQueue:e===c.Right?[c.Left]:[c.Right],questionOutcomes:n})}))}},{key:"nextQuestion",value:function(){var e=this;0===this.state.activePairs.length?this.props.onSessionComplete(this.state.questionOutcomes):this.setState((function(t){var l=t.activePairs,a=e.chooseNextQuestion(l);return Object(y.a)({},t,{currentQuestion:a,sound:a.correctAnswer,soundQueue:[]})}))}},{key:"areWeDoneWithPair",value:function(e,t){for(var l=t.filter((function(t){return t.pairId===e})).map((function(e){return{right:e.correctAnswer===e.actualAnswer,side:e.correctAnswer}})),a=0,n=null,i=0;i<l.length;i++)l[i].right?l[i].side!==n&&(a+=1,n=l[i].side):(a=0,n=null);return a>=2}},{key:"render",value:function(){var e=this.state,t=e.sound,l=e.currentQuestion,a=l.pairId,i=l.correctAnswer,o=l.actualAnswer,r=w[a];return n.a.createElement("div",{className:"question-card"},this.renderSound(),n.a.createElement("p",null,"Active pairs: ",this.state.activePairs.length),n.a.createElement(f.a,{gutter:[16,16]},n.a.createElement(v.a,{span:12},n.a.createElement(m.a,{className:"answer",type:o&&i===c.Left?"primary":"default",onClick:o?this.play.bind(this,c.Left):this.doAnswer.bind(this,c.Left),loading:!(!o||t!==c.Left),danger:o===c.Left&&o!==i},r.left.label," /",r.left.phoneme,"/")),n.a.createElement(v.a,{span:12},n.a.createElement(m.a,{className:"answer",type:o&&i===c.Right?"primary":"default",onClick:o?this.play.bind(this,c.Right):this.doAnswer.bind(this,c.Right),loading:!(!o||t!==c.Right),danger:o===c.Right&&o!==i},r.right.label," /",r.right.phoneme,"/"))),n.a.createElement(f.a,{gutter:[16,16]},n.a.createElement(v.a,{span:24},o?n.a.createElement(m.a,{className:"action",onClick:this.nextQuestion.bind(this)},this.state.activePairs.length>0?"Next":"Finish"):n.a.createElement(m.a,{className:"action",onClick:this.play.bind(this,i),loading:!!t},"Replay"))))}},{key:"renderSound",value:function(){var e=this.state,t=e.sound,l=e.currentQuestion;if(!l)return n.a.createElement(n.a.Fragment,null);var a=l.pairId,i=t?w[a][t].id:null;return i?n.a.createElement(C.a,{url:"/sounds/".concat(i,".mp3"),playStatus:"PLAYING",onFinishedPlaying:this.onFinishSound.bind(this)}):n.a.createElement(n.a.Fragment,null)}}]),l}(n.a.Component);l(317),l(318);!function(e){e[e.Configuring=0]="Configuring",e[e.Quizzing=1]="Quizzing",e[e.Debriefing=2]="Debriefing"}(P||(P={}));var A=function(e){Object(s.a)(l,e);var t=Object(p.a)(l);function l(){var e;Object(r.a)(this,l);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={stage:P.Configuring},e}return Object(h.a)(l,[{key:"startQuizzing",value:function(e){var t,l;this.setState({stage:P.Quizzing,pairsToQuiz:(t=e.phonemePairIds,l=e.pairsToTrain,t.map((function(e){return{value:e,score:Math.random()}})).sort((function(e,t){return e.score-t.score})).slice(0,l).map((function(e){return e.value})))})}},{key:"finishQuizzing",value:function(e){this.setState({stage:P.Debriefing,questionOutcomes:e})}},{key:"render",value:function(){var e=this,t=d.a.Header,l=d.a.Content,a=d.a.Footer;return n.a.createElement("div",{className:"App"},n.a.createElement(d.a,null,n.a.createElement(t,null,n.a.createElement("h1",null,n.a.createElement("img",{id:"logo",src:"/minpairs.png",alt:"Minpairs logo"}),"Minimal Pairs Trainer")),n.a.createElement(l,{className:"site-layout"},this.state.stage===P.Quizzing?n.a.createElement(j,{pairsToQuiz:this.state.pairsToQuiz,onSessionComplete:function(t){return e.finishQuizzing(t)}}):this.state.stage===P.Debriefing?this.renderStats(this.state.questionOutcomes):n.a.createElement(S,{onComplete:this.startQuizzing.bind(this)})),n.a.createElement(a,{style:{textAlign:"center"}},"Work in progres by ",n.a.createElement("a",{href:"https://twitter.com/_sortega"},"sortega"))))}},{key:"renderStats",value:function(e){var t=this;return n.a.createElement(b,{pairs:w,outcomes:e,onDismiss:function(){return t.setState({stage:P.Configuring})}})}}]),l}(n.a.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.eb5688d3.chunk.js.map