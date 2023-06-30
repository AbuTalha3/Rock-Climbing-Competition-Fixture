const speakers = [
    {
      speakerImage: './images/speaker_01.png',
      speakerName: 'David Jhons',
      profession: 'Para Gliding Instructor:',
      discription: 'A good Trainer and excellent Para Glider',
    },
    {
      speakerImage: './images/speaker_02.png',
      speakerName: 'Rachel Waffola',
      profession: 'Archery Teacher:',
      discription: 'She is a good shooter and a classic hunter',
    },
    {
      speakerImage: './images/speaker_03.png',
      speakerName: 'Maria Eigege',
      profession: 'Rock Climber:',
      discription: 'A clissic Rock Climber and a singer',
    },
    {
      speakerImage: './images/speaker_04.png',
      speakerName: 'Elazebeth MaC Akhun',
      profession: 'Water Sports Trainer:',
      discription: 'She is expert swimmer and kyaking supervisor',
    },
    {
      speakerImage: './images/speaker_04.png',
      speakerName: 'Elazebeth MaC Akhun',
      profession: 'Water Sports Trainer:',
      discription: 'She is expert swimmer and kyaking supervisor',
    },
    {
      speakerImage: './images/speaker_04.png',
      speakerName: 'Elazebeth MaC Akhun',
      profession: 'Water Sports Trainer:',
      discription: 'She is expert swimmer and kyaking supervisor',
    },
  ];
  
  const speakerTwoCard = [
    {
      speakerImage: './images/speaker_01.png',
      speakerName: 'Abu Talha',
      profession: 'Mountain Climber and a sky diver',
      discription: 'CEO Summer Camp Resorts and Fixtures',
    },
    {
      speakerImage: './images/speaker_03.png',
      speakerName: 'Maria MaC',
      profession: 'Archery teacher and a hunter',
      discription: 'Manager Summer Camp Resorts and Fixtures',
    },
  ];
  
  const mainSpeaker = document.getElementById('speaker-cards');
  
  function speakersCards() {
    speakers.map((card) => {
      const speakerCard = document.createElement('div');
      speakerCard.classList.add('card');
  
      speakerCard.innerHTML = `
            <div class="card">
              <img src="${card.speakerImage}" alt="">
              <div class="content">
                <h2>${card.speakerName}</h2>
                <h4>${card.profession}</h4>
                <hr>
                <p>${card.discription}</p>
              </div>
            </div>`;
      return mainSpeaker.appendChild(speakerCard);
    });
  }
  
  function speakersTwoCards() {
    speakerTwoCard.map((card) => {
      const speakerCard = document.createElement('div');
      speakerCard.classList.add('card');
  
      speakerCard.innerHTML = `
            <div class="card">
              <img src="${card.speakerImage}" alt="">
              <div class="content">
                <h2>${card.speakerName}</h2>
                <hr>
                <h4>${card.profession}</h4>
                <p>${card.discription}</p>
              </div>
            </div>`;
      return mainSpeaker.appendChild(speakerCard);
    });
  }
  
  if (window.innerWidth <= 768) {
    speakersTwoCards();
  } else {
    speakersCards();
  }