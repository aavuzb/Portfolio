// EmailJS Initialization
(function(){
    emailjs.init('1vFYXi_pOBt9bPMGD'); // Replace with your EmailJS Public Key
})();

let currentLanguage = localStorage.getItem('currentLanguage') || 'en';
let languages = [];
let skills = [];
let mySkills = { heading: { en: '', ko: '', uz: '' }, description: { en: '', ko: '', uz: '' }, items: [] };
let resumeData = {
    workExperiences: [],
    education: [],
    publications: [],
    certificates: []
};
// localStorage.clear();
let projects = [];
let aboutData = { 
    text: { en: '', ko: '', uz: '' }, 
    interests: [], 
    hobbies: [], 
    skills: [] 
};
let alertIndex = 0;

const translations = {
    en: {
        home: 'Home',
        resume: 'Resume',
        projects: 'Projects',
        skills: 'Skills',
        hire_me: 'Hire Me',
        contacts: 'Contacts',
        aboutme: 'About Me',
        admin: 'Admin',
        i_am: "I'm",
        name: 'Abdurakhmon',
        major: 'Software & AI Developer',
        contact_me: 'Contact Me',
        proverbs_heading: 'Motivational Proverbs',
        languages_heading: 'Languages',
        skills_heading: 'Skills',
        self_intro_heading: 'Self Introduction',
        my_skills_heading: 'My Skills',
        my_skills_description: 'Here are some of my top skills and expertise.',
        my_projects_heading: 'My Projects',
        resume_heading: 'Resume',
        work_experience_heading: 'Work Experience',
        education_heading: 'Education',
        publications_heading: 'Publications',
        certificates_heading: 'Certificates',
        admin_heading: 'Admin Panel',
        manage_resume_heading: 'Manage Resume',
        position_label: 'Position',
        company_label: 'Company',
        type_label: 'Type',
        start_date_label: 'Start Date',
        end_date_label: 'End Date',
        projects_label: 'Projects',
        institution_label: 'Institution',
        student_type_label: 'Student Type',
        degree_level_label: 'Degree Level',
        researches_label: 'Researches',
        title_label: 'Title',
        publisher_label: 'Publisher',
        publication_date_label: 'Publication Date',
        url_label: 'URL',
        issuer_label: 'Issuer',
        issue_date_label: 'Issue Date',
        manage_projects_heading: 'Manage Projects',
        project_title_label: 'Project Title',
        project_description_label: 'Project Description',
        project_media_label: 'Project Media (Image/Video URL)',
        alerts_heading: 'Alerts',
        alert_title_label: 'Alert Title',
        alert_description_label: 'Alert Description',
        alert_media_label: 'Alert Media (Image/Video URL)',
        manage_about_heading: 'Manage About Me',
        interests_heading: 'Interests',
        hobbies_heading: 'Hobbies',
        manage_languages_heading: 'Manage Languages',
        manage_skills_heading: 'Manage Skills',
        manage_top_skills_heading: 'Manage Top Skills',
        hire_me_heading: "Let's Work Together",
        hire_me_description: "I'm thrilled at the prospect of collaborating on innovative projects. Fill out the form below to share your opportunity, and let's create something amazing!",
        send_offer_heading: 'Send Me an Offer',
        company_name_label: 'Company Name',
        contact_name_label: 'Contact Person',
        email_label: 'Email',
        offer_type_label: 'Offer Type',
        message_label: 'Message',
        contact_heading: 'Get in Touch',
        contact_description: "I'm excited to connect with you!",
        send_message_heading: 'Send Me a Message',
        name_label: 'Your Name',
        subject_label: 'Subject',
        no_alerts: 'No alerts available for this project.',
        no_interests: 'No interests available.',
        no_hobbies: 'No hobbies available.',
        no_skills: 'No skills available.',
        no_introduction: 'No introduction available.',
        // hire_me.html
        hire_title: "Let's Work Together",
        hire_subtitle: "I'm thrilled at the prospect of collaborating on innovative projects. Fill out the form below to share your opportunity, and let's create something amazing!",
        hire_form_title: "Send Me an Offer",
        company_name_label: "Company Name",
        company_name_placeholder: "Enter company name",
        contact_name_label: "Contact Person",
        contact_name_placeholder: "Enter your name",
        email_label: "Email",
        email_placeholder: "Enter your email",
        offer_type_label: "Offer Type",
        offer_type_placeholder: "Select offer type",
        offer_type_options: {
            full_time: "Full-Time Position",
            part_time: "Part-Time Position",
            freelance: "Freelance Project",
            contract: "Contract Work",
            collaboration: "Collaboration/Partnership"
        },
        message_label: "Message",
        message_placeholder: "Tell me about the opportunity...",
        submit_offer_button: "Submit Offer",
        hire_success_alert: "Thank you for your offer! I’ll get back to you soon.",
        hire_error_alert: "Failed to send your offer. Please contact me directly at <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> or call <a href='tel:+821072591421'>+821072591421</a>.",
        // contact_me.html
        contact_title: "Get in Touch",
        contact_subtitle: "I'm excited to connect with you!",
        contact_form_title: "Send Me a Message",
        name_label: "Your Name",
        name_placeholder: "Enter your name",
        subject_label: "Subject",
        subject_placeholder: "Enter the subject",
        submit_contact_button: "Send Message",
        contact_success_alert: "Thank you for your message! I’ll get back to you soon.",
        contact_error_alert: "Failed to send your message. Please contact me directly at <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> or call <a href='tel:+821072591421'>+821072591421</a>.",
        error_button: "OK",
        missing_fields: "Please complete all required fields.",
        

    },
    ko: {
        home: '홈',
        resume: '이력서',
        projects: '프로젝트',
        skills: '기술',
        hire_me: '고용하기',
        contacts: '연락처',
        aboutme: '소개',
        admin: '관리자',
        i_am: '저는',
        name: '압두라크먼',
        major: '소프트웨어 및 AI 개발자',
        contact_me: '연락하기',
        proverbs_heading: '동기부여 명언',
        languages_heading: '언어',
        skills_heading: '기술',
        self_intro_heading: '자기소개',
        my_skills_heading: '나의 기술',
        my_skills_description: '다음은 나의 주요 기술과 전문 분야입니다.',
        my_projects_heading: '나의 프로젝트',
        resume_heading: '이력서',
        work_experience_heading: '업무 경험',
        education_heading: '교육',
        publications_heading: '출판물',
        certificates_heading: '자격증',
        admin_heading: '관리자 패널',
        manage_resume_heading: '이력서 관리',
        position_label: '직책',
        company_label: '회사',
        type_label: '유형',
        start_date_label: '시작 날짜',
        end_date_label: '종료 날짜',
        projects_label: '프로젝트',
        institution_label: '기관',
        student_type_label: '학생 유형',
        degree_level_label: '학위 수준',
        researches_label: '연구',
        title_label: '제목',
        publisher_label: '출판사',
        publication_date_label: '출판 날짜',
        url_label: 'URL',
        issuer_label: '발행자',
        issue_date_label: '발행 날짜',
        manage_projects_heading: '프로젝트 관리',
        project_title_label: '프로젝트 제목',
        project_description_label: '프로젝트 설명',
        project_media_label: '프로젝트 미디어 (이미지/비디오 URL)',
        alerts_heading: '알림',
        alert_title_label: '알림 제목',
        alert_description_label: '알림 설명',
        alert_media_label: '알림 미디어 (이미지/비디오 URL)',
        manage_about_heading: '소개 관리',
        interests_heading: '관심사',
        hobbies_heading: '취미',
        manage_languages_heading: '언어 관리',
        manage_skills_heading: '기술 관리',
        manage_top_skills_heading: '최고 기술 관리',
        hire_me_heading: '함께 일합시다',
        hire_me_description: '혁신적인 프로젝트에 협력할 기회에 기쁩니다. 아래 양식을 작성하여 기회를 공유해 주세요. 멋진 것을 만들어 봅시다!',
        send_offer_heading: '제안 보내기',
        company_name_label: '회사 이름',
        contact_name_label: '연락 담당자',
        email_label: '이메일',
        offer_type_label: '제안 유형',
        message_label: '메시지',
        contact_heading: '연락하기',
        contact_description: '당신과 연결되기를 기대합니다!',
        send_message_heading: '메시지 보내기',
        name_label: '당신의 이름',
        subject_label: '제목',
        no_alerts: '이 프로젝트에 대한 알림이 없습니다.',
        no_interests: '관심사가 없습니다.',
        no_hobbies: '취미가 없습니다.',
        no_skills: '기술이 없습니다.',
        no_introduction: '자기소개가 없습니다.',
        // hire_me.html
        hire_title: "함께 일합시다",
        hire_subtitle: "혁신적인 프로젝트에 협력할 생각에 기쁩니다. 아래 양식을 작성하여 기회를 공유해 주세요. 멋진 것을 함께 만들어 봅시다!",
        hire_form_title: "제안 보내기",
        company_name_label: "회사 이름",
        company_name_placeholder: "회사 이름을 입력하세요",
        contact_name_label: "담당자 이름",
        contact_name_placeholder: "이름을 입력하세요",
        email_label: "이메일",
        email_placeholder: "이메일을 입력하세요",
        offer_type_label: "제안 유형",
        offer_type_placeholder: "제안 유형을 선택하세요",
        offer_type_options: {
            full_time: "정규직",
            part_time: "시간제",
            freelance: "프리랜스 프로젝트",
            contract: "계약직",
            collaboration: "협력/파트너십"
        },
        message_label: "메시지",
        message_placeholder: "기회에 대해 알려주세요...",
        submit_offer_button: "제안 제출",
        hire_success_alert: "제안 감사합니다! 곧 답장드리겠습니다.",
        hire_error_alert: "제안 전송에 실패했습니다. 직접 연락해 주세요: <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> 또는 <a href='tel:+821072591421'>+821072591421</a>.",
        // contact_me.html
        contact_title: "연락하기",
        contact_subtitle: "당신과 연결되고 싶습니다!",
        contact_form_title: "메시지 보내기",
        name_label: "이름",
        name_placeholder: "이름을 입력하세요",
        subject_label: "제목",
        subject_placeholder: "제목을 입력하세요",
        submit_contact_button: "메시지 보내기",
        contact_success_alert: "메시지 감사합니다! 곧 답장드리겠습니다.",
        contact_error_alert: "메시지 전송에 실패했습니다. 직접 연락해 주세요: <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> 또는 <a href='tel:+821072591421'>+821072591421</a>.",
        error_button: "확인",
        missing_fields: "모든 필수 필드를 작성해 주세요."
    },
    uz: {
        home: 'Uy',
        resume: 'Rezyume',
        projects: 'Loyihalar',
        skills: 'Ko‘nikmalar',
        hire_me: 'Ishga taklif',
        contacts: 'Bog‘lanish',
        aboutme: 'Men haqimda',
        admin: 'Admin',
        i_am: 'Men',
        name: 'Abduraxmon',
        major: 'Dasturchi va AI bo‘yicha tadqiqodchi',
        contact_me: 'Bog‘lanish',
        proverbs_heading: 'Motivatsion Maqollar',
        languages_heading: 'Tillar',
        skills_heading: 'Ko‘nikmalar',
        self_intro_heading: 'O‘zini tanishtirish',
        my_skills_heading: 'Mening ko‘nikmalarim',
        my_skills_description: 'Bu yerda mening eng yaxshi ko‘nikmalarim va tajribalarim keltirilgan.',
        my_projects_heading: 'Mening loyihalarim',
        resume_heading: 'Rezyume',
        work_experience_heading: 'Ish tajribasi',
        education_heading: 'Ta’lim',
        publications_heading: 'Nashrlar',
        certificates_heading: 'Sertifikatlar',
        admin_heading: 'Admin paneli',
        manage_resume_heading: 'Rezyume boshqaruvi',
        position_label: 'Lavozim',
        company_label: 'Kompaniya',
        type_label: 'Turi',
        start_date_label: 'Boshlanish sanasi',
        end_date_label: 'Tugash sanasi',
        projects_label: 'Loyihalar',
        institution_label: 'Muassasa',
        student_type_label: 'Talaba turi',
        degree_level_label: 'Daraja darajasi',
        researches_label: 'Tadqiqotlar',
        title_label: 'Sarlavha',
        publisher_label: 'Nashriyot',
        publication_date_label: 'Nashr sanasi',
        url_label: 'URL',
        issuer_label: 'Beruvchi',
        issue_date_label: 'Berilgan sana',
        manage_projects_heading: 'Loyihalarni boshqarish',
        project_title_label: 'Loyiha sarlavhasi',
        project_description_label: 'Loyiha tavsifi',
        project_media_label: 'Loyiha mediasi (Rasm/Video URL)',
        alerts_heading: 'Ogohlantirishlar',
        alert_title_label: 'Ogohlantirish sarlavhasi',
        alert_description_label: 'Ogohlantirish tavsifi',
        alert_media_label: 'Ogohlantirish mediasi (Rasm/Video URL)',
        manage_about_heading: 'Men haqimda boshqarish',
        interests_heading: 'Qiziqishlar',
        hobbies_heading: 'Sevimli mashg‘ulotlar',
        manage_languages_heading: 'Tillarni boshqarish',
        manage_skills_heading: 'Ko‘nikmalarni boshqarish',
        manage_top_skills_heading: 'Eng yaxshi ko‘nikmalarni boshqarish',
        hire_me_heading: 'Keling, birga ishlaymiz',
        hire_me_description: 'Innovatsion loyihalarda hamkorlik qilish imkoniyatidan xursandman. Quyidagi formani to‘ldiring va imkoniyatni baham ko‘ring, keling, ajoyib narsa yaratalik!',
        send_offer_heading: 'Menga taklif yuboring',
        company_name_label: 'Kompaniya nomi',
        contact_name_label: 'Aloqa shaxsi',
        email_label: 'Elektron pochta',
        offer_type_label: 'Taklif turi',
        message_label: 'Xabar',
        contact_heading: 'Bog‘lanish',
        contact_description: 'Siz bilan aloqa qilishni intiqlik bilan kutaman!',
        send_message_heading: 'Menga xabar yuboring',
        name_label: 'Ismingiz',
        subject_label: 'Mavzu',
        no_alerts: 'Ushbu loyiha uchun ogohlantirishlar mavjud emas.',
        no_interests: 'Qiziqishlar mavjud emas.',
        no_hobbies: 'Sevimli mashg‘ulotlar mavjud emas.',
        no_skills: 'Ko‘nikmalar mavjud emas.',
        no_introduction: 'O‘zini tanishtirish mavjud emas.',
        // hire_me.html
        hire_title: "Keling, birga ishlash",
        hire_subtitle: "Innovatsion loyihalarda hamkorlik qilish imkoniyatidan xursandman. Quyidagi formani to‘ldirib, o‘z imkoniyatingizni baham ko‘ring va keling, ajoyib narsalarni yarataylik!",
        hire_form_title: "Menga taklif yuboring",
        company_name_label: "Kompaniya nomi",
        company_name_placeholder: "Kompaniya nomini kiriting",
        contact_name_label: "Aloqa shaxsi",
        contact_name_placeholder: "Ismingizni kiriting",
        email_label: "Elektron pochta",
        email_placeholder: "Elektron pochtangizni kiriting",
        offer_type_label: "Taklif turi",
        offer_type_placeholder: "Taklif turini tanlang",
        offer_type_options: {
            full_time: "To‘liq stavkali ish",
            part_time: "Yarim stavkali ish",
            freelance: "Frilans loyiha",
            contract: "Shartnoma ishi",
            collaboration: "Hamkorlik/Sheriklik"
        },
        message_label: "Xabar",
        message_placeholder: "Imkoniyat haqida aytib bering...",
        submit_offer_button: "Taklif yuborish",
        hire_success_alert: "Taklifingiz uchun rahmat! Tez orada javob beraman.",
        hire_error_alert: "Taklif yuborish amalga oshmadi. Iltimos, menga bevosita murojaat qiling: <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> yoki <a href='tel:+821072591421'>+821072591421</a>.",
        // contact_me.html
        contact_title: "Aloqaga chiqing",
        contact_subtitle: "Siz bilan aloqa qilishdan xursandman!",
        contact_form_title: "Menga xabar yuboring",
        name_label: "Ismingiz",
        name_placeholder: "Ismingizni kiriting",
        subject_label: "Mavzu",
        subject_placeholder: "Mavzuni kiriting",
        submit_contact_button: "Xabar yuborish",
        contact_success_alert: "Xabar yuborildi! Tez orada javob beraman.",
        contact_error_alert: "Xabar yuborish amalga oshmadi. Iltimos, menga bevosita murojaat qiling: <a href='mailto:aavuzb@gmail.com'>aavuzb@gmail.com</a> yoki <a href='tel:+821072591421'>+821072591421</a>.",
        error_button: "OK",
        missing_fields: "Iltimos, barcha majburiy maydonlarni to‘ldiring."
    }
};

const proverbs = [
    {
        en: "Interest is not the most important thing. The most important thing is hard work. And hard work is the key to success.",
        ko: "흥미는 가장 중요한 것이 아닙니다. 가장 중요한 것은 노력입니다. 그리고 노력은 성공의 열쇠입니다.",
        uz: "Qiziqish eng muhim narsa emas. Eng muhim narsa – mehnat. Va mehnat – muvaffaqiyatning kalitidir."
    },
    {
        en: "Those who work hard will reach the stars, while those who wait for talent will remain in their dreams.",
        ko: "노력하는 자는 별에 도달하고, 재능을 기다리는 자는 꿈속에 남는다.",
        uz: "Mehnat qilgan – yulduzga yetar, talant kutgan – tushida qoladi."
    },
    {
        en: "Success is built on effort, not on talent. Every step you take today shapes your future.",
        ko: "성공은 재능이 아니라 노력 위에 쌓입니다. 오늘 당신이 내딛는 모든 걸음이 내일을 만듭니다.",
        uz: "Muvaffaqiyat talantga emas, mehnatga asoslanadi. Bugun qilgan har bir qadamingiz ertangi kuningizni belgilaydi."
    },
    {
        en: "Talent may open doors, but hard work keeps them open.",
        ko: "재능은 문을 열 수 있지만, 노력은 그 문을 열어 둡니다.",
        uz: "Talant eshikni ochishi mumkin, ammo mehnat uni ochiq tutadi."
    },
    {
        en: "Dreams don’t come true by waiting. They come true by working for them.",
        ko: "꿈은 기다린다고 이루어지지 않습니다. 그것은 그들을 위해 노력함으로써 이루어집니다.",
        uz: "Orzular kutish bilan amalga oshmaydi. Ular uchun mehnat qilish orqali amalga oshadi."
    },
    {
        en: "Effort is the bridge between your dreams and your achievements.",
        ko: "노력은 당신의 꿈과 성취 사이의 다리입니다.",
        uz: "Mehnat – orzularingiz va yutuqlaringiz o'rtasidagi ko'prikdir."
    }
];


// Initialize EmailJS
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('1vFYXi_pOBt9bPMGD'); // Replace with your EmailJS Public Key
        console.log('EmailJS initialized');
    } else {
        console.error('EmailJS SDK not loaded');
    }
}


// Local Storage Functions
function saveToLocalStorage() {
    try {
        localStorage.setItem('languages', JSON.stringify(languages));
        localStorage.setItem('skills', JSON.stringify(skills));
        localStorage.setItem('mySkills', JSON.stringify(mySkills));
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        localStorage.setItem('projects', JSON.stringify(projects));
        localStorage.setItem('aboutData', JSON.stringify(aboutData));
        console.log('Data saved to localStorage:', aboutData);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromLocalStorage() {
    console.log('Attempting to load data...');
    try {
        const savedLanguage = localStorage.getItem('currentLanguage');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
        }
        if (typeof portfolioData !== 'undefined') {
            languages = portfolioData.languages || [];
            skills = portfolioData.skills || [];
            mySkills = portfolioData.mySkills || { heading: { en: '', ko: '', uz: '' }, description: { en: '', ko: '', uz: '' }, items: [] };
            resumeData = portfolioData.resumeData || { workExperiences: [], education: [], publications: [], certificates: [] };
            projects = portfolioData.projects || [];
            aboutData = portfolioData.aboutData || { text: { en: '', ko: '', uz: '' }, interests: [], hobbies: [], skills: [] };
            console.log('Data loaded from data.js:', portfolioData);
            saveToLocalStorage();
            console.log('Data synced to localStorage from data.js');
        } else {
            throw new Error('data.js not loaded');
        }
    } catch (error) {
        console.warn('Error loading from data.js, falling back to localStorage:', error);
        try {
            const savedLanguages = localStorage.getItem('languages');
            if (savedLanguages) languages = JSON.parse(savedLanguages);
            const savedSkills = localStorage.getItem('skills');
            if (savedSkills) skills = JSON.parse(savedSkills);
            const savedMySkills = localStorage.getItem('mySkills');
            if (savedMySkills) mySkills = JSON.parse(savedMySkills);
            const savedResumeData = localStorage.getItem('resumeData');
            if (savedResumeData) resumeData = JSON.parse(savedResumeData);
            const savedProjects = localStorage.getItem('projects');
            if (savedProjects) projects = JSON.parse(savedProjects);
            const savedAboutData = localStorage.getItem('aboutData');
            if (savedAboutData) aboutData = JSON.parse(savedAboutData);
            console.log('Data loaded from localStorage:', aboutData);
        } catch (localError) {
            console.error('Error loading from localStorage:', localError);
        }
    }
    languages = languages.map(lang => ({
        name: lang.name && typeof lang.name === 'string' ? { en: lang.name, ko: '', uz: '' } : (lang.name || { en: '', ko: '', uz: '' }),
        percentage: lang.percentage,
        color: lang.color
    }));
    skills = skills.map(skill => ({
        name: skill.name && typeof skill.name === 'string' ? { en: skill.name, ko: '', uz: '' } : (skill.name || { en: '', ko: '', uz: '' }),
        percentage: skill.percentage,
        color: skill.color
    }));
    projects = projects.map(project => ({
        id: project.id,
        title: project.title && typeof project.title === 'string' ? { en: project.title, ko: '', uz: '' } : (project.title || { en: '', ko: '', uz: '' }),
        description: project.description && typeof project.description === 'string' ? { en: project.description, ko: '', uz: '' } : (project.description || { en: '', ko: '', uz: '' }),
        media: project.media,
        alerts: (project.alerts || []).map(alert => ({
            alertTitle: alert.alertTitle && typeof alert.alertTitle === 'string' ? { en: alert.alertTitle, ko: '', uz: '' } : (alert.alertTitle || { en: '', ko: '', uz: '' }),
            alertDescription: alert.alertDescription && typeof alert.alertDescription === 'string' ? { en: alert.alertDescription, ko: '', uz: '' } : (alert.alertDescription || { en: '', ko: '', uz: '' }),
            alertMedia: alert.alertMedia
        }))
    }));
    resumeData.workExperiences = resumeData.workExperiences.map(work => ({
        id: work.id,
        position: work.position && typeof work.position === 'string' ? { en: work.position, ko: '', uz: '' } : (work.position || { en: '', ko: '', uz: '' }),
        company: work.company && typeof work.company === 'string' ? { en: work.company, ko: '', uz: '' } : (work.company || { en: '', ko: '', uz: '' }),
        type: work.type,
        startDate: work.startDate,
        endDate: work.endDate,
        projects: (work.projects || []).map(proj => ({
            title: proj.title && typeof proj.title === 'string' ? { en: proj.title, ko: '', uz: '' } : (proj.title || { en: '', ko: '', uz: '' }),
            description: proj.description && typeof proj.description === 'string' ? { en: proj.description, ko: '', uz: '' } : (proj.description || { en: '', ko: '', uz: '' }),
            url: proj.url
        }))
    }));
    resumeData.education = resumeData.education.map(edu => ({
        id: edu.id,
        institution: edu.institution && typeof edu.institution === 'string' ? { en: edu.institution, ko: '', uz: '' } : (edu.institution || { en: '', ko: '', uz: '' }),
        studentType: edu.studentType && typeof edu.studentType === 'string' ? { en: edu.studentType, ko: '', uz: '' } : (edu.studentType || { en: '', ko: '', uz: '' }),
        degreeLevel: edu.degreeLevel,
        startDate: edu.startDate,
        endDate: edu.endDate,
        researches: (edu.researches || []).map(res => ({
            title: res.title && typeof res.title === 'string' ? { en: res.title, ko: '', uz: '' } : (res.title || { en: '', ko: '', uz: '' }),
            description: res.description && typeof res.description === 'string' ? { en: res.description, ko: '', uz: '' } : (res.description || { en: '', ko: '', uz: '' }),
            url: res.url
        }))
    }));
    resumeData.publications = resumeData.publications.map(pub => ({
        id: pub.id,
        title: pub.title && typeof pub.title === 'string' ? { en: pub.title, ko: '', uz: '' } : (pub.title || { en: '', ko: '', uz: '' }),
        publisher: pub.publisher && typeof pub.publisher === 'string' ? { en: pub.publisher, ko: '', uz: '' } : (pub.publisher || { en: '', ko: '', uz: '' }),
        date: pub.date,
        url: pub.url
    }));
    resumeData.certificates = resumeData.certificates.map(cert => ({
        id: cert.id,
        title: cert.title && typeof cert.title === 'string' ? { en: cert.title, ko: '', uz: '' } : (cert.title || { en: '', ko: '', uz: '' }),
        issuer: cert.issuer && typeof cert.issuer === 'string' ? { en: cert.issuer, ko: '', uz: '' } : (cert.issuer || { en: '', ko: '', uz: '' }),
        date: cert.date,
        url: cert.url
    }));
    aboutData.text = aboutData.text && typeof aboutData.text === 'string' ? { en: aboutData.text, ko: '', uz: '' } : (aboutData.text || { en: '', ko: '', uz: '' });
    aboutData.interests = aboutData.interests.map(interest => 
        typeof interest === 'string' ? { en: interest, ko: '', uz: '' } : (interest || { en: '', ko: '', uz: '' })
    );
    aboutData.hobbies = aboutData.hobbies.map(hobby => 
        typeof hobby === 'string' ? { en: hobby, ko: '', uz: '' } : (hobby || { en: '', ko: '', uz: '' })
    );
    aboutData.skills = aboutData.skills.map(skill => 
        typeof skill === 'string' ? { en: skill, ko: '', uz: '' } : (skill || { en: '', ko: '', uz: '' })
    );
}

// Language and Content Updates
function changeLanguage() {
    currentLanguage = document.getElementById('language-selector')?.value || 'ko';
    console.log('Language changed to:', currentLanguage);
    localStorage.setItem('currentLanguage', currentLanguage);
    updateContent();
}

function debugNavigation() {
    const navItems = ['home', 'resume', 'projects', 'skills', 'hire_me', 'contacts', 'aboutme', 'admin'];
    navItems.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`Navigation item found: ${id}, text: ${element.textContent}, visible: ${element.offsetParent !== null}`);
        } else {
            console.warn(`Navigation item missing: ${id}`);
        }
    });
}
// Show custom alert
function showCustomAlert() {
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) {
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
            window.location.href = 'index.html';
        }, 2000);
    }
}

// Show error alert
function showErrorAlert() {
    const errorAlertBox = document.getElementById('error-alert');
    const okButton = document.getElementById('error-alert-ok');
    if (errorAlertBox && okButton) {
        errorAlertBox.classList.add('show');
        const closeAlert = () => {
            errorAlertBox.classList.remove('show');
            okButton.removeEventListener('click', closeAlert);
            clearTimeout(timeout);
            window.location.href = 'index.html';
        };
        okButton.addEventListener('click', closeAlert);
        const timeout = setTimeout(closeAlert, 10000);
    }
}

// Submit offer (hire_me.html)
async function submitOffer() {
    const companyName = document.getElementById('company_name')?.value.trim();
    const contactName = document.getElementById('contact_name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const offerType = document.getElementById('offer_type')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const lang = currentLanguage;

    if (companyName && contactName && email && offerType && message) {
        const templateParams = {
            company_name: companyName,
            contact_name: contactName,
            email: email,
            offer_type: offerType,
            message: "-----Message-----" + message + "-----Offer Type-----"+ offerType + "-----Email-----"+ email + "-----Contacted Person Name-----" + contactName + "-----Contacted Company Name-----" + companyName
        };
        try {
            await emailjs.send('service_qa70cpf', 'template_1m6hw6m', templateParams);
            showCustomAlert();
            document.getElementById('company_name').value = '';
            document.getElementById('contact_name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('offer_type').value = '';
            document.getElementById('message').value = '';
        } catch (error) {
            console.error('EmailJS Error:', error);
            showErrorAlert();
        }
    } else {
        alert(translations[lang].missing_fields);
    }
}

// Submit contact (contact_me.html)
async function submitContact() {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const lang = currentLanguage;

    if (name && email && subject && message) {
        const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: "-----Message-----" + message + "-----Subject-----" + subject + "-----Email-----" + email + "-----Name-----" + name
            };
        try {
            await emailjs.send('service_qa70cpf', 'template_1m6hw6m', templateParams);
            showCustomAlert();
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } catch (error) {
            console.error('EmailJS Error:', error);
            showErrorAlert();
        }
    } else {
        alert(translations[lang].missing_fields);
    }
}


function updateContent() {
    console.log('Updating content for page:', window.location.pathname);
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const id = el.id.replace(/-/g, '_');
        if (translations[currentLanguage][id]) {
            el.textContent = translations[currentLanguage][id];
            if (['home', 'resume', 'projects', 'skills', 'hire_me', 'contacts', 'aboutme', 'admin'].includes(id)) {
                el.style.display = '';
            }
        }
    });

    debugNavigation();

    if (document.getElementById('languages-list')) renderLanguages();
    if (document.getElementById('skills-list')) renderSkills();
    if (document.getElementById('self-intro-text') || document.getElementById('interests') || document.getElementById('hobbies')) {
        renderAbout();
    }
    if (document.getElementById('my-skills-heading')) {
        document.getElementById('my-skills-heading').textContent = mySkills.heading[currentLanguage] || translations[currentLanguage].my_skills_heading;
        document.getElementById('my-skills-description').textContent = mySkills.description[currentLanguage] || translations[currentLanguage].my_skills_description;
        renderMySkills();
    }
    if (document.getElementById('projects-container')) renderProjects();
    if (document.getElementById('work-experiences') || document.getElementById('work-experiences-list')) {
        renderWorkExperiencesList();
        renderEducationList();
        renderPublicationsList();
        renderCertificatesList();
    }
    if (document.getElementById('aboutInput-en')) renderAboutAdmin();
    if (document.getElementById('proverb-text')) rotateProverbs();
}

function changeBackgroundColor() {
    const color = document.getElementById('color-selector')?.value || '#1A1A1A';
    document.body.style.backgroundColor = color;
}

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu-items');
    if (hamburger && menu) {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu-items');

    if (hamburger && menu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when a navigation link is clicked
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });

        // Auto-close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
});

function showTab(tabId) {
    console.log('[showTab] Called with tabId:', tabId);
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    const tab = document.getElementById(tabId);
    if (tab) tab.classList.remove('hidden');
    if (tabId === 'resume-tab') {
        renderWorkExperiencesList();
        renderEducationList();
        renderPublicationsList();
        renderCertificatesList();
    } else if (tabId === 'projects-tab') {
        renderProjectsAdmin();
        const projectMediaFile = document.getElementById('project-media-file');
        if (projectMediaFile) {
            projectMediaFile.removeEventListener('change', handleFileUpload);
            projectMediaFile.addEventListener('change', (e) => handleFileUpload(e, document.getElementById('media')));
            console.log('[showTab] Project media file listener re-attached');
        }
        const alertsContainer = document.getElementById('alerts-container');
        const addAlertButton = document.getElementById('add-alert');
        if (alertsContainer && addAlertButton) {
            alertsContainer.style.display = 'none';
            addAlertButton.style.display = 'none';
            console.log('[showTab] Alert fields hidden on Projects tab open');
        }
    } else if (tabId === 'about-tab') {
        renderAboutAdmin();
    } else if (tabId === 'languages-tab') {
        renderLanguagesAdmin();
    } else if (tabId === 'skills-tab') {
        renderSkillsAdmin();
    }
}

// About Rendering
function renderAbout() {
    console.log('renderAbout called with aboutData:', aboutData);
    
    const introText = document.getElementById('self-intro-text');
    if (introText) {
        introText.textContent = aboutData.text[currentLanguage] || translations[currentLanguage].no_introduction;
        console.log('Self-intro-text updated:', introText.textContent);
    } else {
        console.warn('self-intro-text element not found');
    }

    const interestsList = document.getElementById('interests');
    if (interestsList) {
        interestsList.innerHTML = '';
        if (aboutData.interests.length === 0) {
            interestsList.innerHTML = `<p class="text-gray-300">${translations[currentLanguage].no_interests}</p>`;
        } else {
            const ul = document.createElement('ul');
            ul.className = 'space-y-0';
            aboutData.interests.forEach(interest => {
                const li = document.createElement('li');
                li.className = 'bg-gray-800 p-6 rounded-xl shadow-lg';
                li.innerHTML = `<span class="text-gray-300">${interest[currentLanguage] || interest.en}</span>`;
                ul.appendChild(li);
            });
            interestsList.appendChild(ul);
        }
        console.log('Interests updated:', aboutData.interests);
    } else {
        console.warn('interests element not found');
    }

    const hobbiesList = document.getElementById('hobbies');
    if (hobbiesList) {
        hobbiesList.innerHTML = '';
        if (aboutData.hobbies.length === 0) {
            hobbiesList.innerHTML = `<p class="text-gray-300">${translations[currentLanguage].no_hobbies}</p>`;
        } else {
            const ul = document.createElement('ul');
            ul.className = 'space-y-0';
            aboutData.hobbies.forEach(hobby => {
                const li = document.createElement('li');
                li.className = 'bg-gray-800 p-6 rounded-xl shadow-lg';
                li.innerHTML = `<span class="text-gray-300">${hobby[currentLanguage] || hobby.en}</span>`;
                ul.appendChild(li);
            });
            hobbiesList.appendChild(ul);
        }
        console.log('Hobbies updated:', aboutData.hobbies);
    } else {
        console.warn('hobbies element not found');
    }

    const skillsList = document.getElementById('about-skills');
    if (skillsList) {
        skillsList.innerHTML = '';
        if (aboutData.skills.length === 0) {
            skillsList.innerHTML = `<p class="text-gray-300">${translations[currentLanguage].no_skills}</p>`;
        } else {
            const ul = document.createElement('ul');
            ul.className = 'space-y-6';
            aboutData.skills.forEach(skill => {
                const li = document.createElement('li');
                li.className = 'bg-gray-800 p-6 rounded-xl shadow-lg';
                li.innerHTML = `<span class="text-gray-300">${skill[currentLanguage] || skill.en}</span>`;
                ul.appendChild(li);
            });
            skillsList.appendChild(ul);
        }
        console.log('About skills updated:', aboutData.skills);
    } else {
        console.warn('about-skills element not found');
    }
}

// Languages Admin
function addLanguage(event) {
    event.preventDefault();
    console.log('[addLanguage] Called');
    const name = {
        en: document.getElementById('lang-name-en')?.value || '',
        ko: document.getElementById('lang-name-ko')?.value || '',
        uz: document.getElementById('lang-name-uz')?.value || ''
    };
    const percentage = parseInt(document.getElementById('lang-percentage')?.value) || 0;
    const color = document.getElementById('lang-color')?.value || '#4caf50';
    if (name.en && percentage >= 0 && percentage <= 100) {
        languages.push({ name, percentage, color });
        saveToLocalStorage();
        console.log('[addLanguage] Saved languages:', languages);
        document.getElementById('lang-form')?.reset();
        renderLanguagesAdmin();
        renderLanguages();
    } else {
        alert('Please enter a valid language name (English) and percentage (0-100).');
    }
}




function editLanguage(index) {
    const lang = languages[index];
    document.getElementById('lang-name-en').value = lang.name.en;
    document.getElementById('lang-name-ko').value = lang.name.ko;
    document.getElementById('lang-name-uz').value = lang.name.uz;
    document.getElementById('lang-percentage').value = lang.percentage;
    document.getElementById('lang-color').value = lang.color;
    languages.splice(index, 1);
    renderLanguagesAdmin();
    saveToLocalStorage();
}

function deleteLanguage(index) {
    console.log('[deleteLanguage] Deleting language at index:', index);
    languages.splice(index, 1);
    saveToLocalStorage();
    renderLanguagesAdmin();
    renderLanguages();
}

function exportDataToJs() {
    try {
        const data = {
            languages,
            skills,
            mySkills,
            resumeData,
            projects,
            aboutData
        };
        const dataStr = `const portfolioData = ${JSON.stringify(data, null, 2)};`;
        const blob = new Blob([dataStr], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.js';
        link.click();
        URL.revokeObjectURL(url);
        console.log('Data exported to data.js');
    } catch (error) {
        console.error('Error exporting data to JS:', error);
        alert('Failed to export data. Please check the console for details.');
    }
}


function renderLanguagesAdmin() {
    console.log('[renderLanguagesAdmin] Called');
    const container = document.getElementById('languages-list');
    if (!container) {
        console.error('[renderLanguagesAdmin] Error: languages-list not found');
        return;
    }
    container.innerHTML = '';
    console.log('[renderLanguagesAdmin] Languages:', languages);
    languages.forEach((language, index) => {
        const div = document.createElement('div');
        div.className = 'bg-gray-700 p-4 rounded-md flex justify-between items-center';
        div.innerHTML = `
            <div>
                <p class="text-gray-300">Name (EN): ${language.name.en}</p>
                <p class="text-gray-300">Name (KO): ${language.name.ko || 'N/A'}</p>
                <p class="text-gray-300">Name (UZ): ${language.name.uz || 'N/A'}</p>
                <p class="text-gray-300">Percentage: ${language.percentage}%</p>
                <p class="text-gray-300">Color: <span style="background-color: ${language.color}; width: 20px; height: 20px; display: inline-block; vertical-align: middle;"></span> ${language.color}</p>
            </div>
            <button onclick="deleteLanguage(${index})" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Delete</button>
        `;
        container.appendChild(div);
    });
}

function renderLanguages() {
    console.log('[renderLanguages] Called');
    const container = document.getElementById('languages-list');
    if (!container) {
        console.error('[renderLanguages] Error: languages-list not found');
        return;
    }
    container.innerHTML = '';
    const languages = JSON.parse(localStorage.getItem('languages')) || [];
    console.log('[renderLanguages] Languages:', languages);
    languages.forEach((language, index) => {
        const div = document.createElement('div');
        div.className = 'bg-gray-800 p-4 rounded-xl shadow-lg';
        div.innerHTML = `
            <h3 class="text-lg font-semibold text-cyan-400">${language.name[currentLanguage] || language.name.en}</h3>
            <div class="mt-2">
                <div class="bg-gray-600 h-4 rounded-full overflow-hidden">
                    <div class="h-full" style="width: ${language.percentage}%; background-color: ${language.color};"></div>
                </div>
                <p class="text-gray-300 mt-2 text-right">${language.percentage}%</p>
            </div>
        `;
        container.appendChild(div);
    });
}
// Skills Admin
function addSkill(event) {
    event.preventDefault();
    console.log('[addSkill] Called');
    const name = {
        en: document.getElementById('skill-name-en')?.value || '',
        ko: document.getElementById('skill-name-ko')?.value || '',
        uz: document.getElementById('skill-name-uz')?.value || ''
    };
    const percentage = parseInt(document.getElementById('skill-percentage')?.value) || 0;
    const color = document.getElementById('skill-color')?.value || '#4caf50';
    if (name.en && percentage >= 0 && percentage <= 100) {
        skills.push({ name, percentage, color });
        saveToLocalStorage();
        console.log('[addSkill] Saved skills:', skills);
        document.getElementById('skill-form')?.reset();
        renderSkillsAdmin();
        renderSkills();
    } else {
        alert('Please enter a valid skill name (English) and percentage (0-100).');
    }
}


function editSkill(index) {
    const skill = skills[index];
    document.getElementById('skill-name-en').value = skill.name.en;
    document.getElementById('skill-name-ko').value = skill.name.ko;
    document.getElementById('skill-name-uz').value = skill.name.uz;
    document.getElementById('skill-percentage').value = skill.percentage;
    document.getElementById('skill-color').value = skill.color;
    skills.splice(index, 1);
    renderSkillsAdmin();
    saveToLocalStorage();
}

function deleteSkill(index) {
    console.log('[deleteSkill] Deleting skill at index:', index);
    skills.splice(index, 1);
    saveToLocalStorage();
    renderSkillsAdmin();
    renderSkills();
}

function renderSkillsAdmin() {
    console.log('[renderSkillsAdmin] Called');
    const container = document.getElementById('skills-list');
    if (!container) {
        console.error('[renderSkillsAdmin] Error: skills-list not found');
        return;
    }
    container.innerHTML = '';
    console.log('[renderSkillsAdmin] Skills:', skills);
    skills.forEach((skill, index) => {
        const div = document.createElement('div');
        div.className = 'bg-gray-700 p-4 rounded-md flex justify-between items-center';
        div.innerHTML = `
            <div>
                <p class="text-gray-300">Name (EN): ${skill.name.en}</p>
                <p class="text-gray-300">Name (KO): ${skill.name.ko || 'N/A'}</p>
                <p class="text-gray-300">Name (UZ): ${skill.name.uz || 'N/A'}</p>
                <p class="text-gray-300">Percentage: ${skill.percentage}%</p>
                <p class="text-gray-300">Color: <span style="background-color: ${skill.color}; width: 20px; height: 20px; display: inline-block; vertical-align: middle;"></span> ${skill.color}</p>
            </div>
            <button onclick="deleteSkill(${index})" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Delete</button>
        `;
        container.appendChild(div);
    });
}


function renderSkills() {
    console.log('[renderSkills] Called');
    const container = document.getElementById('skills-list');
    if (!container) {
        console.error('[renderSkills] Error: skills-list not found');
        return;
    }
    container.innerHTML = '';
    const skills = JSON.parse(localStorage.getItem('skills')) || [];
    console.log('[renderSkills] Skills:', skills);
    skills.forEach((skill, index) => {
        const div = document.createElement('div');
        div.className = 'bg-gray-800 p-4 rounded-xl shadow-lg';
        div.innerHTML = `
            <h3 class="text-lg font-semibold text-cyan-400">${skill.name[currentLanguage] || skill.name.en}</h3>
            <div class="mt-2">
                <div class="bg-gray-600 h-4 rounded-full overflow-hidden">
                    <div class="h-full" style="width: ${skill.percentage}%; background-color: ${skill.color};"></div>
                </div>
                <p class="text-gray-300 mt-2 text-right">${skill.percentage}%</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// Top Skills Admin
function saveMySkillsTop() {
    mySkills.heading.en = document.getElementById('my-skills-heading-en')?.value || '';
    mySkills.heading.ko = document.getElementById('my-skills-heading-ko')?.value || '';
    mySkills.heading.uz = document.getElementById('my-skills-heading-uz')?.value || '';
    mySkills.description.en = document.getElementById('my-skills-description-en')?.value || '';
    mySkills.description.ko = document.getElementById('my-skills-description-ko')?.value || '';
    mySkills.description.uz = document.getElementById('my-skills-description-uz')?.value || '';
    renderTopSkillsAdmin();
    saveToLocalStorage();
}

function addMySkill(event) {
    event.preventDefault();
    const skill = {
        name: {
            en: document.getElementById('my-skill-name-en')?.value || '',
            ko: document.getElementById('my-skill-name-ko')?.value || '',
            uz: document.getElementById('my-skill-name-uz')?.value || ''
        },
        description: {
            en: document.getElementById('my-skill-description-en')?.value || '',
            ko: document.getElementById('my-skill-description-ko')?.value || '',
            uz: document.getElementById('my-skill-description-uz')?.value || ''
        }
    };
    if (skill.name.en && skill.description.en) {
        mySkills.items.push(skill);
        document.getElementById('my-skill-form').reset();
        renderTopSkillsAdmin();
        saveToLocalStorage();
    } else {
        alert('Please fill in at least the English name and description.');
    }
}

function editMySkill(index) {
    const skill = mySkills.items[index];
    document.getElementById('my-skill-name-en').value = skill.name.en;
    document.getElementById('my-skill-name-ko').value = skill.name.ko;
    document.getElementById('my-skill-name-uz').value = skill.name.uz;
    document.getElementById('my-skill-description-en').value = skill.description.en;
    document.getElementById('my-skill-description-ko').value = skill.description.ko;
    document.getElementById('my-skill-description-uz').value = skill.description.uz;
    mySkills.items.splice(index, 1);
    renderTopSkillsAdmin();
    saveToLocalStorage();
}

function deleteMySkill(index) {
    mySkills.items.splice(index, 1);
    renderTopSkillsAdmin();
    saveToLocalStorage();
}

function renderTopSkillsAdmin() {
    const list = document.getElementById('my-skills-list');
    if (list) {
        list.innerHTML = '';
        mySkills.items.forEach((skill, index) => {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center bg-gray-700 p-4 rounded-md';
            div.innerHTML = `
                <span>${skill.name.en}</span>
                <div>
                    <button Ondiv>
                    <button onclick="editMySkill(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                    <button onclick="deleteMySkill(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                </div>
            `;
            list.appendChild(div);
        });
    }
}

function renderMySkills() {
    const list = document.getElementById('my-skills-list');
    if (list) {
        list.innerHTML = '';
        mySkills.items.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'bg-gray-800 p-6 rounded-xl shadow-lg';
            div.innerHTML = `
                <h3 class="text-xl font-semibold text-cyan-400">${skill.name[currentLanguage] || skill.name.en}</h3>
                <p class="text-gray-300 mt-2">${skill.description[currentLanguage] || skill.description.en}</p>
            `;
            list.appendChild(div);
        });
    }
}

// Resume Admin
function addWorkProjectField() {
    const projectsDiv = document.getElementById('work-projects');
    if (projectsDiv) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item bg-gray-700 p-4 rounded-md';
        projectDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (English)</label>
                <input type="text" class="project-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Title (English)" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (Korean)</label>
                <input type="text" class="project-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Title (Korean)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (Uzbek)</label>
                <input type="text" class="project-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Title (Uzbek)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (English)</label>
                <textarea class="project-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Description (English)" required></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (Korean)</label>
                <textarea class="project-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Description (Korean)"></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (Uzbek)</label>
                <textarea class="project-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Project Description (Uzbek)"></textarea>
            </div>
            <input type="url" class="project-url w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2 mb-2" placeholder="Project URL (optional)">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        projectsDiv.appendChild(projectDiv);
    }
}

function saveWorkExperience(event) {
    event.preventDefault();
    const id = document.getElementById('work-id')?.value;
    const work = {
        id: id || Date.now(),
        position: {
            en: document.getElementById('work-position-en')?.value || '',
            ko: document.getElementById('work-position-ko')?.value || '',
            uz: document.getElementById('work-position-uz')?.value || ''
        },
        company: {
            en: document.getElementById('work-company-en')?.value || '',
            ko: document.getElementById('work-company-ko')?.value || '',
            uz: document.getElementById('work-company-uz')?.value || ''
        },
        type: document.getElementById('work-type')?.value,
        startDate: document.getElementById('work-start-date')?.value,
        endDate: document.getElementById('work-end-date')?.value,
        projects: Array.from(document.querySelectorAll('#work-projects .project-item')).map(item => ({
            title: {
                en: item.querySelector('.project-title-en')?.value || '',
                ko: item.querySelector('.project-title-ko')?.value || '',
                uz: item.querySelector('.project-title-uz')?.value || ''
            },
            description: {
                en: item.querySelector('.project-description-en')?.value || '',
                ko: item.querySelector('.project-description-ko')?.value || '',
                uz: item.querySelector('.project-description-uz')?.value || ''
            },
            url: item.querySelector('.project-url')?.value
        }))
    };
    if (work.position.en && work.company.en && work.startDate) {
        if (id) {
            const index = resumeData.workExperiences.findIndex(w => w.id == id);
            resumeData.workExperiences[index] = work;
        } else {
            resumeData.workExperiences.push(work);
        }
        clearWorkForm();
        renderWorkExperiencesList();
        saveToLocalStorage();
    } else {
        alert('Please fill in all required fields (at least English).');
    }
}

function editWorkExperience(index) {
    const work = resumeData.workExperiences[index];
    document.getElementById('work-id').value = work.id;
    document.getElementById('work-position-en').value = work.position.en;
    document.getElementById('work-position-ko').value = work.position.ko;
    document.getElementById('work-position-uz').value = work.position.uz;
    document.getElementById('work-company-en').value = work.company.en;
    document.getElementById('work-company-ko').value = work.company.ko;
    document.getElementById('work-company-uz').value = work.company.uz;
    document.getElementById('work-type').value = work.type;
    document.getElementById('work-start-date').value = work.startDate;
    document.getElementById('work-end-date').value = work.endDate;
    const projectsDiv = document.getElementById('work-projects');
    projectsDiv.innerHTML = '';
    work.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item bg-gray-700 p-4 rounded-md';
        projectDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (English)</label>
                <input type="text" class="project-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${project.title.en}" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (Korean)</label>
                <input type="text" class="project-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${project.title.ko}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Title (Uzbek)</label>
                <input type="text" class="project-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${project.title.uz}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (English)</label>
                <textarea class="project-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" required>${project.description.en}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (Korean)</label>
                <textarea class="project-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${project.description.ko}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Project Description (Uzbek)</label>
                <textarea class="project-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${project.description.uz}</textarea>
            </div>
            <input type="url" class="project-url w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2 mb-2" value="${project.url || ''}" placeholder="Project URL (optional)">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });
}

function deleteWorkExperience(index) {
    resumeData.workExperiences.splice(index, 1);
    renderWorkExperiencesList();
    saveToLocalStorage();
}

function clearWorkForm() {
    document.getElementById('work-form').reset();
    document.getElementById('work-id').value = '';
    document.getElementById('work-projects').innerHTML = '';
}

function renderWorkExperiencesList() {
    const list = document.getElementById('work-experiences-list') || document.getElementById('work-experiences');
    if (list) {
        list.innerHTML = '';
        resumeData.workExperiences.forEach((work, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-700 p-4 rounded-md mb-4';
            div.innerHTML = `
                <h4 class="text-lg font-semibold text-cyan-400">${work.company[currentLanguage] || work.company.en}</h4>
                <p class="text-gray-300">${work.position[currentLanguage] || work.position.en} | ${work.type}</p>
                <p class="text-gray-400">${work.startDate} - ${work.endDate || 'Present'}</p>
                ${work.projects.length ? `
                    <p class="text-gray-300 mt-2">${translations[currentLanguage].projects_label}:</p>
                    <ul class="list-disc list-inside text-gray-300">
                        ${work.projects.map(proj => `<li>${proj.title[currentLanguage] || proj.title.en} ${proj.description[currentLanguage] || proj.description.en} ${proj.url ? `<a href="${proj.url}" class="text-cyan-400 hover:underline">Link</a>` : ''}</li>`).join('')}
                    </ul>
                ` : ''}
                ${document.getElementById('work-experiences-list') ? `
                    <div class="mt-2">
                        <button onclick="editWorkExperience(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                        <button onclick="deleteWorkExperience(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                    </div>
                ` : ''}
            `;
            list.appendChild(div);
        });
    }
}

function addEduResearchField() {
    const researchesDiv = document.getElementById('edu-researches');
    if (researchesDiv) {
        const researchDiv = document.createElement('div');
        researchDiv.className = 'research-item bg-gray-700 p-4 rounded-md';
        researchDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (English)</label>
                <input type="text" class="research-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Title (English)" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (Korean)</label>
                <input type="text" class="research-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Title (Korean)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (Uzbek)</label>
                <input type="text" class="research-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Title (Uzbek)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (English)</label>
                <textarea class="research-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Description (English)" required></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (Korean)</label>
                <textarea class="research-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Description (Korean)"></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (Uzbek)</label>
                <textarea class="research-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Research Description (Uzbek)"></textarea>
            </div>
            <input type="url" class="research-url w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2 mb-2" placeholder="Research URL (optional)">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        researchesDiv.appendChild(researchDiv);
    }
}

function saveEducation(event) {
    event.preventDefault();
    const id = document.getElementById('edu-id')?.value;
    const education = {
        id: id || Date.now(),
        institution: {
            en: document.getElementById('edu-institution-en')?.value || '',
            ko: document.getElementById('edu-institution-ko')?.value || '',
            uz: document.getElementById('edu-institution-uz')?.value || ''
        },
        studentType: {
            en: document.getElementById('edu-student-type-en')?.value || '',
            ko: document.getElementById('edu-student-type-ko')?.value || '',
            uz: document.getElementById('edu-student-type-uz')?.value || ''
        },
        degreeLevel: document.getElementById('edu-degree-level')?.value,
        startDate: document.getElementById('edu-start-date')?.value,
        endDate: document.getElementById('edu-end-date')?.value,
        researches: Array.from(document.querySelectorAll('#edu-researches .research-item')).map(item => ({
            title: {
                en: item.querySelector('.research-title-en')?.value || '',
                ko: item.querySelector('.research-title-ko')?.value || '',
                uz: item.querySelector('.research-title-uz')?.value || ''
            },
            description: {
                en: item.querySelector('.research-description-en')?.value || '',
                ko: item.querySelector('.research-description-ko')?.value || '',
                uz: item.querySelector('.research-description-uz')?.value || ''
            },
            url: item.querySelector('.research-url')?.value
        }))
    };
    if (education.institution.en && education.studentType.en && education.startDate) {
        if (id) {
            const index = resumeData.education.findIndex(e => e.id == id);
            resumeData.education[index] = education;
        } else {
            resumeData.education.push(education);
        }
        clearEduForm();
        renderEducationList();
        saveToLocalStorage();
    } else {
        alert('Please fill in all required fields (at least English).');
    }
}

function editEducation(index) {
    const edu = resumeData.education[index];
    document.getElementById('edu-id').value = edu.id;
    document.getElementById('edu-institution-en').value = edu.institution.en;
    document.getElementById('edu-institution-ko').value = edu.institution.ko;
    document.getElementById('edu-institution-uz').value = edu.institution.uz;
    document.getElementById('edu-student-type-en').value = edu.studentType.en;
    document.getElementById('edu-student-type-ko').value = edu.studentType.ko;
    document.getElementById('edu-student-type-uz').value = edu.studentType.uz;
    document.getElementById('edu-degree-level').value = edu.degreeLevel;
    document.getElementById('edu-start-date').value = edu.startDate;
    document.getElementById('edu-end-date').value = edu.endDate;
    const researchesDiv = document.getElementById('edu-researches');
    researchesDiv.innerHTML = '';
    edu.researches.forEach(research => {
        const researchDiv = document.createElement('div');
        researchDiv.className = 'research-item bg-gray-700 p-4 rounded-md';
        researchDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (English)</label>
                <input type="text" class="research-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${research.title.en}" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (Korean)</label>
                <input type="text" class="research-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${research.title.ko}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Title (Uzbek)</label>
                <input type="text" class="research-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${research.title.uz}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (English)</label>
                <textarea class="research-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" required>${research.description.en}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (Korean)</label>
                <textarea class="research-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${research.description.ko}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">Research Description (Uzbek)</label>
                <textarea class="research-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${research.description.uz}</textarea>
            </div>
            <input type="url" class="research-url w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2 mb-2" value="${research.url || ''}" placeholder="Research URL (optional)">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        researchesDiv.appendChild(researchDiv);
    });
}

function deleteEducation(index) {
    resumeData.education.splice(index, 1);
    renderEducationList();
    saveToLocalStorage();
}

function clearEduForm() {
    document.getElementById('edu-form').reset();
    document.getElementById('edu-id').value = '';
    document.getElementById('edu-researches').innerHTML = '';
}

function renderEducationList() {
    const list = document.getElementById('education-backgrounds-list') || document.getElementById('education-backgrounds');
    if (list) {
        list.innerHTML = '';
        resumeData.education.forEach((edu, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-700 p-4 rounded-md mb-4';
            div.innerHTML = `
                <h4 class="text-lg font-semibold text-cyan-400">${edu.institution[currentLanguage] || edu.institution.en}</h4>
                <p class="text-gray-300">${edu.studentType[currentLanguage] || edu.studentType.en} | ${edu.degreeLevel}</p>
                <p class="text-gray-400">${edu.startDate} - ${edu.endDate || 'Present'}</p>
                ${edu.researches.length ? `
                    <p class="text-gray-300 mt-2">${translations[currentLanguage].researches_label}:</p>
                    <ul class="list-disc list-inside text-gray-300">
                        ${edu.researches.map(res => `<li>${res.title[currentLanguage] || res.title.en} ${res.url ? `<a href="${res.url}" class="text-cyan-400 hover:underline">Link</a>` : ''}</li>`).join('')}
                    </ul>
                ` : ''}
                ${document.getElementById('education-backgrounds-list') ? `
                    <div class="mt-2">
                        <button onclick="editEducation(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                        <button onclick="deleteEducation(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                    </div>
                ` : ''}
            `;
            list.appendChild(div);
        });
    }
}

function savePublication(event) {
    event.preventDefault();
    const id = document.getElementById('pub-id')?.value;
    const publication = {
        id: id || Date.now(),
        title: {
            en: document.getElementById('pub-title-en')?.value || '',
            ko: document.getElementById('pub-title-ko')?.value || '',
            uz: document.getElementById('pub-title-uz')?.value || ''
        },
        publisher: {
            en: document.getElementById('pub-publisher-en')?.value || '',
            ko: document.getElementById('pub-publisher-ko')?.value || '',
            uz: document.getElementById('pub-publisher-uz')?.value || ''
        },
        date: document.getElementById('pub-date')?.value,
        url: document.getElementById('pub-url')?.value
    };
    if (publication.title.en && publication.publisher.en && publication.date) {
        if (id) {
            const index = resumeData.publications.findIndex(p => p.id == id);
            resumeData.publications[index] = publication;
        } else {
            resumeData.publications.push(publication);
        }
        document.getElementById('pub-form').reset();
        document.getElementById('pub-id').value = '';
        renderPublicationsList();
        saveToLocalStorage();
    } else {
        alert('Please fill in all required fields (at least English).');
    }
}

function editPublication(index) {
    const pub = resumeData.publications[index];
    document.getElementById('pub-id').value = pub.id;
    document.getElementById('pub-title-en').value = pub.title.en;
    document.getElementById('pub-title-ko').value = pub.title.ko;
    document.getElementById('pub-title-uz').value = pub.title.uz;
    document.getElementById('pub-publisher-en').value = pub.publisher.en;
    document.getElementById('pub-publisher-ko').value = pub.publisher.ko;
    document.getElementById('pub-publisher-uz').value = pub.publisher.uz;
    document.getElementById('pub-date').value = pub.date;
    document.getElementById('pub-url').value = pub.url || '';
}

function deletePublication(index) {
    resumeData.publications.splice(index, 1);
    renderPublicationsList();
    saveToLocalStorage();
}

function renderPublicationsList() {
    const list = document.getElementById('publications-list') || document.getElementById('publications');
    if (list) {
        list.innerHTML = '';
        resumeData.publications.forEach((pub, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-700 p-4 rounded-md mb-4';
            div.innerHTML = `
                <h4 class="text-lg font-semibold text-cyan-400">${pub.title[currentLanguage] || pub.title.en}</h4>
                <p class="text-gray-300">${pub.publisher[currentLanguage] || pub.publisher.en}</p>
                <p class="text-gray-400">${pub.date}</p>
                ${pub.url ? `<a href="${pub.url}" class="text-cyan-400 hover:underline">${translations[currentLanguage].url_label}</a>` : ''}
                ${document.getElementById('publications-list') ? `
                    <div class="mt-2">
                        <button onclick="editPublication(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                        <button onclick="deletePublication(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                    </div>
                ` : ''}
            `;
            list.appendChild(div);
        });
    }
}

function saveCertificate(event) {
    event.preventDefault();
    const id = document.getElementById('cert-id')?.value;
    const certificate = {
        id: id || Date.now(),
        title: {
            en: document.getElementById('cert-title-en')?.value || '',
            ko: document.getElementById('cert-title-ko')?.value || '',
            uz: document.getElementById('cert-title-uz')?.value || ''
        },
        issuer: {
            en: document.getElementById('cert-issuer-en')?.value || '',
            ko: document.getElementById('cert-issuer-ko')?.value || '',
            uz: document.getElementById('cert-issuer-uz')?.value || ''
        },
        date: document.getElementById('cert-date')?.value,
        url: document.getElementById('cert-url')?.value
    };
    if (certificate.title.en && certificate.issuer.en && certificate.date) {
        if (id) {
            const index = resumeData.certificates.findIndex(c => c.id == id);
            resumeData.certificates[index] = certificate;
        } else {
            resumeData.certificates.push(certificate);
        }
        document.getElementById('cert-form').reset();
        document.getElementById('cert-id').value = '';
        renderCertificatesList();
        saveToLocalStorage();
    } else {
        alert('Please fill in all required fields (at least English).');
    }
}

function editCertificate(index) {
    const cert = resumeData.certificates[index];
    document.getElementById('cert-id').value = cert.id;
    document.getElementById('cert-title-en').value = cert.title.en;
    document.getElementById('cert-title-ko').value = cert.title.ko;
    document.getElementById('cert-title-uz').value = cert.title.uz;
    document.getElementById('cert-issuer-en').value = cert.issuer.en;
    document.getElementById('cert-issuer-ko').value = cert.issuer.ko;
    document.getElementById('cert-issuer-uz').value = cert.issuer.uz;
    document.getElementById('cert-date').value = cert.date;
    document.getElementById('cert-url').value = cert.url || '';
}

function deleteCertificate(index) {
    resumeData.certificates.splice(index, 1);
    renderCertificatesList();
    saveToLocalStorage();
}

function renderCertificatesList() {
    const list = document.getElementById('certificates-list') || document.getElementById('certificates');
    if (list) {
        list.innerHTML = '';
        resumeData.certificates.forEach((cert, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-700 p-4 rounded-md mb-4';
            div.innerHTML = `
                <h4 class="text-lg font-semibold text-cyan-400">${cert.title[currentLanguage] || cert.title.en}</h4>
                <p class="text-gray-300">${cert.issuer[currentLanguage] || cert.issuer.en}</p>
                <p class="text-gray-400">${cert.date}</p>
                ${cert.url ? `<a href="${cert.url}" class="text-cyan-400 hover:underline">${translations[currentLanguage].url_label}</a>` : ''}
                ${document.getElementById('certificates-list') ? `
                    <div class="mt-2">
                        <button onclick="editCertificate(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                        <button onclick="deleteCertificate(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                    </div>
                ` : ''}
            `;
            list.appendChild(div);
        });
    }
}

// Projects Admin
function addAlertField() {
    console.log('[addAlertField] Called');
    const alertsContainer = document.getElementById('alerts-container');
    if (alertsContainer) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert-item bg-gray-700 p-4 rounded-md alert-${alertIndex}`;
        alertDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (English)</label>
                <input type="text" class="alert-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Title (English)" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (Korean)</label>
                <input type="text" class="alert-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Title (Korean)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (Uzbek)</label>
                <input type="text" class="alert-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Title (Uzbek)">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (English)</label>
                <textarea class="alert-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Description (English)" required></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (Korean)</label>
                <textarea class="alert-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Description (Korean)"></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (Uzbek)</label>
                <textarea class="alert-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Description (Uzbek)"></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_media_label}</label>
                <div class="flex space-x-2">
                    <input type="text" class="alert-media w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Alert Media File Name" readonly>
                    <label for="alert-media-file-${alertIndex}" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 cursor-pointer">Choose File</label>
                    <input type="file" id="alert-media-file-${alertIndex}" class="hidden alert-media-file" accept="image/*,video/mp4,video/avi">
                </div>
            </div>
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        alertsContainer.appendChild(alertDiv);
        const fileInput = alertDiv.querySelector(`#alert-media-file-${alertIndex}`);
        if (fileInput) {
            fileInput.addEventListener('change', (e) => handleFileUpload(e, alertDiv.querySelector('.alert-media')));
            console.log('[addAlertField] Alert media file listener attached for alert-', alertIndex);
        }
        alertIndex++;
    }
}


function handleFileUpload(event, targetInput) {
    console.log('[handleFileUpload] Called with event:', event);
    if (!targetInput) {
        console.error('[handleFileUpload] Error: targetInput is null or undefined');
        return;
    }
    const file = event.target.files[0];
    if (file) {
        console.log('[handleFileUpload] File selected:', file.name, 'for input:', targetInput.id || targetInput.className);
        targetInput.value = file.name;
        console.log('[handleFileUpload] Set input value to:', targetInput.value);
    } else {
        console.warn('[handleFileUpload] No file selected');
    }
}


function saveProject(event) {
    event.preventDefault();
    console.log('[saveProject] Called');
    const editIndex = document.getElementById('edit-index')?.value;
    const mediaInput = document.getElementById('media');
    const project = {
        id: editIndex || Date.now(),
        title: {
            en: document.getElementById('title-en')?.value || '',
            ko: document.getElementById('title-ko')?.value || '',
            uz: document.getElementById('title-uz')?.value || ''
        },
        description: {
            en: document.getElementById('description-en')?.value || '',
            ko: document.getElementById('description-ko')?.value || '',
            uz: document.getElementById('description-uz')?.value || ''
        },
        media: mediaInput?.value || '',
        alerts: Array.from(document.querySelectorAll('#alerts-container .alert-item')).map((item, idx) => {
            const alertMediaInput = item.querySelector('.alert-media');
            const alert = {
                alertTitle: {
                    en: item.querySelector('.alert-title-en')?.value || '',
                    ko: item.querySelector('.alert-title-ko')?.value || '',
                    uz: item.querySelector('.alert-title-uz')?.value || ''
                },
                alertDescription: {
                    en: item.querySelector('.alert-description-en')?.value || '',
                    ko: item.querySelector('.alert-description-ko')?.value || '',
                    uz: item.querySelector('.alert-description-uz')?.value || ''
                },
                alertMedia: alertMediaInput?.value || ''
            };
            console.log(`[saveProject] Alert ${idx} media:`, alert.alertMedia);
            return alert;
        })
    };
    console.log('[saveProject] Project media:', project.media);
    console.log('[saveProject] Project alerts:', project.alerts);
    if (project.title.en && project.description.en) {
        if (editIndex) {
            const index = projects.findIndex(p => p.id == editIndex);
            projects[index] = project;
            console.log('[saveProject] Updated project at index:', index);
        } else {
            projects.push(project);
            console.log('[saveProject] Added new project:', project.id);
        }
        saveToLocalStorage();
        console.log('[saveProject] Saved to localStorage:', projects);
        clearProjectForm();
        renderProjectsAdmin();
    } else {
        alert('Please fill in all required fields (at least English).');
    }
}

function editProject(index) {
    const project = projects[index];
    document.getElementById('edit-index').value = project.id;
    document.getElementById('title-en').value = project.title.en;
    document.getElementById('title-ko').value = project.title.ko;
    document.getElementById('title-uz').value = project.title.uz;
    document.getElementById('description-en').value = project.description.en;
    document.getElementById('description-ko').value = project.description.ko;
    document.getElementById('description-uz').value = project.description.uz;
    document.getElementById('media').value = project.media || '';
    const alertsContainer = document.getElementById('alerts-container');
    alertsContainer.innerHTML = '';
    project.alerts.forEach((alert, i) => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert-item bg-gray-700 p-4 rounded-md alert-${alertIndex}`;
        alertDiv.innerHTML = `
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (English)</label>
                <input type="text" class="alert-title-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${alert.alertTitle.en}" required>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (Korean)</label>
                <input type="text" class="alert-title-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${alert.alertTitle.ko}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_title_label} (Uzbek)</label>
                <input type="text" class="alert-title-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${alert.alertTitle.uz}">
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (English)</label>
                <textarea class="alert-description-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" required>${alert.alertDescription.en}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (Korean)</label>
                <textarea class="alert-description-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${alert.alertDescription.ko}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_description_label} (Uzbek)</label>
                <textarea class="alert-description-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2">${alert.alertDescription.uz}</textarea>
            </div>
            <div class="mb-2">
                <label class="block text-gray-300">${translations[currentLanguage].alert_media_label}</label>
                <div class="flex space-x-2">
                    <input type="text" class="alert-media w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${alert.alertMedia || ''}" readonly>
                    <label for="alert-media-file-${alertIndex}" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 cursor-pointer">Choose File</label>
                    <input type="file" id="alert-media-file-${alertIndex}" class="hidden alert-media-file" accept="image/*,video/mp4,video/webm">
                </div>
            </div>
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Remove</button>
        `;
        alertsContainer.appendChild(alertDiv);
        const fileInput = alertDiv.querySelector(`#alert-media-file-${alertIndex}`);
        fileInput.addEventListener('change', (e) => handleFileUpload(e, alertDiv.querySelector('.alert-media')));
        alertIndex++;
    });
}

function deleteProject(index) {
    projects.splice(index, 1);
    renderProjectsAdmin();
    saveToLocalStorage();
}

function clearProjectForm() {
    console.log('[clearProjectForm] Called');
    const projectForm = document.getElementById('project-form');
    if (projectForm) projectForm.reset();
    const editIndex = document.getElementById('edit-index');
    const mediaInput = document.getElementById('media');
    const alertsContainer = document.getElementById('alerts-container');
    if (editIndex) editIndex.value = '';
    if (mediaInput) mediaInput.value = '';
    if (alertsContainer) alertsContainer.innerHTML = '';
    alertIndex = 0;
    const alertsContainerDiv = document.getElementById('alerts-container');
    const addAlertButton = document.getElementById('add-alert');
    if (alertsContainerDiv && addAlertButton) {
        alertsContainerDiv.style.display = 'none';
        addAlertButton.style.display = 'none';
        console.log('[clearProjectForm] Alert fields hidden');
    }
    const projectMediaFile = document.getElementById('project-media-file');
    if (projectMediaFile) {
        projectMediaFile.removeEventListener('change', handleFileUpload);
        projectMediaFile.addEventListener('change', (e) => handleFileUpload(e, document.getElementById('media')));
        console.log('[clearProjectForm] Project media file listener re-attached');
    }
}


function renderProjectsAdmin() {
    console.log('renderProjectsAdmin called');
    const container = document.getElementById('projects-container');
    if (container) {
        container.innerHTML = '';
        projects.forEach((project, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-800 p-6 rounded-xl shadow-lg';
            div.innerHTML = `
                <h3 class="text-xl font-semibold text-cyan-400">${project.title[currentLanguage] || project.title.en}</h3>
                <p class="text-gray-300 mt-2">${project.description[currentLanguage] || project.description.en}</p>
                ${project.media ? `
                    <p class="text-gray-300 mt-4">Media: ${project.media}</p>
                ` : ''}
                ${project.alerts.length ? `
                    <p class="text-gray-300 mt-4">${translations[currentLanguage].alerts_heading}:</p>
                    <ul class="list-disc list-inside text-gray-300">
                        ${project.alerts.map(alert => `
                            <li>
                                ${alert.alertTitle[currentLanguage] || alert.alertTitle.en}: ${alert.alertDescription[currentLanguage] || alert.alertDescription.en}
                                ${alert.alertMedia ? `<p>Alert Media: ${alert.alertMedia}</p>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                ` : `<p class="text-gray-300 mt-4">${translations[currentLanguage].no_alerts}</p>`}
                <div class="mt-4">
                    <button onclick="editProject(${index})" class="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-400 mr-2">Edit</button>
                    <button onclick="deleteProject(${index})" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Delete</button>
                </div>
            `;
            container.appendChild(div);
        });
    }
    // Ensure form remains visible
    const projectForm = document.getElementById('project-form');
    if (projectForm) {
        projectForm.style.display = 'block';
        console.log('Project form visibility:', projectForm.style.display);
    }
}

function renderProjects() {
    console.log('[renderProjects] Called with projects:', projects);
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error('[renderProjects] Error: projects-container not found');
        return;
    }
    container.innerHTML = '';
    projects.forEach((project, index) => {
        console.log(`[renderProjects] Rendering project ${project.id} with media:`, project.media);
        const media = typeof project.media === 'string' ? { name: project.media, data: '' } : (project.media || { name: '', data: '' });
        let mediaElement = '';
        if (media.name) {
            const extension = media.name.toLowerCase().split('.').pop();
            if (['gif', 'png', 'jpg', 'jpeg'].includes(extension)) {
                mediaElement = `<img src="${media.name}" alt="${media.name}" class="mt-4 max-w-full h-auto rounded-md">`;
            } else if (['mp4', 'avi'].includes(extension)) {
                mediaElement = `
                    <video controls class="mt-4 max-w-full h-auto rounded-md ">
                        <source src="${media.name}" type="video/${extension}">
                        Your browser does not support the video tag.
                    </video>`;
            } else {
                mediaElement = `<p class="text-gray-300 mt-4">Project Media: ${media.name} (Unsupported format)</p>`;
            }
        } else {
            mediaElement = `<p class="text-gray-300 mt-4">No Project Media</p>`;
        }
        const div = document.createElement('div');
        div.className = 'bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-cyan-400">${project.title[currentLanguage] || project.title.en}</h3>
            <p class="text-gray-300 mt-2">${project.description[currentLanguage] || project.description.en}</p>
            ${mediaElement}
            <p class="text-gray-300 mt-4">${project.alerts.length ? `${translations[currentLanguage].alerts_heading}: ${project.alerts.length}` : translations[currentLanguage].no_alerts}</p>
        `;
        div.addEventListener('click', () => openProjectModal(index));
        container.appendChild(div);
    });
}


function openProjectModal(index) {
    console.log('[openProjectModal] Called for index:', index);
    const project = projects[index];
    if (!project) {
        console.error('[openProjectModal] Error: Project not found at index:', index);
        return;
    }
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAlerts = document.getElementById('modal-alerts');

    if (!modal || !modalTitle || !modalAlerts) {
        console.error('[openProjectModal] Error: Modal elements missing:', { modal, modalTitle, modalAlerts });
        return;
    }

    console.log(`[openProjectModal] Project ${project.id} with alerts:`, project.alerts);
    modalTitle.textContent = project.title[currentLanguage] || project.title.en;
    modalAlerts.innerHTML = '';
    if (project.alerts.length) {
        project.alerts.forEach((alert, alertIndex) => {
            console.log(`[openProjectModal] Rendering alert ${alertIndex} with media:`, alert.alertMedia);
            let mediaElement = '';
            const media = typeof alert.alertMedia === 'string' ? alert.alertMedia : (alert.alertMedia?.name || '');
            if (media) {
                const extension = media.toLowerCase().split('.').pop();
                if (['gif', 'png', 'jpg', 'jpeg'].includes(extension)) {
                    mediaElement = `<img src="${media}" alt="${media}" class="mt-2 max-w-full h-auto rounded-md">`;
                } else if (['mp4', 'avi'].includes(extension)) {
                    mediaElement = `
                        <video controls class="mt-2 max-w-full h-auto rounded-md" autoplay="autoplay">
                            <source src="${media}" type="video/${extension}">
                            Your browser does not support the video tag.
                        </video>`;
                } else {
                    mediaElement = `<p class="text-gray-300 mt-2">Alert Media: ${media} (Unsupported format)</p>`;
                }
            } else {
                mediaElement = `<p class="text-gray-300 mt-2">No Alert Media</p>`;
            }
            const alertDiv = document.createElement('div');
            alertDiv.className = 'bg-gray-700 p-4 rounded-md';
            alertDiv.innerHTML = `
                
                ${mediaElement}
                <h3 class="text-lg font-semibold text-cyan-400">${alert.alertTitle[currentLanguage] || alert.alertTitle.en}</h3>
                <p class="text-gray-300 mt-2">${alert.alertDescription[currentLanguage] || alert.alertDescription.en}</p>
            `;
            modalAlerts.appendChild(alertDiv);
        });
    } else {
        modalAlerts.innerHTML = `<p class="text-gray-300">${translations[currentLanguage].no_alerts}</p>`;
    }
    modal.classList.remove('hidden');
    console.log('[openProjectModal] Modal opened for project:', project.id);
}


// About Admin
function saveAbout() {
    aboutData.text = {
        en: document.getElementById('aboutInput-en')?.value || '',
        ko: document.getElementById('aboutInput-ko')?.value || '',
        uz: document.getElementById('aboutInput-uz')?.value || ''
    };
    renderAboutAdmin();
    saveToLocalStorage();
}

function addInput(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const div = document.createElement('div');
        div.className = 'input-group flex space-x-2 mb-2';
        div.innerHTML = `
            <input type="text" class="input-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Enter text (English)">
            <input type="text" class="input-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Enter text (Korean)">
            <input type="text" class="input-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" placeholder="Enter text (Uzbek)">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Remove</button>
        `;
        container.appendChild(div);
    }
}

function saveList(containerId, type) {
    const container = document.getElementById(containerId);
    if (container) {
        const inputs = container.querySelectorAll('.input-group');
        aboutData[type] = Array.from(inputs).map(inputGroup => ({
            en: inputGroup.querySelector('.input-en')?.value || '',
            ko: inputGroup.querySelector('.input-ko')?.value || '',
            uz: inputGroup.querySelector('.input-uz')?.value || ''
        }));
        renderAboutAdmin();
        saveToLocalStorage();
    }
}

function renderAboutAdmin() {
    const aboutInputEn = document.getElementById('aboutInput-en');
    const aboutInputKo = document.getElementById('aboutInput-ko');
    const aboutInputUz = document.getElementById('aboutInput-uz');
    if (aboutInputEn && aboutInputKo && aboutInputUz) {
        aboutInputEn.value = aboutData.text.en;
        aboutInputKo.value = aboutData.text.ko;
        aboutInputUz.value = aboutData.text.uz;
    }

    const interestsInputs = document.getElementById('interestsInputs');
    if (interestsInputs) {
        interestsInputs.innerHTML = '';
        aboutData.interests.forEach(interest => {
            const div = document.createElement('div');
            div.className = 'input-group flex space-x-2 mb-2';
            div.innerHTML = `
                <input type="text" class="input-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${interest.en}">
                <input type="text" class="input-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${interest.ko}">
                <input type="text" class="input-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${interest.uz}">
                <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Remove</button>
            `;
            interestsInputs.appendChild(div);
        });
    }

    const hobbiesInputs = document.getElementById('hobbiesInputs');
    if (hobbiesInputs) {
        hobbiesInputs.innerHTML = '';
        aboutData.hobbies.forEach(hobby => {
            const div = document.createElement('div');
            div.className = 'input-group flex space-x-2 mb-2';
            div.innerHTML = `
                <input type="text" class="input-en w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${hobby.en}">
                <input type="text" class="input-ko w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${hobby.ko}">
                <input type="text" class="input-uz w-full bg-gray-600 border border-gray-500 rounded-md px-4 py-2" value="${hobby.uz}">
                <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400">Remove</button>
            `;
            hobbiesInputs.appendChild(div);
        });
    }
}

function rotateProverbs() {
    const proverbText = document.getElementById('proverb-text');
    if (!proverbText) return;

    let currentIndex = 0;
    const directions = ['top', 'left', 'right', 'bottom', 'center'];

    function displayProverb() {
        // Remove previous animation classes
        proverbText.classList.remove('animate-from-top', 'animate-from-left', 'animate-from-right', 'animate-from-bottom', 'animate-from-center');

        // Select random direction
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        proverbText.classList.add(`animate-from-${randomDirection}`);

        // Update text
        proverbText.textContent = proverbs[currentIndex][currentLanguage];
        void proverbText.offsetWidth; // Trigger reflow to restart animation

        currentIndex = (currentIndex + 1) % proverbs.length;
    }

    displayProverb(); // Display first proverb immediately
    setInterval(displayProverb, 6000); // Change every 6 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('[DOMContentLoaded] Initializing');
    loadFromLocalStorage();
    updateContent();

    const workForm = document.getElementById('work-form');
    if (workForm) workForm.addEventListener('submit', saveWorkExperience);

    const eduForm = document.getElementById('edu-form');
    if (eduForm) eduForm.addEventListener('submit', saveEducation);

    const pubForm = document.getElementById('pub-form');
    if (pubForm) pubForm.addEventListener('submit', savePublication);

    const certForm = document.getElementById('cert-form');
    if (certForm) certForm.addEventListener('submit', saveCertificate);

    const projectForm = document.getElementById('project-form');
    if (projectForm) {
        projectForm.addEventListener('submit', (e) => {
            console.log('[DOMContentLoaded] Project form submitted');
            saveProject(e);
        });
        const inputs = projectForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                const alertsContainer = document.getElementById('alerts-container');
                const addAlertButton = document.getElementById('add-alert');
                if (alertsContainer && addAlertButton) {
                    alertsContainer.style.display = 'block';
                    addAlertButton.style.display = 'block';
                    console.log('[DOMContentLoaded] Alert fields shown due to form interaction');
                }
            });
        });
        console.log('[DOMContentLoaded] Project form initialized');
    }

    const langForm = document.getElementById('lang-form');
    if (langForm) langForm.addEventListener('submit', addLanguage);

    const skillForm = document.getElementById('skill-form');
    if (skillForm) skillForm.addEventListener('submit', addSkill);

    const addAlertButton = document.getElementById('add-alert');
    if (addAlertButton) {
        addAlertButton.addEventListener('click', addAlertField);
        console.log('[DOMContentLoaded] Add alert button listener attached');
    }

    const projectMediaFile = document.getElementById('project-media-file');
    if (projectMediaFile) {
        projectMediaFile.addEventListener('change', (e) => handleFileUpload(e, document.getElementById('media')));
        console.log('[DOMContentLoaded] Project media file listener attached');
    }

    const closeModalButton = document.getElementById('close-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            const modal = document.getElementById('project-modal');
            if (modal) {
                modal.classList.add('hidden');
                console.log('[DOMContentLoaded] Modal closed');
            }
        });
    }


    if (document.getElementById('projects-container')) {
        renderProjects();
        console.log('[DOMContentLoaded] renderProjects called for projects.html');
    }

    if (document.getElementById('languages-list')) {
        renderLanguages();
        console.log('[DOMContentLoaded] renderLanguages called for index.html');
    }

    if (document.getElementById('skills-list')) {
        renderSkills();
        console.log('[DOMContentLoaded] renderSkills called for index.html');
    }
    if (document.getElementById('proverb-text')) {
        rotateProverbs();
        console.log('[DOMContentLoaded] rotateProverbs called for index.html');
    }
    
});