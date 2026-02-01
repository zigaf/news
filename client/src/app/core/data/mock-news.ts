import { Article } from '../types/news.types';
import { CATEGORIES } from '../types/news.types';

function article(
  id: string,
  title: string,
  excerpt: string,
  categorySlug: string,
  imageUrl: string | null,
  daysAgo: number
): Article {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const cat = CATEGORIES.find(c => c.slug === categorySlug) ?? CATEGORIES[0];
  return {
    id,
    title,
    excerpt,
    category: cat,
    imageUrl,
    publishedAt: d,
    slug: `article-${id}`,
  };
}

export const MOCK_ARTICLES: Article[] = [
  article(
    '1',
    'У Сумах відкрили оновлений парк імені Ковпака',
    'Після реконструкції парк запрацював з новими доріжками, дитячим майданчиком та освітленням. Мешканці вже оцінюють зміни.',
    'podii',
    null,
    0
  ),
  article(
    '2',
    'Сумський університет підписав угоду з європейським вузом',
    'СумДУ розширює міжнародну співпрацю: заплановані обміни студентами та спільні дослідницькі проєкти.',
    'suspilnist',
    null,
    1
  ),
  article(
    '3',
    'Як зміниться рух транспорту на вул. Петропавлівській з понеділка',
    'Дорожні роботи триватимуть два тижні. Рекомендовані объїзні маршрути для водіїв та пасажирів громадського транспорту.',
    'podii',
    null,
    1
  ),
  article(
    '4',
    'Книжковий ярмарок у центрі міста: програма та учасники',
    'У вихідні на майдані Незалежності — книжковий ярмарок з презентаціями, автограф-сесіями та майстер-класами для дітей.',
    'kultura',
    null,
    2
  ),
  article(
    '5',
    'Сумська «Суми» перемогла в домашньому матчі',
    'Футбольний клуб здобув перемогу з рахунком 2:1. Наступний матч — на виїзді.',
    'sport',
    null,
    2
  ),
  article(
    '6',
    'Бізнес-форум у Сумах: підсумки та домовленості',
    'Понад 50 підприємств області взяли участь у форумі. Обговорювали експорт, логістику та підтримку малого бізнесу.',
    'biznes',
    null,
    3
  ),
];
