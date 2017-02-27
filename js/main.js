var KWM = {
	clusters: ['som', 'ken', 'swa', 'mus', 'ara', 'mid', 'pal', 'syr', 'afr', 'asi', 'vie', 'bur', 'afg', 'irq', 'cha', 'drc', 'sud', 'ban', 'eas', 'eth', 'dji', 'bhu', 'ira', 'eri', 'amh', 'glo', 'uzb'],
	matches: {
		som: [],
		ken: [],
		swa: [],
		mus: [],
		ara: [],
		mid: [],
		pal: [],
		syr: [],
		afr: [],
		asi: [],
		vie: [],
		bur: [],
		afg: [],
		irq: [],
		cha: [],
		drc: [],
		sud: [],
		ban: [],
		eas: [],
		eth: [],
		dji: [],
		bhu: [],
		ira: [],
		eri: [],
		amh: [],
		glo: [],
		uzb: []
	}
};
/**
 * TODO
 *
 * For each ethnic cluster,
 * Create an Ad Campaign
 * Create 12 ad groups:
 * - just names, 
 * - noun suffix,
 * - interest suffix x6
 * - verbs prefix
 * - geo prefix
 * - geo suffix
 * - questions
 *
 * Output template ad text
 */
function suffixArray(arr, string) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i].concat(string));
	}
	return newArray;
}

function union(arr1, arr2) {
	return arr1.concat(arr2);
}

function joinArr(arr1, arr2) {
	var newArray = [];
	console.log('jn:');
	console.log(arr1);
	console.log(arr2);
	console.log('/jn');
	for (var i = 0; i < arr2.length; i++) {
		newArray = newArray.concat(suffixArray(arr1, arr2[i]));
	}
	return newArray;
}

function sandWich(arr1, arr2, arr3) {
	console.log('sw:');
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	console.log('/sw');
	return joinArr(joinArr(arr1, arr2), arr3);
}

function excludeItemsContaining(arr, string) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		if (!arr[i].includes(string)) newArray.push(arr[i]);
	}
	return newArray;
}

function substArray(templates, variables) {
	var newArray = [];
	for (var i = 0; i < templates.length; i++) {
		for (var j = 0; j < variables.length; j++) {
			newArray.push(templates[i].replace('~', variables[j]));
		}
	}
	return newArray;
}
var clusters = {
	som: ['somali', 'somalia', 'somalian', 'ogaden', 'somaliland', 'ogadenian'],
	ken: ['kenya', 'kenyan'],
	swa: ['swahili', 'uganda', 'ugandan'],
	mus: ['muslim'],
	ara: ['arabic', 'arab', 'arabian'],
	mid: ['amemsa', 'middle eastern', 'middle-eastern'],
	pal: ['palestine', 'palestinian'],
	syr: ['syria', 'syrian'],
	afr: ['africa', 'african'],
	asi: ['asia', 'asian'],
	vie: ['vietnam', 'vietnamese'],
	bur: ['burma', 'myanmar', 'burmese', 'karen', 'karenni', 'karen-burmese', 'karen burmese', 'thai', 'thailand'],
	afg: ['afghanistan', 'afghan', 'afghani'],
	irq: ['iraq', 'iraqi'],
	cha: ['chaldean', 'chaldean-iraqi', 'iraqi-chaldean', 'christian iraqi', 'iraqi christian'],
	drc: ['congo', 'congolese', 'drc'],
	sud: ['sudan', 'sudanese', 'south sudan', 'south sudanese'],
	ban: ['bantu', 'somali bantu', 'kizigula', 'zigula'],
	eas: ['east african', 'east africa', 'horn of africa'],
	eth: ['ethiopia', 'ethiopian'],
	dji: ['djibouti', 'djiboutian'],
	bhu: ['bhutan', 'bhutanese', 'hmong'],
	ira: ['iran', 'irani', 'iranian'],
	eri: ['eritrea', 'eritrean'],
	amh: ['amharic', 'oromo', 'tigrinya'],
	glo: ['global', 'international', 'crisis'],
	uzb: ['uzbeki', 'uzbek', 'uzbekistan']
};
var b = ['speaking', 'born', 'american'];
var c = ['women', 'men', 'youth', 'children', 'boys', 'girls', 'families', 'seniors', 'elderly', 'elders'];
var d = ['immigrant', 'migrant', 'refugee', 'newcomer', 'citizen', 'neighbor', 'resident', 'american'];
var d_plural = ['immigrants', 'migrants', 'refugees', 'newcomers', 'people', 'nieghbors', 'residents', 'americans'];
for (var cl = 0; cl < KWM.clusters.length; cl++) {
	var cluster = KWM.clusters[cl];
	var a = clusters[cluster];
	var nouns_prefix = ['new', 'recent', 'newcomer', '2015', '2016', '2017'];
	var a_plural = suffixArray(a, "s");
	var keywords = [];
	keywords = keywords.concat(a);
	keywords = keywords.concat(a_plural);
	keywords = keywords.concat(d);
	keywords = keywords.concat(d_plural);
	// a + (" " OR "-") + b  . . . (AB)
	var AB = sandWich(a, [" ", "-"], b);
	keywords = keywords.concat(AB);
	keywords = keywords.concat(sandWich(nouns_prefix, " ", AB));
	// (a OR AB) + " " + c . . . . (ABC)
	var ABC = sandWich(union(a, AB), " ", c);
	keywords = keywords.concat(ABC);
	keywords = keywords.concat(sandWich(nouns_prefix, " ", ABC));
	// (a OR AB) + " " + (d OR d_plural). . . . (ABD)
	var ABD = sandWich(union(a, AB), " ", union(d, d_plural));
	keywords = keywords.concat(ABD);
	keywords = keywords.concat(sandWich(nouns_prefix, " ", ABD));
	keywords = keywords.concat(suffixArray(a, "-americans"));
	keywords = excludeItemsContaining(keywords, "american american");
	// ABC + " " + (d OR d_plural) . . . (ABCD)
	var templates = {
		nouns_suffix: ['~ community', '~ communities', '~ org', '~ orgs', '~ organization', '~ organizations', '~ organizing', '~ organizer', '~ organizers', '~ community organizer', '~ community organizers', '~ community organizing', '~ nonprofit', '~ nonprofits', '~ non-profit', '~ non-profits', '~ non profit', '~ non profits', '~ nonprofit organization', '~ nonprofit organizations', '~ non-profit organization', '~ non-profit organizations', '~ non profit organization', '~ non profit organizations'],
		leader: ['~ leader', '~ leaders', '~ leadership', '~ leadership development', '~ lawyer', '~ lawyers', '~ legislation', '~ representative', '~ representatives', '~ politician', '~ politicians', '~ ally', '~ allies', '~ alliance', '~ alliances', '~ coalition', '~ coalitions', '~ rights', ],
		help: ['~ help', '~ support', '~ solidarity', '~ event', '~ events', '~ charity', '~ charities', '~ initiative', '~ initiatives', '~ advocacy', '~ advocate', '~ advocates', '~ policy', '~ policies', '~ policy advocacy', '~ pac', '~ pacs', '~ job', '~ jobs', '~ housing', '~ integration', '~ reception', '~ welcome', '~ welcoming', '~ service', '~ services', '~ need', '~ needs', ],
		issues: ['~ issues', '~ affordable housing', '~ health', '~ public health', '~ nutrition', '~ education', '~ career', '~ careers', '~ livelihood', '~ livelihoods', '~ political', '~ political advocacy', '~ political advocate', '~ political advocates', '~ policy research', '~ research', '~ project', '~ projects', '~ donate', '~ fundraiser', '~ fundraisers', '~ inclusion', '~ legal aid', ],
		network: ['~ network', '~ networks', '~ community center', '~ community centers', '~ volunteer', '~ volunteering', '~ resource', '~ resources', '~ resource center', '~ resource centers', '~ school', '~ schools', '~ program', '~ programs', '~ outreach', '~ community outreach', ],
		action: ['~ action', '~ activist', '~ activists', '~ activism', '~ voting', '~ voter', '~ voters', '~ voting rights', '~ voter outreach', '~ expert', '~ experts', '~ professional', '~ professionals', '~ cultural competency', '~ movement', '~ justice', '~ social justice', '~ freedom', '~ business', '~ businesses', '~ business owner', '~ business owners', '~ home owners', '~ home ownership', '~ civic engagement', '~ empowerment', '~ voice', '~ voices'],
		law: ['~ law', '~ laws', '~ bill', '~ bills', '~ legislation', '~ policy', '~ policy research', '~ legal'],
		questions: ['where are ~ from', 'where do ~ come from', 'where do ~ live', 'where in san diego do ~ live', 'where are san diego ~ from', 'where do san diego ~ live', 'what language do ~ speak', 'what language do ~ know', 'what religion are ~', 'what country are ~ from', '~ from what country', 'what country do ~ come from', '~ country', '~ language', '~ religion', '~ holiday', '~ holidays', '~ festival', '~ festivals', '~ culture', '~ cultures', '~ art', '~ artist', '~ artists', '~ music', '~ musician', '~ musicians', '~ language', '~ languages', '~ poetry', '~ poet', '~ poets']
	};
	for (key2 in templates) {
		if (templates.hasOwnProperty(key2)) {
			KWM.matches[cluster] = KWM.matches[cluster].concat(substArray(templates[key2], keywords));
		}
	}
	keywords = keywords.concat(substArray(templates.nouns_suffix, keywords));
	var descriptors = {
		donate_to: ['donate to ~', 'give to ~', 'give money to ~', 'support ~', 'volunteer with ~', 'volunteer for ~', 'take action for ~'],
		donating: ['donate ~', 'donating ~', 'how to donate ~', 'donate to ~', 'donating to ~', 'how to donate to ~', 'give ~', 'giving ~', 'how to give ~', 'give to ~', 'giving to ~', 'how to give to ~', 'give money ~', 'giving money ~', 'how to give money ~', 'give money to ~', 'giving money to ~', 'how to give money to ~', 'support ~', 'supporting ~', 'how to support ~', 'stand with ~', 'standing with ~', 'how to stand with ~', 'stand up for ~', 'standing up for ~', 'how to stand up for ~', 'solidarity ~', 'solidarity with ~', 'help ~', 'helping ~', 'how to help ~', 'volunteer ~', 'volunteering ~', 'how to volunteer ~', 'volunteer with ~', 'volunteering with ~', 'how to volunteer with ~', 'volunteer for ~', 'volunteering for ~', 'how to volunteer for ~', 'take action ~', 'taking action ~', 'how to take action ~', 'take action for ~', 'taking action for ~', 'how to take action for ~', 'about ~', 'find ~', 'learn ~', 'learn about ~'],
		geo_prefix: ['california ~', "california's ~", 'californian ~', 'san diego ~', "san diego's ~", 'san diegan ~', 'los angeles ~', 'american ~', 'u.s. ~', 'united states ~', 'usa ~'],
		geo_suffix: ['~ in san diego', '~ in california', '~ in san diego ca', '~ in san diego california', '~ in us', '~ in u.s.', '~ in usa', '~ in united states', '~ in america'],
	};
	for (key3 in templates) {
		if (descriptors.hasOwnProperty(key3)) {
			KWM.matches[cluster] = KWM.matches[cluster].concat(substArray(descriptors[key3], keywords));
		}
	}
}
