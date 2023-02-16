const teachers = [{
  teacherName: 'Jawid Ahmad Baktash',
  teacherPosition: 'Professor in KU, IT manager in ministry of higher education',
  teacherBio: 'Dr. Jawid Ahmad Baktash has gained bachelors in Japan and have many reasearchs published.',
  teacherImage: 'assets/images/jawid-baktash.jpeg',
},
{
  teacherName: 'Ramazan Ali Bahrami',
  teacherPosition: 'Teacher in KU, Software Developer in netlinks',
  teacherBio: 'Dr. Ramazan Ali Bahrami has gained bachelors in Japan and have many reasearchs published.',
  teacherImage: 'assets/images/bahrami.jpeg',
},
{
  teacherName: 'Morteza Tawakuli',
  teacherPosition: 'Professor in Kabul University, Freelancer',
  teacherBio: 'Dr. Morteza Tawakuli has gained bachelors in Japan and have many reasearchs published.',
  teacherImage: 'assets/images/morteza.jpg',
},
{
  teacherName: 'Ali Mohammadi',
  teacherPosition: 'Professor in KU, IT manager in ministry of higher education',
  teacherBio: 'Dr. Ali Mohammadi has gained bachelors in Japan and have many reasearchs published.',
  teacherImage: 'assets/images/ali.jpg',
},
];

const teacherDiv = document.querySelector('.teachers-profile');
let iterator = 1;
teachers.forEach((item) => {
  if (iterator <= 2) {
    teacherDiv.innerHTML += `
    <div class="teacher-card col-md-6 col-xs-12">
            <div class="teacher-img-bg">
              <img src="${item.teacherImage}" alt="Teacher Profile" class="teacher-image">
            </div>
            <div class="teacher-desc">
              <div class="teacher-name">${item.teacherName}</div>
              <div class="teacher-position"><i>${item.teacherPosition}</i></div>
              <br>
              <i class="teacher-sep"></i>
              <p class="teacher-bio">${item.teacherBio}</p>
            </div>
          </div>
  `;
  } else {
    teacherDiv.innerHTML += `
    <div class="teacher-card col-md-6 col-xs-12 no-mobile">
            <div class="teacher-img-bg">
              <img src="${item.teacherImage}" alt="Teacher Profile" class="teacher-image">
            </div>
            <div class="teacher-desc">
              <div class="teacher-name">${item.teacherName}</div>
              <div class="teacher-position"><i>${item.teacherPosition}</i></div>
              <br>
              <i class="teacher-sep"></i>
              <p class="teacher-bio">${item.teacherBio}</p>
            </div>
          </div>
  `;
  }
  iterator += 1;
});
