class Player {
  constructor(name, title, maxLife, life, defense, attack, magic, speed, charm, weapon, pack, skill1, skill2, skill3, skill4) {
    this.name=name; this.title=title; this.maxLife=maxLife; this.life=life; this.defense=defense; this.attack=attack; this.magic=magic; this.speed=speed; this.charm=charm; this.weapon=weapon; this.pack=pack; this.skill1=skill1; this.skill2=skill2; this.skill3=skill3; this.skill4=skill4;
  }

rollD20(stat) {
  let roll = Math.floor(Math.random() * 20) + 1;
  let bonusRoll = roll + stat;
  // pD20.innerHTML = "Roll: " + roll + " + Attack: " + stat + " = " + bonusRoll;
  pD20.innerHTML = roll;
  return pD20;  
  
}  
  
}
// heroBar variables
let player = new Player("Saynt", "Champion", 30, 30, 10, 2, 3, 0, 0, 6, [], "Overpower", "Shield Slam", "Radiant Strike", "Heal");

let pName = document.getElementById('heroName');
let pTitle = document.getElementById('heroTitle');
let pLife = document.getElementById('heroLife');
let pDefense = document.getElementById('heroDefense');
let pAttack = document.getElementById('heroAttack');
let pMagic = document.getElementById('heroMagic');
let pSpeed = document.getElementById('heroSpeed');
let pCharm = document.getElementById('heroCharm');
let pWeapon = document.getElementById('heroWeapon');
// let pPack = document.getElementById('heroPack');
let pSkill1 = document.getElementById('pSkill1');
let pSkill2 = document.getElementById('pSkill2');
let pSkill3 = document.getElementById('pSkill3');
let pSkill4 = document.getElementById('pSkill4'); 
let pD20 = document.getElementById('pD20');

pName.innerHTML= "<b>" + player.name + "</b>";
pTitle.innerHTML= "<b>" + player.title + "</b>";
pLife.innerHTML= "<b>" + player.life + "</b>";
pDefense.innerHTML= "<b>Defense: " + player.defense + "</b>";
pAttack.innerHTML= "<b>Attack: " + player.attack + "</b>";
pMagic.innerHTML= "<b>Magic: " + player.magic + "</b>";
pSpeed.innerHTML= "<b>Speed: " + player.speed + "</b>";
pCharm.innerHTML= "<b>Charm: " + player.charm + "</b>";
pWeapon.innerHTML= "<b> Weapon Die: " + player.weapon + "</b>";
pSkill1.innerHTML= "<b> " + player.skill1 + "</b>";
pSkill2.innerHTML= "<b> " + player.skill2 + "</b>";
pSkill3.innerHTML= "<b> " + player.skill3 + "</b>";
pSkill4.innerHTML= "<b> " + player.skill4 + "</b>";
