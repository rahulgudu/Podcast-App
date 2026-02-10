import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser = internalMutation({
  args: {
    clerkID: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const { clerkID, email, imageUrl, name } = args;
    await ctx.db.insert("users", {
      clerkID,
      email,
      imageUrl,
      name,
    });
  },
});
