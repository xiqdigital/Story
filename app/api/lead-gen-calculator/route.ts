import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      services = [],
      industry = 'General Business',
      monthlyAdSpend = 50000,
      dealValue = 50000,
      targetLeads = 100,
      location = 'Zirakpur & Tricity',
      businessName = '',
    } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return high-quality rule-based AI heuristic analysis if no API key is configured
      return NextResponse.json({
        strategyTitle: `High-Velocity Lead Acquisition Blueprint for ${businessName || industry} in ${location}`,
        channelSplit: [
          { channel: 'Google Search Ads (High Commercial Intent)', percentage: '45%' },
          { channel: 'Meta Instant Lead Forms & Video Retargeting', percentage: '35%' },
          { channel: 'Local SEO & Google 3-Pack Map Dominance', percentage: '20%' },
        ],
        targetCplRange: `₹${Math.round((monthlyAdSpend / targetLeads) * 0.85)} - ₹${Math.round((monthlyAdSpend / targetLeads) * 1.15)}`,
        keyRecommendations: [
          `Deploy a dedicated Next.js liquid-glass landing page with OTP phone validation to suppress tire-kickers.`,
          `Activate exact-match negative keyword scrubbing to eliminate waste on informational searches.`,
          `Integrate a 10-second WhatsApp API dispatch router to contact incoming leads while buying intent is peak.`,
          `Run video testimonial creative funnels on Instagram targeting high-net-worth pin codes around PR7 and VIP Road.`,
        ],
        breakEvenTimeline: '30 to 45 Days with 4.5x+ Projected ROAS',
        projectedRevenueMultiplier: '5.2x - 8.4x Pipeline ROI',
        generatedVia: 'heuristic',
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are a Senior Performance Marketing and Revenue Growth Strategist at Veiled Story, Zirakpur's premier lead generation company.
Analyze the following client growth parameters and generate an ultra-detailed, data-driven lead generation strategy in JSON format:

Client Details:
- Business/Brand: ${businessName || 'Growth Client'}
- Industry Vertical: ${industry}
- Target Location: ${location}
- Selected Marketing Services: ${services.join(', ')}
- Monthly Ad Budget: ₹${monthlyAdSpend.toLocaleString('en-IN')}
- Average Deal/Customer Value: ₹${dealValue.toLocaleString('en-IN')}
- Target Monthly Leads: ${targetLeads}

Please return ONLY a valid JSON object matching this schema (do not wrap in markdown quotes if possible):
{
  "strategyTitle": "String - compelling title for their tailored acquisition strategy",
  "executiveSummary": "String - 2-3 sentences explaining why this strategy will succeed in Zirakpur/Tricity market",
  "channelSplit": [
    {"channel": "String", "percentage": "String", "rationale": "String"}
  ],
  "targetCplRange": "String - e.g. ₹280 - ₹420",
  "highIntentKeywords": ["Keyword 1", "Keyword 2", "Keyword 3", "Keyword 4"],
  "funnelArchitecture": "String - description of the recommended landing page and conversion path",
  "keyRecommendations": [
    "Tactical recommendation 1",
    "Tactical recommendation 2",
    "Tactical recommendation 3",
    "Tactical recommendation 4"
  ],
  "breakEvenTimeline": "String - estimated days to positive ROI",
  "projectedRevenueMultiplier": "String - e.g. 6.2x ROAS",
  "speedToLeadTactic": "String - recommendation for 10-second lead contact"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { rawText: text };
    }

    return NextResponse.json({ ...data, generatedVia: 'gemini-ai' });
  } catch (error: unknown) {
    console.error('Lead gen AI calculator error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate AI plan',
        strategyTitle: 'Performance Marketing Acquisition Blueprint (Fallback)',
        breakEvenTimeline: '30-45 Days',
        projectedRevenueMultiplier: '5.0x ROAS',
      },
      { status: 500 }
    );
  }
}
