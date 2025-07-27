// بيانات تجريبية للدورات
const courses = [
  {
    title: 'مقدمة في البرمجة',
    description: 'تعرف على أساسيات البرمجة باستخدام JavaScript.',
    img: 'https://via.placeholder.com/300x140.png?text=Programming'
  },
  {
    title: 'تصميم واجهات المستخدم',
    description: 'تعلم كيفية تصميم واجهات جذابة باستخدام CSS وHTML.',
    img: 'https://via.placeholder.com/300x140.png?text=UI+Design'
  },
  {
    title: 'تطوير الويب الكامل',
    description: 'من الواجهة إلى الخادم، دورة شاملة لتطوير الويب.',
    img: 'https://via.placeholder.com/300x140.png?text=Fullstack'
  }
];

// عرض بطاقات الدورات ديناميكيًا
const container = document.getElementById('courses-container');
courses.forEach(course => {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.innerHTML = `
    <img src="${course.img}" alt="${course.title}" />
    <div class="info">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="enroll('${course.title}')">سجل الآن</button>
    </div>
  `;
  container.appendChild(card);
});

// دالة تسجيل وهمية
function enroll(title) {
  alert(\`تم التسجيل في الدورة: \${title}\`);
}

// معالجة نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'شكرًا لك! تم استلام رسالتك.';
  this.reset();
});
