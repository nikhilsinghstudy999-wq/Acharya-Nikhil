export const zodiacSigns: Record<string,{name:string;element:string;rulingPlanet:string;symbol:string;dates:string;traits:string}> = {
  aries:{name:'Aries',element:'Fire',rulingPlanet:'Mars',symbol:'♈',dates:'Mar 21 - Apr 19',traits:'Bold, ambitious, energetic'},
  taurus:{name:'Taurus',element:'Earth',rulingPlanet:'Venus',symbol:'♉',dates:'Apr 20 - May 20',traits:'Reliable, patient, practical'},
  gemini:{name:'Gemini',element:'Air',rulingPlanet:'Mercury',symbol:'♊',dates:'May 21 - Jun 20',traits:'Witty, curious, adaptable'},
  cancer:{name:'Cancer',element:'Water',rulingPlanet:'Moon',symbol:'♋',dates:'Jun 21 - Jul 22',traits:'Intuitive, emotional, nurturing'},
  leo:{name:'Leo',element:'Fire',rulingPlanet:'Sun',symbol:'♌',dates:'Jul 23 - Aug 22',traits:'Confident, generous, charismatic'},
  virgo:{name:'Virgo',element:'Earth',rulingPlanet:'Mercury',symbol:'♍',dates:'Aug 23 - Sep 22',traits:'Analytical, kind, hardworking'},
  libra:{name:'Libra',element:'Air',rulingPlanet:'Venus',symbol:'♎',dates:'Sep 23 - Oct 22',traits:'Diplomatic, fair, social'},
  scorpio:{name:'Scorpio',element:'Water',rulingPlanet:'Pluto',symbol:'♏',dates:'Oct 23 - Nov 21',traits:'Passionate, resourceful, brave'},
  sagittarius:{name:'Sagittarius',element:'Fire',rulingPlanet:'Jupiter',symbol:'♐',dates:'Nov 22 - Dec 21',traits:'Optimistic, adventurous, philosophical'},
  capricorn:{name:'Capricorn',element:'Earth',rulingPlanet:'Saturn',symbol:'♑',dates:'Dec 22 - Jan 19',traits:'Disciplined, responsible, ambitious'},
  aquarius:{name:'Aquarius',element:'Air',rulingPlanet:'Uranus',symbol:'♒',dates:'Jan 20 - Feb 18',traits:'Innovative, independent, humanitarian'},
  pisces:{name:'Pisces',element:'Water',rulingPlanet:'Neptune',symbol:'♓',dates:'Feb 19 - Mar 20',traits:'Compassionate, artistic, intuitive'}
};
export function getTodayDateString():string { return new Date().toISOString().split('T')[0]; }
