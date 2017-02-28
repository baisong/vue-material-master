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
var KWM = {
	data: {
		groups: [{
			name: "Basic",
			templateKey: 'adj_prefix',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Funders",
			templateKey: 'funders',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Leaders",
			templateKey: 'leader',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Help",
			templateKey: 'help',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Issues",
			templateKey: 'issues',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Networks",
			templateKey: 'network',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Action",
			templateKey: 'action',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Law",
			templateKey: 'law',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Questions",
			templateKey: 'questions',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Donate",
			templateKey: 'donate',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "How to give",
			templateKey: 'donating',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Geo prefix",
			templateKey: 'geo_prefix',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}, {
			name: "Geo suffix",
			templateKey: 'geo_suffix',
			before: 'nouns_suffix',
			after: false,
			includeOrg: true
		}],
		// * = '-speaking'
		// ~ = '-born'
		// ! = '-american'
		ethnicities: {
			som: ['somali*~!', 'somalia~!', 'somalian!', 'somaliland!'],
			ken: ['kenya~!', 'kenyan!'],
			swa: ['swahili*!', 'uganda~!', 'ugandan!'],
			mus: ['muslim!', 'ummah', 'black muslim!', 'african muslim!', 'somali muslim!'],
			ara: ['arabic*!', 'arab!', 'arabian!'],
			mid: ['amemsa!', 'middle eastern~!', 'middle-eastern~!'],
			pal: ['palestine~!', 'palestinian~!'],
			syr: ['syria~!', 'syrian~!', 'syrian crisis', 'syria crisis'],
			afr: ['africa~!', 'african!', 'black!'],
			asi: ['asia~', 'asian~!'],
			jew: ['jewish~!', 'israel~', 'israeli~!', 'jew', 'hebrew*'],
			vie: ['vietnam~', 'vietnamese*~!'],
			bur: ['burma~', 'myanmar~', 'burmese*~!', 'karen*!', 'karenni*', 'karen-burmese', 'karen burmese', 'thai*~!', 'thailand~'],
			afg: ['afghanistan~!', 'afghan~!', 'afghani~!', 'dari*'],
			irq: ['iraq~', 'iraqi~!'],
			cha: ['chaldean!', 'chaldean-iraqi~', 'iraqi-chaldean', 'christian iraqi', 'iraqi christian'],
			drc: ['congo', 'congolese!', 'drc'],
			sud: ['sudan~', 'sudanese~!', 'south sudan~', 'south sudanese~!'],
			ban: ['bantu*', 'somali bantu*', 'kizigula', 'zigula'],
			eas: ['east african', 'east africa', 'horn of africa'],
			eth: ['ethiopia~!', 'ethiopian*~!'],
			dji: ['djibouti~!', 'djiboutian~!'],
			bhu: ['bhutan~', 'bhutanese~', 'hmong*~'],
			ira: ['iran~', 'irani!', 'iranian~!', 'farsi*'],
			eri: ['eritrea~', 'eritrean*~!'],
			amh: ['amharic*', 'oromo*', 'tigrinya*'],
			uzb: ['uzbeki*~!', 'uzbek~!', 'uzbekistan~'],
			glo: ['global', 'international', 'crisis'],
			asy: ['asylum', 'asylee', 'asylum-seeker', 'asylum seeker', 'asylum seeking', 'asylum-seeking'],
			mar: ['marginalized', 'excluded', 'intersectional', 'scapegoat', 'scapegoating', 'scapegoated'],
			isl: ['islamophobia', 'anti-islamophobia', 'refugeeswelcome', 'refugees welcome'],
			att: ['anti-trump', 'anti trump', 'resist', 'resistance'],
			ive: ['integrated voter engagement', 'ive'],
			blm: ['black lives matter', 'blacklivesmatter', 'black lives', 'blacklives', 'blm']
		},
		pronoun_suffixes: ['women', 'men', 'youth', 'children', 'boys', 'girls', 'families', 'seniors', 'elderly', 'elders'],
		demonym_suffixes: ['immigrant', 'migrant', 'refugee', 'newcomer', 'citizen', 'neighbor', 'resident', 'american'],
		demonym_suffixes_plural: ['immigrants', 'migrants', 'refugees', 'newcomers', 'citizens', 'people', 'nieghbors', 'residents', 'americans'],
		templates: {
			adj_prefix: ['best ~', 'good ~'],
			funders: ['~ funder', '~ funders', '~ philanthropy', '~ philanthropist', '~ philanthropists', '~ smart philanthropy', 'smart philanthropy ~', 'rapid response ~', 'scapegoating ~', 'islamophobia ~', 'anti-islamophobia ~', 'refugeeswelcome ~', 'refugees welcome ~', 'anti-trump', 'anti trump', 'resist', 'resistance', 'integrated voter engagement', 'ive', 'black lives matter', 'blacklivesmatter', 'black lives', 'blacklives', 'blm'],
			nouns_suffix: ['~ community', '~ communities', '~ org', '~ orgs', '~ leader', '~ leaders', '~ leadership', '~ leadership development', '~ community leader', '~ community leaders', '~ housing initiative', '~ organization', '~ organizations', '~ organizing', '~ organizer', '~ organizers', '~ community organizer', '~ community organizers', '~ community organizing', '~ nonprofit', '~ nonprofits', '~ non-profit', '~ non-profits', '~ non profit', '~ non profits', '~ nonprofit organization', '~ nonprofit organizations', '~ non-profit organization', '~ non-profit organizations', '~ non profit organization', '~ non profit organizations'],
			leader: ['~ lawyer', '~ lawyers', '~ legislation', '~ representative', '~ representatives', '~ politician', '~ politicians', '~ ally', '~ allies', '~ alliance', '~ alliances', '~ coalition', '~ coalitions', '~ rights', ],
			help: ['~ help', '~ helping', '~ support', '~ solidarity', '~ event', '~ events', '~ charity', '~ charities', '~ initiative', '~ initiatives', '~ advocacy', '~ advocate', '~ advocates', '~ policy', '~ policies', '~ policy advocacy', '~ pac', '~ pacs', '~ job', '~ jobs', '~ housing', '~ integration', '~ reception', '~ welcome', '~ welcoming', '~ service', '~ services', '~ need', '~ needs', ],
			issues: ['~ issues', '~ affordable housing', '~ health', '~ public health', '~ mental health', '~ nutrition', '~ education', '~ career', '~ careers', '~ livelihood', '~ livelihoods', '~ political', '~ political advocacy', '~ political advocate', '~ political advocates', '~ policy research', '~ research', '~ project', '~ projects', '~ donate', '~ fundraiser', '~ fundraisers', '~ inclusion', '~ legal aid', ],
			network: ['~ network', '~ networks', '~ community center', '~ community centers', '~ volunteer', '~ volunteering', '~ resource', '~ resources', '~ resource center', '~ resource centers', '~ school', '~ schools', '~ program', '~ programs', '~ outreach', '~ community outreach', ],
			action: ['~ action', '~ activist', '~ activists', '~ activism', '~ voting', '~ voter', '~ voters', '~ voting rights', '~ voter outreach', '~ expert', '~ experts', '~ professional', '~ professionals', '~ cultural competency', '~ movement', '~ justice', '~ social justice', '~ freedom', '~ business', '~ businesses', '~ business owner', '~ business owners', '~ home owners', '~ home ownership', '~ civic engagement', '~ empowerment', '~ voice', '~ voices'],
			law: ['~ law', '~ laws', '~ bill', '~ bills', '~ legislation', '~ policy', '~ policy research', '~ legal'],
			questions: ['where are ~ from', 'where do ~ come from', 'where do ~ live', 'where in san diego do ~ live', 'where are san diego ~ from', 'where do san diego ~ live', 'what language do ~ speak', 'what language do ~ know', 'what religion are ~', 'what country are ~ from', '~ from what country', 'what country do ~ come from', '~ country', '~ language', '~ religion', '~ holiday', '~ holidays', '~ festival', '~ festivals', '~ culture', '~ cultures', '~ art', '~ artist', '~ artists', '~ music', '~ musician', '~ musicians', '~ language', '~ languages', '~ poetry', '~ poet', '~ poets'],
			donate: ['donate to ~', 'give to ~', 'give money to ~', 'support ~', 'volunteer with ~', 'volunteer for ~', 'take action for ~'],
			donating: ['donate ~', 'donating ~', 'how to donate ~', 'donate to ~', 'donating to ~', 'how to donate to ~', 'give ~', 'giving ~', 'how to give ~', 'give to ~', 'giving to ~', 'how to give to ~', 'give money ~', 'giving money ~', 'how to give money ~', 'give money to ~', 'giving money to ~', 'how to give money to ~', 'support ~', 'supporting ~', 'how to support ~', 'stand with ~', 'standing with ~', 'how to stand with ~', 'stand up for ~', 'standing up for ~', 'how to stand up for ~', 'solidarity ~', 'solidarity with ~', 'help ~', 'helping ~', 'how to help ~', 'volunteer ~', 'volunteering ~', 'how to volunteer ~', 'volunteer with ~', 'volunteering with ~', 'how to volunteer with ~', 'volunteer for ~', 'volunteering for ~', 'how to volunteer for ~', 'take action ~', 'taking action ~', 'how to take action ~', 'take action for ~', 'taking action for ~', 'how to take action for ~', 'about ~', 'find ~', 'learn ~', 'learn about ~'],
			geo_prefix: ['california ~', "california's ~", 'californian ~', 'southern california ~', 'san diego ~', "san diego's ~", 'san diegan ~', 'los angeles ~', 'american ~', 'u.s. ~', 'united states ~', 'usa ~'],
			geo_suffix: ['~ in san diego', '~ san diego', '~ in california', '~ california', '~ in southern california', '~ southern california', '~ in san diego ca', '~ in san diego california', '~ in us', '~ in u.s.', '~ in usa', '~ in united states', '~ in america', '~ usa', '~ u.s.a.', '~ u.s.', '~ us', '~ united', , '~ united states', '~ america'],
		}
	},
	suffixArray(arr, string) {
		var newArray = [];
		for (var i = 0; i < arr.length; i++) {
			newArray.push(arr[i].concat(string));
		}
		return newArray;
	},
	union(arr1, arr2) {
		return arr1.concat(arr2);
	},
	joinArr(arr1, arr2) {
		var newArray = [];
		console.log('jn:');
		console.log(arr1);
		console.log(arr2);
		console.log('/jn');
		for (var i = 0; i < arr2.length; i++) {
			newArray = newArray.concat(suffixArray(arr1, arr2[i]));
		}
		return newArray;
	},
	sandWich(arr1, arr2, arr3) {
		console.log('sw:');
		console.log(arr1);
		console.log(arr2);
		console.log(arr3);
		console.log('/sw');
		return joinArr(joinArr(arr1, arr2), arr3);
	},
	excludeItemsContaining(arr, string) {
		var newArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (!arr[i].includes(string)) newArray.push(arr[i]);
		}
		return newArray;
	},
	substArray(templates, variables) {
		var newArray = [];
		for (var i = 0; i < templates.length; i++) {
			for (var j = 0; j < variables.length; j++) {
				newArray.push(templates[i].replace('~', variables[j]));
			}
		}
		return newArray;
	},
	expandMatches(ethnicities, templateKey, data, includeOrg) {
		includeOrg = includeOrg || false;
		var keywords = [];
		var cluster = KWM.clusters[cl];
		var ethnicities_plural = suffixArray(ethnicities, "s");
		var keywords = [];
		keywords = keywords.concat(ethnicities);
		keywords = keywords.concat(ethnicities_plural);
		keywords = keywords.concat(d);
		keywords = keywords.concat(d_plural);
		// a + (" " OR "-") + b  . . . (AB)
		var AB = sandWich(ethnicities, [" ", "-"], data.compound_suffixes);
		keywords = keywords.concat(AB);
		keywords = keywords.concat(sandWich(nouns_prefix, " ", AB));
		// TODO
		// PREFIX ALL WITH REFUGEE
		// (a OR AB) + " " + c . . . . (ABC)
		var ABC = sandWich(union(ethnicities, AB), " ", c);
		keywords = keywords.concat(ABC);
		keywords = keywords.concat(sandWich(nouns_prefix, " ", ABC));
		// (a OR AB) + " " + (d OR d_plural). . . . (ABD)
		var ABD = sandWich(union(ethnicities, AB), " ", union(d, d_plural));
		keywords = keywords.concat(ABD);
		keywords = keywords.concat(sandWich(nouns_prefix, " ", ABD));
		keywords = keywords.concat(suffixArray(ethnicities, "-american"));
		keywords = keywords.concat(suffixArray(ethnicities, "-americans"));
		keywords = excludeItemsContaining(keywords, "american american");
		keywords = excludeItemsContaining(keywords, "americans american");
		keywords = excludeItemsContaining(keywords, "american americans");
		keywords = excludeItemsContaining(keywords, "americans americans");
		if (includeOrg) {
			keywords = keywords.concat(substArray(data.templates.nouns_suffix, keywords));
		}
		if (templateKey === "Name") {
			return keywords;
		}
		if (data.templates.hasOwnProperty(templateKey)) {
			return substArray(data.templates[templateKey], keywords);
		}
		return [];
	}
};
