// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "oss117psum" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('oss117psum.titre', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('OSSpsum copié, habile Bill!');	
		vscode.env.clipboard.writeText('Comment est votre blanquette ?');	
	});
	let disposable2 = vscode.commands.registerCommand('oss117psum.oneParagraph', () => {
		vscode.window.showInformationMessage('OSSpsum copié! Comme tu voudras my ass licking cock sucker mother fucking son of a bitch !');	
		vscode.env.clipboard.writeText("Bon ok admettons vous avez pris une année sabbatique très bien mais l’année prochaine, vous avez pensé à ça ? L’année prochaine ? C’est pas le monde qui va se plier à vos désirs mes enfants ! C’est pas 68, année de la jeunesse, c’est pas comme ça que ça se passe. C’est le vrai monde dehors et le vrai monde il va chez le coiffeur. Alors gnagna, les guitares, les troubadours tout ça c’est fini !");	
	});
	let disposable3 = vscode.commands.registerCommand('oss117psum.twoParagraphsDialog', () => {
		vscode.window.showInformationMessage('OSSpsum copié! Vous savez déjà ce que ça fait un million, Larmina ?');	
		vscode.env.clipboard.writeText("Une dictature c'est quand les gens sont communistes, déjà. Qu'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair. C'est ça, une dictature, Dolorès.\n\n- D’accord. Et comment vous appelez un pays qui a comme président un militaire avec les pleins pouvoirs, une police secrète, une seule chaîne de télévision et dont toute l’information est contrôlée par l’État ?\n– J’appelle ça la France, mademoiselle. Et pas n’importe laquelle ; la France du général de Gaulle.");	
	});
	let disposable4 = vscode.commands.registerCommand('oss117psum.threeParagraphs', () => {
		vscode.window.showInformationMessage('OSSpsum copié, à l’occasion, je vous mettrai un petit coup de polish…');	
		vscode.env.clipboard.writeText("Un philosophe a dit un jour « le mystère des Pyramides, c’est le mystère de la conscience dans laquelle on n’entre pas ».Les pharaons se faisaient enterrer avec leurs serviteurs.Lorsque l’on meurt, souvent on voudrait que tout s’arrête avec soi.Mais, c’est le cycle même de la vie : lorsque quelqu’un ou quelque chose meurt, quelqu’un ou quelque chose naît ailleurs.\n\nNous tentons d’oublier que nous sommes des animaux, mais la nature nous le rappelle. Parfois cruellement.Des scientifiques font des expériences sur les mouches drosophiles parce que la structure de leur cerveau est extrêmement proche de la nôtre.Le cheval nous voit plus grand que nous sommes avec son œil déformant. Ce n’est que grâce à cela que nous l’avons domestiqué.\n\nC’est notre œil, notre regard, qui nous dicte notre façon d’agir par rapport aux autres. Mais on peut être myope.L’aveugle ne voit pas, il ressent. Et, paradoxalement, il voit.Si le chat a la queue verticale, c’est qu’il est en confiance.Le cul-de-jatte a une jambe qui le démange encore.Quand une femme change d’homme, elle change de coiffure.Il faut laisser pleurer un nourrisson quand il va au lit, sinon on sacralise trop son coucher.Hum… On va boire un verre ou prendre un pot au bar… Hum ? Un p’tit godet là… On retourne au bar ? Tu veux un verre ?");	
	});
	let disposable5 = vscode.commands.registerCommand('oss117psum.twoParagraphs', () => {
		vscode.window.showInformationMessage('OSSpsum copié, j’aime quand on m’enduit d’huile…');	
		vscode.env.clipboard.writeText("Trumendous : Son fils Heinrich est ici à Rio, je crois me souvenir qu’il habite dans la favela. Aux dernières nouvelles il vit dans un groupe hippy. OSS 117 : Dans un quoi ? Trumendous : Groupe hippy ! OSS 117 : Oh grand dieu, vivre dans l’urine c’est affligeant. Mais ou va le monde ? Dolorès : Non non non, dans un groupe hippy. OSS 117 : Ah d’accord, ouais, ouais. Trumendous : Attends, j’ai peut-être sa photo… C’est Heinrich Von Zimmel. OSS 117 : Oh haha cette tignasse ! Je vois pas bien l’intérêt de ressembler à une femme, étrange. \n\nDolorès : Il font ça en signe de protestation, ils veulent changer le monde. OSS 117 : Haha changer le monde ? Quelle drôle d’idée, il est très bien comme ça le monde pourquoi changer ? Dolorès : En gros pour faire simple ils veulent faire l’amour pas la guerre. OSS 117 : Non mais l’un n’empêche pas l’autre j’ai toujours fait les deux et jusqu’à présent je n’ai jamais eu aucune plaintes ! Trumendous : Sacré Hubert, you are sooo French ! OSS 117 : Haha toi aussi !");	
	});
	let disposable6 = vscode.commands.registerCommand('oss117psum.oneSentence', () => {
		vscode.window.showInformationMessage('OSSpsum copié, 23 à 0 ! C’est la piquette Jack ! Tu sais pas jouer Jack ! T’es mauvais !');	
		vscode.env.clipboard.writeText("J’aime quand on m’enduit d’huile… En tout cas, on peut dire que le soviet éponge… À l’occasion, je vous mettrai un petit coup de polish… Dépêchons-nous je n’ai que quelques heures… J'aime me beurrer la biscotte.");	
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);
	context.subscriptions.push(disposable6);
}

// this method is called when your extension is deactivated
export function deactivate() {}
