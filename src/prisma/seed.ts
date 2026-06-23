import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const calibrationPrompts = [
  // --- FRIENDS ICEBREAKERS ---
  { text: "What is a massive 'red flag' in a person that you actually find highly attractive?", category: "Icebreakers", tags: ['toxic-dating', 'confession', 'spicy'] },
  { text: "What is a common piece of advice that is actually complete garbage?", category: "Icebreakers", tags: ['cynical', 'hot-take', 'debate'] },
  { text: "What is a normal human behavior that immediately makes you lose respect for someone?", category: "Icebreakers", tags: ['petty-judgment', 'social-rules', 'honesty'] },

  // --- FRIENDS MOST LIKELY ---
  { text: "Who is most likely to seamlessly lie their way into a VIP section and leave the rest of us outside?", category: "Most Likely", tags: ['chaotic', 'social-manipulation', 'funny'] },
  { text: "Who is most likely to date an absolutely terrible person just because they think they can 'fix' them?", category: "Most Likely", tags: ['savior-complex', 'toxic-dating', 'roast'] },
  { text: "Who is most likely to ruin their own life just out of pure boredom?", category: "Most Likely", tags: ['self-sabotage', 'unhinged', 'funny'] },

  // --- FRIENDS WHAT IFS ---
  { text: "If you had a button that gave you $1 million but permanently ruined the life of someone you went to high school with, how many times do you press it?", category: "What Ifs", tags: ['morally-grey', 'petty-grudges', 'hypothetical'] },
  { text: "If you were on trial for a crime you actually committed, which friend in this room are you trusting to be your lawyer?", category: "What Ifs", tags: ['trust', 'chaotic', 'friendship-dynamics'] },
  
  // --- FRIENDS NOSTALGIA ---
  { text: "What is the most undeniably toxic thing you did in your first real relationship?", category: "Nostalgia", tags: ['cringe', 'past-mistakes', 'growth'] },
  { text: "What is the most elaborate, unhinged lie you consistently told your parents in high school?", category: "Nostalgia", tags: ['rebellion', 'family-secrets', 'teenage-angst'] },

  // --- FRIENDS CONFESSIONS ---
  { text: "What is a terrible trait you have that you secretly judge other people for having?", category: "Confessions", tags: ['hypocrisy', 'self-awareness', 'vulnerability'] },
  { text: "What is a boundary you pretend to be strict about, but you constantly let people cross?", category: "Confessions", tags: ['people-pleasing', 'insecurity', 'deep-talk'] },

  // --- FRIENDS DEEP TALK ---
  { text: "Are you actually a good person, or are you just terrified of people being mad at you?", category: "Deep Talk", tags: ['existential', 'identity-crisis', 'validation'] },
  { text: "What is a painful truth about yourself that took you way too long to finally accept?", category: "Deep Talk", tags: ['personal-growth', 'heavy-vulnerability', 'reflection'] },
  { text: "What part of your personality do you fake the most for the sake of other people?", category: "Deep Talk", tags: ['imposter-syndrome', 'social-mask', 'deep-talk'] },

  // --- LOVERS WARM UP / SPICY ---
  { text: "What is a weird, highly specific habit of mine that you secretly love?", category: "Warm Up", tags: ['affection', 'observation', 'flirty'] },
  { text: "What was the exact moment you first felt physical tension between us?", category: "Spicy", tags: ['origin-story', 'romance', 'physical-touch'] },
  { text: "What is a completely non-physical thing I do that turns you on?", category: "Spicy", tags: ['intimacy', 'flirty', 'attraction'] },

  // --- LOVERS CONNECTION / DEEP TALK ---
  { text: "In what highly specific way do you think we balance each other out perfectly?", category: "Connection", tags: ['teamwork', 'partnership', 'appreciation'] },
  { text: "What is a fear you have about our future that you rarely say out loud?", category: "Deep Talk", tags: ['future-anxiety', 'heavy-vulnerability', 'commitment'] },
  { text: "How has your actual definition of love changed since you met me?", category: "Deep Talk", tags: ['growth', 'romance', 'existential'] }
];

async function main() {
  console.log('🌱 Seeding Hezi Calibration Prompts...');

  const count = await prisma.questionPrompt.count();
  if (count < 20) {
    console.log(`⚠️ Database looks empty. Seeding highly-tagged calibration prompts...`);
    for (const prompt of calibrationPrompts) {
      const exists = await prisma.questionPrompt.findFirst({ where: { text: prompt.text } });
      if (!exists) {
        await prisma.questionPrompt.create({ data: prompt });
      }
    }
    console.log(`✅ Seeded prompts successfully! Game is ready for calibration.`);
  } else {
    console.log(`ℹ️ ${count} prompts already in DB — skipping seed.`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });