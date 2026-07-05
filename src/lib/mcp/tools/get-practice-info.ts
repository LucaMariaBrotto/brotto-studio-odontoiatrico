import { defineTool } from "@lovable.dev/mcp-js";
import en from "../../../i18n/en";

export default defineTool({
  name: "get_practice_info",
  title: "Get practice information",
  description:
    "Get an overview of Brotto Dental Practice: history, philosophy, certifications, and director biography.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const a = en.about;
    const info = {
      name: "Brotto Dental Practice",
      tagline: en.hero.subtitle,
      director: {
        name: a.name,
        role: a.subtitle,
        biography: [a.bio1, a.bio2, a.bio3, a.bio4, a.bio5, a.bio6],
        languages: a.languages,
        experience: [a.exp1, a.exp2, a.exp3],
      },
      philosophy: a.cert,
      history: [a.studio1, a.studio2],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
