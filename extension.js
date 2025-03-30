const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('lorem-alan.generate', function () {

		const alanQuotes = [
			'... and that was Big Yellow Taxi by Joni Mitchell, a song in which Joni complains that they paved paradise to put up a parking lot. A measure which actually would have alleviated traffic congestion on the outskirts of paradise, something which Joni singularly fails to point out - perhaps because it doesn’t quite fit in with her blinkered view of the world. Nevertheless, nice song.',
			'OK, If you’ve just joined us, we’re talking about who is the best Lord. Lord of the Rings, of the Dance or of the Flies, that’s tonight’s hot topic. OK, the votes are closed and clearly the rings and the flies have been roundly trounced by the quick feet of blouse wearing tycoon Michael Flatly. Flatly my dear, I don’t riverdance.',
			"All this wine nonsense! You get all these wine people, don't you? Wine this, wine that. Let's have a bit of red, let's have a bit of white. Ooh, that's a snazzy bouquet. Oh, this smells of, I don't know, basil. Sometimes you just want to say, sod all this wine, just give me a pint of... mineral water.",
			`We managed to rectify it, though, because it now says, by adapting it, "Cook" where it once said "Cock", and it says "Pass" now where it once said "Piss", so it's slightly less rude.`,
			'And, can I have the same, please? But with different shaped pasta. What do you call those pasta in bows? Like a bow-tie, but miniature? Like an action man bow-tie.',
			`Quick tip for yourself: if you're ever doing an after-dinner speech, you say "My Lords, Ladies and Gentlemen, sorry I'm late, I just popped to the toilet. And while I was there, I saw some graffiti and it said "I used to be indecisive, but now I'm not so sure"'. Straight away you've got them by the jaffas.`,
			'The temperature inside this apple pie is over one thousand degrees. If I squeeze it, a jet of molten bramley apple will squirt out. Could go your way; could go mine. Either way, one of us is going down.',
			"Oooh scary Irish men. Would you like to recruit me? I like your berets. They're worn by Saddam Hussain, Frank Spencer... the French.",
			'The proof is in the pudding, and the pudding, in this case, is a football... Boof! Eat my goal!! The goalie has got football pie all over his shirt!',
			'Swallow is a detective who tackles vandalism. Bit of a maverick, not afraid to break the law if he thinks it’s necessary. He’s not a criminal, but he will, perhaps, travel eighty miles an hour on the motorway if he, for example, he wants to get somewhere quickly.',
			"Do you know what this bathroom says to me? Aqua. Which is French for water. It's like being inside an enormous Fox's Glacier Mint. Which, again, to me is a bonus.",
			"This chemical toilet is a Saniflow 33. Now this little babe can cope with anything, and I mean anything. Earlier on I put in a pound of mashed up Dundee cake, let's take a look... not a trace! Peace of mind I'm sure, especially if you have elderly relatives on board.",
			'Right, I’ll tell you an anecdote. In 1974 I was catching the London train from Crewe station. It was very crowded; I found myself in a last-minute rush for the one remaining seat beside a tall, good-looking man with collar-length hair, it was the seventies; buckaroo! I looked up and saw it was none other than Peter Purves, it was the height of his Blue Peter career. He said, "You jammy bastard" and quick as a flash, I replied, "Don’t be blue, Peter!" Needless to say, I had the last laugh, now fuck off!',
			'I think the Irish are going through a major image change. I mean, the old image of Leprechauns, shamrock, Guinness, horses running through council estates, toothless simpletons, people with eyebrows on their cheeks, badly tarmacced drives – in this country, men in platform shoes being arrested for bombings, lots of rocks, and Beamish. I think people are saying "yes, there’s more to Ireland than this". A good slogan for the tourist board – "Dere’s more to Oireland dan dis.',
			'I find it amazing how many people still think the petrol cap on a Ford Focus is offside rear.',
			'Smell my cheese!',
			'Tough one! I think I’d have to say... "The Best Of The Beatles"',
			'Hi Susan. I was a bit bored so I dismantled my Corby Trouser Press. I can’t put it back together again. Will that show up on my bill?',
			'I’m forty-seven; my girlfriend’s thirty-three. She’s fourteen years younger than me... Back of the net!',
			'Lynn, get rid of her. She’s a drunk racist. I’ll tolerate one, but not both.',
			'Titanic, Titanic... Let me tell you something about the Titanic: people forget that on the Titanic’s maiden voyage there were over a thousand miles of uneventful, very pleasurable cruising before it hit the iceberg.',
			'"Sunday Bloody Sunday". What a great song. It really encapsulates the frustration of a Sunday, doesn’t it?',
			'There’s never any graffiti in the hotel. Although in the gents a couple of weeks a go I did see someone had drawn a lady’s part. Quite detailed. The guy obviously had talent, that’s the tragedy.',
			'Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, I repeat NOT, turn into an all-night rave.',
			'I’d just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them "get out of the area!" and watch them panic!',
			'Go to London, I guarantee you’ll either be mugged or not appreciated. Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway.',
			'That was... liquid football!',
			'Don’t rub your fanny on me!',
			'Guess which one of you ladies I’m gonna make love with now!',
			'Do you see any angry zombies here?',
			'Calm down, Lynn! You are suffering from minor women’s whiplash.',
			'OK, Lynn, what do you think of the polo neck? Balls out of the bath on this one.',
			'Yeah, I don’t know how you managed it. She was a bit of a heffalump, God rest her soul. Yeah, she was a big woman. I’m tempted to say she was big-hearted but that would be bullshit.',
			'Flatley my dear, I don’t riverdance... give a damn',
			'The Clifton Suspension Bridge was built for people like you. The fact you can drive cars across it is a bonus, so do the decent thing.',
			'I’m old enough to be her father. Well, older brother. Either way, it’s incest.',
			'The big question, What happens after we die?... Frederick emails to say he has 4 children, he’s the proud father of a new baby boy, Joshua and his daughter, Susan - 5 - has just started school, and he thinks, after death there is nothing.',
			'Wonder who got the power pack...',
			'No way you big spastic, you’re a mentalist!',
			'Terrestrial television is a dead duck. And who watches a dead duck? Nobody, not even its mother. She just flies away, depressed.',
			'I can read you like a book. And not a very good book. Certainly not Bravo Two Zero by Andy McNabb, which actually improves with every read.',
			'It’s called cholesterol. Scottish people eat it.',
			'ALAN: On the way here, quite near by I did see a community centre with a mural on the side? ESTATE AGENT: School for the deaf. ALAN: Right. That mean there will be noise or there won’t be noise? Difficult one to figure out, that. But they’re just deaf, they’re not deaf offenders?',
			'You don’t need beauty sleep. Well, forty winks',
			"Oh, I'd like to kiss her.",
			"Scum. Sub-human scum.",
			"I've got some bad news. IM LEAVING YOU, YOU COW!",
			"Sorry, sometimes it’s difficult to understand the... Geordie people",
			"Would you like me to lap dance for you?",
			"Hard worker. But there’s no affection.",
			"That kissing sound isn’t someone kissing me, or kissing a cock.",
			"You don’t need beauty sleep. Well... forty winks",
			"They’ve re-badged it you fool!",
			"You’re a rotten shit, too. Get your coat!",
			"Do you genuinely like me, sex-wise?",
			"I’ve been pubic for thirty-one years.",
			"Right... Let battle commence!",
			'You know, "Rubber Johnnies". Actually, being your age and everything there’s probably no need for them.',
			"Come on, I mean you must know some of the rotten rubbish you produce.",
			"Now who’s it to be, me or Cliff Thorburn?.. Thank you very much indeed. Kiss my face!",
			"I’m having a fantastic time, yeah. I’m having the best time since... sliced bread.",
			"Yeah, you are a big posh sod with plums in your mouth.",
			"Oh, hi. Can you make pornography come on my telly please?",
			"To look at you, you’d think you’d sing like and angel. But in actual fact you sound like a trapped boy.",
			'Sometime I fell like just going out and, I don’t know, stealing a traffic cone and putting on my head and saying "Look at me I’m a giant witch!"',
			'Fernando, you’re twenty two years old and you’re spending your Saturday afternoon in bed with a girl, you’re wasting your life!',
			'We were bonking like mad last night. If it wasn’t for the telescopic dampners on each corner of the caravan, it would have been wobbling like a very rude house... I say telescopic dampners I mean rigid stays.',
			'If it was just the potatoes that were affected, at the end of the day, you will pay the price if you’re a fussy eater.',
			'Tom Spotley?! When?',
			'Shitty zombies!',
			'"Apropos"... it’s Latin. You ought to have a basic grasp of Latin if you’re working in Currys.',
			'Got up, walked downstairs, had breakfast. Didn’t even wash my hands, ‘cause I’m a bloody bloke.',
			'In three minutes time, I’ll be talking to Norfolks youngest butcher.',
			'You know the breakfast buffet? Eat as much as you like, but from an eight inch plate. See that? twelve inches. Keep it in my room.',
			'If you see a lovely field with a family having a picnic, and there’s a nice pond in it, you fill in the pond with concrete, you plough the family into the field, you blow up the tree, and use the leaves to make a dress for your wife who’s also your brother.',
			'Yes, you can. In fact, I’ve made a few notes. Yes, bacon – ten on ten, button mushrooms – bingo, black pudding – snap, erm, minor criticism, more distance between the eggs and the beans. I may want to mix them, but I want that to be my decision. Use a sausage as a breakwater. But I’m nit-picking, on the whole a very good effort, seven on ten, let’s make love.',
			'Who’s this beautiful, blonde man with a lovely voice. It’s Annie Lennox!',
			'Since owning a Lexus, it’s amazing the number of Lexi you see around. Because that’s the plural.',
			'With a mere ninety break-horse-power available, progress is too leisurely to be called fast, but on the motorway in fifth gear the Megane’s slow pace really becomes a pain. Uphill runs become power-sappingly mundane, while overtaking National Express coaches can become a long, drawn-out affair.” Not my words, Carol. The words of Top Gear magazine.',
			'You do sound like a baddie in a James Bond film. Dr No... Vocal Cords.',
			'That was the best full English Breakfast I’ve had since Gary Wilmot’s wedding!',
			'You know the fact that he made that jokey remark doesn’t mean that he actually sent you the card. I sent you a chocolate orange, but I had the decency to admit it.',
			'Convoy? Michael, you’re hanging around with a man who uses a collective term for a single vehicle!',
			'Can I have a couple of eggs for breakfast tomorrow? I’d like you to lay them, you chicken!',
			'ESTATE AGENT: You could swing a tiger in here. ALAN: You could, couldn’t you, yes....Wouldn’t want to, though. Not unless it had been stunned. Even then It’s going to weigh the best part of a ton.',
			'ALAN: Cliff Thorburn is not, primarily, a presenter. He is a snooker - an ex-snooker player, and is an unknown quantity. HUGH: Yeah, but he’s not under a cow.',
			'Can I shock you? I like wine.',
			'Ursula, if I get caught in flagrante whilst violating the Highway Code, my wife will find out, I’ll get three points on my license, my insurance premium could go up by thirty percent. That’s not going to happen. Now put your top on and get out.',
			'JACK: I just wanted to say your comments earlier about farmers was ignorant and offensive. ALAN: Who invented the skip? JACK: I don’t care who invented the skip, I think it’s way out of order... ALAN: Who invented the skip? JACK: You speak like a man who has no knowledge... ALAN: Who invented the skip? JACK: ...of the subject that you’re talking about. ALAN: Who invented the skip?',
			'Well, I wouldn’t eat one of your tomatoes if it came up and said "Eat me", which is not unlikely considering all the rubbish you stick in ’em.',
			'You have big sheds, but nobody’s allowed in. And inside these big sheds are twenty-foot-high chickens, because of all the chemicals you’ve put in ’em, and these chickens are scared! They don’t know why they’re so big! They go "Oh, why am I so massive?" And they’re looking down at all the other little chickens and they think they’re in an aeroplane because all the other chickens are so small.',
			'FARMER: Partridge, you wanker! ALAN: Ahhh... We’ll dub that out, play some music over it.',
			'I’d spend hours in HMVs, Virgin Megastores and second-hand record shops staffed by greasy-haired forty-year-olds dressed as twenty-year-olds, listening to contemporary music of every genre – Britrock, heavy maiden, gang rap, breakbeat. And I came to a startling but unshakeable conclusion: no genuinely good music has been created since 1988.',
			'Putting a damp spoon back in the bowl is the tea-drinking equivalent of sharing a needle. And I did not want to end up with the tea-drinking equivalent of AIDS.',
			'The father, Trevor, was an asthmatic, but what he lacked in being able to breath quietly, he more than made up for with parental skills.',
			'Sport, on the other hand, is straightforward. In badminton, if you win a rally, you get one point. In volleyball, if you win a rally, you get one point. In tennis, if you win a rally, you get fifteen points for the first or second rallies you’ve won in that game, or ten for the third, with an indeterminate amount assigned to the fourth rally other than the knowledge that the game is won, providing one player is two ten-point - or fifteen-point - segments clear of his opponent. It’s clear and simple.',
			'He is also a keen cook, gardener and birder. He has no middle fingers on one hand, so he can’t swear but is permanently doing the heavy metal sign.',
			'If I was feeling like a challenge, I’d kick out the plug, turn the taps on and see if I could maintain the exact water level. It was a bit like balancing the clutch in an old Mini Metro. Although tricky at first, by the time I checked out I could find the bath’s biting point within three minutes. Satisfying? Just bit.',
			'With my alarm set for five, I hit snooze every ten minutes until just before seven, at which point it’s time to start the day.',
			'ALAN: Lynn I’ve pierced my foot on a spike! LYNN: Pull if off, all at once! ALAN: Then all the blood will run out the hole in my foot, you old miss! LYNN: Pull your foot off, now! ALAN: No, I’m not going to do it Lynn. You pull your foot off!'
		];


		const randomQuote = alanQuotes[Math.floor(Math.random() * alanQuotes.length)];

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			editor.edit(editBuilder => {
				editBuilder.replace(selection, randomQuote);
			});
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};