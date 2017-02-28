
// Code to stores responses and enables the "Find My Sign" aspect to work
// Created an array of objects with the properties of zodiac signs, icons, horoscope readings, & etc...
// Saved it as a global variable
var zodiacObjArray = [
	obj1 = {
		sign: "aquarius",
		type: "air",
		s: "Progressive, original, independent, humanitarian",
		w: "Runs from emotional expression, temperamental, uncompromising, aloof",
		horoscope:"2017 is a time of great potential and personal growth. Hard work and success are there, too, but your greatest progress may be made internally rather than externally. The Sun-Pluto conjunction in Capricorn that starts 2017 keeps your eye on the material prize. The Mars-Neptune conjunction will keep your loves, ideals, and highest hopes alive. The Moon and Venus are conjoined in Aquarius as 2017 begins, too. Have an easier, warmer rapport with people one-on-one because of this. When the Sun enters Aquarius, the Moon and Jupiter are conjoined in your Ninth House of expansion and higher learning. In 2017, you will want to learn and understand on a more complex level. A February 10 Lunar Eclipse has the Sun in Aquarius. An August 7 Lunar Eclipse finds the Moon in Aquarius. Emotional issues may rise to the surface at those times. Be kind, big-hearted, and solutions will find you. Your planets, Saturn and Uranus, are incredibly powerful all year. They are trine as 2017 starts. New ideas, fresh projects and people, wisdom, and boldness are all at your fingertips.",
		icon: document.getElementById("icon-aquarius"),
		dates: "January 20 - February 18",
	},
	obj2 = {
		sign: "pices",
		type: "water",
		s:"Compassionate, artistic, intuitive, gentle, wise, musical",
		w:"Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
		horoscope: "2017 is a year of pure magic! Take the time to distinguish between what's real and what's illusion and you'll safely navigate any and all situations. With the Mars-Neptune conjunction in Pisces that opens 2017, you can use charm rather than be charmed, hold true to the loftiest of ideals, and dispel any deceit or deception. The January Sun-Pluto conjunction in Capricorn brings intensity to all your efforts for success. It intensifies your feelings and passions, too. A February Solar Eclipse in Pisces opens another door. Your modern planet Neptune is conjoined with the eclipsed Sun. If the outside world is in disarray, you'll see through the fog and be a beacon for others to realize what is best. Your traditional planet Jupiter spends most of the year in Libra and is incredibly powerful. It starts in opposition to Uranus in Aries. This puts a lid on too many or too wild desires. When the Sun enters Pisces in February, Jupiter will still be opposed to Uranus, but now Mars in Aries is involved. Rash actions or impulses will be recognized in time. Pour extra creative energy into more constructive channels. When the Sun enters Pisces, it will be together with the Lunar South Node. Memories, feelings, and emotional ties are strong this year. Catch yourself if you fall back into any old bad habits and benefit from what the past has taught you.",
		icon: document.getElementById("icon-pices"),
		dates: "February 19 - March 20"
	},  	
	obj3 = {
		sign: "aries",
		type: "fire",
		s: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
		w: "Impatient, moody, short-tempered, impulsive, aggressive",
		horoscope: "You've got charm, smarts, and the element of surprise going for you all year long! Now what do you want to do with all these cosmic gifts? Tip: let them take you in a brand new direction. Saturn and Uranus are trine most of the year, meaning that you may just continue with what's been working well. However, as the year progresses, boredom and ambition may both grow. By December you may have positioned yourself to make a big move to begin something radically different. Venus is retrograde this year, partially in Aries. This provides you with more time to socially regroup and to appeal to people's emotional needs. A Mercury retrograde in April concludes in early May in your sign, Aries. Emotionally size up how things are going for you during the retrograde. By early May you should have a game plan that lets you make faster progress in a career or a relationship. Your planet Mars is extremely active and you should have the health and energy to be busy every single day. Not a bad thing!",
		icon: document.getElementById("icon-aries"),
		dates: "March 21 - April 19"
	},  
		obj4 = {
		sign:"taurus",
		type: "earth",
		s:"Reliable, patient, practical, devoted, responsible, stable",
		w:"Stubborn, possessive, uncompromising",
		horoscope:"This year, focus on your own well-being above all else. You can increase your material wealth and health this way, and also structure a more stable future. With Mars and the asteroid Ceres starting the year in your sign, you have the energy to nurture and grow the future you want. The Sun-Pluto conjunction in early January is in the Cardinal Earth Sign Capricorn. Cardinal Signs love to start things, and Earth Signs (such as Taurus and Capricorn) are totally practical and realistic. This conjunction is a signal to make a big change or to formulate an ambitious new plan to make 2017 better than ever. Your planet Venus is retrograde this year. Which things and people make you happiest? When this retrograde ends, you may want time to let your feelings settle down to focus on what really matters. Of Mercury's four retrogrades, the second one starts in Taurus. Rethink any previous decisions and find improvements during this one (in April). Spring may be complicated, but autumn gets simpler and more serious when Jupiter moves into Scorpio in October. December is a powerhouse for all Earth Signs as Saturn goes home into Capricorn. Changes are everywhere!",
		icon:document.getElementById("icon-taurus"),
		dates: "April 20 - May 20"
	},  
		obj5 = {
		sign: "gemini",
		type: "air",
		s:"Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		w:"Nervous, inconsistent, indecisive",
		horoscope:"Make the most of your people skills, make the big changes you want and need, and advance your goals for the future in 2017, Gemini. You'll have endless ideas and insights but it may be hard to activate them on your own. Talk, network, find partners, and team up when you think it's appropriate. Mercury, the Sun, and Pluto in Capricorn kickstart one of your most practical and successful years. Also, a Jupiter-Uranus opposition lets you be as innovative and vast-thinking as you please. Think big and be prepared to make major changes before the changes find you first. A Saturn-Uranus trine offers discipline and boldness to create the year you want without sacrificing those people or things important to your happiness and success. Venus and Jupiter are powerfully opposed as the Sun enters Gemini in May, giving you clear observations and the ability to make confident, shrewd decisions. Mars is in Gemini then, too. Your batteries are fully charged and you're ready to go!",
		icon:document.getElementById("icon-gemini"),
		dates: "May 21 - June 20"
	},  
		obj6 = {
		sign:"cancer",
		type:"water",
		s:"Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
		w:"Moody, pessimistic, suspicious, manipulative, insecure",
		horoscope:"2017 can be a highwater year full of major achievements, crucial decisions and changes for you, Cancer. Great things are possible with so much transformative energy aimed your way. The January Sun-Pluto conjunction in Capricorn is also square Jupiter in Libra and Uranus in Aries. This creates a T-square that points straight at Cancer. Your home life, domestic environment, your home town, your country, and your home planet Earth rarely get this much celestial attention. Make great progress on any or all of these home fronts as soon as you can. It's also a great year to successfully conclude a long, difficult project or to make that big change that takes you to a better place... geographically, mentally, and/or emotionally. The separating conjunction of Mars and Neptune in Pisces gives you enhanced intuition and instincts. This offers powerful advantages all year long. Will you take them? When the Sun enters Cancer, Mars will be there, too. Jupiter will be in the heart of Libra, your Fourth House of home, family, and the conclusion of things. This year may take some hard work, but great energy, luck, and generosity are at your fingertips all year long.",
		icon:document.getElementById("icon-cancer"),
		dates: "June 21 - July 22"
	},  
		obj7 = {
		sign:"leo",
		type: "fire",
		s:"Creative, passionate, generous, warm-hearted, cheerful, humorous",
		w:"Arrogant, stubborn, self-centered, lazy, inflexible",
		horoscope:"This is a year on fire, pouring energy into your work, career, and creativity sectors. The January Sun-Pluto conjunction keeps your ambition and work ethic sky high. The separating Mars-Neptune conjunction makes sure that emotions, lofty spiritual ideals, and instincts are not left behind. The Sun is conjoined with fiery Mars as it enters Leo. Here's your primary energy source for the whole year. Resist burning out or getting too forceful or impatient. Relax, and go for the gold. There's no limit to what you can achieve. The Moon will be not quite New as the Sun enters Leo. This deep, quiet, dark Moon provides unlimited access to wise private insights. With this strong Moon in Cancer, home and domestic concerns will be important and should be well attended to. A Lunar Eclipse on February 10 has the Moon in Leo. A Lunar Eclipse on August 7 has the Sun in Leo, followed by a Solar Eclipse in Leo on August 21. The Lunar Eclipse periods will stress intimate relationships and may create self-doubts. The Solar Eclipse may have more influence in public or social arenas. Be smart and sensitive before and during these periods. Of the four Mercury retrogrades this year, the third one from mid-August until early September will start in Virgo but conclude in Leo. Look forward to emerging from the retrograde with many minor snags untangled and more energy to charge ahead.",
		icon:document.getElementById("icon-leo"),
		dates: "July 23 - August 22"
	},  
		obj8 = {
		sign:"virgo",
		type:"earth",
		s:"Loyal, analytical, kind, hardworking, practical",
		w:"Shyness, worry, overly critical of self and others, all work and no play",
		horoscope:"As soon as the Sun conjoins Pluto in Capricorn on January 7, the year 2017 will blast off into an adventure of work and career possibilities for Virgos. Your planet Mercury will be in Capricorn, too. Thoughts and ideas to move you ahead will be abundant and achievable all year. January also starts with a mystic and mystifying conjunction of Mars and Neptune in Pisces. You'll be looking into the face of magic all year long, and you'll be able to tell what's real from what's illusion. That's an advantage that very few people will have. The Moon and Venus conjunct in Aquarius smooths out many social and relationship issues. You will be able to see and think more clearly about others than perhaps they can themselves. The most important celestial signal might be the conjunction of Mars and the Lunar North Node in Leo on the day that the Sun enters Virgo. You normally act with great consideration and compassion. This year, what you do may more often have karmic implications with soul connections to improve your life. Your more playful, dramatic actions could have deeper, more subtle and long-reaching consequences. The third of this year's four Mercury retrogrades starts in Virgo on August 12 and ends in Leo on September 5. You can have some of your best and most successful moments of the year now. They may not look great in the moment, but they are.",
		icon:document.getElementById("icon-virgo"),
		dates: "August 23 - September 22"
	},  
		obj9 = {
		sign:"libra",
		type:"air",
		s:"Cooperative,diplomatic, gracious, fair-minded, social",
		w:"Indecisive, avoids confrontations, will carry a grudge, self-pity",
		horoscope:"For the first ten months of 2017, enthusiatic and big-hearted Jupiter is in your sign, Libra. You can do endless good things with this. Strong allies, partners, and friends are there with you. Have a persistent vision, help and be helpful, and you should have a magnificent year! Venus and the Moon are conjoined in the Air Sign Aquarius as 2017 begins. Love and all social relationships and connections will benefit from the cool, clear-seeing, but compassionate influences of this Air Sign. Jupiter is retrograde from February through early June, giving you extra time to make the most of all the good things that Jupiter can bring. This retrograde doesn't take luck away but it concentrates on internal, less obvious issues. Be luckier in personal matters and get into better shape by the summer. As the Sun enters Libra, Mercury, Venus, and Mars are all in sensible, accomplished Virgo. Your efforts may sometimes feel modest but they will have great influence and consequences. The Sun is also conjoined with the asteroid Vesta. You natually sacrifice and share blessings and good luck. The Moon is in a separating conjunction with Jupiter at the same time. Feelings and intentions deepen and you'll focus more sharply on what matters most to you.",
		icon:document.getElementById("icon-libra"),
		dates: "September 23 - October 22"
	},  
		obj10 = {
		sign:"scorpio",
		type:"water",
		s:"Resourceful, brave, passionate, stubborn, a true friend",
		w:"Distrusting, jealous, secretive, violent",
		horoscope:"You may not recognize just how lucky you are going to be this year, Scorpio! The Sun-Pluto conjunction at 2017's beginning may keep you wired, intense, and focused on your chosen work. Keep an eye out for lucky opportunities and be ready to pounce. Your modern planet Pluto will keep you sharp and intense all year long. The separating Mars-Neptune conjunction in Pisces may tug at your heart and conscience at times but your traditional planet Mars will keep you moving forward and won't let you sink into self-doubt. When Scorpio starts, the Sun is conjoined with Jupiter and Mercury. Your lucky streak comes out of this. Mars is just entering Libra, too. This keeps you involved and plugged in with other kindred spirits, and those with shared goals and intentions. Your drive for success is unwavering. Your craving for love and respect is also without limits. The outside world may be crazy at times but at the end of every day, you return to what matters most in your life. 2017 is a powerful and empowering year when nothing can distract, disturb, or stop you if you’re determined. Go out and do it!",
		icon:document.getElementById("icon-scorpio"),
		dates: "October 23 - November 21"
	},  
		obj11 = {
		sign:"sagittarius",
		type:"fire",
		s:"Generous, idealistic, great sense of humor",
		w:"Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
		horoscope:"2017 is a year wide open with opportunities for Sagittarians. There is plenty of energy that will prompt you to dig in and make tremendous progress. There are also countless doors opening to new, previously unconsidered projects, pursuits, and partnerships. Forget those preconceived notions of what you should do or need to do. This year, you can do just about anything. The Sun-Pluto conjunction in Capricorn in January keeps your attention on career and public pursuits. You're not limited to being intense only about work, though. If you have a creative or other passion, you can get intense about that, too. 2017 starts with Mercury retrograde in Capricorn but the planet goes direct in Sagittarius. Work steady but aim high. The fourth and final Mercury retrograde is entirely in Sagittarius. Saturn spends the year in Sagittarius so Mercury's extra time there in December only improves your grasp on whatever situation is developing around you. When the Sun enters Sagittarius in November, planets are scattered around the sky. There is a Mercury-Saturn conjunction, however, that sharpens your keen mind and tempers your social activities. The asteroid Ceres is also transiting the Lunar North Node in glorious Leo. Nurturing yourself and your loved ones has never been easier or more satisfying.",
		icon:document.getElementById("icon-sagittarius"),
		dates: "November 22 - December 21"
	},  
		obj12 = {
		sign:"capricorn",
		type:"earth",
		s:"Responsible, disciplined, self-control, good managers",
		w:"Know-it-all, unforgiving, condescending, expecting the worst",
		horoscope:"It's your year to charge ahead, make bold changes for progress, success, and achieve greater respect in the world. The Sun-Pluto conjunction in January empowers and emboldens you all year long. There are four Mercury retrogrades in 2017 but only the first - seven days in January - will be in Capricorn. Start out in a cautious wait-and-see mode but after January 8, it's full steam ahead. A trine between your planet Saturn and Uranus makes it easier this year to be bold and innovative once you've weighed your many options. As the year begins, a rash of sextiles involving eight planets will keep you connected and in touch with people, enabling you to coolly and calmly relate to them, and to see the magic that surrounds many people and situations. Family and friends will listen and support you. But it may be love that generates the most progress for you. Saturn is retrograde in Sagittarius from April until late August. This tones down any over-enthusiasm or rash action. December is super strong when Saturn goes home and enters Capricorn on December 19. On December 21 the Sun enters Capricorn and conjoins Saturn. End the year in high spirits and firm footing for the year to come.",
		icon:document.getElementById("icon-capricorn"),
		dates: "December 22 - January 19"
	} ]

// Code creating the Function that runs when "Find MY Sign" button is clicked
// Created a function that searches through the above array for the inputed birtdate 
// and then RETURNS the sign and horoscope on the page
function find() {
	var selectedOption = document.getElementById('dateRanges').value 
	for (i=0;i<zodiacObjArray.length;i++) {
		if (zodiacObjArray[i].dates == selectedOption) {
			document.getElementById('zdcSign').innerHTML = zodiacObjArray[i].sign.toUpperCase()
			document.getElementById('zdcReading').innerHTML = zodiacObjArray[i].horoscope
		}
	}
}

// Code for the Plug In that Allows For the Type Animation in the Header
"use strict";
var prefix = ' for answers,';
var skills = [
    ' look to the stars ',
    ' find your zodiac sign ',
    ' read your horoscope ',
    ' distinguish the signs ',
    ' listen to your soul ',
    ' discover your destiny '
].map(function (s) { return s + "."; });
var delay = 2;
var step = 1;
var tail = 5;
var timeout = 75;
var headerText = document.createElement('h1');
// document.body.appendChild(headerText);
document.getElementById("addHere").appendChild(headerText);
var colors = [
    "#b6b66d",
    "#54549c",
    "#fff"
];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomChar() {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
}
function getRandomColoredString(n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += "<span style=\"color:" + getRandomColor() + "\">" + getRandomChar() + "</span>";
    }
    return result;
}
/** Global State */
var $ = {
    solid: '',
    prefixP: -tail,
    skillI: 0,
    skillP: 0,
    direction: 'forward',
    delay: delay,
    step: step
};
function render() {
    var skill = skills[$.skillI];
    if ($.step) {
        $.step--;
    }
    else {
        $.step = step;
        if ($.prefixP < prefix.length) {
            if ($.prefixP >= 0) {
                $.solid += prefix[$.prefixP];
            }
            $.prefixP++;
        }
        else {
            if ($.direction === 'forward') {
                if ($.skillP < skill.length) {
                    $.solid += skill[$.skillP];
                    $.skillP++;
                }
                else {
                    if ($.delay) {
                        $.delay--;
                    }
                    else {
                        $.direction = 'backward';
                        $.delay = delay;
                    }
                }
            }
            else {
                if ($.skillP > 0) {
                    $.solid = $.solid.slice(0, -1);
                    $.skillP--;
                }
                else {
                    $.skillI = ($.skillI + 1) % skills.length;
                    $.direction = 'forward';
                }
            }
        }
    }
    headerText.innerHTML = $.solid + getRandomColoredString($.prefixP < prefix.length ?
        Math.min(tail, tail + $.prefixP) :
        Math.min(tail, skill.length - $.skillP));
    setTimeout(render, timeout);
}
setTimeout(render, 500);




