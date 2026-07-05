import { defineTool } from "@lovable.dev/mcp-js";
import en from "../../../i18n/en";

export default defineTool({
  name: "get_team",
  title: "Get dental team",
  description:
    "List the professionals at Brotto Dental Practice with role and short biography.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const t = en.team;
    const team = [
      { name: t.paolo, role: t.paoloRole, bio: t.paoloDesc },
      { name: t.valentina, role: t.valentinaRole, bio: t.valentinaDesc },
      { name: t.elena, role: t.elenaRole, bio: t.elenaDesc },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(team, null, 2) }],
      structuredContent: { team },
    };
  },
});
