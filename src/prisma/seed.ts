import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const calibrationPrompts = [
  // ==========================================
  // 👯‍♂️ FRIENDS VIBE (42 Questions - Chill, Social, Fun, Not Depressing)
  // ==========================================
  // Icebreakers
  { text: "What is a highly specific, harmless thing someone can do on a first date that guarantees you will ghost them?", category: "Icebreakers", tags: ['modern-dating', 'red-flags', 'funny'] },
  { text: "What is a completely harmless but controversial opinion you have about how friendships should work?", category: "Icebreakers", tags: ['friendship-dynamics', 'hot-take', 'social-rules'] },
  { text: "If you had to start a completely fake rumor and get everyone in your hometown to believe it, what rumor are you starting?", category: "Icebreakers", tags: ['absurdity', 'social-manipulation', 'funny'] },
  { text: "You’re getting robbed on the street, but you suddenly realize you went to high school with the robber. How exactly does that conversation go?", category: "Icebreakers", tags: ['hypothetical', 'funny', 'social-panic'] },
  { text: "If someone handed you the aux cord at a party right now, what song are you playing to completely change the vibe?", category: "Icebreakers", tags: ['music', 'social-dynamics', 'fun'] },
  { text: "What is the most embarrassing length you’ve gone to just to 'casually' bump into someone you had a crush on?", category: "Icebreakers", tags: ['crush', 'funny', 'social-panic'] },
  { text: "What is a universally beloved movie or TV show that you secretly think is absolute garbage?", category: "Icebreakers", tags: ['pop-culture', 'hot-take', 'controversial'] },

  // Most Likely
  { text: "Who in this room is most likely to defend their partner's terrible behavior just because they're too scared to be single?", category: "Most Likely", tags: ['savior-complex', 'toxic-dating', 'roast'] },
  { text: "Who in this room would fall for a pyramid scheme simply because the person pitching it gave them a few compliments?", category: "Most Likely", tags: ['gullible', 'social', 'funny'] },
  { text: "Who in this room is most likely to get into a screaming match with a stranger over a parking spot?", category: "Most Likely", tags: ['chaotic', 'angry', 'roast'] },
  { text: "Who in this room is most likely to fake their own death just to avoid replying to a stressful group chat?", category: "Most Likely", tags: ['introvert', 'funny', 'social-panic'] },
  { text: "Who in this room gives the most confident, yet absolutely destructive, life advice?", category: "Most Likely", tags: ['sabotage', 'funny', 'friendship-dynamics'] },
  { text: "Who in this room is the most aggressive sore loser when they get caught cheating at a game?", category: "Most Likely", tags: ['petty', 'roast', 'chaotic'] },
  { text: "Who in this room is most likely to accidentally like their ex's photo from three years ago at 2 AM?", category: "Most Likely", tags: ['digital-life', 'cringe', 'funny'] },

  // What Ifs
  { text: "You find a briefcase with $100,000, but keeping it means your best friend gets fired from their job. Are you taking the money?", category: "What Ifs", tags: ['morally-grey', 'friendship-dynamics', 'hypothetical'] },
  { text: "You have to make one phone call from jail to get bailed out. Who in this room are you calling, and how does that call go?", category: "What Ifs", tags: ['trust', 'chaotic', 'friendship-dynamics'] },
  { text: "You have to permanently swap lives with someone in this room tomorrow. Who are you picking, and what is the first thing you change about their life?", category: "What Ifs", tags: ['empathy', 'planning', 'fun'] },
  { text: "Someone offers you a million dollars, but they get to project your entire search history onto a billboard. Are you taking the deal?", category: "What Ifs", tags: ['privacy', 'digital-life', 'funny'] },
  { text: "You are forced to live with the last person you texted for the rest of your life. How long until one of you snaps?", category: "What Ifs", tags: ['modern-dating', 'social-panic', 'funny'] },
  { text: "If we were all stranded on a deserted island together, who would naturally become the leader, and who would we sacrifice first?", category: "What Ifs", tags: ['friendship-dynamics', 'survival', 'roast'] },
  { text: "If you could hit a 'rewind' button and completely erase one conversation you've had in the last year, which one are you erasing?", category: "What Ifs", tags: ['regret', 'social-panic', 'relatable'] },

  // Nostalgia (Fun/Friends Oriented)
  { text: "What is a core memory with a friend that instantly makes you laugh every time you think about it?", category: "Nostalgia", tags: ['core-memory', 'friendship', 'joy'] },
  { text: "What was the absolute wildest night out you’ve ever had where almost nothing went according to plan?", category: "Nostalgia", tags: ['wild-night', 'chaos', 'friendship'] },
  { text: "Which inside joke in your friend group has gone on for way too long but is still hilarious?", category: "Nostalgia", tags: ['inside-jokes', 'friendship-dynamics', 'funny'] },
  { text: "Looking back, what is a completely ridiculous phase your friend group went through together?", category: "Nostalgia", tags: ['cringe', 'shared-history', 'fun'] },
  { text: "What is a friendship from your past that naturally faded away, but you still look back on fondly?", category: "Nostalgia", tags: ['growth', 'reflection', 'sentimentality'] },
  { text: "What is the funniest piece of drama that happened in your high school or college friend group?", category: "Nostalgia", tags: ['gossip', 'funny', 'drama'] },
  { text: "What was a seemingly boring, regular day with your friends that ended up being incredibly memorable?", category: "Nostalgia", tags: ['comfort', 'sentimentality', 'friendship'] },

  // Confessions (Light, Petty, Relatable)
  { text: "Whose life do you casually keep tabs on just because it makes you feel better about your own?", category: "Confessions", tags: ['social-media', 'spite', 'relatable'] },
  { text: "What is a wildly expensive purchase you made that you instantly regretted but pretended to love?", category: "Confessions", tags: ['regret', 'funny', 'relatable'] },
  { text: "What is the most ridiculous, petty lie you have ever told to get out of hanging out with someone?", category: "Confessions", tags: ['social-panic', 'lies', 'funny'] },
  { text: "What is a highly specific, petty revenge you've taken on someone without them ever finding out?", category: "Confessions", tags: ['petty', 'secrets', 'funny'] },
  { text: "Have you ever stayed in a relationship or friendship way longer than you should have just because it was comfortable?", category: "Confessions", tags: ['comfort-zone', 'growth', 'vulnerability'] },
  { text: "What is the most ridiculous, minor reason you have ever suddenly stopped talking to someone?", category: "Confessions", tags: ['petty', 'social-rules', 'honesty'] },
  { text: "What is a secret you know about someone else that you genuinely wish you didn't know?", category: "Confessions", tags: ['secrets', 'gossip', 'high-stakes'] },

  // Deep Talk (Reflective, Uplifting, Not Depressing)
  { text: "What is a belief you held strongly a few years ago that you have quietly abandoned?", category: "Deep Talk", tags: ['growth', 'worldview', 'reflection'] },
  { text: "Do you think you are actually a good friend, or do you just know how to say what people want to hear, or both?", category: "Deep Talk", tags: ['self-awareness', 'validation', 'friendship'] },
  { text: "When was the last time you felt incredibly proud of yourself for something nobody else noticed?", category: "Deep Talk", tags: ['pride', 'vulnerability', 'uplifting'] },
  { text: "What is a goal or dream you have right now that you are almost too scared to talk about?", category: "Deep Talk", tags: ['dreams', 'vulnerability', 'future'] },
  { text: "If everyone you ever dated sat in a room together, what is the one complaint they would all agree on?", category: "Deep Talk", tags: ['self-awareness', 'dating', 'funny'] },
  { text: "What is a boundary you've recently learned to set that has massively improved your mental health?", category: "Deep Talk", tags: ['growth', 'mental-health', 'positivity'] },
  { text: "What is the most valuable lesson a past friendship or relationship has taught you about what you actually need?", category: "Deep Talk", tags: ['growth', 'reflection', 'wisdom'] },


  // ==========================================
  // ❤️ LOVERS VIBE (42 Questions - Intact)
  // ==========================================
  // Warm Up
  { text: "What is a weird, highly specific habit of mine that you secretly love?", category: "Warm Up", tags: ['affection', 'observation', 'flirty'] },
  { text: "If we could teleport to any restaurant right now, where are we eating?", category: "Warm Up", tags: ['casual', 'food', 'comfort'] },
  { text: "What is an outfit of mine that you absolutely love seeing me in?", category: "Warm Up", tags: ['attraction', 'compliment', 'flirty'] },
  { text: "What is something I do innocently that you find extremely attractive?", category: "Warm Up", tags: ['attraction', 'observation', 'flirty'] },
  { text: "If you had to describe my 'vibe' to a stranger in three words, what are they?", category: "Warm Up", tags: ['perception', 'identity', 'casual'] },
  { text: "What is the most attractive thing I wear to bed?", category: "Warm Up", tags: ['attraction', 'flirty', 'intimacy'] },
  { text: "What is a small everyday thing I do that makes you smile?", category: "Warm Up", tags: ['affection', 'observation', 'comfort'] },

  // Spicy
  { text: "What was the exact moment you first felt physical tension between us?", category: "Spicy", tags: ['origin-story', 'romance', 'physical-touch'] },
  { text: "What is a completely non-physical thing I do that turns you on?", category: "Spicy", tags: ['intimacy', 'flirty', 'attraction'] },
  { text: "Where is your absolute favorite place to be touched or kissed?", category: "Spicy", tags: ['physical-touch', 'intimacy', 'romance'] },
  { text: "What is a fantasy or scenario you’ve thought about us but never brought up?", category: "Spicy", tags: ['secrets', 'intimacy', 'vulnerability'] },
  { text: "What is the most inappropriately timed moment you’ve been turned on by me?", category: "Spicy", tags: ['funny', 'attraction', 'secrets'] },
  { text: "What was your favorite physical moment from our first month together?", category: "Spicy", tags: ['memory', 'physical-touch', 'romance'] },
  { text: "What is a boundary in the bedroom you've always been curious about pushing?", category: "Spicy", tags: ['intimacy', 'vulnerability', 'flirty'] },

  // What Ifs
  { text: "If we had to fake our deaths and move to another country, what would our new jobs be?", category: "What Ifs", tags: ['escapism', 'teamwork', 'funny'] },
  { text: "If we were dropped into a horror movie, how far do we make it and who dies first?", category: "What Ifs", tags: ['pop-culture', 'roast', 'hypothetical'] },
  { text: "If we had to drop everything and open a business together tomorrow, what would it be?", category: "What Ifs", tags: ['dreams', 'partnership', 'future'] },
  { text: "If you woke up tomorrow in my body, what is the very first thing you would do?", category: "What Ifs", tags: ['empathy', 'funny', 'hypothetical'] },
  { text: "If we could completely erase one argument from our history, which one goes?", category: "What Ifs", tags: ['conflict', 'growth', 'vulnerability'] },
  { text: "If we had to survive a zombie apocalypse, what would be our biggest downfall as a team?", category: "What Ifs", tags: ['survival', 'partnership', 'roast'] },
  { text: "If we were forced to go on reality TV, which show would destroy our relationship the fastest?", category: "What Ifs", tags: ['pop-culture', 'funny', 'conflict'] },

  // Nostalgia
  { text: "What was your exact first thought the very first time you saw me?", category: "Nostalgia", tags: ['origin-story', 'romance', 'memory'] },
  { text: "What is a small, random moment from early in our relationship that you still think about?", category: "Nostalgia", tags: ['sentimentality', 'memory', 'affection'] },
  { text: "What was the most nerve-wracking part of our first few dates for you?", category: "Nostalgia", tags: ['anxiety', 'origin-story', 'vulnerability'] },
  { text: "At what exact moment did you realize you were actually falling in love with me?", category: "Nostalgia", tags: ['romance', 'heavy', 'memory'] },
  { text: "What is a photo of us that immediately brings back a wave of emotion?", category: "Nostalgia", tags: ['sentimentality', 'memory', 'romance'] },
  { text: "What is the exact moment you realized I was genuinely interested in you?", category: "Nostalgia", tags: ['origin-story', 'validation', 'memory'] },
  { text: "What is an assumption you made about me on our first date that was completely wrong?", category: "Nostalgia", tags: ['perception', 'funny', 'origin-story'] },

  // Connection
  { text: "In what highly specific way do you think we balance each other out perfectly?", category: "Connection", tags: ['teamwork', 'partnership', 'appreciation'] },
  { text: "What is something I do to show love that you think I don't realize I'm doing?", category: "Connection", tags: ['observation', 'vulnerability', 'intimacy'] },
  { text: "When do you feel the most secure and safe with me?", category: "Connection", tags: ['security', 'heavy-vulnerability', 'affection'] },
  { text: "What is a trait you have that you think I bring out the best version of?", category: "Connection", tags: ['growth', 'partnership', 'reflection'] },
  { text: "What is a compliment you secretly crave from me but don't ask for?", category: "Connection", tags: ['validation', 'insecurity', 'deep-talk'] },
  { text: "When was the exact moment you felt the most deeply understood by me?", category: "Connection", tags: ['intimacy', 'heavy-vulnerability', 'affection'] },
  { text: "What is a part of my personality you feel you get to see that no one else does?", category: "Connection", tags: ['security', 'identity', 'partnership'] },

  // Deep Talk
  { text: "What is a fear you have about our future that you rarely say out loud?", category: "Deep Talk", tags: ['future-anxiety', 'heavy-vulnerability', 'commitment'] },
  { text: "How has your actual definition of love changed since you met me?", category: "Deep Talk", tags: ['growth', 'romance', 'existential'] },
  { text: "What is an insecurity of yours that you think affects our relationship the most?", category: "Deep Talk", tags: ['insecurity', 'heavy-vulnerability', 'conflict'] },
  { text: "In what way do you think we need to grow the most as a couple?", category: "Deep Talk", tags: ['growth', 'partnership', 'reflection'] },
  { text: "What is something you feel you compromise on, but have never complained about?", category: "Deep Talk", tags: ['boundaries', 'honesty', 'heavy'] },
  { text: "What is a sacrifice you feel you've made for this relationship that we don't talk about?", category: "Deep Talk", tags: ['sacrifice', 'heavy-vulnerability', 'honesty'] },
  { text: "Do you think we handle conflict in a healthy way, or do we just sweep things under the rug?", category: "Deep Talk", tags: ['conflict', 'growth', 'communication'] },


  // ==========================================
  // 🏡 FAMILY VIBE (42 Questions - Intact)
  // ==========================================
  // Icebreakers
  { text: "If our family was a reality TV show, what would the title be?", category: "Icebreakers", tags: ['funny', 'meta', 'family-dynamics'] },
  { text: "Who in the family has the absolute worst driving skills?", category: "Icebreakers", tags: ['roast', 'lighthearted', 'debate'] },
  { text: "What is a food that always tastes exactly like 'home' to you?", category: "Icebreakers", tags: ['comfort', 'food', 'sentimentality'] },
  { text: "Which family member is the hardest to buy a gift for, and why?", category: "Icebreakers", tags: ['funny', 'family-dynamics', 'observation'] },
  { text: "If our family had a warning label, what would it say?", category: "Icebreakers", tags: ['roast', 'self-awareness', 'funny'] },
  { text: "What is a family recipe that must be protected at all costs?", category: "Icebreakers", tags: ['food', 'sentimentality', 'culture'] },
  { text: "Who takes the absolute longest to get ready for a family event?", category: "Icebreakers", tags: ['roast', 'funny', 'family-dynamics'] },

  // Most Likely
  { text: "Who is most likely to bring up a 10-year-old argument at Thanksgiving dinner?", category: "Most Likely", tags: ['petty-grudges', 'funny', 'family-drama'] },
  { text: "Who is most likely to keep a massive secret from everyone else?", category: "Most Likely", tags: ['secrets', 'trust', 'mystery'] },
  { text: "Who is most likely to give completely unsolicited but accurate advice?", category: "Most Likely", tags: ['advice', 'family-dynamics', 'roast'] },
  { text: "Who is most likely to survive in the wilderness, and who dies day one?", category: "Most Likely", tags: ['survival', 'funny', 'hypothetical'] },
  { text: "Who is most likely to accidentally ruin a surprise party?", category: "Most Likely", tags: ['clumsy', 'funny', 'family-dynamics'] },
  { text: "Who is most likely to successfully fake their way into a job they know nothing about?", category: "Most Likely", tags: ['social-manipulation', 'funny', 'skills'] },
  { text: "Who is most likely to become a hoarder in their old age?", category: "Most Likely", tags: ['roast', 'habits', 'funny'] },

  // What Ifs
  { text: "If our family had to win a talent show to save the world, what is our act?", category: "What Ifs", tags: ['hypothetical', 'teamwork', 'funny'] },
  { text: "If money was no object, what kind of ridiculous family compound would we build?", category: "What Ifs", tags: ['dreams', 'lifestyle', 'casual'] },
  { text: "If you could witness any moment from family history before you were born, what would it be?", category: "What Ifs", tags: ['history', 'sentimentality', 'memory'] },
  { text: "If we had to permanently move to a different country together, where do we go?", category: "What Ifs", tags: ['escapism', 'teamwork', 'hypothetical'] },
  { text: "If someone wrote a book about our family, what chapter would people skip?", category: "What Ifs", tags: ['meta', 'funny', 'roast'] },
  { text: "If our family was forced to rob a bank, who is driving the getaway car?", category: "What Ifs", tags: ['chaos', 'teamwork', 'funny'] },
  { text: "If everyone in the family swapped bodies for a day, who would ruin whose life the fastest?", category: "What Ifs", tags: ['empathy', 'funny', 'drastic'] },

  // Nostalgia
  { text: "Which family vacation was an absolute disaster at the time, but hilarious now?", category: "Nostalgia", tags: ['memory', 'chaos', 'shared-history'] },
  { text: "What was the absolute strictest, most weird rule we had in our house growing up?", category: "Nostalgia", tags: ['childhood', 'rebellion', 'strict-parents'] },
  { text: "What is the most ridiculous thing you genuinely believed as a kid?", category: "Nostalgia", tags: ['funny', 'childhood', 'memory'] },
  { text: "What is a weird tradition we have that you didn't realize was weird until you grew up?", category: "Nostalgia", tags: ['culture', 'growing-up', 'family-dynamics'] },
  { text: "What is your favorite memory of us just sitting around doing absolutely nothing?", category: "Nostalgia", tags: ['comfort', 'sentimentality', 'affection'] },
  { text: "What was the most iconic meltdown someone had during a holiday?", category: "Nostalgia", tags: ['drama', 'funny', 'memory'] },
  { text: "What is a home-cooked meal that instantly takes you back to childhood?", category: "Nostalgia", tags: ['food', 'sentimentality', 'childhood'] },

  // Perspectives
  { text: "What is a slang word or trend from today that makes absolutely zero sense to you?", category: "Perspectives", tags: ['generational-gap', 'funny', 'pop-culture'] },
  { text: "What did you get away with as a teen that teens today could never do?", category: "Perspectives", tags: ['nostalgia', 'rebellion', 'generational-gap'] },
  { text: "What is something you think the younger generation actually got right?", category: "Perspectives", tags: ['respect', 'growth', 'generational-gap'] },
  { text: "What is a parenting choice you experienced that you would never repeat?", category: "Perspectives", tags: ['parenting', 'vulnerability', 'boundaries'] },
  { text: "What is the hardest part about the age you are currently at right now?", category: "Perspectives", tags: ['aging', 'vulnerability', 'existential'] },
  { text: "What is a piece of technology you genuinely miss using?", category: "Perspectives", tags: ['nostalgia', 'pop-culture', 'generational-gap'] },
  { text: "What is something you think kids today are completely missing out on?", category: "Perspectives", tags: ['childhood', 'nostalgia', 'generational-gap'] },

  // Deep Talk
  { text: "What is a life lesson you had to learn the hard way so I wouldn't have to?", category: "Deep Talk", tags: ['wisdom', 'vulnerability', 'parenting'] },
  { text: "What is a piece of advice you ignored when you were younger, but now realize was right?", category: "Deep Talk", tags: ['reflection', 'growth', 'existential'] },
  { text: "What is something you wish you started doing much earlier in your life?", category: "Deep Talk", tags: ['regret', 'wisdom', 'reflection'] },
  { text: "What is an apology you feel you owe to someone in this room, but never gave?", category: "Deep Talk", tags: ['guilt', 'heavy-vulnerability', 'family-dynamics'] },
  { text: "What do you hope this family is remembered for in 100 years?", category: "Deep Talk", tags: ['legacy', 'sentimentality', 'existential'] },
  { text: "What is a generational curse in our family you hope stops with you?", category: "Deep Talk", tags: ['family-trauma', 'heavy', 'growth'] },
  { text: "What is something you never understood about your parents until you grew up?", category: "Deep Talk", tags: ['empathy', 'growing-up', 'reflection'] }
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