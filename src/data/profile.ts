// Saara content isi file mein hai. Kuch badalna ho to yahin badlo.

export const profile = {
  name: 'Akanksha Shukla',
  initials: 'AS',
  headline: 'Data Analyst & Data Scientist — Python · SQL · Machine Learning',
  tagline: 'Data Analyst | ML | BI',
  role: 'Data Analyst & Data Scientist',
  summary:
    'Mathematics graduate with a strong analytical foundation in Python, SQL and Machine Learning. I build end-to-end data science projects — from data warehouses and ETL pipelines to forecasting, recommendation systems and interactive BI dashboards.',
  email: 'akankshashukla8299@gmail.com',
  // Site deploy karne ke baad apna URL yahan daalna (SEO/OG tags ke liye)
  siteUrl: 'https://akanksha-shukla.netlify.app',
  links: {
    github: 'https://github.com/akankshashukla1930',
    linkedin: 'https://www.linkedin.com/in/akanksha-shukla-53731441a/',
    email: 'mailto:akankshashukla8299@gmail.com',
    resume: '/Akanksha-Shukla-Resume.pdf',
  },
  // Optional: photo public/ folder mein daalo aur path yahan likho, e.g. '/profile.webp'
  photo: '',
};

export const metrics = [
  { value: '95K+', label: 'Retail transactions modeled' },
  { value: '15.75%', label: 'RMSE improvement over baseline' },
  { value: '5', label: 'ML models in one auto-retraining pipeline' },
  { value: 'M.Sc.', label: 'Mathematics' },
];

export const strengths = [
  {
    icon: 'database',
    title: 'SQL & Data Engineering',
    copy: 'Star-schema warehouses, normalized schemas and analytical SQL — window functions, CTEs and joins — fed by Python ETL pipelines.',
  },
  {
    icon: 'sparkle',
    title: 'Machine Learning',
    copy: 'Forecasting, churn classification, segmentation, anomaly detection and recommender systems with XGBoost and scikit-learn.',
  },
  {
    icon: 'chart',
    title: 'BI & Visualization',
    copy: 'Interactive Streamlit dashboards, Power BI and Tableau reports, and automated Excel/PDF exports for stakeholders.',
  },
  {
    icon: 'sigma',
    title: 'Statistics & Math',
    copy: 'Hypothesis testing, probability, regression and elasticity modeling — grounded in an M.Sc. in Mathematics.',
  },
];

export type Project = {
  title: string;
  subtitle: string;
  image?: string;
  tags: string[];
  points: string[];
  live?: string;
  repo?: string;
};

// Live demo / GitHub repo ho to `live` aur `repo` add kar dena; screenshot ho to `image` (public/projects/ mein)
export const projects: Project[] = [
  {
    title: 'Retail Data Warehouse & ML Optimization Platform',
    subtitle: 'End-to-end warehousing + BI + ML pipeline',
    tags: ['Python', 'SQL', 'XGBoost', 'scikit-learn', 'Streamlit'],
    points: [
      'Built a star-schema SQLite warehouse processing 95,000+ retail transactions across 500 customers and 60 products.',
      'XGBoost revenue forecasting (under 20% MAPE) with lag, rolling-window and calendar features; log-log price-elasticity regression within 5% of ground truth.',
      'Leakage-free churn classifier, RFM + K-Means segmentation, and IsolationForest / rolling z-score anomaly detection.',
      'Streamlit BI dashboard with a live price-elasticity what-if simulator and one-click CSV ingestion that rebuilds the warehouse and retrains all 5 models.',
    ],
  },
  {
    title: 'Movie Recommendation System',
    subtitle: 'Collaborative filtering from scratch on MovieLens',
    tags: ['Python', 'NumPy', 'scikit-learn', 'Streamlit', 'Pytest'],
    points: [
      'Low-rank Matrix Factorization (SGD collaborative filtering) on 100,836 ratings from 610 users across 9,742 movies.',
      '15.75% RMSE improvement (0.8788 vs 1.0432 baseline) and MAE of 0.6724 via user/item bias modeling.',
      'Modular pipeline across 7 Python modules, validated with Pytest unit tests.',
      'Deployed a Streamlit app for real-time, personalized unseen-movie recommendations.',
    ],
  },
  {
    title: 'Sales Analytics Pipeline',
    subtitle: 'SQL analytics + automated Excel reporting',
    tags: ['Python', 'SQL', 'pandas', 'Excel'],
    points: [
      'Normalized SQLite schema with analytical SQL (window functions, CTEs, joins) for RFM segmentation and regional profit analysis across 8,000+ orders.',
      'Python ETL pipeline that auto-generates a multi-sheet Excel dashboard with embedded charts (openpyxl).',
      'Automated churn-risk flagging for customers inactive 180+ days, replacing manual tracking with a repeatable query.',
    ],
  },
];

export const skills = [
  { title: 'Languages', icon: 'code', items: ['Python', 'SQL'] },
  { title: 'Libraries', icon: 'layers', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'ML & Apps', icon: 'sparkle', items: ['scikit-learn', 'XGBoost', 'Streamlit', 'Pytest'] },
  { title: 'BI Tools', icon: 'chart', items: ['Excel', 'Power BI', 'Tableau'] },
  {
    title: 'Concepts',
    icon: 'sigma',
    items: ['Window Functions', 'Hypothesis Testing', 'Probability', 'Classification', 'Regression', 'Clustering'],
  },
];

export const education = [
  {
    degree: 'M.Sc. in Mathematics',
    school: 'Siddharth University, Kapilvastu, Siddharth Nagar',
    date: '2023 – 2025',
    score: '',
  },
  {
    degree: 'B.Sc.',
    school: 'Siddharth University, Kapilvastu, Siddharth Nagar',
    date: '2020 – 2023',
    score: '',
  },
];

// Skill pill icons: short label + brand color
export const techIcons: Record<string, { label: string; color: string }> = {
  Python: { label: 'PY', color: '#3776ab' },
  SQL: { label: 'SQL', color: '#0055ff' },
  Pandas: { label: 'PD', color: '#150458' },
  NumPy: { label: 'NP', color: '#4dabcf' },
  Matplotlib: { label: 'MPL', color: '#11557c' },
  Seaborn: { label: 'SNS', color: '#4c72b0' },
  'scikit-learn': { label: 'SK', color: '#f7931e' },
  XGBoost: { label: 'XGB', color: '#1a1a1a' },
  Streamlit: { label: 'ST', color: '#ff4b4b' },
  Pytest: { label: 'PT', color: '#0a9edc' },
  Excel: { label: 'XL', color: '#217346' },
  'Power BI': { label: 'BI', color: '#f2c811' },
  Tableau: { label: 'TB', color: '#e97627' },
  'Window Functions': { label: 'WF', color: '#8b5cf6' },
  'Hypothesis Testing': { label: 'HT', color: '#ec4899' },
  Probability: { label: 'P', color: '#14b8a6' },
  Classification: { label: 'CL', color: '#f59e0b' },
  Regression: { label: 'RG', color: '#10b981' },
  Clustering: { label: 'KM', color: '#6366f1' },
};
