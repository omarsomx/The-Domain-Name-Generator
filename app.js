function functionDomain(arrPronoun = ['my'], arrAdj = ['poor&alone'], arrNoun = ['domain'], arrExt = []) {
    let domain = "";

    for (let p in arrPronoun) {
        for (let a in arrAdj) {
            for (let n in arrNoun) {
                if (arrExt.length > 0) {
                    for (e in arrExt) {
                        domain = arrPronoun[p] + arrAdj[a] + arrNoun[n] + arrExt[e];
                        console.log(domain)
                    }
                } else {
                    domain = arrPronoun[p] +
                        arrAdj[a] + arrNoun[n].substring(0, (arrNoun[n].length - 2)) +
                        "." +
                        arrNoun[n].substring((arrNoun[n].length - 2), arrNoun[n].length);
                    console.log(domain)
                }
            }
        }
    }
}

// You can add elements in these arrays. 

//var pronoun = ['the', 'our', 'my'];
//var adj = ['great', 'big'];
//var noun = ['jogger', 'racoon'];
//var ext = ['.com', '.org', '.es']

// Who can you use the function:
// 1. If you just want to test it, you can call it without any parameters.
// 2. You can add all parameters that are declared before.
// 3. If you want generate "domain hacks" just add the 3 first parameters.

//functionDomain(pronoun, adj, noun);

let pronouns = ["the", "our"];
let adjs = ["great", "big", "lastof"];
let nouns = ["jogger", "racoon", "us", "testeo", "internet", "mastercoach"];
let extensions = [".com", ".net", ".us", ".io", ".eo", ".eu", ".es", ".coach"];

result = functionDomain(pronouns, adjs, nouns);
for (dom in result) {
    console.log(result[dom]);
}
