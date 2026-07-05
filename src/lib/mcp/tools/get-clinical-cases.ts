import { defineTool } from "@lovable.dev/mcp-js";
import en from "../../../i18n/en";

export default defineTool({
  name: "get_clinical_cases",
  title: "Get clinical case areas",
  description:
    "List the macro-areas of resolved clinical cases (implantology, prosthetics, orthodontics) with descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const c = en.cases;
    const cases = [
      { area: c.implantology, description: c.implantologyDesc },
      { area: c.prosthetics, description: c.prostheticsDesc },
      { area: c.orthodontics, description: c.orthodonticsDesc },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(cases, null, 2) }],
      structuredContent: { cases },
    };
  },
});
