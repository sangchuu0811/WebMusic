let count, imgList, title, myAudio, totalTime, currTime, musicbar, lyric, lyricDiv, j = 0, h = 0;

const img = ["./Img/drip.png", "./Img/theChase.png", "./Img/Whiplash.png", "./Img/daredevil.png",
             "./Img/carnival.png", "./Img/pinkshoes.png", "./Img/akmu.jpg", "./Img/savage.png",
             "./Img/dumdi.png", "./Img/ohMygod.png"
            ];

const music = ["./Music/drip.mp3", "./Music/theChase.mp3", "./Music/whiplash.mp3", "./Music/Daredevil.mp3", 
               "./Music/Carnival.mp3", "./Music/pinkshoes.mp3", "./Music/akmu.mp3", "./Music/savage.mp3", 
               "./Music/dumdi.mp3", "./Music/ohmygod.mp3"
              ]

// 가사를 JSON 형식으로 적용
let lyricsTxt = `{\"lyrics\":[
{\"lyr\":\"When I dress I don’t think so much\\nI could be the GOAT\\nI don’t need too much\\nI’mma set a goal\\nI’mma eat that lunch\\nBaby so cold get that ice cream truck\\n\\n찌릿찌릿 끼리끼리 놀아볼까\\nKitty kitty yeah we gonna run this town\\nHittin’ me up cause I got what they like\\nBaby got no chance better hit that dance\\n\\nMmm, na-na-na\\nI’ll be there 고민하지 마\\nUh, na-na-na\\nI’ll be there 망설이지 마\\n\\nBut you don’t know ’bout me\\nYeah yeah, you gon’ know ’bout me boy\\n아름다운 별들이 빛나는 밤이야\\n\\nMmmh, what you say\\n끝없는 가치\\nYou know it’s all me\\n\\nGot that\\nOoh, what you say\\nAre you ready?\\nSet, turn on the lights\\n\\nBaby got passion, ambition\\n난 보란 듯이\\nLook at that\\n온몸으로 느끼는 내 몸짓\\n\\nBaby got\\nDrip, drip, drip, drip, drip, drip, drip\\nBaby got\\nDrip, drip, drip, drip, drip, drip, drip\\n\\nLet ’em out\\nMonster, monster, monster came to conquer\\nBaby, holla wassup\\nWe the best, the rest confess, we blessed\\n판을 180도 바꿔\\n\\nY to the G, no copy, no Knock off\\nBet on my life this pitch I’m gon’ walk-off\\nMONSTIEZ 꽉 잡아 Hold tight\\n끝까지 밟아\\nYou know we gon’ ride\\n\\nMmm, na-na-na\\nI’ll be there 고민하지 마\\nUh, na-na-na\\nI’ll be there 망설이지 마\\n\\nBut you don’t know ’bout me\\nYeah yeah, you gon’ know ‘bout me boy\\n아름다운 별들이 빛나는 밤이야\\n\\nMmmh, what you say\\n끝없는 가치\\nYou know it’s all me\\n\\nGot that\\nOoh, what you say\\nAre you ready?\\nSet, turn on the lights\\n\\nBaby got passion, ambition\\n난 보란 듯이\\nLook at that\\n온몸으로 느끼는 내 몸짓\\n\\nBaby got\\nDrip, drip, drip, drip, drip, drip, drip\\nBaby got\\nDrip, drip, drip, drip, drip, drip, drip\\n\\n가끔 쓰러진대도\\nI’mma shine as bright as diamonds\\nSay my name\\n다시 일어나\\nNow watch me do it all again\\n\\nBaby got drip, drip, drip\\nBaby got, baby got, baby got\\nDrip, drip, drip\\nYou know we got got that drip\\n\\nBaby got drip, drip, drip\\nBaby got, baby got, baby got\\nDrip, drip, drip\\nGot that drip yeah"}, 
{\"lyr\":\"꿈이 꿈을 꾸는데\\nBeamy, beamy 그 빛에\\n홀린 듯이 따라 걸어\\n호기심은 자꾸만 커져\\n이걸 마셔 보게 될걸\\n너만 yeah\\n파란 잉크 빛깔 속 헤엄쳐\\n삐걱대는 chalky, chalky\\n분필은 가지런히\\n우리 얘기를 받아쓰겠지\\nI'll make you say my name\\n어떻게 안 그래\\nI love the way, you love the chase\\nHop 내 모험의 첫걸음을 디뎌\\n온통 수수께끼 난 더 알고 싶어\\nCrop 내 맘대로 잘라낸 환상의 조각\\nSparkle, sparkle 뭔가를 본 것 같아\\nHop 내 모험의 (ah)\\n첫걸음을 (ah)\\nSparkle, sparkle (ah)\\n수수께끼, 난 더 알고 싶어\\n그새 커버린 걸까\\n설명할 수 없는데\\n온 힘을 다해 난 달려\\n멈춰 서 있고 싶지 않아\\n이 커다란 emotion, yeah, yeah\\n떠다니는 quiz 그 틈새\\n손을 뻗어 낚아 jingle, jingle\\n열쇠는 요란스레 (yeah)\\n문을 열어봐 졸라대겠지\\nI'll make you say my name\\n주문보다 강해\\nI love the way, you love the chase\\nHop 내 모험의 첫걸음을 디뎌\\n온통 수수께끼 난 더 알고 싶어\\nCrop 내 맘대로 잘라낸 환상의 조각\\nSparkle, sparkle 뭔가를 본 것 같아\\nBaby, we got what you need\\nOur love is so sweet, It pops like candy, yeah\\n햇살에 눈 가만히 감은 채\\n내 맘대로 달려가, 내 세상을 가져봐\\nCome and get ya, come and get ya, come and get ya, yeah (Yeah)\\nIt's forever, it's forеver, it's forever, yеah (Yeah)\\n'Til the end 환상에 빠질 너와 나야, 맞아\\n꿈이 꿈꾸길 시작해, yeah (Ah-ooh)\\n내 모험의 (ooh)\\n첫걸음이야 (oh)\\n내 맘대로 (oh, no, whoa, whoa)\\n가고 싶어, 꿈은 시작됐어\\nHop 내 모험의 (파란 잉크 빛깔 속을)\\n첫걸음을 (떠다니는 quiz 그 틈을)\\n내 맘대로 (ah)\\nI love the way, you love the chase"}, 
{\"lyr\":\"Yah\\n\\nOne look, give 'em whiplash, beat drop with a big flash\\n집중해 좀 더, think fast, 이유 넌 이해 못 해, uh\\n왜 이제야 know I did that? Uh, day one, know I been bad, uh\\nDon't stop 흔들린 채, 무리해도, can't touch that (can't touch that)\\n\\nUnder pressure, body sweating, can you focus? (Yah)\\n어디서나 거침없어, I'm the coldest\\n오직 나만이 이 판을 바꿀 changer\\nJust close your eyes, breathe in and visualize\\n\\nOne look, give 'em whiplash, beat drop with a big flash\\n집중해 좀 더, think fast, 이유 넌 이해 못 해, uh\\n왜 이제야 know I did that? (Yeah) day one, know I been bad\\nDon't stop 흔들린 채 (yeah), 무리해도, can't touch that (can't touch that)\\n\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, one look, give 'em whiplash\\n\\nFancy, 이건 참 화려해, it's glowing and it's flashy (yeah)\\n알아 적당함이 뭔지, keep it classy\\n따라 하지 넌 또 하나부터 열까지 (yah)\\n아닌척하지, yeah\\n\\nUnder pressure, body sweating, can you focus? (Hoo)\\nI deliver, I can promise, I'm the coldest (cold)\\n외면해도 소용없지, don't you blow it (blow it)\\nJust close your eyes, breathe in and visualize\\n\\n시작되는 순간 끝나버린 판단\\n기횐 오직 one time, unforgettable\\n찾아낸 the right light, 사라지지 않아\\n눈에 새긴 one time, unforgettable (-gettable, -gettable, -gettable)\\n\\nOne look, give 'em whiplash (shee), beat drop with a big flash\\n집중해 좀 더, think fast, 이유 넌 이해 못 해, uh\\n왜 이제야 know I did that? (Yeah) day one, know I been bad (uh)\\nDon't stop 흔들린 채 (yeah), 무리해도, can't touch that (can't touch that)\\n\\nI'm the highlight, 비춰 red light\\nYeah, tonight, it's all about me (all about me)\\nYou know it's my site, 거친 next sigh\\n만들어갈 history\\n\\nOne look, give 'em whiplash (shee), beat drop with a big flash (yeah)\\n따라와 어서, move fast (move, move, move), 이유 넌 이해 못 해, uh (yeah)\\n왜 이제야 know I did that? (Yah, did that) day one, know I been bad (been bad)\\nDon't stop 흔들린 채 (hoo, yeah), 다가와도, can't touch that (can't touch that)\\n\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, whip-whiplash\\nWhip-whiplash, one look, give 'em whiplash\\n\"}, 
{\"lyr\":\"Think twice\\nBefore you pounce\\nDon't expect us to be nice\\nNow it's your turn to be the mouse\\n\\nThought you had caught us?\\nWe know how your game is played\\nStraight up devious\\nBetter regret schemes you have made\\n\\nThe shadows call us\\nHear the whisper from the night\\nTake a leap into the dusk\\nGotta set wrongs right\\n\\nTaking over\\nReady or not it's the moment\\nBetter off\\nStepping aside\\nBurning with vengeance and sully we fight\\n\\nCrossed the line\\nWarned you before\\nWe are unbeaten\\nNo one can question it\\n\\nDaredevil\\nYou've hit the wall\\nDid you think you could get away?\\nYou have us to repay\\n\\nDeliver reason\\nGiven dreams will never last\\nEnd deception\\nFantasy will turn to piles of dust\\n\\nLife is a journey\\nNo one should be puppetised\\nYeah 'cause we are all born free\\nListen to their cries\\nWhat a nightmare\\nReaching out only for nothing\\nIn a maze\\nPeeling their eyes\\nSearching for something they won't ever find\\n\\nTrue faith\\nIs found within\\nWe'll be the beacon\\nGuiding lost innocents\\n\\nOnce bitten\\nTwice confident\\nNothing to stop us seeking\\nA kingdom of freedom\\n\\nSTRIKE\\n\\nTaking over\\nReady or not it's the moment\\nBetter off\\nStepping aside\\nBurning with vengeance and sully we fight\\n\\nCrossed the line\\nWarned you before\\nWe are unbeaten\\nNo one can question it\\n\\nDaredevil\\nYou've hit the wall\\nDid you think you could get away?\\nYou have us to repay\\n\"}, 
{\"lyr\":\"너무 늦었나요 혹시 많이 기다렸나요\\n때론 내가 없는\\n밤이 깊고 길고 어두웠나요\\n\\n그럼 늦은 저녁을 멈춰 천천히\\n내가 처음부터 없던 날로 떠나볼까요\\n나 걱정 안 할 수 있게\\n\\n오늘 밤 카니발의 문이 열리면\\n그땐 정말 날 잊어\\n끝이란 놀라워요\\n어제와 같은 밤일뿐인데\\n\\n한밤의 카니발의\\n그 불빛보다 정말 뜨거웠던\\n나 거기 있었다는 걸 아름다웠다는 걸\\n내 안에 담고 불꽃처럼 사라져\\n\\n하얀 밤이 있어\\n딴 세상에 온 것 같은 밤\\n그런 밤이 있어\\n내가 딴 사람이 된 것 같은 밤\\n\\n제일 환한 불꽃이 되어 춤추다\\n마치 꿈인 듯이 흔적 없이 사라진다면\\n다 완벽할 것 같은데\\n\\n오늘 밤 카니발의 문이 열리면\\n그땐 정말 날 잊어\\n끝이란 놀라워요\\n어제와 같은 밤일뿐인데\\n\\n한밤의 카니발의\\n그 불빛보다 정말 뜨거웠던\\n나 거기 있었다는 걸 아름다웠다는 걸\\n내 안에 담고 불꽃처럼 사라져\\n\\n나는 거기 있었고\\n충분히 아름다웠다\\n밤은 사라지고 우린 아름다웠어\\n이보다 (이보다) 완벽한 순간이\\n내게 또 올까\\n\\nWelcome to my carnival 열리면\\n난 그대를 떠나요\\n걱정 마 울지 마요\\n어제와 같은 밤일뿐인데\\n\\nWelcome to marvelous day\\n꿈꾸던 그날 정말 기다렸던\\n나 처음부터 모든 건\\n그댈 위한 거란 걸\\n그 마음만 믿고 나를 잊고 살아요\"}, 
{\"lyr\":\"길을 잃었다, 어딜 가야 할까\\n열두 개로 갈린 조각난 골목길\\n어딜 가면 너를 다시 만날까\\n\\n운명으로 친다면, 내 운명을 고르자면\\n눈을 감고 걸어도 맞는 길을 고르지\\n\\n사라져버린 summer time\\n너의 두 눈이 나를 비추던 summer time\\n기다리기만 하는 내가 아냐\\n너를 찾아 뚜벅\\n\\n내게 돌아올 summer time\\n찬 바람 불면 그냥 두 눈 감기로 해\\nWhat's the time summer time\\n\\n움파룸파둠 두비두바둠\\n슬프지 않아 춤을 춘다\\n다시, 다시\\n\\n길을 찾아 떠난 갈색머리 아가씨는\\n다시 사랑에 빠졌고 행복했더라는\\n처음부터 다시 쓰는 이야기\\n\\n좋은 구둘 신으면 더 좋은 데로 간다며\\n멈춰지지 않도록, 너를 찾을 때까지\\n\\n사라져버린 summer time\\n너의 두 눈이 나를 비추던 summer time\\n기다리기만 하는 내가 아냐\\n너를 찾아 뚜벅\\n\\n내게 돌아올 summer time\\n찬 바람 불면 그냥 두 눈 감기로 해\\nWhat's the time summer time\\n움파룸파둠 두비두바둠\\n멈추지 않아 춤을 춘다\\n다시, 다시\\n\\n나의 발이 자꾸 발이 자꾸 맘대로 yoo-hoo\\nOh my, pink shoes, oh my\\n난난 마음 잡고 마음 잡고 제대로 yoo-hoo\\nYeah, yeah 좀 더 빠르게\\n\\n잃어버린 내 summer time\\n낯선 시간을 헤매이다 널 찾을까\\n아직 길은 멀었니, 겁이 나면\\n나는 괜히 웃어\\n\\n혹시 넌 나를 잊을까\\n너의 시간이 내게 멈춰있길 바래\\nSlow the time, stop the time\\n\\n움파룸파룸 두비두비\\n움파룸파룸 두비두바둠\\n좀 더 빠르게 달려간다\\n다시, 다시, 다시, 다시\"}, 
{\"lyr\":\"저 거위도 벽을 넘어 하늘을 날을 거라고\\n달팽이도 넓고 거친 바다 끝에 꿈을 둔다고\\n\\n나도 꾸물꾸물 말고 꿈을 찾으래\\n어서 남의 꿈을 빌려 꾸기라도 해\\n내게 강요하지 말아요, 이건 내 길이 아닌걸\\n내밀지 말아요, 너의 구겨진 꿈을\\n\\n난 차라리 흘러갈래\\n모두 높은 곳을 우러러볼 때\\n난 내 물결을 따라 (hey)\\nFlow, flow along, flow along my way (way, way)\\n\\n난 차라리 꽉 눌러붙을래\\n날 재촉한다면\\n따뜻한 밥 위에 누워 자는\\n계란 fry, fry 같이, 나른하게 (fry, fry, fry, fry)\\n\\n고래도 사랑을 찾아 파도를 가를 거라고\\n하다못해 네모도 꿈을 꾸는데\\n\\n아무도 꿈이 없는 자에겐 기회를 주지 않아\\n하긴 무슨 기회가 어울릴지도 모를 거야\\n무시 말아 줘요, 하고 싶은 게 없는걸\\n왜 그렇게 봐? 난 죄지은 게 아닌데\\n\\n난 차라리 흘러갈래\\n모두 높은 곳을 우러러볼 때\\n난 내 물결을 따라 (hey)\\nFlow, flow along, flow along my way (way, way)\\n\\n난 차라리 꽉 눌러붙을래\\n날 재촉한다면\\n따뜻한 밥 위에 누워 자는\\n계란 fry, fry 같이 (fry, fry 같이)\\n\\nSpread out\\n틀에 갇힌 듯한 똑같은 꿈\\nSpread out, out\\n난 이 두꺼운 껍질을 깨고 나와 퍼지고 싶어\\n\\n난 차라리 굴러갈래\\n끝은 안 보여 뒤에선 등 떠미는데\\n난 내 물결을 따라\\nFlow, flow along, flow along my way (flow along my way)\\n\\n난 차라리 꽉 눌러붙을래\\n날 재촉한다면\\n고민 하나 없이 퍼져 있는\\n계란 fry, fry 같이, 나른하게\"},
{\"lyr\":\"Oh my gosh\\nDon't you know I'm a Savage?\\nI'm a Killa 너를 깰 ae\\n아직도 가리고 환각을 펼친 너\\n팰라 We Holler\\n두렵지 않아 너 너 Hit you harder\\n날 밀어 넣어 Deep fake on me\\n준비가 안된 무대로\\n몰아넣어 Fake on me\\nGot everybody mock up to me\\n수치를 느끼게 멘탈을 흔들어놔\\n싸늘한 관중 무너져 Ae\\n더는 널 못 참아 Say No\\n두고 봐 난 좀 Savage\\n너의 Dirty 한 Play\\n더는 두고 볼 수 없어\\n나를 무너뜨리고 싶은\\n네 환각들이 점점\\n너를 구축할 이유가 돼\\nI'm a Savage\\n널 부셔 깨 줄게 Oh\\nI'm a Savage\\n널 짓밟아 줄게 Oh\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n지금 나를 잡아\\n아님 난 더 Savage\\n(Zu Zu Zu Zu)\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n이젠 내가 너를 잡아\\nNow I'm a Savage\\nGimme gimme now\\nGimme gimme now\\n(Zu Zu Zu Zu)\\n너의 말이 보여\\n네 약점 Algorithm\\n(Zu Zu Zu Zu)\\n김이 김이 나\\n김이 김이 나\\n(Zu Zu Zu Zu)\\nMA ae SYNK 방해 말고\\n꺼져 Savage\\n(Zu Zu Zu Zu)\\nMmmh Everybody looks at me\\n익숙하잖니\\n양보해 참아야만 돼\\n어른스럽게\\nI'm locked up in the glass\\n난 놀고 싶은데\\n너무 끔찍한 기대\\n그런 환각 틀에 나를 가둬 놔\\nI'm going 광야로 Game in\\n물리쳐 교묘한 이간질\\nAnd my ae로부터\\n멀어지게 만들\\n회심찬 네 Trick\\nWe gone 광야로 Game in\\n베어버려 내 빛의 검\\n데미지를 입은 네게\\n인정사정 볼 것 없는 펀치\\n그것 봐 난 좀 Savage\\n너의 재생력을 막아\\n흐트러놔 빼놔\\n잊지 말아 여긴 바로 광야\\n너의 시공간은 내 뜻대로\\nMake it break it\\nI'm a Savage\\n널 부셔 깨 줄게 Oh\\nI'm a Savage\\n널 짓밟아 줄게 Oh\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n지금 나를 잡아\\n아님 난 더 Savage\\n(Zu Zu Zu Zu)\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n이젠 내가 너를 잡아\\nNow I'm a Savage\\nGimme gimme now\\nGimme gimme now\\n(Zu Zu Zu Zu)\\n너의 말이 보여\\n네 약점 Algorithm\\n(Zu Zu Zu Zu)\\n김이 김이 나\\n김이 김이 나\\n(Zu Zu Zu Zu)\\nMA ae SYNK 방해 말고\\n꺼져 Savage\\n(Zu Zu Zu Zu)\\n위기에 빠진 날 지켜준 건 너였어\\nMy naevis we love U\\nMy victory 하나의 SYNK DIVE\\n모두 네가 만들어준 기회란 거\\nI know your sacrifices Oh\\nMy naevis we love U\\n알아 우린 반드시\\n네 기억들을 찾아줄게\\n우린 만나 꼭 부활 그다음\\nSavage\\nSavage\\nYeah\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n지금 나를 잡아\\n아님 난 더 Savage\\n(Zu Zu Zu Zu)\\nGet me get me now\\nGet me get me now\\n(Zu Zu Zu Zu)\\n이젠 내가 너를 잡아\\nNow I'm a Savage\\nGimme gimme now\\nGimme gimme now\\n(Zu Zu Zu Zu)\\n너의 말이 보여\\n네 약점 Algorithm\\n(Zu Zu Zu Zu)\\n김이 김이 나\\n김이 김이 나\\n(Zu Zu Zu Zu)\\nMA ae SYNK 방해 말고\\n꺼져 Savage\\n(Zu Zu Zu Zu)\\nHa ha What?\"}, 
{\"lyr\":\"뜨거운 태양에 살짝 미친 난\\n쉽게 두 볼이 빨개지고\\n그러다 어질어질 달아오른 난\\n헤엄을 치듯 춤을 추고\\n음악을 더 크게 더 틀고 싶어\\n우리 사랑이 안 들리게\\n안아도 더 가까이 붙고 싶어\\n닿은 심장이 팡 터지게\\n\\n바람은 두근대게 또 파도는 쿵쾅대게\\n저기 드러머처럼 내 마음을 두드려줘\\n내게 들려줘 이 여름의 그 노래를 (turn up the summer)\\n\\nEvery night every mind\\nEvery time every sign\\n어딜 가도 여긴 tropical night\\n찌는 날 찌는 밤바다의 칼바람\\n잊을 수 없이 타오르는 밤\\n\\n덤디덤디, 덤디덤디\\n덤디덤디, 덤디덤디 (turn up my summer)\\n\\n덤디덤디, 덤디덤디\\n덤디덤디, 덤디덤디 (turn up my summer)\\n\\nHey, drummer 무더위로 높여\\nKick and snare는 우리 벽을 녹여\\nOh, God 흠뻑 젖어버린 속옷\\n야자수가 흔들리도록 춤 춰\\n폭죽 펑펑 터지는 축제에\\n텅텅 머리를 비우고 미친 듯 음악은 turnt up\\n첨벙대는 파도의 beat는 두구 둥, 두구 둥 DJ 바람은 삐끼삐끼움\\n\\n사랑을 더 세게 더 주고 싶어\\n나의 계절이 느껴지게\\n이대로 두 눈을 꼭 감고 싶어\\n태양이 떠도 영원\\n\\n바람은 살랑대게 또 파도는 찰랑대게\\n저기 댄서들처럼 내 마음을 흔들어줘\\n내게 들려줘 이 여름의 그 노래를 (turn up the summer)\\n\\nEvery night every mind\\nEvery time every sign\\n어딜 가도 여긴 tropical night\\n찌는 날 찌는 밤바다의 칼바람\\n잊을 수 없이 타오르는 밤\\n\\n덤디덤디, 덤디덤디\\n덤디덤디, 덤디덤디 (turn up my summer)\\n\\n덤디덤디, 덤디덤디\\n덤디덤디, 덤디덤디\\n\\n달이 잠들고 여름이 다 식으면\\n내게 불러줘 뜨거웠던 그때 노래를\\n\\nShout it out loud (oh-eh-oh-eh-oh), hey\\nLet's turn up my summer, bae\\nHit the drum\\n\\n덤디덤덤, 덤디디덤덤 (hey)\\n덤디덤덤, 덤디디덤덤 (hoo)\\n\\n덤디덤덤, 덤디디덤덤 (hey)\\n덤디덤덤 (turn up my summer)\\n\\n덤디덤덤, 덤디디덤덤 (hey\\n덤디덤덤\\n\\n덤디덤덤, 덤디디덤덤 (hey)\\n덤디덤덤 (turn up my summer)"}, 
{\"lyr\":\"눈부신 하늘에 시선을 가린 채\\n네 품 안에 안기네\\n흐르는 음악에 정신을 뺏긴 채\\n그대로 빨려 드네\\nHelp me help me\\n숨이 멎을 것 같이 I feel\\nSet me free set me free\\n녹아 버릴 것 같이 So sick\\n쉴 틈 없이 빠져들고 이리저리 갖고 놀고\\n이성을 깨부수고 제멋대로 들어오지\\n위험하니 갖고 싶고 아픔까지 안고 싶고\\n결국 너를 품으니 난\\nOh my god She took me to the sky\\nOh my god She showed me all the stars\\nBabe babe 달려들 것만 같이 Come in\\nMake me make me\\n정신 나갈 것 같이 Like it\\nOh god 어찌 저에게\\n이런 시험을 줬나요 Is it a call from hell?\\nCan't stop 대체 어떻게\\n그녀를 빠져나갈까요\\n당신이 준 절제는\\n어두운 블랙홀 속 갈기갈기\\n찢겨져 혼이 나간 채로 그저 어리버리\\n통제가 불가능해 설탕 뿌린 마약같이\\n이게 죄라면 벌이라도 아주 달게 받지\\n미친 듯이 아름답고 다시 보니 악마 같고\\n이성을 쏙 빼놓고 제멋대로 들어오지\\n불꽃처럼 강렬하고 데일만큼 사랑하고\\n결국 너를 품으니 난\\nOh my god She took me to the sky\\nOh my god She showed me all the stars\\n짙은 보랏빛 향길 온몸에 물들이고\\n높고 넓은 하늘의 저 끝까지 퍼트리네\\n짙은 붉은색 사랑을 얼굴에 새기고\\n그 누가 뭐라 해도 Fall in love\\nOh my god She took me to the sky\\nOh my god She showed me all the stars\\n눈부신 하늘에 시선을 가린 채\\n네 품 안에 안기네\\n흐르는 음악에 정신을 뺏긴 채\\n그대로 빨려 드네\"}]}`;

var sw1 = 0; // play 버튼 초기화 (일시정지)
var swLoop = 0; // 반복 초기화 (반복안함)
var showLyc = 0;

function mInit() {
    imgList = document.images;
    choList = document.getElementById("musicList");
    myAudio = document.getElementById("song");

    currTime = document.getElementById("currTime");
    totalTime = document.getElementById("totalTime");
    musicbar = document.getElementById("musicbar");

    musicbar.value = 0;

    // JSON 형식의 가사 데이터 파싱 후 String으로 변환
    lyric = JSON.parse(lyricsTxt);
    lyricDiv = document.getElementById("lyrics");
    
    // 초기 이미지 Collection 설정
    for(let i = 0; i < img.length; i++) {
        imgList.src = img[i];
        // 초기 값 설정
        count = document.getElementById("title").value = choList[0].value;
        lyricDiv.value = lyric.lyrics[0].lyr;
        lyricDiv.scrollTop = 0; // 스크롤 최상단 설정
        myAudio.src = music[0];
    }

    myAudio.addEventListener('loadedmetadata', totTime);
    myAudio.ontimeupdate = function() {currentTime()};
    musicbar.oninput = function() {moveBar()};
}

window.onload = mInit;

function totTime() {
    let totMin = Math.floor(myAudio.duration / 60);
    let totSec = Math.floor(myAudio.duration % 60);
    
    let sTotSec = String(totSec).trim(); // 문자열 함수 쓰기 위해 변환

    if(totSec < 10) {
        if(totSec == 0) { 
            sTotSec = sTotSec.replace('0', "00");
        } else {
            sTotSec = sTotSec.padStart(2, '0');
        }
    } 

    totalTime.value = totMin + ":" + sTotSec; 
    musicbar.max = myAudio.duration;
}

// 현재 재생 시간
function currentTime() {
    let curMin = Math.floor(myAudio.currentTime / 60);
    let curSec = Math.floor(myAudio.currentTime % 60);
    let sCurSec = String(curSec).trim(); // 문자열 함수 쓰기 위해 변환

    if(curSec < 10) { // 0초일 때 "00" / 10초 미만일 때 "0" + 현재 초
        if(curSec == 0) { sCurSec = sCurSec.replace('0', "00");} 
        else { sCurSec = sCurSec.padStart(2, '0');}
    } 
    
    currTime.value = curMin + ":" + sCurSec;
    // 현재 재생 시간 초기값 설정 0:00
    if(myAudio.currentTime == 0) { currTime.value = '0:00';}
    musicbar.value = myAudio.currentTime; // 현재 재생 시간값과 재생바 값 연동

    totTime(); // 전체 재생 시간 구하기
    if((currTime.value == totalTime.value) && swLoop == 0) {
        document.getElementById("playpause").src = "./Img/pause.png";
    }
}

function cliBtn(obj) {
    count =  document.getElementById("title");
    choList = document.getElementById("musicList");
    myAudio = document.getElementById("song");
    
    totalTime = document.getElementById("totalTime");

    if (obj == "first") {      // 첫 번째 이미지
        j = 0;
        alert("첫번째 곡입니다.");
    }
    else if (obj == "before") { // 이전 이미지
        if (j <= 0) {      
            j = 0;         // 첫 번째인 경우 이전 불가
            alert("첫번째 곡입니다.");
        }  
        else {
            j--;
        }
    }
    else if (obj == "next") {  // 다음 이미지
       if (j >= img.length-1) {
        j = img.length-1;   // 마지막인 경우 다음 불가
        alert("마지막 곡입니다.");

       }
       else {
        j++;
       }
    }
    else if(obj =="last") {   // 마지막 이미지
        j = img.length-1;
        alert("마지막 곡입니다.");
    }
   
    // 이미지 및 제목 적용
    imgList[h].src = img[j];
    count.value = choList.options[j].value;
    lyricDiv.value = lyric.lyrics[j].lyr;
    choList.selectedIndex = j; // select 옵션 selected 적용 
    

    myAudio.pause(); // 일시정지
    myAudio.src = music[j]; // 현재 인덱스의 노래 
    myAudio.load();
    myAudio.play(); // 재생
    document.getElementById("playpause").src = "./Img/play.png";

    j+1;
}

// <select>에서 선택된 인덱스값으로 설정
function choice(obj) {
    let i = document.list.musicList.options.selectedIndex; // 선택된 인덱스값 저장
    count =  document.getElementById("title");
    count.value = obj;
    imgList[h].src = img[i];
    lyricDiv.value = lyric.lyrics[i].lyr; // 선택된 인덱스 값으로 가사변경
    lyricDiv.scrollTop = 0;
    

    myAudio.pause();            // 일시정지
    document.getElementById("playpause").src = "./Img/play.png"; // 현재 음원 이미지로 변경
    myAudio.src = music[i];     // 현재 인덱스의 음원
    myAudio.load();             // 음원 가져오기
    myAudio.play();             // 재생
}

// select on/off
function ListOn() {
    const list = document.getElementById("musicList");

    if (list.style.visibility == "hidden") {
        list.style.visibility = "visible";
    } else {
        list.style.visibility = "hidden";
    }
  }

function mPlayPause() {
    if(sw1 == 0) { // 일시정지된 상태에서 누르면
        document.getElementById("playpause").src = "./Img/play.png";
        myAudio.play(); // 재생
        sw1 = 1;
    } else { // 재생된 상태에서 누르면
        myAudio.pause(); // 일시정지
        document.getElementById("playpause").src = "./Img/pause.png";
        sw1 = 0;
    }
}

function mStop() {
    myAudio.pause();
    document.getElementById("playpause").src = "./Img/pause.png";
    sw1 = 0;
    myAudio.currentTime = 0;
    musicbar.value = 0;
}

function mLoop() {
    musicbar = document.getElementById("musicbar");

    if(swLoop == 0) {
        document.getElementById("loop").src = "./Img/loop.png";
        swLoop = 1;
        musicbar.value = 0;
        currentTime();
        myAudio.loop=true;
    } else {
        document.getElementById("loop").src = "./Img/noloop.png";
        swLoop = 0;
        myAudio.loop=false;
    }
}

// 재생바를 움직일 때
function moveBar() {
    myAudio.currentTime = musicbar.value;
}

//가사 보여주기 jQuery
$(document).ready(function() {
    $("#lyr").click(function(){

        let lyricsIcon = $("#lyr"); 
        
        if(showLyc == 0) { // 가사 X (기본)
            lyricsIcon.attr("src", "./Img/lyrics.png"); 
            $("#lyrics").css("visibility", "visible");
            showLyc = 1;
        }else{              // 가사 보임
            lyricsIcon.attr("src", "./Img/Nolyrics.png"); 
            $("#lyrics").css("visibility", "hidden");
            showLyc = 0;
        }
    });
});
