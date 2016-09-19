const $ = require('jquery');

var mysteryWordARRAY = ['which','there','their','about','would','these','other','words','could','write','first','water','after','where','right','think','three','years','place','sound','great','again','still','every','small','found','those','never','under','might','while','house','world','below','asked','going','large','until','along','shall','being','often','earth','began','since','study','night','light','above','paper','parts','young','story','point','times','heard','whole','white','given','means','music','miles','thing','today','later','using','money','lines','order','group','among','learn','known','space','table','early','trees','short','hands','state','black','shown','stood','front','voice','kinds','makes','comes','close','power','lived','vowel','taken','built','heart','ready','quite','class','bring','round','horse','shows','piece','green','stand','birds','start','river','tried','least','field','whose','girls','leave','added','color','third','hours','moved','plant','doing','names','forms','heavy','ideas','cried','check','floor','begin','woman','alone','plane','spell','watch','carry','wrote','clear','named','books','child','glass','human','takes','party','build','seems','blood','sides','seven','mouth','solve','north','value','death','maybe','happy','tells','gives','looks','shape','lives','steps','areas','sense','speak','force','ocean','speed','women','metal','south','grass','scale','cells','lower','sleep','wrong','pages','ships','needs','rocks','eight','major','level','total','ahead','reach','stars','store','sight','terms','catch','works','board','cover','songs','equal','stone','waves','guess','dance','spoke','break','cause','radio','weeks','lands','basic','liked','trade','fresh','final','fight','meant','drive','spent','local','waxes','knows','train','bread','homes','teeth','coast','thick','brown','clean','quiet','sugar','facts','steel','forth','rules','notes','units','peace','month','verbs','seeds','helps','sharp','visit','woods','chief','walls','cross','wings','grown','cases','foods','crops','fruit','stick','wants','stage','sheep','nouns','plain','drink','bones','apart','turns','moves','touch','angle','based','range','marks','tired','older','farms','spend','shoes','goods','chair','twice','cents','empty','alike','style','broke','pairs','count','enjoy','score','shore','roots','paint','heads','shook','serve','angry','crowd','wheel','quick','dress','share','alive','noise','solid','cloth','signs','hills','types','drawn','worth','truck','piano','upper','loved','usual','faces','drove','cabin','boats','towns','proud','court','model','prime','fifty','plans','yards','prove','tools','price','sheet','smell','boxes','raise','match','truth','roads','threw','enemy','lunch','chart','scene','graph','doubt','guide','winds','block','grain','smoke','mixed','games','wagon','sweet','topic','extra','plate','title','knife','fence','falls','cloud','wheat','plays','enter','broad','steam','atoms','press','lying','basis','clock','taste','grows','thank','storm','agree','brain','track','smile','funny','beach','stock','hurry','saved','sorry','giant','trail','offer','ought','rough','daily','avoid','keeps','throw','allow','cream','laugh','edges','teach','frame','bells','dream','magic','occur','ended','chord','false','skill','holes','dozen','brave','apple','climb','outer','pitch','ruler','holds','fixed','costs','calls','blank','staff','labor','eaten','youth','tones','honor','globe','gases','doors','poles','loose','apply','tears','exact','brush','chest','layer','whale','minor','faith','tests','judge','items','worry','waste','hoped','strip','begun','aside','lakes','bound','depth','candy','event','worse','aware','shell','rooms','ranch','image','snake','aloud','dried','likes','motor','pound','knees','refer','fully','chain','shirt','flour','drops','spite','orbit','banks','shoot','curve','tribe','tight','blind','slept','shade','claim','flies','theme','queen','fifth','union','hence','straw','entry','issue','birth','feels','anger','brief','rhyme','glory','guard','flows','flesh','owned','trick','yours','sizes','noted','width','burst','route','lungs','uncle','bears','royal','kings','forty','trial','cards','brass','opera','chose','owner','vapor','beats','mouse','tough','wires','meter','tower','finds','inner','stuck','arrow','poems','label','swing','solar','truly','tense','beans','split','rises','weigh','hotel','stems','pride','swung','grade','digit','badly','boots','pilot','sales','swept','lucky','prize','stove','tubes','acres','wound','steep','slide','trunk','error','porch','slave','exist','faced','mines','marry','juice','raced','waved','goose','trust','fewer','favor','mills','views','joint','eager','spots','blend','rings','adult','index','nails','horns','balls','flame','rates','drill','trace','skins','waxed','seats','stuff','ratio','minds','dirty','silly','coins','hello','trips','leads','rifle','hopes','bases','shine','bench','moral','fires','meals','shake','shops','cycle','movie','slope','canoe','teams','folks','fired','bands','thumb','shout','canal','habit','reply','ruled','fever','crust','shelf','walks','midst','crack','print','tales','coach','stiff','flood','verse','awake','rocky','march','fault','swift','faint','civil','ghost','feast','blade','limit','germs','reads','ducks','dairy','worst','gifts','lists','stops','rapid','brick','claws','beads','beast','skirt','cakes','lions','frogs','tries','nerve','grand','armed','treat','honey','moist','legal','penny','crown','shock','taxes','sixty','altar','pulls','sport','drums','talks','dying','dates','drank','blows','lever','wages','proof','drugs','tanks','sings','tails','pause','herds','arose','hated','clues','novel','shame','burnt','races','flash','weary','heels','token','coats','spare','shiny','alarm','dimes','sixth','clerk','mercy','sunny','guest','float','shone','pipes','worms','bills','sweat','suits','smart','upset','rains','sandy','rainy','parks','sadly','fancy','rider','unity','bunch','rolls','crash','craft','newly','gates','hatch','paths','funds','wider','grace','grave','tides','admit','shift','sails','pupil','tiger','angel','cruel','agent','drama','urged','patch','nests','vital','sword','blame','weeds','screw','vocal','bacon','chalk','cargo','crazy','acted','goats','arise','witch','loves','queer','dwell','backs','shots','merry','phone','cheek','peaks','ideal','beard','eagle','creek','cries','ashes','stall','yield','mayor','opens','input','fleet','tooth','cubic','wives','burns','poets','apron','spear','organ','cliff','stamp','paste','rural','baked','chase','slice','slant','knock','noisy','sorts','stays','wiped','blown','piled','clubs','cheer','widow','twist','tenth','hides','comma','sweep','spoon','stern','crept','maple','deeds','rides','muddy','crime','jelly','ridge','drift','dusty','devil','tempo','humor','sends','steal','tents','waist','roses','reign','noble','cheap','dense','linen','geese','woven','posts','hired','wrath','salad','bowed','tires','shark','belts','grasp','blast','polar','fungi','tends','pearl','loads','jokes','veins','frost','hears','loses','hosts','diver','phase','toads','alert','tasks','seams','coral','focus','naked','puppy','jumps','spoil','quart','macro','fears','flung','spark','vivid','brook','steer','spray','decay','ports','socks','urban','goals','grant','minus','films','tunes','shaft','firms','skies','bride','wreck','flock','stare','hobby','bonds','dared','faded','thief','crude','pants','flute','votes','tonal','radar','wells','skull','hairs','argue','wears','dolls','voted','caves','cared','broom','scent','panel','fairy','olive','bends','prism','lamps','cable','peach','ruins','rally','lambs','sells','cools','draft','charm','limbs','brake','gazed','cubes','delay','beams','fetch','ranks','array','harsh','camel','vines','picks','naval','purse','rigid','crawl','toast','soils','sauce','basin','ponds','twins','wrist','fluid','pools','brand','stalk','robot','reeds','hoofs','buses','sheer','grief','bloom','dwelt','melts','risen','flags','knelt','fiber','roofs','freed','armor','piles','aimed','algae','twigs','lemon','ditch','drunk','rests','chill','slain','panic','cords','tuned','crisp','ledge','dived','swamp','clung','stole','molds','yarns','liver','gauge','breed','stool','gulls','awoke','gross','diary','rails','belly','trend','flask','stake','fried','draws','actor','handy','bowls','haste','scope','deals','knots','moons','essay','thump','hangs','bliss','dealt','gains','bombs','clown','palms','cones','roast','tidal','bored','chant','acids','dough','camps','swore','lover','hooks','cocoa','punch','award','reins','ninth','noses','links','drain','fills','nylon','lunar','pulse','flown','elbow','fatal','sites','moths','meats','foxes','mined','attic','fiery','mount','usage','swear','snowy','rusty','scare','traps','relax','react','valid','robin','cease','gills','prior','safer','polio','loyal','swell','salty','marsh','vague','weave','mound','seals','mules','virus','scout','acute','windy','stout','folds','seize','hilly','joins','pluck','stack','lords','dunes','burro','hawks','trout','feeds','scarf','halls','coals','towel','souls','elect','buggy','pumps','loans','spins','files','pains','photo','rival','flats','syrup','rodeo','sands','moose','pints','curly','comic','cloak','onion','clams','scrap','couch','codes','fails','ounce','lodge','greet','gypsy','utter','paved','zones','fours','alley','tiles','bless','crest','elder','kills','yeast','erect','bugle','medal','roles','hound','snail','alter','ankle','relay','loops','zeros','bites','modes','debts','realm','glove','swims','poked','stray','lifts','maker','lumps','graze','dread','barns','docks','masts','pours','wharf','curse','plump','robes','seeks','cedar','curls','jolly','myths','cages','gloom','locks','pedal','beets','crows','slash','creep','rowed','chips','fists','wines','cares','valve','newer','motel','ivory','necks','clamp','barge','blues','alien','frown','strap','crews','shack','gonna','saves','stump','ferry','idols','cooks','juicy','glare','carts','alloy','bulbs','lawns','lasts','fuels','oddly','crane','filed','weird','shawl','slips','troop','bolts','suite','sleek','quilt','tramp','blaze','atlas','odors','scrub','crabs','probe','logic','adobe','exile','rebel','grind','sting','spine','cling','desks','grove','leaps','prose','lofty','agony','snare','tusks','bulls','moods','humid','finer','dimly','plank','china','pines','guilt','sacks','brace','quote','lathe','fonts','scalp','adopt','foggy','clump','perch','tumor','teens','crank','fable','hedge','genes','sober','boast','tract','cigar','unite','thigh','haiku','swish','dikes','wedge','booth','eased','frail','cough','tombs','darts','forts','choir','pouch','pinch','hairy','buyer','torch','vigor','waltz','heats','herbs','users','flint','click','madam','bleak','blunt','aided','lacks','masks','waded','risks','nurse','chaos','sewed','cured','ample','lease','steak','sinks','merit','bluff','bathe','gleam','bonus','colts','shear','gland','silky','skate','birch','anvil','sleds','groan','maids','meets','speck','hymns','hints','drown','slick','quest','coils','spied','snows','stead','snack','plows','blond','tamed','thorn','waits','glued','banjo','tease','arena','bulky','carve','stunt','warms','shady','razor','folly','leafy','notch','fools','otter','pears','flush','genus','ached','flaps','spout','fumes','adapt','cuffs','tasty','stoop','clips','disks','sniff','lanes','brisk','imply','demon','super','furry','raged','hates','wiser','timid','beaks','rotor','glide','plots','trait','slums','lyric','puffs','decks','brood','mourn','aloft','abuse','whirl','edged','ovary','quack','heaps','slang','await','civic','saint','bevel','sonar','aunts','packs','froze','tonic','corps','swarm','frank','repay','gaunt','wired','niece','cello','needy','chuck','stony','media','surge','hurts','repel','husky','dated','hunts','mists','exert','dries','mates','sworn','baker','spice','oasis','boils','spurs','doves','sneak','colon','siege','strum','piped','nasty','rinse','boxer','shrub','amuse','tacks','cited','laden','larva','rents','yells','spool','spill','crush','jewel','snaps','stain','kicks','tying','slits','rated','eerie','smash','plums','zebra','earns','bushy','scary','squad','tutor','silks','slabs','bumps','evils','fangs','snout','peril','pivot','yacht','lobby','jeans','grins','viola','comet','scars','chops','raids','eater','slate','skips','misty','urine','knobs','sleet','holly','pests','forks','grill','trays','tenor','wares','canon','wakes','kitty','miner','polls','shaky','nasal','scorn','chess','taxis','crate','shyly','tulip','forge','nymph','budge','lowly','abide','depot','fudge','pills','groom','lanky','boost','broth','heave','gravy','beech','timed','quail','inert','gears','chick','hinge','trash','clash','sighs','renew','bough','dwarf','slows','quill','shave','spore','sixes','chunk','madly','paced','braid','fuzzy','motto','spies','slack','mucus','magma','awful','discs','erase','posed','asset','cider','taper','theft','churn','satin','slots','taxed','bully','sloth','shale','tread','raked','curds','manor','aisle','bulge','loins','stair','leans','bunks','squat','towed','panes','sakes','heirs','caste','dummy','pores','fauna','crook','poise','epoch','risky','warns','fling','berry','grape','flank','drags','squid','pelts','icing','irony','irons','barks','whoop','choke','diets','whips','tally','dozed','twine','kites','bikes','ticks','riots','roars','vault','looms','scold','blink','sieve','spike','lends','pizza','brink','widen','feats','bison','soggy','scoop','nudge','skiff','amber','salts','hitch','leash','dined','chute','snort','gusts','melon','cheat','reefs','llama','lasso','debut','quota','oaths','prone','mixes','rafts','dives','stale','inlet','flick','brows','untie','batch','greed','chore','stirs','blush','onset','barbs','volts','beige','swoop','paddy','laced','shove','jerky','poppy','leaks','fares','dodge','godly','affix','brute','nicer','undue','snarl','merge','doses','showy','daddy','roost','vases','swirl','petty','curry','cobra','genie','flare','messy','soaks','whine','amino','plaid','spiny','mowed','baton','peers','vowed','pious','swans','exits','afoot','plugs','idiom','chili','rites','grubs','annex','dizzy','hasty','latch','wasps','mirth','baron','plead','aloof','aging','pixel','bared','mummy','hotly','buddy','chaps','badge','stark','fairs','ovens','drone','gauze','idiot','fussy','annoy','shank','gouge','bleed','elves','unfit','baggy','mower','scant','grabs','fleas','album','sawed','cooky','murky','infer','burly','waged','dingy','kneel','creak','vanes','smoky','spurt','combs','easel','laces','humps','rumor','aroma','horde','opium','slime','afire','husks','snips','hazel','lined','cafes','naive','wraps','piers','beset','agile','tongs','steed','fraud','booty','valor','downy','witty','mossy','psalm','scuba','tours','polka','milky','gaudy','shrug','tufts','wilds','laser','truss','hares','creed','lilac','siren','bribe','swine','muted','flips','cures','sinew','boxed','hoops','gasps','hoods','niche','yucca','glows','sewer','whack','fuses','gowns','droop','bucks','pangs','mails','whisk','haven','clasp','sling','stint','urges','champ','piety','chirp','pleat','posse','sunup','menus','howls','quake','knack','plaza','fiend','caked','bangs','erupt','poker','olden','cramp','voter','poses','manly','slump','fined','grips','gaped','purge','hiked','maize','fluff','strut','sloop','prowl','roach','cocks','bland','dials','plume','slaps','soups','foams','solos','skier','eaves','totem','fused','latex','veils','mused','racks','gnats','bouts','shuts','hoses','dryly','hover','gloss','seeps','denim','putty','leaky','dusky','filth','oboes','spans','fowls','adorn','glaze','haunt','obeys','bakes','abyss','gangs','aches','trawl','claps','undid','spicy','hoist','fades','acorn','pussy','gruff','musty','tarts','snuff','hunch','truce','tweed','dryer','loser','moles','lapse','vexed','wager','domes','sheen','clang','spade','broil','slyly','studs','grunt','donor','slugs','aspen','homer','croak','tithe','halts','avert','havoc','jeeps','flaky','ladle','taunt','snore','props','prune','pokes','tiled','daisy','villa','farce','binds','cites','fixes','jerks','livid','waked','inked','booms','chews','licks','hyena','lusty','sonic','usher','vigil','spars','dumps','scaly','wisps','mince','panda','flier','axles','patio','rabbi','petal','tints','grate','troll','tolls','relic','phony','bleat','flaws','flake','snags','aptly','drawl','ulcer','soapy','bossy','monks','twang','diner','taped','cadet','grids','spawn','guile','noose','girth','slimy','aides','spasm','burrs','alibi','saucy','muggy','liter','joked','goofy','exams','enact','stork','lured','toxic','omens','nears','covet','wrung','forum','venom','moody','alder','sassy','flair','guild','prays','wrens','hauls','tilts','pecks','stomp','tempt','mesas','omits','tepee','wring','evoke','limes','cluck','lunge','highs','canes','giddy','lithe','verge','khaki','queue','foyer','deter','crumb','spire','jumpy','buoys','stubs','lucid','thong','whiff','maxim','hulls','jiffy','cinch','igloo','gazes','calms','bitch','scowl','gulps','coded','ebony','flail','isles','clods','dazed','adept','oozed','sedan','skunk','manes','adore','sneer','mango','flora','roomy','thaws','watts','freer','plush','grope','bravo','stink','sever','waned','rarer','regal','wards','fawns','babes','unify','amend','visor','hefty','nines','throb','pecan','butts','jails','flyer','saber','nomad','beeps','domed','gulfs','curbs','aorta','tangy','wryly','cheep','rages','evade','lures','freak','vogue','tunic','slams','knits','dumpy','mania','spits','hikes','trots','nosed','clank','dogma','bloat','graft','keyed','finch','sperm','amiss','eying','twirl','lurch','chins','guise','grits','junks','cache','atoll','deity','toils','spree','mocks','scans','raven','reels','scuff','mimic','corny','ember','torso','wipes','edict','sulky','recur','groin','baste','moldy','liars','inept','gusty','facet','jetty','equip','leper','soars','cater','dowry','sided','yearn','decoy','taboo','heals','beret','endow','vents','chimp','vinyl','clout','wades','smirk','bores','bunny','surly','milks','query','mired','blare','froth','gruel','navel','puffy','grime','derby','gavel','teddy','vomit','moans','allot','defer','wield','viper','erred','hewed','abhor','adage','loped','fishy','bible','hires','foals','feuds','thuds','jeers','knead','quirk','rugby','expel','rigor','ester','glues','lotus','lurid','rungs','thyme','valet','ozone','caper','chime','famed','leech','erode','robed','hoard','craze','jacks','gloat','mushy','fetus','wince','rusts','stews','shred','parka','winks','clots','shrew','booed','juror','dents','gummy','hooky','poled','reams','fifes','spank','gayer','tepid','spook','taint','flirt','rogue','spiky','cocky','coyly','balmy','brawl','yanks','video','chasm','excel','taffy','impel','savor','koala','dawns','proxy','clove','duets','dregs','tardy','grimy','ultra','meaty','halve','suede','envoy','arson','coves','gooey','brews','chums','amaze','zooms','scour','suing','wordy','coupe','molar','flops','weeps','mints','ashen','felts','askew','munch','divan','vices','jumbo','blobs','spunk','acrid','topaz','clans','flees','slurs','gnaws','emits','mends','hoots','oozes','fouls','clefs','nicks','mated','skims','brunt','tuber','tinge','fates','bayou','mulch','fasts','amass','damps','morns','friar','vista','croon','conch','udder','skits','quits','adder','elegy','pulpy','crave','optic','welts','busts','razed','totes','scoot','mutes','trims','shuns','fakes','hacks','wands','lulls','seers','snobs','nooks','pined','perky','mooed','frill','dines','booze','drips','odder','levee','antic','sidle','pithy','corks','yelps','joker','buffs','scram','tiers','bogey','doled','irate','elude','vying','stags','dusts','yodel','terse','jaded','sways','slays','preys','treks','quell','lurks','eject','trite','belch','gnash','wanes','whims','dosed','chewy','snipe','upped','brawn','doped','shush','rinds','slush','moron','fjord','sheik','jests','kayak','raves','grist','skied','vixen','vouch','tiara','moped','kinky','pries','amble','fries','musky','pigmy','gnome','lemur','frays','waive','karat','jolts','beers','horny','wreak','swoon','abort','blitz','ensue','atone','bingo','kilts','scald','cynic','dulls','memos','elfin','peels','hinds','wilts','roams','duped','mitts','safes','filet','punks','abate','lapel','jaunt','whelp','cleat','gauzy','dirge','edits','wormy','smear','bowel','frisk','vests','delve','embed','wafer','ceded','feign','spews','pried','brims','irked','swipe','skimp','bluer','penis','flunk','gripe','douse','blurs','inane','stilt','evict','feted','ether','hives','mazes','leers','pasta','rifts','alias','whirs','foxed','idled','malts','chafe','cower','racer','sucks','sulks','ailed','abler','rabid','wispy','raved','swaps','doily','pawns','tamer','poach','baits','damns','gumbo','prank','hunks','honks','idles','copes','deign','haves','lucks','stunk','snubs','icons','usurp','dooms','paves','perks','limps','wombs','blurb','sours','stuns','coeds','zoned','fetes','skulk','deans','reaps','roved','kudos','toned','pared','scull','vexes','punts','snoop','bails','dames','hazes','voids','harms','swill','hexes','leeks','hurls','zests','pokey','muses','shuck','lisps','peeps','floss','flogs','dopes','pinky','leafs','tubas','biked','qualm','gluts','bests','dunce','boner','parch','crams','pares','bigot','flays','leach','gushy','pooch','golfs','mires','acnes','neons','dazes','pouts','yules','lilts','beefs','mutts','spuds','jawed','dupes','bylaw','nifty','gapes','metes','cuter','maims','droll','cupid','mauls','papas','eking','meows','dices','peppy','skews','cedes','elope','grump','wafts','blimp','mulls','hosed','ruder','pixie','ousts','gulch','lints','quips','icier','swats','bagel','hexed','goner','paged','talon','flout','medic','putts','dotes','tippy','blurt','wools','dunks','swabs','surfs','decal','warps','lamer','saris','weans','purrs','dills','togas','newts','bunts','razes','goons','wicks','ruses','vends','geode','lofts','pulps','lauds','mucks','vises','mocha','oiled','roman','ethyl','fugue','smack','gourd','bumpy','fatty','cacti','focal','avail','papal','golly','elite','versa','howdy','rhino','norms','bobby','axiom','setup','yolks','terns','mixer','genre','knoll','abode','junta','gorge','combo','overt','prick','nobly','audio','modal','fluke','motif','mould','aloha','glyph','azure','locus','lumpy','wanna','tuner','rowdy','mural','timer','triad','amply','dolly','trans','foamy','giver','vodka','salon','cults','reset','decor','mover','verve','ethic','gamut','lingo','align','sissy','incur','piper','basil','trams','ionic','heady','harem','shied','tilde','serif','inset','bogus','caved','forte','basal','aglow','gusto','hymen','ethos','brash','itchy','jowls','gongs','twill','awash','libel','spurn','penal','obese','tacit','greek','pique','negro','gecko','beget','uncut','clunk','diode','kiosk','bytes','tango','nutty','gored','rupee','fated','wiper','bards','staid','ochre','yummy','soupy','roper','swath','cameo','ebbed','ghoul','dinky','bronc','borer','mammy','deary','gyros','sprit','conga','thugs','furor','bloke','runes','bawdy','cadre','toxin','annul','nodes','picky','stein','jello','audit','banal','riled','petit','agave','feint','pudgy','mater','manic','umped','pesky','strep','slurp','pylon','puree','temps','yawns','coups','rangy','loner','circa','tibia','afoul','mommy','suave','hippo','curvy','samba','idyll','bodes','wrack','hiker','chive','yokel','cusps','quads','toner','logos','tipsy','lusts','pimps','titan','binge','femur','jihad','savvy','nadir','mecca','testy','balky','islet','joust','viral','nukes','grads','comfy','voila','whomp','metro','skeet','unzip','slobs','funky','taker','stoic','inlay','venue','raspy','kiwis','squib','sitar','lager','crass','kneed','globs','nudes','sushi','tacky','stoke','kaput','butch','cagey','epoxy','leggy','felon','beefy','caddy','segue','turbo','helix','zonal','arias','swain','fryer','tenet','whiny','ogled','balks','abase','ennui','latin','dings','scion','henna','kraut','dicks','bebop','gages','sepia','tomes','emcee','cubby','rearm','liens','lumen','chump','trump','chomp','patsy','shill','swami','sappy','hubby','riles','ditto','jazzy','dingo','peaky','seamy','spoof','clime','babel','wacky','skids','crypt','kazoo','calve','limbo','ducky','faker','vibes','gassy','unlit','nervy','femme','biter','boors','gaffe','saxes','recap','dicey','ouija','legit','gurus','edify','tweak','typos','rerun','nulls','hater','lefty','mogul','mafia','debug','snide','trove','nixes','iotas','remix','angst','veiny','tryst','flume','jocks','donut','avian','quash','cushy','puked','tesla','intro','opine','coder','namer','jowly','pukes','duffs','bruin','reuse','softy','bimbo','potty','coned','upend','weepy','posit','vegan','clops','numbs','rubes','rower','tykes','yucky','hokey','nacho','mimed','melds','debit','pinup','gulag','faxes','pesto','antsy','fizzy','dorky','moxie','paned','druid','rehab','octet','homed','dorks','eared','elide','oxbow','scone','hyper','salsa','gated','unjam','lipid','venal','ritzy','divas','recut','fends','caulk','panty','hones','botch','sully','sooth','ahold','raper','pager','fixer','hicks','tuxes','plebe','twixt','wacko','primp','miffs','emote','xerox','grout','deify','semis','acmes','hussy','torts','disco','whore','boozy','gibed','vamps','amour','soppy','gonzo','wader','tutus','perms','catty','glitz','brigs','nerds','barmy','gizmo','sayer','shard','matte','droid','ploys','vapid','deism','mixup','yikes','flubs','craps','shags','clone','hazed','macho','biker','exude','goofs','jived','cager','zilch','deist','orcas','retro','pilaf','parse','rants','zingy','micro','girly','nexus','demos','antes','gnarl','zippy','wimps','grail','cabal','rawer','kefir','boobs','hypes','quark','toked','toker','doper','stash','twerp','zesty','wimpy','tarot','kabob','heist','whams','busty','spays','cabby','balms','gutsy','faxed','pushy','retry','drubs','karma','lotto','burps','deuce','zings','kappa','clads','doggy','duper','scams','ogler','mimes','promo','muffs','oinks','minis','snafu','sauna','craws','stats','condo','coxes','loopy','dorms','ascot','dippy','execs','dopey','gismo','fazed','jives','slims','pings','prawn','luaus','campy','oodle','proms','touts','ogles','tweet','hider','nuked','sluts','delis','hyped','byway','avows','futon','kebab','artsy','modem','psych','sicko','klutz','limos','flack','dutch','mucky','layup','tokes','axing','duvet','pitas','gouda','taupe','nitro','hirer','taxer','roils','ruble','elate','wryer','snots','agape','boggy','fetal','teats','molly','semen','parer','payed','gipsy','wahoo','astro','plunk','folky','begat','magna','inapt','baulk','scrum','wised','dower','orate','tared','beaky','terry','kebob','talky','fucks','missy','noire','chars','unbox','muser','darer','dweeb','imbed','biome','vapes','tiler','memes','quids','facer','spier','remap','trier','gunks','torah','yurts','exurb','nuder','hoppy','dodgy','expat','wirer','carer','rater','poops','fecal','dinks','titty','gimps','shits','honky','pubic','wilco','lazes','lupus','spazz','unarm','gimpy','abeam','indie','coven','flabs','punny','twink','buzzy','wonks','petri','amped','vulva','pubes','frier','redux','abuzz','fader','utero','cunts','aioli','feces','smurf','hunky','uteri','kudzu','farts','balds','snark','bubba','worts','corgi','dildo','feral','geeks','offed','ninja','fluky','gator','morph','chino','lycra','jukes','bocce','nerdy','wonky'];

var lingo = new Lingo();
var mysteryWord = lingo.generateMysteryWord(mysteryWordARRAY);
var mysteryWordArray = lingo.generateWordArray(mysteryWord);

function mysteryRow(){
  return "<tr class = 'header-tile'><th class ='orange'>"+mysteryWordArray[0]+"</th><th><span>-</span></th><th><span>-</span></th><th><span>-</span></th><th><span>-</span></th></tr>";
}

$('.input-tile').before(mysteryRow());
function Lingo(){
  $(document).ready(function(){
    $('#start-button').on('click',function(){
    });
  });
  Lingo.prototype.generateMysteryWord = function(array) {
      var mysteryWord = array[(Math.floor(Math.random()*(array.length)))];
      console.log(mysteryWord);
      return mysteryWord;
  };
  Lingo.prototype.generateWordArray = function(word) {
    return word.toLowerCase().split('');
  };
  Lingo.prototype.checkWordArrayForLetter = function(wordArray, character) {
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character) {
        return true;
      }
    }
  };
  Lingo.prototype.getCharIndex = function(wordArray, character) {
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character) {
        return i;
      }
    }
  };
  Lingo.prototype.countCharacterOccurences = function(wordArray, character){
    var countChar = 0;
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character){
        countChar++;
      }
    }
    return countChar;
  };
  Lingo.prototype.decrementCharacterOccurences = function(countChar){
    countChar--;
    return countChar;
  };

var guess = $('input').on('keypress',function(event){
  if (isLetter(event)) {
    var nextInput = guess.get(guess.index(this)+1);
    if (nextInput) { nextInput.focus(); }
  }
  function swapRow(){
    var row = guess.closest('tr');
    row.insertAfter(row.next());
  }
  function clearInputRow(){
    guess.map(function(){
      return this.value = "";
    });
  }
  function getUserWordArray(){
    var userWordArray = guess.map(function(){
       return this.value;
    }).get();
    return userWordArray;
  }
  function newWordRow(){
    var userWordArray = getUserWordArray();
    var colorArray = checkUserGuess(userWordArray,mysteryWordArray);
    var orangeArray = [];
    var newRow = "<tr class='letter-tile added-row'><td class= "+colorArray[0]+">"+userWordArray[0]+"</td><td class="+colorArray[1]+">"+userWordArray[1]+"</td><td class="+colorArray[2]+">"+userWordArray[2]+"</td><td class="+colorArray[3]+">"+userWordArray[3]+"</td><td class="+colorArray[4]+">"+userWordArray[4]+"</td></tr>";
    for (var i = 0; i < colorArray.length; i++) {
      if (colorArray[i] === 'orange'){
        orangeArray.push("");
      }
      if (orangeArray.length === 5) {
        correctGuess();
      }
    }
    if (isGameOver() === true && orangeArray.length !== 5){
      $('.mystery-word').html('You should have guessed: <span class="mystery"> '+mysteryWord+'.</span> Better luck next time!');
      setTimeout( function(){
        location.replace("end.html");
      }, 3000);
    } if (isGameOver() === true && orangeArray.length === 5) { $('.mystery-word').html('You got <span class="mystery"> '+mysteryWord+'</span> on the last guess!');
    }
    return newRow;
  }
  function prependRow(){
    guess.closest('tr').after(newWordRow());
    clearInputRow();
    swapRow();
    removeRow();
    $('#one').focus();
  }
  function correctGuess(){
    // var scoreUpOne = (function() {
    //   var score = 0;
    //   return function() {return score+=1;};
    // })();
    // $('#current-score').text(scoreUpOne);
    // store(scoreUpOne);
    setTimeout(location.reload.bind(location), 1200); }
    if (event.which === 13) {
      isRowFilled();
      prependRow();
      $.done();
  }
});

$('input').keydown(function(){ // DELETE KEY NOT PERFECT
  if (event.which === 8) {
    var lastInput = guess.get(guess.index(this)-1);
    if ($('#column-last').val() === '') { lastInput.focus(); }
  }
});
function removeRow() {
  $('tr:last').remove();
}
function isLetter(event){
  if (event.which >= 97 && event.which <= 122 ) {
    return true;
  }
}

$('input').bind('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

function isRowFilled(event) {
  if ($('#column-last').val().length < 1 )
    { $(event.keyCode === 13);
        return false;
    }
}

function checkUserGuess(userWordArray, mysteryWordArray){
  var colorArray = [];
  for (var i = 0; i < userWordArray.length; i++) {
    var lingo = new Lingo();
    if (userWordArray[i] === mysteryWordArray[i]) {
      colorArray.push('orange');
    } else if (lingo.checkWordArrayForLetter(mysteryWordArray, userWordArray[i])){
      colorArray.push('yellow');
    } else {
      colorArray.push('none');
    }
  }
  return colorArray;
}
// var store = function(score){
//     localStorage.setItem('userScore', JSON.stringify(score));
// };
function isGameOver(){
    var addedRowsCount = $('.added-row').length;
    if (addedRowsCount === 5){
      return true;
    } else { return false; }
}
}
module.exports = Lingo;
