import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const calibrationPrompts = [
  // ==========================================
  // 👯‍♂️ FRIENDS VIBE (Gamemode: friendship)
  // ==========================================
  // Icebreakers
  { gamemode: "friendship", category: "Icebreakers", text: "What's one specific thing — a word, an order, a habit — someone could do on a first date that's an instant, harmless dealbreaker for you?", tags: ['modern-dating', 'red-flags', 'funny'] },
  { gamemode: "friendship", category: "Icebreakers", text: "What's a \\"rule\\" you secretly hold friends to that you've never actually said out loud?", tags: ['friendship-dynamics', 'hot-take', 'social-rules'] },
  { gamemode: "friendship", category: "Icebreakers", text: "If you had to start a completely fake rumor and get everyone in your hometown to believe it, what rumor are you starting?", tags: ['absurdity', 'social-manipulation', 'funny'] },
  { gamemode: "friendship", category: "Icebreakers", text: "You're getting robbed on the street, but you suddenly realize you went to high school with the robber. How does that conversation go?", tags: ['hypothetical', 'funny', 'social-panic'] },
  { gamemode: "friendship", category: "Icebreakers", text: "If someone handed you the aux cord at a party right now, what song are you playing?", tags: ['music', 'social-dynamics', 'fun'] },
  { gamemode: "friendship", category: "Icebreakers", text: "What's the most ridiculous thing you've done just to get someone you had a crush on to notice you?", tags: ['crush', 'funny', 'social-panic'] },
  { gamemode: "friendship", category: "Icebreakers", text: "What's a really popular movie or show that you just don't like?", tags: ['pop-culture', 'hot-take', 'controversial'] },

  // Most Likely
  { gamemode: "friendship", category: "Most Likely", text: "Who is most likely to defend their partner's terrible behavior just because they're too scared to be single?", tags: ['savior-complex', 'toxic-dating', 'roast'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who would fall for a pyramid scheme simply because the person pitching it gave them a few compliments?", tags: ['gullible', 'social', 'funny'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who is most likely to get into a screaming match with a stranger over a parking spot?", tags: ['chaotic', 'angry', 'roast'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who is most likely to fake their own death just to avoid replying to a stressful group chat?", tags: ['introvert', 'funny', 'social-panic'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who gives the most confident, yet absolutely destructive, life advice?", tags: ['sabotage', 'funny', 'friendship-dynamics'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who is the most aggressive sore loser when they get caught cheating at a game?", tags: ['petty', 'roast', 'chaotic'] },
  { gamemode: "friendship", category: "Most Likely", text: "Who is most likely to accidentally like their ex's photo from three years ago at 2 AM?", tags: ['digital-life', 'cringe', 'funny'] },

  // What Ifs
  { gamemode: "friendship", category: "What Ifs", text: "You find a briefcase with $100,000, but keeping it means your best friend gets fired from their job. Are you taking the money?", tags: ['morally-grey', 'friendship-dynamics', 'hypothetical'] },
  { gamemode: "friendship", category: "What Ifs", text: "You have to make one phone call from jail to get bailed out. Which friend are you calling, and how does that call go?", tags: ['trust', 'chaotic', 'friendship-dynamics'] },
  { gamemode: "friendship", category: "What Ifs", text: "You have to permanently swap lives with a friend tomorrow. Who are you picking, and what's the first thing you change about their life?", tags: ['empathy', 'planning', 'fun'] },
  { gamemode: "friendship", category: "What Ifs", text: "Someone offers you a million dollars, but they get to project your entire search history onto a billboard. Are you taking the deal?", tags: ['privacy', 'digital-life', 'funny'] },
  { gamemode: "friendship", category: "What Ifs", text: "You are forced to live with the last person you texted for the rest of your life. How long until one of you snaps?", tags: ['modern-dating', 'social-panic', 'funny'] },
  { gamemode: "friendship", category: "What Ifs", text: "If we were all stranded on a deserted island together, who would naturally become the leader, and who would we sacrifice first?", tags: ['friendship-dynamics', 'survival', 'roast'] },
  { gamemode: "friendship", category: "What Ifs", text: "If you could rewind and erase one conversation you've had in the last year, which one are you erasing?", tags: ['regret', 'social-panic', 'relatable'] },

  // Nostalgia 
  { gamemode: "friendship", category: "Nostalgia", text: "What's a core memory with a friend that instantly makes you laugh every time you think about it?", tags: ['core-memory', 'friendship', 'joy'] },
  { gamemode: "friendship", category: "Nostalgia", text: "What was the wildest night out you've ever had where almost nothing went according to plan?", tags: ['wild-night', 'chaos', 'friendship'] },
  { gamemode: "friendship", category: "Nostalgia", text: "Which inside joke in your friend group has gone on for way too long but is still hilarious?", tags: ['inside-jokes', 'friendship-dynamics', 'funny'] },
  { gamemode: "friendship", category: "Nostalgia", text: "Looking back, what's a ridiculous phase your friend group went through together?", tags: ['cringe', 'shared-history', 'fun'] },
  { gamemode: "friendship", category: "Nostalgia", text: "What's a friendship from your past that naturally faded away, but you still look back on fondly?", tags: ['growth', 'reflection', 'sentimentality'] },
  { gamemode: "friendship", category: "Nostalgia", text: "What's the funniest piece of drama that happened in your high school or college friend group?", tags: ['gossip', 'funny', 'drama'] },
  { gamemode: "friendship", category: "Nostalgia", text: "What was a seemingly boring, regular day with your friends that ended up being incredibly memorable?", tags: ['comfort', 'sentimentality', 'friendship'] },

  // Confessions 
  { gamemode: "friendship", category: "Confessions", text: "Whose life do you casually keep tabs on just because it makes you feel better about your own?", tags: ['social-media', 'spite', 'relatable'] },
  { gamemode: "friendship", category: "Confessions", text: "What's a wildly expensive purchase you made that you instantly regretted but pretended to love?", tags: ['regret', 'funny', 'relatable'] },
  { gamemode: "friendship", category: "Confessions", text: "What's the most ridiculous, petty lie you've ever told to get out of hanging out with someone?", tags: ['social-panic', 'lies', 'funny'] },
  { gamemode: "friendship", category: "Confessions", text: "What's a highly specific, petty revenge you've taken on someone without them ever finding out?", tags: ['petty', 'secrets', 'funny'] },
  { gamemode: "friendship", category: "Confessions", text: "What's a relationship or friendship you stayed in way longer than you should have, just because it was comfortable?", tags: ['comfort-zone', 'growth', 'vulnerability'] },
  { gamemode: "friendship", category: "Confessions", text: "What's the most ridiculous, minor reason you've ever suddenly stopped talking to someone?", tags: ['petty', 'social-rules', 'honesty'] },
  { gamemode: "friendship", category: "Confessions", text: "What's a secret you know about someone else that you genuinely wish you didn't know?", tags: ['secrets', 'gossip', 'high-stakes'] },

  // Deep Talk 
  { gamemode: "friendship", category: "Deep Talk", text: "What's a belief you held strongly a few years ago that you've quietly abandoned?", tags: ['growth', 'worldview', 'reflection'] },
  { gamemode: "friendship", category: "Deep Talk", text: "Do you think you're actually a good friend, or do you just know how to say what people want to hear — or both?", tags: ['self-awareness', 'validation', 'friendship'] },
  { gamemode: "friendship", category: "Deep Talk", text: "When was the last time you felt incredibly proud of yourself for something nobody else noticed?", tags: ['pride', 'vulnerability', 'uplifting'] },
  { gamemode: "friendship", category: "Deep Talk", text: "What's a goal or dream you have right now that you're almost too scared to talk about?", tags: ['dreams', 'vulnerability', 'future'] },
  { gamemode: "friendship", category: "Deep Talk", text: "If everyone you ever dated sat down together, what's the one complaint they'd all agree on?", tags: ['self-awareness', 'dating', 'funny'] },
  { gamemode: "friendship", category: "Deep Talk", text: "What's a boundary you've set recently that's made a real difference for you?", tags: ['growth', 'mental-health', 'positivity'] },
  { gamemode: "friendship", category: "Deep Talk", text: "What's the most valuable lesson a past friendship or relationship has taught you about what you actually need?", tags: ['growth', 'reflection', 'wisdom'] },


  // ==========================================
  // ❤️ LOVERS VIBE (Gamemode: relationship)
  // ==========================================
  // Warm Up
  { gamemode: "relationship", category: "Warm Up", text: "What's a weird, highly specific habit of mine that you secretly love?", tags: ['affection', 'observation', 'flirty'] },
  { gamemode: "relationship", category: "Warm Up", text: "If we could teleport to any restaurant right now, where are we eating?", tags: ['casual', 'food', 'comfort'] },
  { gamemode: "relationship", category: "Warm Up", text: "What's an outfit of mine that you love seeing me in?", tags: ['attraction', 'compliment', 'flirty'] },
  { gamemode: "relationship", category: "Warm Up", text: "What's something I do innocently that you find really attractive?", tags: ['attraction', 'observation', 'flirty'] },
  { gamemode: "relationship", category: "Warm Up", text: "If you had to describe my 'vibe' to a stranger in three words, what are they?", tags: ['perception', 'identity', 'casual'] },
  { gamemode: "relationship", category: "Warm Up", text: "What's the most attractive thing I wear to bed?", tags: ['attraction', 'flirty', 'intimacy'] },
  { gamemode: "relationship", category: "Warm Up", text: "What's a small, everyday thing I do that makes you smile?", tags: ['affection', 'observation', 'comfort'] },

  // Spicy
  { gamemode: "relationship", category: "Spicy", text: "What was the exact moment you first felt physical tension between us?", tags: ['origin-story', 'romance', 'physical-touch'] },
  { gamemode: "relationship", category: "Spicy", text: "What's a non-physical thing I do that turns you on?", tags: ['intimacy', 'flirty', 'attraction'] },
  { gamemode: "relationship", category: "Spicy", text: "Where's your favorite place to be touched or kissed?", tags: ['physical-touch', 'intimacy', 'romance'] },
  { gamemode: "relationship", category: "Spicy", text: "What's a fantasy or scenario you've thought about us but never brought up?", tags: ['secrets', 'intimacy', 'vulnerability'] },
  { gamemode: "relationship", category: "Spicy", text: "What's the most inappropriately timed moment you've been turned on by me?", tags: ['funny', 'attraction', 'secrets'] },
  { gamemode: "relationship", category: "Spicy", text: "What was your favorite physical moment from our first month together?", tags: ['memory', 'physical-touch', 'romance'] },
  { gamemode: "relationship", category: "Spicy", text: "What's a boundary in the bedroom you've always been curious about pushing?", tags: ['intimacy', 'vulnerability', 'flirty'] },

  // What Ifs
  { gamemode: "relationship", category: "What Ifs", text: "If we had to fake our deaths and move to another country, what would our new jobs be?", tags: ['escapism', 'teamwork', 'funny'] },
  { gamemode: "relationship", category: "What Ifs", text: "If we were dropped into a horror movie, how far do we make it, and who dies first?", tags: ['pop-culture', 'roast', 'hypothetical'] },
  { gamemode: "relationship", category: "What Ifs", text: "If we had to drop everything and open a business together tomorrow, what would it be?", tags: ['dreams', 'partnership', 'future'] },
  { gamemode: "relationship", category: "What Ifs", text: "If you woke up tomorrow in my body, what's the very first thing you'd do?", tags: ['empathy', 'funny', 'hypothetical'] },
  { gamemode: "relationship", category: "What Ifs", text: "If we could erase one argument from our history, which one goes?", tags: ['conflict', 'growth', 'vulnerability'] },
  { gamemode: "relationship", category: "What Ifs", text: "If we had to survive a zombie apocalypse, what would be our biggest downfall as a team?", tags: ['survival', 'partnership', 'roast'] },
  { gamemode: "relationship", category: "What Ifs", text: "If we were forced to go on reality TV, which show would destroy our relationship the fastest?", tags: ['pop-culture', 'funny', 'conflict'] },

  // Nostalgia
  { gamemode: "relationship", category: "Nostalgia", text: "What was your exact first thought the very first time you saw me?", tags: ['origin-story', 'romance', 'memory'] },
  { gamemode: "relationship", category: "Nostalgia", text: "What's a small, random moment from early in our relationship that you still think about?", tags: ['sentimentality', 'memory', 'affection'] },
  { gamemode: "relationship", category: "Nostalgia", text: "What was the most nerve-wracking part of our first few dates for you?", tags: ['anxiety', 'origin-story', 'vulnerability'] },
  { gamemode: "relationship", category: "Nostalgia", text: "At what exact moment did you realize you were falling in love with me?", tags: ['romance', 'heavy', 'memory'] },
  { gamemode: "relationship", category: "Nostalgia", text: "What's a photo of us that immediately brings back a wave of emotion?", tags: ['sentimentality', 'memory', 'romance'] },
  { gamemode: "relationship", category: "Nostalgia", text: "What's the exact moment you realized I was genuinely interested in you?", tags: ['origin-story', 'validation', 'memory'] },
  { gamemode: "relationship", category: "Nostalgia", text: "What's an assumption you made about me on our first date that turned out completely wrong?", tags: ['perception', 'funny', 'origin-story'] },

  // Connection
  { gamemode: "relationship", category: "Connection", text: "What's one very specific way you think we balance each other out?", tags: ['teamwork', 'partnership', 'appreciation'] },
  { gamemode: "relationship", category: "Connection", text: "What's something I do to show love that you think I don't realize I'm doing?", tags: ['observation', 'vulnerability', 'intimacy'] },
  { gamemode: "relationship", category: "Connection", text: "When do you feel the most secure and safe with me?", tags: ['security', 'heavy-vulnerability', 'affection'] },
  { gamemode: "relationship", category: "Connection", text: "What's a trait of yours that you feel comes out best when you're with me?", tags: ['growth', 'partnership', 'reflection'] },
  { gamemode: "relationship", category: "Connection", text: "What's a compliment you secretly crave from me but don't ask for?", tags: ['validation', 'insecurity', 'deep-talk'] },
  { gamemode: "relationship", category: "Connection", text: "When was the exact moment you felt the most deeply understood by me?", tags: ['intimacy', 'heavy-vulnerability', 'affection'] },
  { gamemode: "relationship", category: "Connection", text: "What's a part of my personality you feel like you get to see that no one else does?", tags: ['security', 'identity', 'partnership'] },

  // Deep Talk
  { gamemode: "relationship", category: "Deep Talk", text: "What's a fear you have about our future that you rarely say out loud?", tags: ['future-anxiety', 'heavy-vulnerability', 'commitment'] },
  { gamemode: "relationship", category: "Deep Talk", text: "How has your definition of love changed since you met me?", tags: ['growth', 'romance', 'existential'] },
  { gamemode: "relationship", category: "Deep Talk", text: "What's an insecurity of yours that you think affects our relationship the most?", tags: ['insecurity', 'heavy-vulnerability', 'conflict'] },
  { gamemode: "relationship", category: "Deep Talk", text: "What's one way you think we need to grow the most as a couple?", tags: ['growth', 'partnership', 'reflection'] },
  { gamemode: "relationship", category: "Deep Talk", text: "What's something you feel you compromise on, but have never complained about?", tags: ['boundaries', 'honesty', 'heavy'] },
  { gamemode: "relationship", category: "Deep Talk", text: "What's a sacrifice you feel you've made for this relationship that we don't talk about?", tags: ['sacrifice', 'heavy-vulnerability', 'honesty'] },
  { gamemode: "relationship", category: "Deep Talk", text: "Do you think we handle conflict in a healthy way, or do we just sweep things under the rug?", tags: ['conflict', 'growth', 'communication'] },


  // ==========================================
  // 🏡 FAMILY VIBE (Gamemode: family)
  // ==========================================
  // Icebreakers
  { gamemode: "family", category: "Icebreakers", text: "If our family was a reality TV show, what would the title be?", tags: ['funny', 'meta', 'family-dynamics'] },
  { gamemode: "family", category: "Icebreakers", text: "Who in the family has the worst driving skills?", tags: ['roast', 'lighthearted', 'debate'] },
  { gamemode: "family", category: "Icebreakers", text: "What's a food that instantly tastes like 'home' to you?", tags: ['comfort', 'food', 'sentimentality'] },
  { gamemode: "family", category: "Icebreakers", text: "Which family member is the hardest to buy a gift for, and why?", tags: ['funny', 'family-dynamics', 'observation'] },
  { gamemode: "family", category: "Icebreakers", text: "If our family had a warning label, what would it say?", tags: ['roast', 'self-awareness', 'funny'] },
  { gamemode: "family", category: "Icebreakers", text: "What's a family recipe that must be protected at all costs?", tags: ['food', 'sentimentality', 'culture'] },
  { gamemode: "family", category: "Icebreakers", text: "Who takes the longest to get ready for a family event?", tags: ['roast', 'funny', 'family-dynamics'] },

  // Most Likely
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to bring up a 10-year-old argument at Thanksgiving dinner?", tags: ['petty-grudges', 'funny', 'family-drama'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to keep a massive secret from everyone else?", tags: ['secrets', 'trust', 'mystery'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to give unsolicited but surprisingly accurate advice?", tags: ['advice', 'family-dynamics', 'roast'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to survive in the wilderness, and who dies day one?", tags: ['survival', 'funny', 'hypothetical'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to accidentally ruin a surprise party?", tags: ['clumsy', 'funny', 'family-dynamics'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to successfully fake their way into a job they know nothing about?", tags: ['social-manipulation', 'funny', 'skills'] },
  { gamemode: "family", category: "Most Likely", text: "Who is most likely to become a hoarder in their old age?", tags: ['roast', 'habits', 'funny'] },

  // What Ifs
  { gamemode: "family", category: "What Ifs", text: "If our family had to win a talent show to save the world, what's our act?", tags: ['hypothetical', 'teamwork', 'funny'] },
  { gamemode: "family", category: "What Ifs", text: "If money was no object, what kind of ridiculous family compound would we build?", tags: ['dreams', 'lifestyle', 'casual'] },
  { gamemode: "family", category: "What Ifs", text: "If you could witness any moment from family history before you were born, what would it be?", tags: ['history', 'sentimentality', 'memory'] },
  { gamemode: "family", category: "What Ifs", text: "If we had to move to a different country together, where do we go?", tags: ['escapism', 'teamwork', 'hypothetical'] },
  { gamemode: "family", category: "What Ifs", text: "If someone wrote a book about our family, what chapter would people skip?", tags: ['meta', 'funny', 'roast'] },
  { gamemode: "family", category: "What Ifs", text: "If our family was forced to rob a bank, who's driving the getaway car?", tags: ['chaos', 'teamwork', 'funny'] },
  { gamemode: "family", category: "What Ifs", text: "If everyone in the family swapped bodies for a day, who would ruin whose life the fastest?", tags: ['empathy', 'funny', 'drastic'] },

  // Nostalgia
  { gamemode: "family", category: "Nostalgia", text: "Which family vacation was a disaster at the time, but is hilarious now?", tags: ['memory', 'chaos', 'shared-history'] },
  { gamemode: "family", category: "Nostalgia", text: "What was the strictest or weirdest rule we had in our house growing up?", tags: ['childhood', 'rebellion', 'strict-parents'] },
  { gamemode: "family", category: "Nostalgia", text: "What's the most ridiculous thing you genuinely believed as a kid?", tags: ['funny', 'childhood', 'memory'] },
  { gamemode: "family", category: "Nostalgia", text: "What's a weird tradition we have that you didn't realize was weird until you grew up?", tags: ['culture', 'growing-up', 'family-dynamics'] },
  { gamemode: "family", category: "Nostalgia", text: "What's your favorite memory of us just sitting around doing nothing?", tags: ['comfort', 'sentimentality', 'affection'] },
  { gamemode: "family", category: "Nostalgia", text: "What was the most iconic meltdown someone had during a holiday?", tags: ['drama', 'funny', 'memory'] },
  { gamemode: "family", category: "Nostalgia", text: "What's a home-cooked meal that instantly takes you back to childhood?", tags: ['food', 'sentimentality', 'childhood'] },

  // Perspectives
  { gamemode: "family", category: "Perspectives", text: "What's a slang word or trend today that makes zero sense to you?", tags: ['generational-gap', 'funny', 'pop-culture'] },
  { gamemode: "family", category: "Perspectives", text: "What did you get away with as a teen that teens today could never do?", tags: ['nostalgia', 'rebellion', 'generational-gap'] },
  { gamemode: "family", category: "Perspectives", text: "What's something you think the younger generation actually got right?", tags: ['respect', 'growth', 'generational-gap'] },
  { gamemode: "family", category: "Perspectives", text: "What's a parenting choice you experienced that you'd never repeat?", tags: ['parenting', 'vulnerability', 'boundaries'] },
  { gamemode: "family", category: "Perspectives", text: "What's the hardest part about the age you're at right now?", tags: ['aging', 'vulnerability', 'existential'] },
  { gamemode: "family", category: "Perspectives", text: "What's a piece of technology you genuinely miss using?", tags: ['nostalgia', 'pop-culture', 'generational-gap'] },
  { gamemode: "family", category: "Perspectives", text: "What's something you think kids today are missing out on?", tags: ['childhood', 'nostalgia', 'generational-gap'] },

  // Deep Talk
  { gamemode: "family", category: "Deep Talk", text: "What's a life lesson you had to learn the hard way so I wouldn't have to?", tags: ['wisdom', 'vulnerability', 'parenting'] },
  { gamemode: "family", category: "Deep Talk", text: "What's a piece of advice you ignored when you were younger, but now realize was right?", tags: ['reflection', 'growth', 'existential'] },
  { gamemode: "family", category: "Deep Talk", text: "What's something you wish you'd started doing much earlier in your life?", tags: ['regret', 'wisdom', 'reflection'] },
  { gamemode: "family", category: "Deep Talk", text: "What's an apology you feel you owe to a family member, but never gave?", tags: ['guilt', 'heavy-vulnerability', 'family-dynamics'] },
  { gamemode: "family", category: "Deep Talk", text: "What do you hope this family is remembered for in 100 years?", tags: ['legacy', 'sentimentality', 'existential'] },
  { gamemode: "family", category: "Deep Talk", text: "What's a generational curse in our family you hope stops with you?", tags: ['family-trauma', 'heavy', 'growth'] },
  { gamemode: "family", category: "Deep Talk", text: "What's something you never understood about your parents until you grew up?", tags: ['empathy', 'growing-up', 'reflection'] }
];

async function main() {
  console.log('🌱 Seeding Hezi Full Calibration Deck (126 Questions)...');

  const count = await prisma.questionPrompt.count();
  if (count < 126) {
    console.log(`⚠️ Database expansion required. Pushing full calibration deck...`);
    for (const prompt of calibrationPrompts) {
      const exists = await prisma.questionPrompt.findFirst({ where: { text: prompt.text } });
      if (!exists) {
        await prisma.questionPrompt.create({ data: prompt });
      }
    }
    console.log(`✅ Seeded all 126 prompts successfully! System is perfectly calibrated.`);
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