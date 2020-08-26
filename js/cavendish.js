/*
 * 2020-05-14 - CTR - Code ripped from old MediaWiki site.
 * Cavendish skin: https://www.mediawiki.org/wiki/Skin:Cavendish
 * Skin license: GPLv2
 */
var mediaWikiLoadStart=(new Date()).getTime(),mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};mwPerformance.mark('mwLoadStart');function isCompatible(str){var ua=str||navigator.userAgent;return!!('querySelector'in document&&'localStorage'in window&&'addEventListener'in window&&!(ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60|NetFront|Opera Mini|S40OviBrowser|MeeGo/)||(ua.match(/Glass/)&&ua.match(/Android/))));}(function(){var NORLQ,script;if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');NORLQ=window.NORLQ||[];while(NORLQ.length){NORLQ.shift()();}window.NORLQ={push:function(fn){fn();}};window.RLQ={push:function(){}};return;}function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/load.php"});mw.loader.register([["site","nlQbDuNZ"],["noscript","/pR8cJvR",[],"noscript"],["filepage","J0plWYQu"],[
"user.groups","Vr8e3meK",[],"user"],["user","k7D/TkAk",[],"user"],["user.cssprefs","GqV9IPpY",[],"private"],["user.defaults","grrA/Kfw"],["user.options","C9rS/VRT",[6],"private"],["user.tokens","3rpfSrxb",[],"private"],["mediawiki.language.data","bHbxm6Jh",[174]],["mediawiki.skinning.elements","M3+o5fb1"],["mediawiki.skinning.content","TF+9U5kR"],["mediawiki.skinning.interface","zEq7XTLw"],["mediawiki.skinning.content.parsoid","8AdQ0ZpN"],["mediawiki.skinning.content.externallinks","fEdaaf1K"],["jquery.accessKeyLabel","n4/VLZfK",[25,130]],["jquery.appear","vz+RKxwJ"],["jquery.arrowSteps","aqIzxOTB"],["jquery.async","iZjUIZxC"],["jquery.autoEllipsis","ercl/gle",[37]],["jquery.badge","0LlIwF/E",[171]],["jquery.byteLength","22VCbOOs"],["jquery.byteLimit","NjX9oDom",[21]],["jquery.checkboxShiftClick","vZJXTcFc"],["jquery.chosen","A5mR1NYA"],["jquery.client","BQMTHdbJ"],["jquery.color","5woOtZnT",[27]],["jquery.colorUtil","TwwP12id"],["jquery.confirmable","ip+bfzek",[175]],["jquery.cookie",
"JdX6jB60"],["jquery.expandableField","RB2zyhTA"],["jquery.farbtastic","onKnzOEJ",[27]],["jquery.footHovzer","1RRNeXrT"],["jquery.form","K91Rsrti"],["jquery.fullscreen","ZOtE+alw"],["jquery.getAttrs","OkxiQgQU"],["jquery.hidpi","l6AR+tBd"],["jquery.highlightText","jnGiitV4",[242,130]],["jquery.hoverIntent","ogJVJR0b"],["jquery.i18n","O3u7BSBQ",[173]],["jquery.localize","cepQeb0C"],["jquery.makeCollapsible","fcdH/wjN"],["jquery.mockjax","I9dRLglu"],["jquery.mw-jump","YYCze7H+"],["jquery.mwExtension","b8WOkf5a"],["jquery.placeholder","02PrGnl5"],["jquery.qunit","Ii8RXUxb"],["jquery.qunit.completenessTest","hyBdJ+KT",[46]],["jquery.spinner","ta5d/SiG"],["jquery.jStorage","rMbyrjrX",[92]],["jquery.suggestions","1j6txSiM",[37]],["jquery.tabIndex","w94mZX3N"],["jquery.tablesorter","LlMxPyLS",[242,130,176]],["jquery.textSelection","ETKMZsTO",[25]],["jquery.throttle-debounce","yCmW6dTc"],["jquery.xmldom","KB5l86Sf"],["jquery.tipsy","W6Vzti0x"],["jquery.ui.core","xt/VMCgy",[58],"jquery.ui"],[
"jquery.ui.core.styles","daOqRRrJ",[],"jquery.ui"],["jquery.ui.accordion","th2KLE7+",[57,77],"jquery.ui"],["jquery.ui.autocomplete","i4CFIITV",[66],"jquery.ui"],["jquery.ui.button","etqaWt+M",[57,77],"jquery.ui"],["jquery.ui.datepicker","1ObYU3OH",[57],"jquery.ui"],["jquery.ui.dialog","wJxNH941",[61,64,68,70],"jquery.ui"],["jquery.ui.draggable","ODzHdBgW",[57,67],"jquery.ui"],["jquery.ui.droppable","GUqJSepw",[64],"jquery.ui"],["jquery.ui.menu","X4hIoARx",[57,68,77],"jquery.ui"],["jquery.ui.mouse","QRforpbR",[77],"jquery.ui"],["jquery.ui.position","Ye/dzCMk",[],"jquery.ui"],["jquery.ui.progressbar","uvYOMTeG",[57,77],"jquery.ui"],["jquery.ui.resizable","SJEVWaqS",[57,67],"jquery.ui"],["jquery.ui.selectable","QRkkZenL",[57,67],"jquery.ui"],["jquery.ui.slider","kdVJX9K4",[57,67],"jquery.ui"],["jquery.ui.sortable","1TWuc22v",[57,67],"jquery.ui"],["jquery.ui.spinner","CpNoCj7P",[61],"jquery.ui"],["jquery.ui.tabs","ZkZBBgRd",[57,77],"jquery.ui"],["jquery.ui.tooltip","PrwjoIUg",[57,68,77],
"jquery.ui"],["jquery.ui.widget","HajX5Dba",[],"jquery.ui"],["jquery.effects.core","oT8o8NmX",[],"jquery.ui"],["jquery.effects.blind","xySGBCsh",[78],"jquery.ui"],["jquery.effects.bounce","IC5uft2D",[78],"jquery.ui"],["jquery.effects.clip","fXtYQcR5",[78],"jquery.ui"],["jquery.effects.drop","ddndwZIJ",[78],"jquery.ui"],["jquery.effects.explode","KEjSVlHO",[78],"jquery.ui"],["jquery.effects.fade","F+Zea5TR",[78],"jquery.ui"],["jquery.effects.fold","iCBiTWG/",[78],"jquery.ui"],["jquery.effects.highlight","xEjiOuqR",[78],"jquery.ui"],["jquery.effects.pulsate","NKaLiqwd",[78],"jquery.ui"],["jquery.effects.scale","rqlUmOYY",[78],"jquery.ui"],["jquery.effects.shake","2vUI1PbJ",[78],"jquery.ui"],["jquery.effects.slide","HKHxjBvh",[78],"jquery.ui"],["jquery.effects.transfer","2KXvoOGD",[78],"jquery.ui"],["json","jmObnSuy",[],null,null,"return!!(window.JSON\u0026\u0026JSON.stringify\u0026\u0026JSON.parse);"],["moment","eDeMq/7H"],["mediawiki.apihelp","imXpPurU"],["mediawiki.template","nvEofFxD"
],["mediawiki.template.mustache","Lz/hXqLh",[95]],["mediawiki.template.regexp","4q1hOncM",[95]],["mediawiki.apipretty","u+bHkLIi"],["mediawiki.api","AQAfUD7Z",[147,8]],["mediawiki.api.category","bz70Er5b",[135,99]],["mediawiki.api.edit","CmE1nQYi",[135,99]],["mediawiki.api.login","eeH46n1H",[99]],["mediawiki.api.options","HX3OO3qa",[99]],["mediawiki.api.parse","R+/CRy/X",[99]],["mediawiki.api.upload","hGBh5EQt",[242,92,101]],["mediawiki.api.user","5jb9UMxl",[99]],["mediawiki.api.watch","W+3seG10",[99]],["mediawiki.api.messages","yNa0G9DX",[99]],["mediawiki.content.json","JusTe3x5"],["mediawiki.confirmCloseWindow","8nwXpOS2"],["mediawiki.debug","yD7TLsAC",[32,56]],["mediawiki.debug.init","Q8aQzD0m",[111]],["mediawiki.feedback","ktL+QqvX",[135,126,250]],["mediawiki.feedlink","3tukMFBG"],["mediawiki.filewarning","ftoG/0qn",[245]],["mediawiki.ForeignApi","EKuqwhEk",[117]],["mediawiki.ForeignApi.core","maV2RSbT",[99,243]],["mediawiki.helplink","QCoy7D8x"],["mediawiki.hidpi","b6/m85ul",[36],
null,null,"return'srcset'in new Image();"],["mediawiki.hlist","zROC7VhW"],["mediawiki.htmlform","FGVyhmd6",[22,130]],["mediawiki.htmlform.styles","5FHcJEZm"],["mediawiki.htmlform.ooui.styles","PnxGWe6H"],["mediawiki.icon","h4ZTBmqh"],["mediawiki.inspect","1mYvr8rI",[21,92,130]],["mediawiki.messagePoster","IEcj4fnM",[116]],["mediawiki.messagePoster.wikitext","lDiAf46t",[101,126]],["mediawiki.notification","LUhXPqRH",[183]],["mediawiki.notify","SmCvBl9i"],["mediawiki.RegExp","nYJW2MaY"],["mediawiki.pager.tablePager","B77Wgtwi"],["mediawiki.searchSuggest","MLLO7oFP",[35,45,50,99]],["mediawiki.sectionAnchor","lkXiLCVU"],["mediawiki.storage","SNfw++xF"],["mediawiki.Title","X4r886wl",[21,147]],["mediawiki.Upload","ZfBFV23G",[105]],["mediawiki.ForeignUpload","sX1cLtTS",[116,136]],["mediawiki.ForeignStructuredUpload.config","JtmRymYi"],["mediawiki.ForeignStructuredUpload","baD9SDIT",[138,137]],["mediawiki.Upload.Dialog","Ht8+IIoQ",[141]],["mediawiki.Upload.BookletLayout","aNdaf8nv",[136,175,
145,240,93,250,256,257]],["mediawiki.ForeignStructuredUpload.BookletLayout","i0Ycl9UD",[139,141,108,179,236,234]],["mediawiki.toc","g4XGJBuX",[151]],["mediawiki.Uri","dXmPlehU",[147,97]],["mediawiki.user","VKzIPUxn",[106,151,7]],["mediawiki.userSuggest","F2SNo03H",[50,99]],["mediawiki.util","Nl9TunkW",[15,129]],["mediawiki.viewport","omp7p+T3"],["mediawiki.checkboxtoggle","ETtej2kZ"],["mediawiki.checkboxtoggle.styles","33gN+Mgm"],["mediawiki.cookie","yfPjb+Jf",[29]],["mediawiki.toolbar","GmKoro49"],["mediawiki.experiments","87KaIGxI"],["mediawiki.raggett","P8UuP0t5"],["mediawiki.action.edit","BqqM9gZC",[22,53,156]],["mediawiki.action.edit.styles","aBhr3cVa"],["mediawiki.action.edit.collapsibleFooter","/LeX+bsi",[41,151,124]],["mediawiki.action.edit.preview","vs4kVH1T",[33,48,53,161,99,175]],["mediawiki.action.edit.stash","lx50pPWz",[35,99]],["mediawiki.action.history","M694L7jP"],["mediawiki.action.history.diff","tPbru5No"],["mediawiki.action.view.dblClickEdit","B13vkt7S",[183,7]],[
"mediawiki.action.view.metadata","xBiI+pxA"],["mediawiki.action.view.categoryPage.styles","xot+4GCU"],["mediawiki.action.view.postEdit","lqZoG4/Q",[151,175,95]],["mediawiki.action.view.redirect","l0sJlXzB",[25]],["mediawiki.action.view.redirectPage","rNL6mymT"],["mediawiki.action.view.rightClickEdit","D2EfJye6"],["mediawiki.action.edit.editWarning","nLLngc+t",[53,110,175]],["mediawiki.action.view.filepage","mzG/Eafs"],["mediawiki.language","LZmvQg5A",[172,9]],["mediawiki.cldr","ebC2s/0V",[173]],["mediawiki.libs.pluralruleparser","hV9FwjB2"],["mediawiki.language.init","jJCmA7wB"],["mediawiki.jqueryMsg","3BFJOerX",[242,171,147,7]],["mediawiki.language.months","o/Oovab3",[171]],["mediawiki.language.names","dVn8oVHH",[174]],["mediawiki.language.specialCharacters","v31HqVfX",[171]],["mediawiki.libs.jpegmeta","HjNXIdvC"],["mediawiki.page.gallery","99FlXkQR",[54,181]],["mediawiki.page.gallery.styles","2bj/FNtu"],["mediawiki.page.ready","962FYGHI",[15,23,41,43,45]],["mediawiki.page.startup",
"nabYMImM",[147]],["mediawiki.page.patrol.ajax","VR2arpQ0",[48,135,99,183]],["mediawiki.page.watch.ajax","d9yIl0DA",[107,183]],["mediawiki.page.image.pagination","WqBkFRer",[48,147]],["mediawiki.special","N4sgbLWk"],["mediawiki.special.apisandbox.styles","fzuaYp64"],["mediawiki.special.apisandbox","+o+QA/AT",[99,175,187,235,244]],["mediawiki.special.block","htHp3fz3",[147]],["mediawiki.special.blocklist","3PZUpnRd"],["mediawiki.special.changeslist","LXcvyvSW"],["mediawiki.special.changeslist.legend","A301okkS"],["mediawiki.special.changeslist.legend.js","9UASpr3u",[41,151]],["mediawiki.special.changeslist.enhanced","xYbAH6EM"],["mediawiki.special.changeslist.visitedstatus","rDCsXkBu"],["mediawiki.special.comparepages.styles","UNK4OA7f"],["mediawiki.special.edittags","dUS9EPG6",[24]],["mediawiki.special.edittags.styles","rlLxDb44"],["mediawiki.special.import","NIIIQYzo"],["mediawiki.special.movePage","sl2kLUZs",[232]],["mediawiki.special.movePage.styles","oLrQjHs6"],[
"mediawiki.special.pageLanguage","zTfbpbX3",[245]],["mediawiki.special.pagesWithProp","TxAtbjwd"],["mediawiki.special.preferences","TKudssob",[110,171,128]],["mediawiki.special.preferences.styles","IKTwCfJv"],["mediawiki.special.recentchanges","m0RmN+zm",[187]],["mediawiki.special.search","EGScBwws",[238]],["mediawiki.special.undelete","zmdBLtts"],["mediawiki.special.upload","PZCQlITc",[48,135,99,110,175,179,95]],["mediawiki.special.userlogin.common.styles","Zywb3bCD"],["mediawiki.special.userlogin.signup.styles","WgW98Qed"],["mediawiki.special.userlogin.login.styles","dqGA2HE8"],["mediawiki.special.userlogin.signup.js","37zfT1fs",[54,99,175]],["mediawiki.special.unwatchedPages","i24DQy7k",[135,107]],["mediawiki.special.watchlist","32f/X02P"],["mediawiki.special.version","DVerG19I"],["mediawiki.legacy.config","INdGODk8"],["mediawiki.legacy.commonPrint","TREF3sAH"],["mediawiki.legacy.protect","hxaJ1SX4",[22]],["mediawiki.legacy.shared","x6x3hx+V"],["mediawiki.legacy.oldshared",
"O6jm0Owl"],["mediawiki.legacy.wikibits","t3x73a+M",[147]],["mediawiki.ui","E0BV3e9c"],["mediawiki.ui.checkbox","bQ1+OD03"],["mediawiki.ui.radio","x/jFhFES"],["mediawiki.ui.anchor","lX9z33dj"],["mediawiki.ui.button","SsmmroQJ"],["mediawiki.ui.input","cczm30c2"],["mediawiki.ui.icon","AhMKqD/X"],["mediawiki.ui.text","3Ue4bxXI"],["mediawiki.widgets","j1jIGcIs",[19,22,135,99,233,248]],["mediawiki.widgets.styles","/1a3onNz"],["mediawiki.widgets.DateInputWidget","O3GWce6e",[93,248]],["mediawiki.widgets.datetime","nLu9AkY7",[245]],["mediawiki.widgets.CategorySelector","RlECfkzi",[116,135,248]],["mediawiki.widgets.UserInputWidget","UBc2eoQU",[248]],["mediawiki.widgets.SearchInputWidget","vzaULifv",[132,232]],["mediawiki.widgets.SearchInputWidget.styles","SQysZx6y"],["mediawiki.widgets.StashedFileWidget","jasrxZ8i",[245]],["es5-shim","F64L3KZz",[],null,null,"return(function(){'use strict';return!this\u0026\u0026!!Function.prototype.bind;}());"],["dom-level2-shim","ZHPNGZGY",[],null,null,
"return!!window.Node;"],["oojs","IfCvPDsG",[241,92]],["oojs-ui","mHz7yKqy",[249,248,250]],["oojs-ui-core","qXJ4DeUZ",[171,243,246]],["oojs-ui-core.styles","0q7JsMbr",[251,252,253],null,null,"return!!jQuery('meta[name=\"X-OOUI-PHP\"]').length;"],["oojs-ui.styles","kJVP60n5",[251,252,253],null,null,"return!!jQuery('meta[name=\"X-OOUI-PHP\"]').length;"],["oojs-ui-widgets","UmbWEP4N",[245]],["oojs-ui-toolbars","miRuyrnp",[245]],["oojs-ui-windows","igsj5QnS",[245]],["oojs-ui.styles.icons","SeAT3uEi"],["oojs-ui.styles.indicators","CtQ5NF60"],["oojs-ui.styles.textures","CxsuhN89"],["oojs-ui.styles.icons-accessibility","2ZJo0WQV"],["oojs-ui.styles.icons-alerts","danQnVV9"],["oojs-ui.styles.icons-content","peiDsGhw"],["oojs-ui.styles.icons-editing-advanced","eVZKYT1j"],["oojs-ui.styles.icons-editing-core","OFKtjTki"],["oojs-ui.styles.icons-editing-list","TNSJTkGL"],["oojs-ui.styles.icons-editing-styling","PUGK+IE5"],["oojs-ui.styles.icons-interactions","i55UKGWA"],["oojs-ui.styles.icons-layout"
,"l1QIHFMx"],["oojs-ui.styles.icons-location","2/ChMg3x"],["oojs-ui.styles.icons-media","jZYqmii9"],["oojs-ui.styles.icons-moderation","r093ITHX"],["oojs-ui.styles.icons-movement","7K0EkYdv"],["oojs-ui.styles.icons-user","iTB1DTYX"],["oojs-ui.styles.icons-wikimedia","4I+QNWCO"],["skins.monobook.styles","8sPR1bi6"],["skins.cavendish","vp/8BNIM"],["ext.FancyBoxThumbs","dBjbDcec"],["ext.tmh.thumbnail.styles","4arDkO60"],["ext.tmh.transcodetable","3hRES/FO",[101,244]],["ext.tmh.TimedTextSelector","bnAQAj2p"],["ext.tmh.OgvJsSupport","3bQJT+2Y"],["ext.tmh.OgvJs","95LW9r36",[275]],["mw.MwEmbedSupport","71waVh6I",[278,280,290,289,281]],["Spinner","vAyvVG0b",[147]],["iScroll","9gM/0xzz"],["jquery.loadingSpinner","aGp2Mc8G"],["mw.MwEmbedSupport.style","UnMf9/FX"],["mediawiki.UtilitiesTime","OOoRlqw1"],["mediawiki.client","PUklXXLj"],["mediawiki.absoluteUrl","Pp5h1LVb"],["mw.ajaxProxy","xC+T0XiD"],["fullScreenApi","PZRP37ee"],["jquery.embedMenu","A08sWIe8"],["jquery.ui.touchPunch","XJ5jasHx",[57,
67]],["jquery.triggerQueueCallback","xCRF8ZLc"],["jquery.mwEmbedUtil","zeOOya9O"],["jquery.debouncedresize","PlDEbDKf"],["mw.Language.names","2M6igeeU"],["mw.Api","kqX+mImW"],["jquery.embedPlayer","AJzLCwId"],["mw.EmbedPlayer.loader","sc1UD1/3",[294]],["mw.MediaElement","2wrTBE59",[275]],["mw.MediaPlayer","McDaGnE0"],["mw.MediaPlayers","4wcjiEc3",[297]],["mw.MediaSource","qz5Nx0g6",[277]],["mw.EmbedTypes","yIaZmsQH",[144,298]],["mw.EmbedPlayer","U2LEM0Kp",[286,29,291,287,38,72,288,282,284,283,175,304,300,296,299,310]],["mw.EmbedPlayerKplayer","tHxwGU1U"],["mw.EmbedPlayerGeneric","WiXVmCvq"],["mw.EmbedPlayerNative","vHbyWLaw"],["mw.EmbedPlayerVLCApp","/P9FjwA9",[144]],["mw.EmbedPlayerIEWebMPrompt","Oua4hBpY"],["mw.EmbedPlayerOgvJs","VQf8pPFe",[275,48]],["mw.EmbedPlayerImageOverlay","JHTuDPmt"],["mw.EmbedPlayerVlc","IqvfheMD"],["mw.PlayerSkinKskin","JsV3fOtT"],["mw.PlayerSkinMvpcf","wPVXsh0y"],["mw.TimedText","s5YWQbdT",[301,313]],["mw.TextSource","EpSb9WxZ",[282,285]],[
"mw.TimedText.loader","lxhPf7qF"],["mw.PopUpMediaTransform","t0wWBKut",[135,277,316]],["mw.PopUpMediaTransform.styles","4BJREcWw"],["mw.TMHGalleryHook.js","lgtTBGob"],["embedPlayerIframeStyle","0mcofhXs"],["ext.tmh.embedPlayerIframe","eGRXnR5h",[294,277]],["mw.MediaWikiPlayerSupport","Vz+OPceL",[293,277]],["mw.MediaWikiPlayer.loader","wXse8AOz",[295,314]]]);;mw.config.set({"wgLoadScript":"/load.php","debug":!1,"skin":"cavendish","stylepath":"/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/$1","wgScriptPath":!1,"wgScriptExtension":".php","wgScript":"/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"http://openspim.org",
"wgServerName":"openspim.org","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.27.1","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Welcome to the OpenSPIM Wiki","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"OpenSPIM","5":"OpenSPIM talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","274":"Widget","275":"Widget talk","710":"TimedText","711":"TimedText talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"openspim":4,"openspim_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"widget":274,"widget_talk":275,"timedtext":710,"timedtext_talk":711,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],
"wgSiteName":"OpenSPIM","wgDBname":"openspim_wiki","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"monobook":"MonoBook","cavendish":"Cavendish","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"openspim_wiki","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":15552000,"wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!1,"wgResourceLoaderLegacyModules":[],"wgForeignUploadTargets":[],"wgEnableUploads":!0,"EmbedPlayer.DirectFileLinkWarning":!0,"EmbedPlayer.EnableOptionsMenu":!0,"EmbedPlayer.DisableHTML5FlashFallback":!0,"TimedText.ShowInterface":"always","TimedText.ShowAddTextLink":!0,"EmbedPlayer.WebPath":"/extensions/TimedMediaHandler/MwEmbedModules/EmbedPlayer","AjaxRequestTimeout":30,"MediaWiki.DefaultProvider":"local","MediaWiki.ApiProviders":
{"wikimediacommons":{"url":"//commons.wikimedia.org/w/api.php"}},"MediaWiki.ApiPostActions":["login","purge","rollback","delete","undelete","protect","block","unblock","move","edit","upload","emailuser","import","userrights"],"EmbedPlayer.OverlayControls":!0,"EmbedPlayer.CodecPreference":["vp9","webm","h264","ogg"],"EmbedPlayer.DisableVideoTagSupport":!1,"EmbedPlayer.ReplaceSources":null,"EmbedPlayer.EnableFlavorSelector":!1,"EmbedPlayer.EnableIpadHTMLControls":!0,"EmbedPlayer.WebKitPlaysInline":!1,"EmbedPlayer.EnableIpadNativeFullscreen":!1,"EmbedPlayer.iPhoneShowHTMLPlayScreen":!0,"EmbedPlayer.ForceLargeReplayButton":!1,"EmbedPlayer.LibraryPage":"http://www.kaltura.org/project/HTML5_Video_Media_JavaScript_Library","EmbedPlayer.RewriteSelector":"video,audio,playlist","EmbedPlayer.DefaultSize":"400x300","EmbedPlayer.ControlsHeight":31,"EmbedPlayer.TimeDisplayWidth":85,"EmbedPlayer.KalturaAttribution":!0,"EmbedPlayer.AttributionButton":{"title":
"Kaltura html5 video library","href":"http://www.kaltura.com","class":"kaltura-icon","style":[],"iconurl":!1},"EmbedPlayer.EnableRightClick":!0,"EmbedPlayer.EnabledOptionsMenuItems":["playerSelect","download","share","aboutPlayerLibrary"],"EmbedPlayer.WaitForMeta":!0,"EmbedPlayer.ShowNativeWarning":!0,"EmbedPlayer.ShowPlayerAlerts":!0,"EmbedPlayer.EnableFullscreen":!0,"EmbedPlayer.EnableTimeDisplay":!0,"EmbedPlayer.EnableVolumeControl":!0,"EmbedPlayer.NewWindowFullscreen":!1,"EmbedPlayer.FullscreenTip":!0,"EmbedPlayer.FirefoxLink":"http://www.mozilla.com/en-US/firefox/upgrade.html?from=mwEmbed","EmbedPlayer.NativeControls":!1,"EmbedPlayer.NativeControlsMobileSafari":!0,"EmbedPlayer.FullScreenZIndex":999998,"EmbedPlayer.ShareEmbedMode":"iframe","EmbedPlayer.SkinList":["mvpcf","kskin"],"EmbedPlayer.DefaultSkin":"mvpcf","EmbedPlayer.MonitorRate":250,"EmbedPlayer.UseFlashOnAndroid":!1,"EmbedPlayer.EnableURLTimeEncoding":"flash",
"EmbedPLayer.IFramePlayer.DomainWhiteList":"*","EmbedPlayer.EnableIframeApi":!0,"EmbedPlayer.PageDomainIframe":!0,"EmbedPlayer.NotPlayableDownloadLink":!0,"EmbedPlayer.BlackPixel":"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%01%00%00%00%01%08%02%00%00%00%90wS%DE%00%00%00%01sRGB%00%AE%CE%1C%E9%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%07tIME%07%DB%0B%0A%17%041%80%9B%E7%F2%00%00%00%19tEXtComment%00Created%20with%20GIMPW%81%0E%17%00%00%00%0CIDAT%08%D7c%60%60%60%00%00%00%04%00%01'4'%0A%00%00%00%00IEND%AEB%60%82","TimedText.ShowRequestTranscript":!1,"TimedText.NeedsTranscriptCategory":"Videos needing subtitles","TimedText.BottomPadding":10,"TimedText.BelowVideoBlackBoxHeight":40});var RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};window.NORLQ={push:function(){}};}}};document.getElementsByTagName('head')[0].appendChild(script);}());
