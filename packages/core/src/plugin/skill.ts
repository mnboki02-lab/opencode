/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "./internal"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customize1hitContent from "./skill/customize-opencode.md" with { type: "text" }

export const Customize1hitContent = customize1hitContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        SkillV2.EmbeddedSource.make({
          type: "embedded",
          skill: SkillV2.Info.make({
            name: "customize-1hit",
            description:
              "Use ONLY when the user is editing or creating 1hit's own configuration: 1hit.json, 1hit.jsonc, files under .1hit/, or files under ~/.config/1hit/. Also use when creating or fixing 1hit agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring 1hit itself.",
            location: AbsolutePath.make("/builtin/customize-1hit.md"),
            content: Customize1hitContent,
          }),
        }),
      )
    })
  }),
})
