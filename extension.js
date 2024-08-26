const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('lorem-alan.generate', function () {

		const alanQuotes = [
			"I know lying is wrong, but if the elephant man came in now in a blouse with some make up on, and said 'how do I look?' Would you say — bearing in mind he's depressed and has respiratory problems — would you say 'go and take that blusher off you mis-shapen headed elephant tranny'? No. You'd say 'You look nice... John'",
			"Minor criticism. I like to keep a bit more distance between the egg and the beans. I may want to mix them but that’s my decision. Use the sausage as a breakwater....but that’s nitpicking, on the whole a very good effort...Seven on ten. Let’s make love.",
			"Ok, If you’ve just joined us, we’re talking about who is the best Lord. Lord of the Rings, of the Dance or of the Flies, that’s tonight’s hot topic. Ok, the votes are closed and clearly the rings and the flies have been roundly trounced by the quick feet of blouse wearing tycoon Michael Flatly. Flatly my dear, I don’t riverdance.",
			"We managed to rectify it, though, because it now says, by adapting it, 'Cook' where it once said 'Cock', and it says 'Pass' now where it once said 'Piss', so it's slightly less rude.",
			"Oooh scary Irish men. Would you like to recruit me? I like your berets. They're worn by Saddam Hussain, Frank Spencer, the French.",
			"And, can I have the same, please? But with different shaped pasta. What do you call those pasta in bows? Like a bow-tie, but miniature? Like an action man bow-tie.And, can I have the same, please? But with different shaped pasta. What do you call those pasta in bows? Like a bow-tie, but miniature? Like an action man bow-tie.",
			"...and that was Big Yellow Taxi by Joni Mitchell, a song in which Joni complains that they paved paradise to put up a parking lot. A measure which actually would have alleviated traffic congestion on the outskirts of paradise, something which Joni singularly fails to point out - perhaps because it doesn’t quite fit in with her blinkered view of the world. Nevertheless, nice song.",
			"The temperature inside this apple pie is over one thousand degrees. If I squeeze it, a jet of molten bramley apple will squirt out. Could go your way; could go mine. Either way, one of us is going down."
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