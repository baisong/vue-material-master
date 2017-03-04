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
		adtexts: [
			{
				line1: 'Stand With San Diego Refugees',
		  	line2: 'Help PANA Develop New Leaders',
		  	line3: 'PANA is lifting up refugee voices and building grassroots community leadership.'
		  },			{
				line1: 'Fight Trump',
		  	line2: 'Make A Commitment To Refugees',
		  	line3: 'PANA is a 501(c)3 non-profit lifting up refugee voices. Become a monthly donor!'
		  }, {
				line1: 'Fight Trump',
		  	line2: 'Make A Commitment To Refugees',
		  	line3: 'Become a monthly donor and help us lift up refugee voices for change.'
		  }, {
				line1: 'Fight the Trump Agenda',
		  	line2: 'Sustain Refugee Rights Work',
		  	line3: 'PANA is a 501(c)3 non-profit lifting up refugee voices. Become a monthly donor!'
		  }, {
		  	line1: 'Telling A New Story',
		  	line2: 'Lifting Up Refugee Communities',
		  	line3: 'PANA lifts up refugee voices to include all families in our economy. Join today.'
		  }
		],
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
		pronoun_suffixes: ['youth', 'boy', 'girl',],// 'woman', 'man', 'child', 'family', 'senior', 'elder'],
		pronoun_suffixes_plural: ['women', 'men', 'children', 'boys', 'girls'], //'youths', 'families', 'seniors', 'elderly', 'elders'],
		demonym_suffixes: ['immigrant', 'migrant', 'refugee', 'newcomer', 'citizen', 'neighbor', 'resident', 'american', 'san diegan', 'san diego resident'],
		demonym_suffixes_plural: ['immigrants', 'migrants', 'refugees', 'newcomers', 'citizens', 'people', 'nieghbors', 'residents', 'americans', 'san diegans', 'san diegan residents'],
		groups: [{
			name: "Basic",
			term: false,
			template: false,
			replace: false
		}, {
			name: "Best",
			term: 'adj_prefix',
			template: false,
			replace: false
		}, {
			name: "Nouns",
			term: 'nouns_suffix',
			template: false,
			replace: true
		}, {
			name: "GeoSuf Nouns",
			term: 'nouns_suffix',
			template: 'geo_suffix',
			replace: true
		},  {
			name: "GeoPre Nouns",
			term: 'nouns_suffix',
			template: 'geo_prefix',
			replace: true
		},  {
			name: "Best Nouns",
			term: ['nouns_suffix', 'adj_prefix'],
			template: false,
			replace: true
		}, {
			name: "Funders",
			term: 'funders',
			template: false,
			replace: false
		}, {
			name: "Leaders",
			term: 'leader',
			template: false,
			replace: false
		}, {
			name: "Help",
			term: 'help',
			template: false,
			replace: false
		}, {
			name: "Issues",
			term: 'issues',
			template: false,
			replace: false
		}, {
			name: "Networks",
			term: 'network',
			template: false,
			replace: false
		}, {
			name: "Action",
			term: 'action',
			template: false,
			replace: false
		}, {
			name: "Law",
			term: 'law',
			template: false,
			replace: false
		},
		// Templates - word order matters (use ~ to replace)
		{
			name: "Questions",
			term: false,
			template: 'questions',
			replace: true
		}, {
			name: "Donate",
			term: false,
			template: 'donate',
			replace: true
		}, {
			name: "How to give",
			term: false,
			template: 'donating',
			replace: true
		}, {
			name: "Supporting",
			term: false,
			template: 'supporting',
			replace: true
		}, {
			name: "Geo prefix",
			term: false,
			template: 'geo_prefix',
			replace: true
		}, {
			name: "Geo suffix",
			term: false,
			template: 'geo_suffix',
			replace: true
		}],
		term_groups: {
			adj_prefix: ['best', 'good', 'trusted', 'most impact', 'most impactful', 'highest impact', 'impact', 'amazing', 'incredible', 'top', 'biggest', 'exciting', 'inspiring', 'moving', 'successful', 'success', 'successes', 'win', 'wins', 'victory', 'victories', 'champion', 'champions'],
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
            /*
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
       */

      /*
      best charities to donate to
best donation website
best donation sites
best donation pages
donation sites
online donation sites
money donation sites
site for donations
charity donation sites
online charity donation sites
donation sites online
donation sites near me
donate to refugees
donations for refugees
refugee donation
donate refugees
how to donate to refugees
donate to help refugees
un refugee donation
make a donation
make donation
make a donation page
how to make a donation page
make a donation website
make donation online
how to make a donation
to make a donation
make a donation to
where to make donations
make a donation online
make donation website
how to make a donation website
organizations to donate to
donation organizations
top organizations to donate to
good organizations to donate to
american donation organization
charity giving
giving to charity
giving charity
give money to charity
charity giving sites
just giving charity
charity giving percentages
donation sites for individuals
       */
