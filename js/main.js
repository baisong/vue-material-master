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
		// * = '-speaking'
		// ~ = '-born'
		// ! = '-american'
		activeEthnicity: 0,
		activeGroup: 0,
		ethnicities: [
			{name: 'so', words: ['somali*~!', 'somalia~!', 'somalian!', 'somaliland!'], places: ['somalia', 'somaliland', 'mogadishu']},
			{name: 'ke', words: ['kenya~!', 'kenyan!'], places: ['kenya', 'nairobi']},
			{name: 'sw', words: ['swahili*!', 'uganda~!', 'ugandan!'], places: ['uganda']},
			{name: 'mu', words: ['muslim!', 'ummah', 'black muslim!', 'african muslim!', 'somali muslim!']},
			{name: 'ar', words: ['arabic*!', 'arab!', 'arabian!'], places: ['the maghreb', 'the magreb', 'northern africa', 'the arab world']},
			{name: 'me', words: ['amemsa!', 'middle eastern~!', 'middle-eastern~!'], places: ['middle east', 'middle-east', 'the middle east', 'middle-eastern countries', 'middle eastern countries']},
			{name: 'ps', words: ['palestine~!', 'palestinian~!'], places: ['palestiine', 'gaza', 'gaza strip', 'west bank', 'the west bank']},
			{name: 'sy', words: ['syria~!', 'syrian~!', 'syrian crisis', 'syria crisis'], places: ['syria', 'aleppo']},
			{name: 'af', words: ['africa~!', 'african!', 'black!'], places: ['africa']},
			{name: 'as', words: ['asia~', 'asian~!'], places: ['asia', 'se asia', 'southeast asia']},
			{name: 'jw', words: ['jewish~!', 'israel~', 'israeli~!', 'jew', 'hebrew*'], places: ['israel']},
			{name: 'vt', words: ['vietnam~', 'vietnamese*~!'], places: ['vietnam']},
			{name: 'bm', words: ['burma~', 'myanmar~', 'burmese*~!', 'karen*!', 'karenni*', 'karen-burmese', 'karen burmese', 'thai*~!', 'thailand~'], places: ['burma', 'myanmar', 'thailand', 'kayin state']},
			{name: 'fg', words: ['afghanistan~!', 'afghan~!', 'afghani~!', 'dari*'], places: ['afghanistan']},
			{name: 'ir', words: ['iraq~', 'iraqi~!'], places: ['iraq']},
			{name: 'ch', words: ['chaldean!', 'chaldean-iraqi~', 'iraqi-chaldean', 'christian iraqi', 'iraqi christian']},
			{name: 'co', words: ['congo', 'congolese!', 'drc'], places: ['congo', 'the congo', 'drc']},
			{name: 'su', words: ['sudan~', 'sudanese~!', 'south sudan~', 'south sudanese~!'], places: ['sudan', 'south sudan']},
			{name: 'ba', words: ['bantu*', 'somali bantu*', 'kizigula', 'zigula']},
			{name: 'ea', words: ['east african', 'east africa', 'horn of africa'], places: ['east africa', 'eastern africa', 'horn of africa', 'the horn of africa']},
			{name: 'et', words: ['ethiopia~!', 'ethiopian*~!'], places: ['ethiopia']},
			{name: 'dj', words: ['djibouti~!', 'djiboutian~!'], places: ['djibouti']},
			{name: 'bh', words: ['bhutan~', 'bhutanese~', 'hmong*~'], places: ['bhutan']},
			{name: 'ir', words: ['iran~', 'irani!', 'iranian~!', 'farsi*'], places: ['iran']},
			{name: 'er', words: ['eritrea~', 'eritrean*~!'], places: ['eritrea']},
			{name: 'am', words: ['amharic*', 'oromo*', 'tigrinya*']},
			{name: 'uz', words: ['uzbeki*~!', 'uzbek~!', 'uzbekistan~'], places: ['uzbekistan']},
			{name: 'gl', words: ['global', 'international', 'crisis', 'world', 'humanitarian'], places: ['top countries']},
			{name: 'as', words: ['asylum', 'asylee', 'asylum-seeker', 'asylum seeker', 'asylum seeking', 'asylum-seeking']},
			{name: 'ma', words: ['marginalized', 'excluded', 'intersectional', 'scapegoat', 'scapegoating', 'scapegoated']},
			{name: 'is', words: ['islamophobia', 'anti-islamophobia', 'refugeeswelcome', 'refugees welcome']},
			{name: 'an', words: ['anti-trump', 'anti trump', 'resist', 'resistance']},
			{name: 'iv', words: ['integrated voter engagement', 'ive']},
			{name: 'bl', words: ['black lives matter', 'blacklivesmatter', 'black lives', 'blacklives', 'blm']}
		],
		pronoun_suffixes: ['woman', 'man', 'child', 'youth', 'boy', 'girl', 'family', 'senior', 'elder'],
		pronoun_suffixes_plural: ['women', 'men', 'youths', 'children', 'boys', 'girls', 'families', 'seniors', 'elderly', 'elders'],
		demonym_suffixes: ['immigrant', 'migrant', 'refugee', 'newcomer', 'citizen', 'neighbor', 'resident', 'american', 'san diegan', 'san diego resident'],
		demonym_suffixes_plural: ['immigrants', 'migrants', 'refugees', 'newcomers', 'citizens', 'people', 'nieghbors', 'residents', 'americans', 'san diegans', 'san diegan residents'],
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
		},
		// Templates - word order matters (use ~ to replace)
		{
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
			name: "Supporting",
			templateKey: 'supporting',
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
		term_groups: {
			adj_prefix: ['best', 'good', 'trusted', 'most impact', 'impact', 'amazing', 'incredible', 'top', 'biggest', 'exciting', 'inspiring', 'moving', 'successful', 'success', 'successes', 'win', 'wins', 'victory', 'victories', 'champion', 'champions'],
			funders: ['funder', 'funders', 'philanthropy', 'philanthropist', 'philanthropists', 'smart philanthropy', 'smart philanthropy', 'rapid response', 'scapegoating', 'islamophobia', 'anti-islamophobia', 'refugeeswelcome', 'refugees welcome', 'anti-trump', 'anti trump', 'resist', 'resistance', 'integrated voter engagement', 'ive', 'black lives matter', 'blacklivesmatter', 'black lives', 'blacklives', 'blm'],
			nouns_suffix: ['community', 'communities', 'org', 'orgs', 'leader', 'leaders', 'leadership', 'leadership development', 'community leader', 'community leaders', 'housing initiative', 'organization', 'organizations', 'organizing', 'organizer', 'organizers', 'community organizer', 'community organizers', 'community organizing', 'nonprofit', 'nonprofits', 'non-profit', 'non-profits', 'non profit', 'non profits', 'nonprofit organization', 'nonprofit organizations', 'non-profit organization', 'non-profit organizations', 'non profit organization', 'non profit organizations'],
			leader: ['lawyer', 'lawyers', 'legislation', 'representative', 'representatives', 'politician', 'politicians', 'ally', 'allies', 'alliance', 'alliances', 'coalition', 'coalitions', 'rights'],
			help: ['help', 'helping', 'support', 'solidarity', 'event', 'events', 'charity', 'charities', 'initiative', 'initiatives', 'advocacy', 'advocate', 'advocates', 'policy', 'policies', 'policy advocacy', 'pac', 'pacs', 'job', 'jobs', 'housing', 'integration', 'reception', 'welcome', 'welcoming', 'service', 'services', 'need', 'needs'],
			issues: ['issues', 'affordable housing', 'health', 'public health', 'mental health', 'nutrition', 'education', 'career', 'careers', 'livelihood', 'livelihoods', 'political', 'political advocacy', 'political advocate', 'political advocates', 'policy research', 'research', 'project', 'projects', 'donate', 'fundraiser', 'fundraisers', 'inclusion', 'legal aid'],
			network: ['network', 'networks', 'community center', 'community centers', 'volunteer', 'volunteering', 'resource', 'resources', 'resource center', 'resource centers', 'school', 'schools', 'program', 'programs', 'outreach', 'community outreach'],
			action: ['action', 'activist', 'activists', 'activism', 'voting', 'voter', 'voters', 'voting rights', 'voter outreach', 'expert', 'experts', 'professional', 'professionals', 'cultural competency', 'movement', 'justice', 'social justice', 'freedom', 'business', 'businesses', 'business owner', 'business owners', 'home owners', 'home ownership', 'civic engagement', 'empowerment', 'voice', 'voices'],
			law: ['law', 'laws', 'bill', 'bills', 'legislation', 'policy', 'policy research', 'legal']
		},
		templates: {
      questions: ['where are ~ from', 'where do ~ come from', 'where do ~ live', 'where in san diego do ~ live', 'where are san diego ~ from', 'where do san diego ~ live', 'what language do ~ speak', 'what language do ~ know', 'what religion are ~', 'what country are ~ from', '~ from what country', 'what country do ~ come from', '~ country', '~ language', '~ religion', '~ holiday', '~ holidays', '~ festival', '~ festivals', '~ culture', '~ cultures', '~ art', '~ artist', '~ artists', '~ music', '~ musician', '~ musicians', '~ language', '~ languages', '~ poetry', '~ poet', '~ poets'],
      donate: ['donate to ~', 'give to ~', 'give money to ~', 'support ~', 'volunteer with ~', 'volunteer for ~', 'take action for ~'],
      donating: ['donate ~', 'donating ~', 'how to donate ~', 'donate to ~', 'donating to ~', 'how to donate to ~', 'give ~', 'giving ~', 'how to give ~', 'give to ~', 'giving to ~', 'how to give to ~', 'give money ~', 'giving money ~', 'how to give money ~', 'give money to ~', 'giving money to ~', 'how to give money to ~'],
      supporting: ['support ~', 'supporting ~', 'how to support ~', 'stand with ~', 'standing with ~', 'how to stand with ~', 'stand up for ~', 'standing up for ~', 'how to stand up for ~', 'solidarity ~', 'solidarity with ~', 'help ~', 'helping ~', 'how to help ~', 'volunteer ~', 'volunteering ~', 'how to volunteer ~', 'volunteer with ~', 'volunteering with ~', 'how to volunteer with ~', 'volunteer for ~', 'volunteering for ~', 'how to volunteer for ~', 'take action ~', 'taking action ~', 'how to take action ~', 'take action for ~', 'taking action for ~', 'how to take action for ~', 'about ~', 'find ~', 'learn ~', 'learn about ~'],
      geo_prefix: ['california ~', "california's ~", 'californian ~', 'southern california ~', 'san diego ~', "san diego's ~", 'san diegan ~', 'los angeles ~', 'american ~', 'u.s. ~', 'united states ~', 'usa ~'],
      geo_suffix: ['~ in san diego', '~ san diego', '~ in california', '~ california', '~ in southern california', '~ southern california', '~ in san diego ca', '~ in san diego california', '~ in us', '~ in u.s.', '~ in usa', '~ in united states', '~ in america', '~ usa', '~ u.s.a.', '~ u.s.', '~ us', '~ united', , '~ united states', '~ america'],
    }
		//keywords: ['Loading']
	}
};
